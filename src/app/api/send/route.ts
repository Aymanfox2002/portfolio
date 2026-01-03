import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * Handles POST requests to send an email using Resend.
 *
 * Expects a JSON body containing:
 * - `username`: The sender's name
 * - `email`: The sender's email address
 * - `message`: The message content
 * ---
 *
 * @async
 * @param {Request} req - The incoming HTTP request containing form data.
 * @returns {Promise<Response>} Returns a JSON Response with the email result
 * or an error object with status 500.
 */
export async function POST(req: Request): Promise<Response> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();
    const { data, error } = await resend.emails.send({
      from: "My Portfolio <onboarding@resend.dev>",
      to: ["ayman2002.dev@gmail.com"],
      subject: "🌐 My Network",
      html: `  <div style="font-family: Arial, Helvetica, sans-serif; background:#f9fafb; padding:20px;">
    <div style="max-width:520px; margin:auto; background:#ffffff; border-radius:8px; padding:20px;">
      <h2 style="margin:0 0 16px; color:#111827;">Message</h2>

      <table style="width:100%; border-collapse:collapse;">
        <tr>
          <td style="padding:8px 0; font-weight:bold; color:#374151;">Name</td>
          <td style="padding:8px 0; color:#111827;">${name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; font-weight:bold; color:#374151;">Email</td>
          <td style="padding:8px 0; color:#111827;">${email}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; font-weight:bold; color:#374151;">Message</td>
          <td style="padding:8px 0; color:#111827;">${message}</td>
        </tr>
      </table>
    </div>
  </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
