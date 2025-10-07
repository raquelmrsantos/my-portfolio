import { NextRequest, NextResponse } from 'next/server';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

export async function POST(req: NextRequest) {
  // Validate environment variables at runtime
  const accessKey = process.env.AWS_SES_ACCESS_KEY_ID;
  const secretKey = process.env.AWS_SES_SECRET_ACCESS_KEY;
  
  if (!accessKey || !secretKey) {
    console.error('AWS SES credentials are not set in environment variables.');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  // Initialize SES client
  const sesClient = new SESv2Client({
    region: 'eu-west-3',
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    },
  });

  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send notification email to you
    const notificationCommand = new SendEmailCommand({
      FromEmailAddress: 'noreply@raqueldossantos.com',
      Destination: {
        ToAddresses: ['raquelmrsantos@gmail.com'],
      },
      ReplyToAddresses: [email],
      Content: {
        Simple: {
          Subject: {
            Data: `New Contact Form Message from ${name}`,
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message || 'No message provided'}

Reply to: ${email}
              `,
              Charset: 'UTF-8',
            },
          },
        },
      },
    });

    // Send confirmation email to the person who submitted the form
    const confirmationCommand = new SendEmailCommand({
      FromEmailAddress: 'noreply@raqueldossantos.com',
      Destination: {
        ToAddresses: [email],
      },
      Content: {
        Simple: {
          Subject: {
            Data: `Thank you for reaching out, ${name}`,
            Charset: 'UTF-8',
          },
          Body: {
            Html: {
              Data: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Me</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f8f8;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 1px solid #e5e5e5; overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 50px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 300; letter-spacing: 1px;">
                Thank You
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 50px 40px;">
              <p style="margin: 0 0 24px 0; color: #000000; font-size: 18px; line-height: 1.6; font-weight: 500;">
                Hi ${name},
              </p>
              
              <p style="margin: 0 0 24px 0; color: #333333; font-size: 16px; line-height: 1.7;">
                Thank you for reaching out to me. I've received your message and truly appreciate you taking the time to get in touch.
              </p>

              <p style="margin: 0 0 24px 0; color: #333333; font-size: 16px; line-height: 1.7;">
                I make it a priority to respond to all inquiries personally, and I'll get back to you as soon as possible—typically within 24-48 hours.
              </p>

              <p style="margin: 0 0 40px 0; color: #333333; font-size: 16px; line-height: 1.7;">
                In the meantime, feel free to explore my work and learn more about what I do.
              </p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 30px 0;">
                    <a href="https://www.raqueldossantos.com" style="display: inline-block; background-color: #000000; color: #ffffff; text-decoration: none; padding: 16px 40px; font-size: 15px; font-weight: 500; letter-spacing: 0.5px; border: 2px solid #000000; transition: all 0.3s ease;">
                      VISIT MY WEBSITE
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                <tr>
                  <td style="border-bottom: 1px solid #e5e5e5;"></td>
                </tr>
              </table>

              <!-- Message Summary -->
              <p style="margin: 30px 0 12px 0; color: #666666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                Your Message
              </p>
              <div style="background-color: #f8f8f8; padding: 24px; border-left: 3px solid #000000;">
                <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
${message || 'No message provided'}
                </p>
              </div>

              <p style="margin: 30px 0 0 0; color: #333333; font-size: 16px; line-height: 1.7;">
                Looking forward to connecting with you soon.
              </p>

              <p style="margin: 24px 0 0 0; color: #000000; font-size: 16px; line-height: 1.7; font-weight: 500;">
                Best regards,<br>
                Raquel dos Santos
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f8f8; padding: 40px; text-align: center; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0 0 12px 0; color: #000000; font-size: 15px; font-weight: 500;">
                <a href="https://www.raqueldossantos.com" style="color: #000000; text-decoration: none;">
                  www.raqueldossantos.com
                </a>
              </p>
              <p style="margin: 0; color: #666666; font-size: 13px; line-height: 1.6;">
                This is an automated confirmation email.<br>
                Please do not reply to this message.
              </p>
              <p style="margin: 16px 0 0 0; color: #999999; font-size: 12px;">
                © ${new Date().getFullYear()} Raquel dos Santos. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
              `,
              Charset: 'UTF-8',
            },
            Text: {
              Data: `
Hi ${name},

Thank you for reaching out to me. I've received your message and truly appreciate you taking the time to get in touch.

I make it a priority to respond to all inquiries personally, and I'll get back to you as soon as possible—typically within 24-48 hours.

In the meantime, feel free to explore my work at: https://www.raqueldossantos.com

Your message:
${message || 'No message provided'}

Looking forward to connecting with you soon.

Best regards,
Raquel dos Santos

---
www.raqueldossantos.com

This is an automated confirmation email. Please do not reply to this message.
              `,
              Charset: 'UTF-8',
            },
          },
        },
      },
    });

    // Send both emails
    await sesClient.send(notificationCommand);
    await sesClient.send(confirmationCommand);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}