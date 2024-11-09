"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/lib/email";

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  timestamp: number;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    honeypot: "",
    timestamp: Date.now(),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting || formData.honeypot) return;

    if (Date.now() - formData.timestamp < 2000) {
      toast.error("Please take your time filling out the form");
      return;
    }

    setIsSubmitting(true);

    try {
      await toast.promise(
        sendContactEmail({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: formData.timestamp,
        }),
        {
          loading: "Sending message...",
          success: () => {
            setFormData({
              name: "",
              email: "",
              message: "",
              honeypot: "",
              timestamp: Date.now(),
            });
            return "Message sent successfully!";
          },
          error: (err) =>
            err instanceof Error ? err.message : "Failed to send message",
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      id="contact-form"
    >
      <div className="inputContainer flex flex-col">
        <label htmlFor="name" className="font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="from_name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          className="border-2 border-[var(--theme-1)] rounded p-2 bg-transparent text-lg"
          disabled={isSubmitting}
        />
      </div>

      <div className="inputContainer flex flex-col">
        <label htmlFor="email" className="font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="reply_to"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          className="border-2 border-[var(--theme-1)] rounded p-2 bg-transparent text-lg"
          disabled={isSubmitting}
        />
      </div>

      <div className="inputContainer flex flex-col">
        <label htmlFor="message" className="font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          required
          rows={14}
          className="border-2 border-[var(--theme-1)] rounded p-2 bg-transparent text-lg"
          disabled={isSubmitting}
        />
      </div>

      {/* Hidden timestamp field */}
      <input type="hidden" name="timestamp" value={formData.timestamp} />

      {/* Honeypot field */}
      <div className="honeypot-field hidden">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, honeypot: e.target.value }))
          }
        />
      </div>

      <button
        type="submit"
        className="btn mt-4 self-start"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
