import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
