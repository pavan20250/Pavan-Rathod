import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { 
      userAgent, 
      referrer, 
      timestamp, 
      page, 
      ip,
      country,
      city,
      region,
      timezone,
      isp,
      latitude,
      longitude,
      browser,
      os,
      device
    } = await request.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content for visitor tracking
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `New Visitor on Your Portfolio - ${page}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
              🌟 New Portfolio Visitor
            </h2>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">📍 Detailed Location & Device Info:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
                <p style="margin: 5px 0;"><strong>🌍 Location:</strong> ${city || 'Unknown'}, ${region || 'Unknown'}, ${country || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>🌐 Coordinates:</strong> ${latitude || 'Unknown'}, ${longitude || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>🕒 Timezone:</strong> ${timezone || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>🏢 ISP:</strong> ${isp || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>💻 Device:</strong> ${device || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>🖥️ OS:</strong> ${os || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>🌐 Browser:</strong> ${browser || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>📄 Page:</strong> ${page || 'Home'}</p>
                <p style="margin: 5px 0;"><strong>🕒 Time:</strong> ${timestamp ? new Date(timestamp).toLocaleString() : new Date().toLocaleString()}</p>
              </div>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #555; margin-bottom: 15px;">🔗 Technical Details:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #10b981;">
                <p style="margin: 5px 0;"><strong>IP Address:</strong> ${ip || 'Unknown'}</p>
                <p style="margin: 5px 0;"><strong>Referrer:</strong> ${referrer || 'Direct visit'}</p>
                <p style="margin: 5px 0; word-break: break-all;"><strong>User Agent:</strong> ${userAgent || 'Unknown'}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
              <p>📊 This visitor data was automatically tracked from your portfolio website.</p>
              <p>🔒 IP addresses are collected for analytics purposes only.</p>
            </div>
          </div>
        </div>
      `,
      text: `
        New Portfolio Visitor
        
        Detailed Location & Device Info:
        - Location: ${city || 'Unknown'}, ${region || 'Unknown'}, ${country || 'Unknown'}
        - Coordinates: ${latitude || 'Unknown'}, ${longitude || 'Unknown'}
        - Timezone: ${timezone || 'Unknown'}
        - ISP: ${isp || 'Unknown'}
        - Device: ${device || 'Unknown'}
        - OS: ${os || 'Unknown'}
        - Browser: ${browser || 'Unknown'}
        - Page: ${page || 'Home'}
        - Time: ${timestamp ? new Date(timestamp).toLocaleString() : new Date().toLocaleString()}
        
        Technical Details:
        - IP Address: ${ip || 'Unknown'}
        - Referrer: ${referrer || 'Direct visit'}
        - User Agent: ${userAgent || 'Unknown'}
        
        ---
        This visitor data was automatically tracked from your portfolio website.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Visitor data sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending visitor data:', error);
    return NextResponse.json(
      { error: 'Failed to send visitor data' },
      { status: 500 }
    );
  }
}
