"use client"

import { useState } from "react"
import { CheckCircle2, Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-tag" />
        <h3 className="mt-4 font-display text-xl font-bold text-navy">
          Message sent
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. Our team will get back to you within two
          business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-5 rounded-full bg-secondary px-5 py-2 font-display text-sm font-semibold text-navy hover:bg-brand/10"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="name" label="Full name">
          <input
            id="name"
            name="name"
            required
            className="form-input"
            placeholder="Jane Doe"
          />
        </Field>
        <Field id="email" label="Email address">
          <input
            id="email"
            name="email"
            type="email"
            required
            className="form-input"
            placeholder="jane@example.com"
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field id="subject" label="Subject">
          <input
            id="subject"
            name="subject"
            required
            className="form-input"
            placeholder="How can we help?"
          />
        </Field>
      </div>
      <div className="mt-4">
        <Field id="message" label="Message">
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="form-input resize-none"
            placeholder="Write your message..."
          />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 font-display text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand/90"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block font-display text-sm font-semibold text-navy"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
