// lib/email.ts
import emailjs from "@emailjs/browser";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

interface EmailData {
  name: string;
  email: string;
  message: string;
  timestamp: number;
}

export async function sendContactEmail(data: EmailData) {
  const now = Date.now();

  // Add submission timestamp check
  if (now - data.timestamp < 2000) {
    throw new Error("Please take your time filling out the form");
  }

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: data.name,
        reply_to: data.email,
        message: data.message,
      },
    );

    if (result.status !== 200) {
      throw new Error("Failed to send message");
    }

    return result;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
