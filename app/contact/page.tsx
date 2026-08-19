'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  ShieldCheck,
} from 'lucide-react'

const contactReasons = [
  'General question',
  'Risk Screening follow-up',
  'Direct Filing Support inquiry',
  'Platform / pricing question',
  'Other',
]

const topicOptions = [
  'CSA/BASIC scores',
  'Driver qualification files',
  'Hours of Service compliance',
  'Drug & alcohol program review',
  'Vehicle maintenance records',
  'New authority setup',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    companyName: '',
    identifier: '',
    reason: '',
    message: '',
  })

  const [topics, setTopics] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  function updateField(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function toggleTopic(topic: string) {
    setTopics((current) =>
      current.includes(topic)
        ? current.filter((item) => item !== topic)
        : [...current, topic],
    )
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    /*
     * Connect this handler to the production contact endpoint when
     * backend/email delivery is ready.
     */
    setSubmitted(true)
  }

  return (
    <main className="bg-[#f7f4ee] text-[#0c1a36]">
      {/* ================================================================ */}
      {/* HERO                                                            */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-[#0c1a36]">
        {/* Very subtle background atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#16274a] opacity-60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-48 -left-40 h-[480px] w-[480px] rounded-full bg-[#16274a] opacity-40 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            {/* LEFT — HERO COPY */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
                  Human Support & Compliance Inquiries
                </span>
              </div>

              <h1 className="max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[76px]">
                Talk to
                <br />
                <span className="text-[#e8720c]">
                  our team.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Have a question about compliance, the platform, or something
                specific to your operation? Send us a message and we&apos;ll
                get back to you.
              </p>
            </div>

            {/* RIGHT — SUPPORT STATEMENT */}
            <div className="lg:pb-2">
              <div className="border-l border-white/10 pl-7 lg:pl-10">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
                  TruckEase Solutions Inc.
                </p>

                <p className="mt-5 max-w-md font-serif text-2xl leading-[1.25] text-white/90 sm:text-3xl">
                  Independent compliance software and administrative workflow
                  support for commercial trucking operations.
                </p>

                <div className="mt-8 h-px w-full max-w-md bg-white/10" />

                <div className="mt-5 flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]">
                    <ShieldCheck className="h-4 w-4 text-[#e8720c]" />
                  </span>

                  <p className="max-w-md text-xs leading-5 text-white/45">
                    Direct human support for questions about compliance,
                    operations, and the TruckEase platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DIRECT CHANNELS + FORM                                          */}
      {/* ================================================================ */}

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            {/* LEFT COLUMN */}
            <aside>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Direct Channels
                </span>
              </div>

              <div className="rounded-[24px] border border-[#e0ddd5] bg-white p-7 sm:p-8">
                <div className="space-y-7">
                  <Channel
                    icon={<Mail className="h-4 w-4" />}
                    label="Email Contact"
                    value="contact@truckease.co"
                    description="General & Support Inquiries"
                    href="mailto:contact@truckease.co"
                  />

                  <Channel
                    icon={<Clock3 className="h-4 w-4" />}
                    label="Human Review Hours"
                    value="Monday–Friday"
                    description="8:00 AM–6:00 PM EST"
                  />

                  <Channel
                    icon={<MapPin className="h-4 w-4" />}
                    label="Regional Operations"
                    value="United States & Canada"
                    description="Serving commercial fleets across both countries."
                  />
                </div>
              </div>

              {/* OPERATIONAL CONFIDENCE */}
              <div className="mt-6 overflow-hidden rounded-[24px] bg-[#0c1a36]">
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      <ShieldCheck className="h-4 w-4 text-[#e8720c]" />
                    </span>

                    <span className="font-mono text-[9px] font-medium uppercase tracking-[0.15em] text-white/45">
                      Scope
                    </span>
                  </div>

                  <h2 className="mt-7 font-serif text-2xl font-medium text-white">
                    Operational Confidence
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-white/50">
                    TruckEase Solutions Inc. provides independent compliance
                    software and administrative workflow support for commercial
                    trucking operations.
                  </p>
                </div>

                <div className="h-1 bg-[#e8720c]" />
              </div>
            </aside>

            {/* RIGHT COLUMN — FORM */}
            <div className="rounded-[24px] border border-[#e0ddd5] bg-white p-7 shadow-[0_18px_55px_rgba(12,26,54,0.045)] sm:p-10 lg:p-12">
              {!submitted ? (
                <>
                  <div className="mb-9">
                    <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#697281]">
                      Send a Message
                    </span>

                    <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                      What can we help
                      <br />
                      you with?
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Full name"
                        required
                        value={form.fullName}
                        onChange={(value) =>
                          updateField('fullName', value)
                        }
                      />

                      <Field
                        label="Email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(value) =>
                          updateField('email', value)
                        }
                      />
                    </div>

                    {/* Company + Identifier */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Company name"
                        value={form.companyName}
                        onChange={(value) =>
                          updateField('companyName', value)
                        }
                      />

                      <Field
                        label="USDOT / MC / NSC / CVOR number"
                        value={form.identifier}
                        onChange={(value) =>
                          updateField('identifier', value)
                        }
                      />
                    </div>

                    {/* Reason */}
                    <SelectField
                      label="Reason for contact"
                      required
                      value={form.reason}
                      onChange={(value) =>
                        updateField('reason', value)
                      }
                      options={contactReasons}
                    />

                    {/* Topic Checkboxes */}
                    <fieldset>
                      <legend className="mb-3 text-xs font-semibold text-[#0c1a36]">
                        What&apos;s this about, more specifically?
                        <span className="ml-1 font-normal text-[#8a929e]">
                          Optional
                        </span>
                      </legend>

                      <div className="grid gap-2 sm:grid-cols-2">
                        {topicOptions.map((topic) => {
                          const selected = topics.includes(topic)

                          return (
                            <button
                              key={topic}
                              type="button"
                              onClick={() => toggleTopic(topic)}
                              className={`flex min-h-11 items-center gap-3 rounded-xl border px-3.5 text-left text-xs transition ${
                                selected
                                  ? 'border-[#e8720c] bg-[#fff7ef] text-[#9a4a08]'
                                  : 'border-[#dce0e5] bg-[#fdfcf9] text-[#596372] hover:border-[#aeb7c2]'
                              }`}
                            >
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                  selected
                                    ? 'border-[#e8720c] bg-[#e8720c]'
                                    : 'border-[#bcc3cc] bg-white'
                                }`}
                              >
                                {selected && (
                                  <Check className="h-3 w-3 text-white" />
                                )}
                              </span>

                              <span>{topic}</span>
                            </button>
                          )
                        })}
                      </div>
                    </fieldset>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold text-[#0c1a36]"
                      >
                        What&apos;s driving this today?
                        <span className="ml-1 text-[#e8720c]">*</span>
                      </label>

                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={(event) =>
                          updateField('message', event.target.value)
                        }
                        placeholder="Tell us what's going on, what you're trying to solve, or what you'd like to understand."
                        className="w-full resize-none rounded-xl border border-[#d8dde3] bg-[#fdfcf9] px-4 py-3.5 text-sm leading-6 text-[#0c1a36] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
                      />
                    </div>

                    {/* Submit */}
                    <div className="border-t border-[#e2e7ec] pt-6">
                      <button
                        type="submit"
                        disabled={
                          !form.fullName ||
                          !form.email ||
                          !form.reason ||
                          !form.message
                        }
                        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Send Your Message
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <p className="mt-4 text-[11px] leading-5 text-[#7a838f]">
                        We use the information you provide to understand your
                        inquiry and respond appropriately.
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <SuccessState
                  email={form.email}
                  onReset={() => setSubmitted(false)}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DIFFERENT STARTING POINT                                        */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          {/* Contained dark panel */}
          <div className="relative overflow-hidden rounded-[24px] bg-[#0c1a36]">
            {/* Subtle grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Subtle orange atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#e8720c]/10 blur-3xl"
            />

            <div className="relative flex flex-col justify-between gap-10 p-8 sm:p-10 lg:flex-row lg:items-center lg:p-14">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#e8720c]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#e8720c]">
                    Need a different starting point?
                  </span>
                </div>

                <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                  See where your
                  <br />
                  compliance position stands.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                  Start with a risk screening and get a clearer view of the
                  compliance signals that may deserve attention.
                </p>
              </div>

              <Link
                href="/risk-screening"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ====================================================================== */
/* SUPPORTING COMPONENTS                                                  */
/* ====================================================================== */

function Channel({
  icon,
  label,
  value,
  description,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  description: string
  href?: string
}) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f4f1ea] text-[#e8720c]">
          {icon}
        </span>

        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-[#697281]">
          {label}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-sm font-semibold text-[#0c1a36]">
          {value}
        </p>

        <p className="mt-1 text-xs leading-5 text-[#697281]">
          {description}
        </p>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-xl transition hover:bg-[#faf8f3]"
      >
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}

function Field({
  label,
  required = false,
  type = 'text',
  value,
  onChange,
}: {
  label: string
  required?: boolean
  type?: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#0c1a36]">
        {label}

        {required ? (
          <span className="ml-1 text-[#e8720c]">*</span>
        ) : (
          <span className="ml-1 font-normal text-[#8a929e]">
            Optional
          </span>
        )}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-[#fdfcf9] px-4 text-sm text-[#0c1a36] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
      />
    </div>
  )
}

function SelectField({
  label,
  required = false,
  value,
  onChange,
  options,
}: {
  label: string
  required?: boolean
  value: string
  onChange: (value: string) => void
  options: string[]
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#0c1a36]">
        {label}

        {required && (
          <span className="ml-1 text-[#e8720c]">*</span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-[#fdfcf9] px-4 text-sm text-[#0c1a36] outline-none transition focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
      >
        <option value="">Select one</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function SuccessState({
  email,
  onReset,
}: {
  email: string
  onReset: () => void
}) {
  return (
    <div className="flex min-h-[620px] flex-col justify-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#edf5ef]">
        <Check className="h-6 w-6 text-[#4d7758]" />
      </div>

      <span className="mt-8 font-mono text-[9px] uppercase tracking-[0.15em] text-[#697281]">
        Message Prepared
      </span>

      <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium leading-tight tracking-[-0.03em]">
        Thanks for reaching out.
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-7 text-[#596372]">
        Your message has been captured for the contact workflow. The next step
        is connecting this form to the production email delivery endpoint.
      </p>

      <div className="mt-8 rounded-xl border border-[#e2e7ec] bg-[#f7f4ee] p-5">
        <p className="text-xs leading-5 text-[#697281]">
          Contact email
        </p>

        <p className="mt-1 text-sm font-semibold text-[#0c1a36]">
          {email}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0c1a36] px-5 text-xs font-semibold text-white transition hover:bg-[#16274a]"
        >
          Back to Home
        </Link>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#cfd5dc] px-5 text-xs font-semibold text-[#0c1a36] transition hover:border-[#9fa8b3]"
        >
          Send another message
        </button>
      </div>
    </div>
  )
}
