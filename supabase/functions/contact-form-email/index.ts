// Setup type definitions for built-in Supabase Runtime APIs
import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { z } from 'npm:zod'

// Env variables with your development key as a fallback
const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
const CONTACT_TO_EMAIL = Deno.env.get('CONTACT_TO_EMAIL')
const CONTACT_FROM_EMAIL = Deno.env.get('CONTACT_FROM_EMAIL')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const contactSchema = z.object({
  fullName: z.string().min(2),
  company: z.string().optional().nullable(),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  service: z.string().min(1),
  message: z.string().min(10),
})

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  // Safety check for critical destination email
  if (!CONTACT_TO_EMAIL) {
    return new Response(
      JSON.stringify({ error: 'Missing CONTACT_TO_EMAIL secret.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  }

  try {
    const body = await req.json()
    const values = contactSchema.parse(body)

    const subject = `New contact form: ${values.service}`
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.4;">
        <h2 style="margin: 0 0 16px 0;">New contact form submission</h2>
        <h3 style="margin: 0 0 8px 0;">Service</h3>
        <p style="margin: 0 0 16px 0;">${escapeHtml(values.service)}</p>
        <h3 style="margin: 0 0 8px 0;">From</h3>
        <ul style="margin: 0; padding-left: 18px;">
          <li><strong>Name:</strong> ${escapeHtml(values.fullName)}</li>
          <li><strong>Company:</strong> ${escapeHtml(values.company || '-')}</li>
          <li><strong>Email:</strong> ${escapeHtml(values.email)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(values.phone || '-')}</li>
        </ul>
        <h3 style="margin: 16px 0 8px 0;">Message</h3>
        <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(values.message)}</p>
      </div>
    `.trim()

    // Brevo API Request
    const brevoResp = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { 
          email: CONTACT_FROM_EMAIL, // Must be your verified domain email
          name: "Website Contact Form" 
        },
        to: [{ email: CONTACT_TO_EMAIL }],
        replyTo: { email: values.email, name: values.fullName }, // Allows you to hit 'Reply' directly to the user
        subject: subject,
        htmlContent: htmlContent,
      }),
    })

    const result = await brevoResp.text()

    if (!brevoResp.ok) {
      return new Response(
        JSON.stringify({ error: 'Brevo API error', details: result }),
        { status: 502, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })

  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request'
    return new Response(JSON.stringify({ error: message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})