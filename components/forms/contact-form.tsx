"use client";

import { Send } from "lucide-react";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "Project inquiry" }
] as const;

export function ContactForm() {
  return (
    <form className="glass-panel space-y-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field, index) => (
          <label
            key={field.id}
            className={index === 2 ? "space-y-2 md:col-span-2" : "space-y-2"}
          >
            <span className="text-sm font-medium text-slate-200">{field.label}</span>
            <input
              type={field.type}
              name={field.id}
              placeholder={field.placeholder}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            />
          </label>
        ))}
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-medium text-slate-200">Message</span>
        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your product, timeline, and the kind of support you need."
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
        />
      </label>

      <button type="submit" className="button-primary">
        Start the Conversation
        <Send className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}
