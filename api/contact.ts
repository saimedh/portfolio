/// <reference types="node" />
import { Resend } from "resend";

export interface ContactRequestBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export default async function handler(req: any, res: any) {
  // CORS / Preflight handling if called across domains
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      error: "Method not allowed. Use POST.",
    });
  }

  try {
    let body: ContactRequestBody = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({
          success: false,
          error: "Invalid JSON payload.",
        });
      }
    }

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    // Validation: Required fields
    if (!name) {
      return res.status(400).json({
        success: false,
        error: "Name is required.",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        error: "Email is required.",
      });
    }

    if (!message) {
      return res.status(400).json({
        success: false,
        error: "Message is required.",
      });
    }

    // Validation: Length and format limits
    if (name.length > 100) {
      return res.status(400).json({
        success: false,
        error: "Name cannot exceed 100 characters.",
      });
    }

    if (email.length > 254 || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        error: "Message must be at least 10 characters long.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        success: false,
        error: "Message cannot exceed 2000 characters.",
      });
    }

    const resendApiKey = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.trim() : "";
    const recipientEmail = (process.env.CONTACT_EMAIL ? process.env.CONTACT_EMAIL.trim() : "") || "saimedhp@gmail.com";

    // Handle missing API key
    if (!resendApiKey) {
      // In development or local testing without API key, simulate success to allow local flow verification
      if (process.env.NODE_ENV !== "production") {
        console.warn("[DEV NOTICE] RESEND_API_KEY not set. Simulated email delivery to:", recipientEmail);
        return res.status(200).json({
          success: true,
          message: "Message sent successfully.",
          simulated: true,
        });
      }

      console.error("[ERROR] Missing RESEND_API_KEY in production environment.");
      return res.status(500).json({
        success: false,
        error: "Could not send message. Please try again.",
      });
    }

    // Initialize Resend with secure server-side key
    const resend = new Resend(resendApiKey);

    // Send email
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[RESEND ERROR]", error.message);
      return res.status(500).json({
        success: false,
        error: "Could not send message. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (err: any) {
    console.error("[SERVER ERROR]", err?.message || err);
    return res.status(500).json({
      success: false,
      error: "Could not send message. Please try again.",
    });
  }
}
