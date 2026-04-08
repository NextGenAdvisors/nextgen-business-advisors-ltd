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
  phone: z.string().min(5),
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
      <div style="background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; color: #334155;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
          
          <!-- Header -->
          <div style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Inquiry Received</h1>
            <p style="color: #94a3b8; font-size: 15px; margin: 8px 0 0 0;">NextGen Business Advisors Ltd</p>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <p style="font-size: 16px; margin: 0 0 24px 0; line-height: 1.6;">You have received a new contact form submission from the website. Here are the details:</p>
            
            <!-- Details Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
              <tbody>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: 600; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Service</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; font-weight: 500; color: #0f172a;">${escapeHtml(values.service)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: 600; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; color: #1e293b;">${escapeHtml(values.fullName)}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: 600; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; color: #1e293b;">${escapeHtml(values.company || '-')}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: 600; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px;"><a href="mailto:${escapeHtml(values.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(values.email)}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 120px; font-weight: 600; color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-size: 16px; color: #1e293b;">${escapeHtml(values.phone || '-')}</td>
                </tr>
              </tbody>
            </table>

            <!-- Message Section -->
            <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 20px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${escapeHtml(values.message)}</div>
            
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 13px; color: #94a3b8;">This email was sent automatically from your website's contact form.</p>
          </div>

        </div>
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
        ...(values.email && { replyTo: { email: values.email, name: values.fullName } }),
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