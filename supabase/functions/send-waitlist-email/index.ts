import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface WaitlistEmailRequest {
  name: string;
  email: string;
  brandName: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, brandName }: WaitlistEmailRequest = await req.json();

    if (!name || !email || !brandName) {
      console.error("Missing required fields:", { name, email, brandName });
      throw new Error("Missing required fields: name, email, brandName");
    }

    console.log(`Sending waitlist confirmation email to ${email} for brand ${brandName}`);

    const emailResponse = await resend.emails.send({
      from: "creativos.ai <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to the creativos.ai Waitlist! 🚀",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f6f9; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f97316 100%); padding: 40px 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        ✨ creativos.ai
                      </h1>
                      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">
                        Your AI Chief Marketing Officer
                      </p>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding: 40px;">
                      <h2 style="margin: 0 0 16px; color: #1a202c; font-size: 22px; font-weight: 600;">
                        Hey ${name}! 👋
                      </h2>
                      <p style="margin: 0 0 20px; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        Thanks for joining the <strong>creativos.ai</strong> waitlist for <strong>${brandName}</strong>! You're now in line to be among the first to experience AI-powered marketing that actually works.
                      </p>
                      <div style="background-color: #f0f4ff; border-left: 4px solid #3b82f6; border-radius: 8px; padding: 20px; margin: 24px 0;">
                        <p style="margin: 0; color: #2d3748; font-size: 15px; line-height: 1.6;">
                          <strong>What happens next?</strong><br>
                          We'll notify you as soon as our beta is ready. Early adopters like you get exclusive access and special launch pricing.
                        </p>
                      </div>
                      <p style="margin: 24px 0 0; color: #4a5568; font-size: 15px; line-height: 1.6;">
                        In the meantime, get ready to 10x your D2C marketing with AI-powered strategies, smart audience targeting, and real-time analytics.
                      </p>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
                      <p style="margin: 0; color: #a0aec0; font-size: 13px;">
                        © ${new Date().getFullYear()} creativos.ai — AI-Powered Marketing for D2C Brands
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
    });

    console.log("Waitlist confirmation email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-waitlist-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
