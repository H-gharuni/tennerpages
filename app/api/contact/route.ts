import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, message, referredBy, wantToBeReferrer } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to Tenner Pages
    const adminEmailData = await resend.emails.send({
      from: 'Tenner Pages Contact Form <onboarding@resend.dev>',
      to: 'info@tennerpages.com',
      replyTo: email, // Allow direct reply to the client
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
            ${referredBy ? `<p style="margin: 10px 0;"><strong>Referred by:</strong> ${referredBy}</p>` : ''}
            ${wantToBeReferrer ? `<p style="margin: 10px 0;"><strong>⭐ Wants to become a referrer</strong></p>` : ''}
          </div>
          <p style="color: #6b7280; font-size: 14px;">This message was sent from the Tenner Pages contact form.</p>
        </div>
      `,
    });

    // Send thank you email to client
    const clientEmailData = await resend.emails.send({
      from: 'Tenner Pages <onboarding@resend.dev>',
      to: email,
      replyTo: 'info@tennerpages.com',
      subject: 'Thank You for Contacting Tenner Pages',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting Tenner Pages. We've received your enquiry and will get back to you within <strong>24 hours</strong>.</p>

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          ${referredBy ? `
          <div style="background-color: #dcfce7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <p style="margin: 0; color: #166534;"><strong>🎁 Great news!</strong> You're eligible for <strong>10% off for your first 3 months</strong> as a referred client!</p>
          </div>
          ` : ''}

          ${wantToBeReferrer ? `
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;"><strong>⭐ Referrer Program:</strong> We've registered your interest in becoming a referrer. We'll include details in our response!</p>
          </div>
          ` : ''}

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">What Happens Next?</h3>
            <ol style="line-height: 1.8; padding-left: 20px;">
              <li>We'll review your enquiry and respond within 24 hours</li>
              <li>We'll discuss your project requirements and timeline</li>
              <li>Once you provide your content, we start the 48-hour build</li>
              <li>Your professional website goes live!</li>
            </ol>
          </div>

          <p>In the meantime, feel free to:</p>
          <ul style="line-height: 1.8;">
            <li>Browse our <a href="https://tennerpages.com/showcase" style="color: #1e3a8a; text-decoration: none; font-weight: 500;">showcase of websites</a></li>
            <li>Learn more about <a href="https://tennerpages.com/offer" style="color: #1e3a8a; text-decoration: none; font-weight: 500;">our pricing</a></li>
            <li>Check out our <a href="https://tennerpages.com/trial-offer" style="color: #1e3a8a; text-decoration: none; font-weight: 500;">£10 Trial Offer</a></li>
          </ul>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">Best regards,</p>
            <p style="color: #1e3a8a; font-weight: bold; margin: 5px 0;">The Tenner Pages Team</p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
              Email: <a href="mailto:info@tennerpages.com" style="color: #1e3a8a; text-decoration: none;">info@tennerpages.com</a><br>
              Website: <a href="https://tennerpages.com" style="color: #1e3a8a; text-decoration: none;">tennerpages.com</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully',
        adminEmailId: adminEmailData.data?.id,
        clientEmailId: clientEmailData.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or email us directly at info@tennerpages.com' },
      { status: 500 }
    );
  }
}
