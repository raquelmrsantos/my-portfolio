import { NextRequest, NextResponse } from 'next/server';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

// Validate environment variables
const accessKey = process.env.AWS_SES_ACCESS_KEY_ID;
const secretKey = process.env.AWS_SES_SECRET_ACCESS_KEY;

if (!accessKey || !secretKey) {
  throw new Error('AWS SES credentials are not set in environment variables.');
}

// Initialize SES client
const sesClient = new SESv2Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
});

export async function POST(req: NextRequest) {
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

    // Send email using AWS SES directly
    const command = new SendEmailCommand({
      FromEmailAddress: 'noreply@raqueldossantos.com', // Must be verified in AWS SES
      Destination: {
        ToAddresses: ['raquelmrsantos@gmail.com'],
      },
      ReplyToAddresses: [email],
      Content: {
        Simple: {
          Subject: {
            Data: `New Contact Form Submission from ${name}`,
            Charset: 'UTF-8',
          },
          Body: {
            Html: {
              Data: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${message || 'No message provided'}</p>
              `,
              Charset: 'UTF-8',
            },
          },
        },
      },
    });

    await sesClient.send(command);

    return NextResponse.json(
      { message: 'Email sent successfully' },
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