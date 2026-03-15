import express, { Request, Response } from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors({
  origin: '*', // For production, we may want to specify the allowed origin
}));
app.use(express.json());

// Main Email Sending Endpoint
app.post('/api/send-email', async (req: Request, res: Response) => {
  try {
    const { fullName, company, email, phone, service, message } = req.body;

    // Validate minimum required fields
    if (!fullName || !email || !service || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Construct the email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Service Requested:</strong> ${service}</p>
      <br />
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Send the email via Resend
    const { data, error } = await resend.emails.send({
      from: 'NextGen Advisors Contact Form <onboarding@resend.dev>', // Use onboarding@resend.dev if not using verified domain yet, or change to verified domain
      to: 'info@nextgenadvisorsltd.com',
      subject: `New Inquiry from ${fullName} - ${service}`,
      html: htmlContent,
      reply_to: email,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal server error while sending email' });
  }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Email server is running on port ${port}`);
});
