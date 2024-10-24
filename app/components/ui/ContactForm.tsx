"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot
    if (formData.honeypot) {
      console.log("Spam detected");
      return;
    }

    // Create a toast promise
    await toast.promise(
      fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message",
      },
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="inputContainer">
        <label htmlFor="name" className="font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          required
          className="border-2 border-[var(--theme-1)] rounded p-2 bg-transparent text-lg"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="email" className="font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          required
          className="border-2 border-[var(--theme-1)] rounded p-2 bg-transparent text-lg"
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="message" className="font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          required
          rows={14}
          className="border-2 border-[var(--theme-1)] rounded p-2 bg-transparent text-lg"
        />
      </div>

      {/* Honeypot field */}
      <div className="honeypot-field">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, honeypot: e.target.value }))
          }
          className="hidden"
        />
      </div>

      <button type="submit" className="btn mt-4 self-start">
        Send
      </button>
    </form>
  );
}
