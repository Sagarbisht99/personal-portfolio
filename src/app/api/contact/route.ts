import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';
import { Resend } from 'resend';

const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(1000),
});

function getClientIP(request: NextRequest): string {
  // Get IP from various headers in order of preference
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  return 'unknown';
}

function checkRateLimit(clientIP: string): {
  allowed: boolean;
  remaining: number;
} {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // First request or window expired
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1 };
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  // Increment count
  clientData.count++;
  rateLimitStore.set(clientIP, clientData);

  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - clientData.count,
  };
}

async function sendToTelegram(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  if (!telegramToken) {
    console.error('TELEGRAM_BOT_TOKEN not configured');
    return false;
  }

  if (!telegramChatId) {
    console.error('TELEGRAM_CHAT_ID not configured');
    return false;
  }

  const message = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name.trim()}
📧 *Email:* ${data.email.trim()}
📱 *Phone:* ${data.phone.trim()}

💬 *Message:*
${data.message.trim()}

⏰ *Submitted:* ${new Date().toISOString()}
📍 *Timezone:* ${Intl.DateTimeFormat().resolvedOptions().timeZone}
  `.trim();

  try {
    const telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) {
      return true;
    } else {
      const errorText = await response.text();
      console.error('Failed to send to Telegram:', errorText);
      return false;
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}

async function sendEmailWithResend(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Promise<boolean> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RESEND_EMAIL; // Your email address

  if (!resendApiKey || !recipientEmail) {
    console.error('RESEND_API_KEY or RESEND_EMAIL not configured');
    return false;
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data: emailData, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            🔔 New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${data.name.trim()}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${data.email.trim()}">${data.email.trim()}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${data.phone.trim()}">${data.phone.trim()}</a></p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              ${data.message.trim()}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>Submitted: ${new Date().toLocaleString()}</p>
            <p>Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return false;
    }

    console.log('Email sent successfully:', emailData);
    return true;
  } catch (error) {
    console.error('Error sending email with Resend:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW / 1000,
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': rateLimit.remaining.toString(),
            'X-RateLimit-Reset': (Date.now() + RATE_LIMIT_WINDOW).toString(),
          },
        },
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send notifications via both channels
    const [telegramSent, emailSent] = await Promise.allSettled([
      sendToTelegram(validatedData),
      sendEmailWithResend(validatedData),
    ]);

    const telegramSuccess = telegramSent.status === 'fulfilled' && telegramSent.value;
    const emailSuccess = emailSent.status === 'fulfilled' && emailSent.value;

    // Log results for debugging
    console.log('Notification results:', {
      telegram: telegramSuccess,
      email: emailSuccess,
    });

    // At least one channel should succeed
    if (!telegramSuccess && !emailSuccess) {
      return NextResponse.json(
        { 
          error: 'Failed to send message through any channel. Please try again.',
          details: {
            telegram: telegramSent.status === 'rejected' ? telegramSent.reason : 'Failed',
            email: emailSent.status === 'rejected' ? emailSent.reason : 'Failed',
          }
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        message: 'Message sent successfully!',
        success: true,
        channels: {
          telegram: telegramSuccess,
          email: emailSuccess,
        },
      },
      {
        headers: {
          'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
        },
      },
    );
  } catch (error) {
    console.error('API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Invalid form data',
          details: error.errors,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
