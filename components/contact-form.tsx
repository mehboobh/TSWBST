"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2 } from "lucide-react"

const topics = ["General question", "Free risk screening", "Ongoing compliance management", "Audit support", "New authority setup", "Partnership"]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1100))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-10">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-foreground">Message sent</h3>
        <p className="mx-auto mt-3 max-w-sm text-muted-foreground leading-relaxed">
          Thanks for reaching out. A member of our team will get back to you within one business day.
        </p>
        <Button className="mt-8" variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" required placeholder="Jordan Ellis" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-company">Company</Label>
          <Input id="c-company" name="company" placeholder="Acme Trucking LLC" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" name="phone" type="tel" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="c-topic">How can we help?</Label>
        <select
          id="c-topic"
          name="topic"
          defaultValue={topics[0]}
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 grid gap-2">
        <Label htmlFor="c-message">Message</Label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a bit about your fleet and what you're looking for."
          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full" disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  )
}
