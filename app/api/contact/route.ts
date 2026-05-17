import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dns from 'dns';
import { promisify } from 'util';

const resolveMx = promisify(dns.resolveMx);

async function isValidEmailDomain(email: string): Promise<boolean> {
  try {
    const domain = email.split('@')[1];
    if (!domain) return false;
    const records = await resolveMx(domain);
    return records && records.length > 0;
  } catch (error) {
    return false;
  }
}

// Simple in-memory rate limiting for the Node.js serverless instance.
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, priority, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // Check if email domain exists (MX records)
    const isDomainValid = await isValidEmailDomain(email);
    if (!isDomainValid) {
      return NextResponse.json(
        { error: 'Invalid email domain. The email address must be legit and exist.' },
        { status: 400 }
      );
    }

    // Rate limiting: 1 email per day
    const now = Date.now();
    const lastSent = rateLimitMap.get(email);
    if (lastSent && (now - lastSent < RATE_LIMIT_DURATION)) {
      return NextResponse.json(
        { error: 'You can only send one message per day using this email. Please try again tomorrow.' },
        { status: 429 }
      );
    }

    // Cleanup old entries in the rateLimitMap to prevent memory leaks
    for (const [key, timestamp] of rateLimitMap.entries()) {
      if (now - timestamp > RATE_LIMIT_DURATION) {
        rateLimitMap.delete(key);
      }
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in environment variables.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Note: Gmail usually overrides 'from' with your GMAIL_USER, but it sets Reply-To if configured.
      replyTo: email,
      to: 'pavkhemerak.official@gmail.com',
      subject: `New Portfolio Contact: ${name}`,
      text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 20px; border: 1px solid #333; background-color: #0d0d0d; color: #fff;">
          <h2 style="color: #00E5FF; border-bottom: 1px solid #333; padding-bottom: 10px;">New Transmission Received</h2>
          <p><strong>Subject_Identify:</strong> ${name}</p>
          <p><strong>Return_Address:</strong> ${email}</p>
          <p><strong>Transmission_Priority:</strong> ${priority || 'GENERAL_CORRESPONDENCE'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #111; border-left: 3px solid #00E5FF;">
            <p style="white-space: pre-wrap; margin: 0; color: #ccc;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Record the successful send for rate limiting
    rateLimitMap.set(email, Date.now());

    return NextResponse.json(
      { message: 'Transmission successful.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to transmit message. Please try again later.' },
      { status: 500 }
    );
  }
}
