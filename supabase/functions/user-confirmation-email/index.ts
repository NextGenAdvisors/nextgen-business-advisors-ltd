// Setup type definitions for built-in Supabase Runtime APIs
import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { z } from 'npm:zod'

// Env variables
const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY')
const CONTACT_FROM_EMAIL = Deno.env.get('CONTACT_FROM_EMAIL')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const confirmationSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
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

  try {
    const body = await req.json()
    const values = confirmationSchema.parse(body)

    const subject = `Received: Your Request for ${values.service} at NextGen Business Advisors`
    const htmlContent = `
      <div style="background-color: #f8fafc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; color: #334155;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
          
          <!-- Header -->
          <div style="background-color: #0f172a; padding: 32px 40px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">Message Received</h1>
            <p style="color: #94a3b8; font-size: 15px; margin: 8px 0 0 0;">NextGen Business Advisors Ltd</p>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <h2 style="font-size: 20px; margin: 0 0 16px 0; color: #0f172a;">Hello ${escapeHtml(values.fullName)},</h2>
            <p style="font-size: 16px; margin: 0 0 24px 0; line-height: 1.6;">
              Thank you for reaching out to NextGen Business Advisors Ltd. We have successfully received your inquiry regarding <strong>${escapeHtml(values.service)}</strong>.
            </p>
            <p style="font-size: 16px; margin: 0 0 24px 0; line-height: 1.6;">
              Our team of experts will review your details and get back to you shortly to discuss how we can assist you and your business. We aim to respond to all inquiries within 1-2 business days.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
            
            <!-- Outro Message -->
            <p style="font-size: 15px; margin: 0; line-height: 1.6; color: #475569;">
              Best regards,<br/>
              <strong>The Team at NextGen Business Advisors Ltd</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 13px; color: #94a3b8;">
              If you have any urgent questions, please reply directly to this email or visit our website.<br/>
              &copy; ${new Date().getFullYear()} NextGen Business Advisors Ltd. All rights reserved.
            </p>
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
          email: CONTACT_FROM_EMAIL, 
          name: "NextGen Business Advisors LTD" 
        },
        to: [{ email: values.email, name: values.fullName }],
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
