'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'

const questions = [
  'Which safety category is quietly closest to trouble?',
  'What would a broker see first on your DOT number?',
  'Do you actually know why your score moved — or just that it did?',
  'How many loads or contracts have you quietly lost, without anyone telling you why?',
  'Same issue, two different trucks, months apart — would you catch the connection?',
]

const screeningAreas = [
  'Public safety indicators that could attract additional regulatory attention',
  'Authority and registration issues that may interrupt operations',
  'Filing gaps and regulatory inconsistencies that deserve attention',
  'Canadian compliance indicators where applicable',
]

const screeningSteps = [
  'Review requested',
  'Public information reviewed',
  'Potential areas identified',
  'Next steps discussed',
]

type Answer = 'confident' | 'unsure' | null

export default function RiskScreeningPage() {
  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null),
  )

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    identifier: '',
    region: '',
    cargoType: '',
    haulPattern: '',
    reason: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const answeredCount = answers.filter(Boolean).length
  const flaggedCount = answers.filter(
    (answer) => answer === 'unsure',
  ).length

  function answerQuestion(
    index: number,
    answer: Exclude<Answer, null>,
  ) {
    const updated = [...answers]
    updated[index] = answer
    setAnswers(updated)

    if (index === questions.length - 1) {
      setTimeout(() => {
        document
          .getElementById('company-details')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 250)
    }
  }

  function handleFormChange(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    /*
     * Connect this form to the production CRM / OTP / screening
     * workflow before launch.
     */
    setSubmitted(true)
  }

  return (
    <main className="bg-white text-[#111827]">
      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="relative overflow-hidden border-b border-[#e5e7eb] bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#eef0f3] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-260px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#f5f5f4] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-end gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  No Cost · No Obligation
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-[#111827] sm:text-6xl lg:text-7xl">
                Know where your
                <br />
                compliance risk
                <br />
                <span className="text-[#e8720c]">stands.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#596372] sm:text-lg">
                Five practical questions help surface the areas you may want
                to look at more closely — before a compliance issue becomes
                an operational problem.
              </p>

              <a
                href="#screening-overview"
                className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#111827] px-6 text-sm font-semibold text-white transition hover:bg-[#273244]"
              >
                Start Your Screening
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-[28px] bg-[#f3f4f6]" />

              <div className="relative rounded-2xl border border-[#e1e4e8] bg-white p-7 shadow-[0_24px_70px_rgba(17,24,39,0.08)] sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a929e]">
                    Risk Screening
                  </span>

                  <ShieldCheck className="h-5 w-5 text-[#e8720c]" />
                </div>

                <h2 className="mt-9 max-w-md font-serif text-3xl font-medium leading-tight tracking-[-0.025em] text-[#111827]">
                  A quick look can reveal what routine operations may not.
                </h2>

                <p className="mt-5 text-sm leading-6 text-[#697281]">
                  We look at publicly available regulatory information and
                  help identify areas that may deserve a closer review.
                </p>

                <div className="mt-8 grid grid-cols-3 border-t border-[#e5e7eb] pt-6">
                  <Metric value="05" label="Questions" />
                  <Metric value="01" label="Screening" />
                  <Metric value="0$" label="Cost" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />

            <span className="h-px flex-1 bg-[#e5e7eb]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#9aa2ad]">
              Visibility before intervention
            </span>
          </div>
        </div>
      </section>

      {/* ================================================================
          SCREENING OVERVIEW — BLACK
      ================================================================ */}

      <section
        id="screening-overview"
        className="scroll-mt-20 bg-[#111827] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Screening Overview
                </span>
              </div>

              <h2 className="max-w-lg font-serif text-4xl font-medium leading-[1.08] tracking-[-0.035em] sm:text-5xl">
                Five questions.
                <br />
                A better starting point.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                You don't need to know every answer. Knowing what you don't
                know is useful information too.
              </p>
            </div>

            <div>
              <div className="grid gap-0 border-t border-white/10">
                {questions.map((question, index) => (
                  <div
                    key={question}
                    className="grid gap-5 border-b border-white/10 py-6 sm:grid-cols-[48px_1fr]"
                  >
                    <div className="font-mono text-[10px] text-[#e8720c]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <p className="max-w-2xl text-base leading-7 text-white/85">
                        {question}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3 text-xs text-white/40">
                <ShieldAlert className="h-4 w-4 text-[#e8720c]" />

                <span>
                  Your answers are used to guide the screening conversation,
                  not to create a government compliance rating.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FIVE QUESTIONS — NORMAL SITE WIDTH
      ================================================================ */}

      <section
        id="five-questions"
        className="scroll-mt-20 bg-[#f7f7f5]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d8dce1]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Your Screening
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#111827] sm:text-5xl">
                Five questions.
                <br />
                Five honest answers.
              </h2>
            </div>

            <div className="w-full max-w-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#8a929e]">
                  Progress
                </span>

                <span className="font-mono text-[10px] font-semibold text-[#111827]">
                  {answeredCount}/5
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#e1e4e8]">
                <div
                  className="h-full rounded-full bg-[#e8720c] transition-all duration-300"
                  style={{
                    width: `${(answeredCount / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {questions.map((question, index) => {
              const answer = answers[index]

              return (
                <div
                  key={question}
                  className={`rounded-2xl border bg-white p-6 transition-all sm:p-7 ${
                    answer
                      ? 'border-[#d9dde2]'
                      : 'border-[#e2e5e9]'
                  }`}
                >
                  <div className="grid gap-6 lg:grid-cols-[60px_1fr_auto] lg:items-center">
                    <div className="font-mono text-[10px] font-semibold text-[#e8720c]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div>
                      <h3 className="max-w-3xl font-serif text-xl font-medium leading-snug tracking-[-0.015em] text-[#111827] sm:text-2xl">
                        {question}
                      </h3>

                      {answer && (
                        <p className="mt-2 text-xs text-[#697281]">
                          {answer === 'confident'
                            ? 'You feel confident about this.'
                            : 'This may deserve a closer look.'}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 sm:flex">
                      <AnswerButton
                        active={answer === 'confident'}
                        tone="green"
                        onClick={() =>
                          answerQuestion(index, 'confident')
                        }
                      >
                        Confident
                        {answer === 'confident' && (
                          <CheckCircle2 className="h-4 w-4" />
                        )}
                      </AnswerButton>

                      <AnswerButton
                        active={answer === 'unsure'}
                        tone="orange"
                        onClick={() =>
                          answerQuestion(index, 'unsure')
                        }
                      >
                        Not sure
                        {answer === 'unsure' && (
                          <ShieldAlert className="h-4 w-4" />
                        )}
                      </AnswerButton>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {answeredCount === 5 && (
            <div className="mt-8 flex flex-col justify-between gap-5 rounded-2xl border border-[#e2e5e9] bg-white p-6 sm:flex-row sm:items-center sm:p-7">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#697281]">
                  Screening complete
                </p>

                <p className="mt-2 text-sm leading-6 text-[#111827]">
                  {flaggedCount > 0
                    ? `${flaggedCount} area${flaggedCount === 1 ? '' : 's'} may be worth a closer look.`
                    : 'Your answers indicate strong awareness of your current position.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('company-details')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#111827] px-6 text-sm font-semibold text-white transition hover:bg-[#273244]"
              >
                Continue to Company Details
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================
          WHAT WE LOOK FOR
      ================================================================ */}

      <section className="border-y border-[#e5e7eb] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d8dce1]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  What We Look For
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
                Signals worth
                <br />
                understanding.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#596372]">
                The screening is designed to surface potential areas of
                attention from publicly available regulatory information.
              </p>
            </div>

            <div className="grid border-t border-[#e5e7eb] sm:grid-cols-2 sm:border-t-0">
              {screeningAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex gap-4 border-b border-[#e5e7eb] py-6 sm:pr-8"
                >
                  <span className="font-mono text-[9px] text-[#e8720c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="text-sm leading-6 text-[#596372]">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
      ================================================================ */}

      <section className="bg-[#f7f7f5]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d8dce1]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                How It Works
              </span>

              <span className="h-px w-8 bg-[#d8dce1]" />
            </div>

            <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
              Simple process.
              <br />
              Clear next steps.
            </h2>
          </div>

          <div className="relative mt-16">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#d5d9df] lg:block"
            />

            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {screeningSteps.map((step, index) => (
                <div key={step} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#e8720c] bg-[#f7f7f5]">
                    <span className="font-mono text-[10px] font-semibold text-[#111827]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#111827]">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          COMPANY DETAILS — NORMAL SITE WIDTH
      ================================================================ */}

      <section
        id="company-details"
        className="scroll-mt-20 bg-[#111827]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Company Details
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Tell us where
                <br />
                to look.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                Provide the details we need to connect the screening to the
                right company, identifier, and operating region.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5c8a68]" />

                  <p className="text-xs leading-5 text-white/45">
                    The screening is based on publicly available regulatory
                    information. It is not a government rating or legal advice.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    required
                    value={form.fullName}
                    onChange={(value) =>
                      handleFormChange('fullName', value)
                    }
                  />

                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(value) =>
                      handleFormChange('email', value)
                    }
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Phone"
                    value={form.phone}
                    onChange={(value) =>
                      handleFormChange('phone', value)
                    }
                  />

                  <Field
                    label="USDOT / MC / NSC / CVOR number"
                    required
                    value={form.identifier}
                    onChange={(value) =>
                      handleFormChange('identifier', value)
                    }
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Operating region"
                    required
                    value={form.region}
                    onChange={(value) =>
                      handleFormChange('region', value)
                    }
                    options={[
                      'United States',
                      'Canada',
                      'United States & Canada',
                    ]}
                  />

                  <Field
                    label="Primary cargo type"
                    value={form.cargoType}
                    onChange={(value) =>
                      handleFormChange('cargoType', value)
                    }
                  />
                </div>

                <Field
                  label="Typical haul pattern"
                  value={form.haulPattern}
                  onChange={(value) =>
                    handleFormChange('haulPattern', value)
                  }
                />

                <div>
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-xs font-semibold text-[#111827]"
                  >
                    What's the real reason you're checking today?
                    <span className="ml-1 font-normal text-[#8a929e]">
                      Optional
                    </span>
                  </label>

                  <textarea
                    id="reason"
                    rows={4}
                    value={form.reason}
                    onChange={(event) =>
                      handleFormChange('reason', event.target.value)
                    }
                    className="w-full resize-none rounded-xl border border-[#d8dde3] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
                    placeholder="Tell us what prompted you to check today."
                  />
                </div>

                <div className="border-t border-[#e5e7eb] pt-6">
                  <button
                    type="submit"
                    disabled={
                      !form.fullName ||
                      !form.email ||
                      !form.identifier ||
                      !form.region
                    }
                    className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {submitted
                      ? 'Request Received'
                      : 'Request My Risk Screening'}

                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {submitted && (
                    <div className="mt-4 rounded-xl border border-[#5c8a68]/20 bg-[#f4f8f4] p-4">
                      <p className="text-xs leading-5 text-[#35563e]">
                        Your request has been captured. Connect this form to
                        your production screening workflow before launch.
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-[11px] leading-5 text-[#697281]">
                    By submitting this request, you are asking TruckEase to
                    review publicly available regulatory information related
                    to the identifiers and operating region provided above.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-[11px] leading-5 text-white/40">
              This screening reviews publicly available regulatory information
              only. It is not a guarantee of compliance, an official government
              rating, or legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================
          CLOSING CTA
      ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d8dce1]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Get Started
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#111827] sm:text-5xl">
                See what deserves
                <br />
                <span className="text-[#e8720c]">your attention.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[#596372]">
                A clearer view of your compliance position starts with knowing
                what to look for.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('company-details')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#111827] px-6 text-sm font-semibold text-white transition hover:bg-[#273244]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#cfd4da] bg-transparent px-6 text-sm font-semibold text-[#111827] transition hover:border-[#111827]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ======================================================================
   SMALL UI COMPONENTS
====================================================================== */

function Metric({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div>
      <p className="font-serif text-2xl font-medium tracking-[-0.02em] text-[#111827]">
        {value}
      </p>

      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a929e]">
        {label}
      </p>
    </div>
  )
}

function AnswerButton({
  children,
  active,
  tone,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  tone: 'green' | 'orange'
  onClick: () => void
}) {
  const activeClasses =
    tone === 'green'
      ? 'border-[#5c8a68] bg-[#f3f8f4] text-[#35563e]'
      : 'border-[#e8720c] bg-[#fff7ef] text-[#9a4a08]'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 text-xs font-semibold transition ${
        active
          ? activeClasses
          : 'border-[#d8dde3] bg-white text-[#111827] hover:border-[#aeb7c2]'
      }`}
    >
      {children}
    </button>
  )
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
      <label className="mb-2 block text-xs font-semibold text-[#111827]">
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
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
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
      <label className="mb-2 block text-xs font-semibold text-[#111827]">
        {label}

        {required && (
          <span className="ml-1 text-[#e8720c]">*</span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#111827] outline-none transition focus:border-[#111827] focus:ring-2 focus:ring-[#111827]/10"
      >
        <option value="">Select one</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
