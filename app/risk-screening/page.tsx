'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ShieldAlert,
  ShieldCheck,
} from 'lucide-react'

const questions = [
  {
    number: '01',
    question: 'Which safety category is quietly closest to trouble?',
  },
  {
    number: '02',
    question: 'What would a broker see first on your DOT number?',
  },
  {
    number: '03',
    question: 'Do you know why your score moved — or just that it did?',
  },
  {
    number: '04',
    question:
      'How many loads or contracts may have been lost without anyone telling you why?',
  },
  {
    number: '05',
    question:
      'Same issue, two different trucks, months apart — would you catch the connection?',
  },
]

const screeningAreas = [
  {
    number: '01',
    title: 'Safety & Inspection Signals',
    description:
      'Public safety indicators, inspection patterns, and areas that may deserve closer attention.',
  },
  {
    number: '02',
    title: 'Authority & Registration',
    description:
      'Authority, registration, and operating-status issues that could interrupt your operation.',
  },
  {
    number: '03',
    title: 'Filings & Regulatory Gaps',
    description:
      'Filing history and regulatory inconsistencies that may need follow-up.',
  },
  {
    number: '04',
    title: 'Cross-Border Indicators',
    description:
      'Canadian and cross-border compliance indicators where they apply to your operation.',
  },
]

const screeningSteps = [
  {
    number: '01',
    title: 'Answer five questions',
    description:
      'Tell us what you already know about your current compliance position.',
  },
  {
    number: '02',
    title: 'Share your company details',
    description:
      'Give us the identifiers and operating information needed for the review.',
  },
  {
    number: '03',
    title: 'We review the signals',
    description:
      'TruckEase reviews publicly available regulatory information.',
  },
  {
    number: '04',
    title: 'Understand where to look',
    description:
      'We identify potential areas of attention and discuss practical next steps.',
  },
]

type Answer = 'confident' | 'unsure' | null

export default function RiskScreeningPage() {
  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null),
  )

  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    identifier: '',
    region: '',
    cargoType: '',
    haulPattern: '',
    reason: '',
  })

  const [otpRequested, setOtpRequested] = useState(false)

  const formRef = useRef<HTMLElement | null>(null)

  const answeredCount = useMemo(
    () => answers.filter(Boolean).length,
    [answers],
  )

  const flaggedCount = useMemo(
    () => answers.filter((answer) => answer === 'unsure').length,
    [answers],
  )

  function answerQuestion(
    index: number,
    answer: Exclude<Answer, null>,
  ) {
    setAnswers((current) => {
      const updated = [...current]
      updated[index] = answer
      return updated
    })
  }

  useEffect(() => {
    if (answeredCount === questions.length) {
      const timer = window.setTimeout(() => {
        formRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 350)

      return () => window.clearTimeout(timer)
    }
  }, [answeredCount])

  function handleFormChange(
    field: keyof typeof form,
    value: string,
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function requestOtp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    /*
     * Production note:
     * Connect this action to the real OTP/backend workflow
     * before launch. The UI intentionally does not pretend
     * that an OTP has actually been delivered.
     */
    setOtpRequested(true)
  }

  const formReady =
    Boolean(form.fullName) &&
    Boolean(form.companyName) &&
    Boolean(form.email) &&
    Boolean(form.identifier) &&
    Boolean(form.region)

  return (
    <main className="bg-[#f7f8fa] text-[#14203b]">
      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[-240px] h-[560px] w-[560px] rounded-full bg-[#eef1f5] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-300px] left-[-220px] h-[520px] w-[520px] rounded-full bg-[#f5f6f8] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-28">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697281]">
                  No Cost · No Obligation
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-[#14203b] sm:text-6xl lg:text-7xl">
                See where your
                <br />
                compliance deserves
                <br />
                <span className="text-[#e8720c]">
                  a closer look.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#596372] sm:text-lg">
                A quick risk screening helps surface the compliance signals
                that may deserve attention — before they become an operational
                problem.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#screening"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#d96508]"
                >
                  Start Your Screening
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#d9dee5] bg-white px-6 text-sm font-semibold text-[#14203b] transition hover:border-[#b9c1cc]"
                >
                  How it works
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Hero information panel */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[30px] bg-[#14203b]/[0.035] blur-xl"
              />

              <div className="relative rounded-[24px] border border-[#dfe4ea] bg-[#f8f9fb] p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                      <ShieldCheck className="h-4 w-4 text-[#5c8a68]" />
                    </span>

                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#697281]">
                      TruckEase Risk Screening
                    </span>
                  </div>

                  <span className="rounded-full border border-[#dce1e7] bg-white px-3 py-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-[#697281]">
                    5 Questions
                  </span>
                </div>

                <div className="mt-9">
                  <p className="font-serif text-3xl font-medium leading-[1.12] tracking-[-0.025em] text-[#14203b]">
                    Better visibility starts with knowing where to look.
                  </p>

                  <p className="mt-5 text-sm leading-6 text-[#697281]">
                    Your answers help frame the review. The actual screening
                    uses publicly available regulatory information.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 border-t border-[#dfe4ea] pt-6">
                  <Metric
                    value="05"
                    label="Questions"
                  />

                  <Metric
                    value="01"
                    label="Screening"
                  />

                  <Metric
                    value="$0"
                    label="Cost"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-[#e5e8ed] pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8a929e]">
                Compliance visibility before disruption
              </p>

              <div className="flex items-center gap-3 text-xs text-[#697281]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5c8a68]" />
                Public regulatory information
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          FIVE QUESTIONS
      ================================================================ */}

      <section
        id="screening"
        className="scroll-mt-24 bg-[#f7f8fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            {/* Intro */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d7dce3]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697281]">
                  Quick Screening
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#14203b] sm:text-5xl">
                Five questions.
                <br />
                One better
                <br />
                starting point.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#596372]">
                You do not need to know every answer. Knowing what you do not
                know is useful information too.
              </p>

              <div className="mt-8 rounded-2xl border border-[#dfe4ea] bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#697281]">
                    Screening progress
                  </span>

                  <span className="font-mono text-[10px] font-bold text-[#14203b]">
                    {answeredCount}/05
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e8ebef]">
                  <div
                    className="h-full rounded-full bg-[#e8720c] transition-all duration-500"
                    style={{
                      width: `${(answeredCount / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs leading-5 text-[#7a828e]">
                  This is not a government compliance score. It simply helps
                  frame the conversation around your operation.
                </p>
              </div>

              {answeredCount > 0 && (
                <div className="mt-4 flex items-center gap-2 text-xs text-[#697281]">
                  <CheckCircle2 className="h-4 w-4 text-[#5c8a68]" />
                  {answeredCount} question
                  {answeredCount === 1 ? '' : 's'} answered
                </div>
              )}
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {questions.map((item, index) => {
                const answer = answers[index]
                const isComplete = Boolean(answer)

                return (
                  <div
                    key={item.number}
                    className={`rounded-2xl border bg-white p-5 transition-all duration-300 sm:p-6 ${
                      answer === 'unsure'
                        ? 'border-[#e8720c]/40 shadow-[0_12px_35px_rgba(232,114,12,0.06)]'
                        : answer === 'confident'
                          ? 'border-[#5c8a68]/40 shadow-[0_12px_35px_rgba(92,138,104,0.05)]'
                          : 'border-[#dfe4ea]'
                    }`}
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                      <div className="flex min-w-0 gap-4">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-mono text-[9px] font-bold ${
                            answer === 'unsure'
                              ? 'bg-[#fff3e7] text-[#c25c08]'
                              : answer === 'confident'
                                ? 'bg-[#eef6f0] text-[#4c7658]'
                                : 'bg-[#f2f4f7] text-[#697281]'
                          }`}
                        >
                          {item.number}
                        </span>

                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9aa1ab]">
                            Question {index + 1}
                          </p>

                          <h3 className="mt-1 font-serif text-xl font-medium leading-snug tracking-[-0.015em] text-[#14203b] sm:text-[22px]">
                            {item.question}
                          </h3>
                        </div>
                      </div>

                      <div className="flex shrink-0 gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            answerQuestion(index, 'confident')
                          }
                          aria-pressed={answer === 'confident'}
                          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 text-xs font-semibold transition sm:min-w-[132px] ${
                            answer === 'confident'
                              ? 'border-[#5c8a68] bg-[#f1f7f2] text-[#35563e]'
                              : 'border-[#d8dde3] bg-white text-[#14203b] hover:border-[#aeb7c2]'
                          }`}
                        >
                          {answer === 'confident' && (
                            <Check className="h-3.5 w-3.5" />
                          )}
                          Confident
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            answerQuestion(index, 'unsure')
                          }
                          aria-pressed={answer === 'unsure'}
                          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 text-xs font-semibold transition sm:min-w-[132px] ${
                            answer === 'unsure'
                              ? 'border-[#e8720c] bg-[#fff7ef] text-[#9a4a08]'
                              : 'border-[#d8dde3] bg-white text-[#14203b] hover:border-[#aeb7c2]'
                          }`}
                        >
                          {answer === 'unsure' && (
                            <ShieldAlert className="h-3.5 w-3.5" />
                          )}
                          Not sure
                        </button>
                      </div>
                    </div>

                    {isComplete && (
                      <div className="mt-4 border-t border-[#edf0f3] pt-3">
                        <p className="text-[11px] text-[#7a828e]">
                          {answer === 'confident'
                            ? 'Marked confident.'
                            : 'Marked for a closer look.'}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Completion state */}
              <div
                className={`mt-5 rounded-2xl border p-6 transition-all duration-500 ${
                  answeredCount === questions.length
                    ? 'border-[#5c8a68]/30 bg-[#f3f8f4] opacity-100'
                    : 'border-transparent bg-transparent opacity-60'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#5c8a68]" />

                    <div>
                      <p className="text-sm font-semibold text-[#14203b]">
                        {answeredCount === questions.length
                          ? 'Your screening questions are complete.'
                          : 'Answer all five questions to continue.'}
                      </p>

                      {answeredCount === questions.length && (
                        <p className="mt-1 text-xs leading-5 text-[#697281]">
                          {flaggedCount > 0
                            ? `${flaggedCount} answer${flaggedCount === 1 ? '' : 's'} may deserve a closer look.`
                            : 'Your answers suggest you have good visibility into your current position.'}
                        </p>
                      )}
                    </div>
                  </div>

                  {answeredCount === questions.length && (
                    <a
                      href="#screening-form"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#14203b] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#1c2b49]"
                    >
                      Continue
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHAT WE LOOK FOR
      ================================================================ */}

      <section className="border-y border-[#e2e6eb] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#d7dce3]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697281]">
                  What We Look For
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#14203b] sm:text-5xl">
                Signals worth
                <br />
                understanding.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#596372]">
                A risk screening is not about creating another number to
                worry about. It is about making potential areas of attention
                easier to see.
              </p>
            </div>

            <div className="grid border-t border-[#e2e6eb] sm:grid-cols-2 sm:border-t-0">
              {screeningAreas.map((area) => (
                <div
                  key={area.number}
                  className="border-b border-[#e2e6eb] py-6 sm:border-t sm:px-7 sm:py-7 first:sm:border-l-0 even:sm:border-l"
                >
                  <span className="font-mono text-[9px] font-bold text-[#e8720c]">
                    {area.number}
                  </span>

                  <h3 className="mt-3 text-sm font-semibold text-[#14203b]">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#697281]">
                    {area.description}
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

      <section
        id="how-it-works"
        className="bg-[#f7f8fa]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d7dce3]" />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697281]">
                How It Works
              </span>
            </div>

            <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#14203b] sm:text-5xl">
              Simple process.
              <br />
              Clearer next steps.
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {screeningSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[#dfe4ea] bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-bold text-[#e8720c]">
                    {step.number}
                  </span>

                  {index < screeningSteps.length - 1 && (
                    <ArrowRight className="hidden h-4 w-4 text-[#c3c9d1] lg:block" />
                  )}
                </div>

                <h3 className="mt-10 font-serif text-xl font-medium tracking-[-0.015em] text-[#14203b]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#697281]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          COMPANY DETAILS FORM
      ================================================================ */}

      <section
        id="screening-form"
        ref={formRef}
        className="scroll-mt-24 bg-[#14203b]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Step Two
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl">
                Tell us about
                <br />
                your operation.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                Now that the five questions are complete, give us the company
                details we need to connect the screening to the right
                operation.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#7ca987]" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Public information only
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/45">
                      The screening is based on publicly available regulatory
                      information. It is not a government rating or legal
                      advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-7 sm:p-10">
              <div className="mb-8 border-b border-[#e2e6eb] pb-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-[#697281]">
                      Company Details
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-medium tracking-[-0.02em] text-[#14203b]">
                      Where should we connect the screening?
                    </h3>
                  </div>

                  <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#f1f7f2] sm:flex">
                    <Check className="h-4 w-4 text-[#5c8a68]" />
                  </div>
                </div>
              </div>

              <form
                onSubmit={requestOtp}
                className="space-y-6"
              >
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
                    label="Company name"
                    required
                    value={form.companyName}
                    onChange={(value) =>
                      handleFormChange('companyName', value)
                    }
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(value) =>
                      handleFormChange('email', value)
                    }
                  />

                  <Field
                    label="Phone"
                    value={form.phone}
                    onChange={(value) =>
                      handleFormChange('phone', value)
                    }
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="USDOT / MC / NSC / CVOR number"
                    required
                    value={form.identifier}
                    onChange={(value) =>
                      handleFormChange('identifier', value)
                    }
                  />

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
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Primary cargo type"
                    value={form.cargoType}
                    onChange={(value) =>
                      handleFormChange('cargoType', value)
                    }
                  />

                  <Field
                    label="Typical haul pattern"
                    value={form.haulPattern}
                    onChange={(value) =>
                      handleFormChange('haulPattern', value)
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-xs font-semibold text-[#14203b]"
                  >
                    What&apos;s the real reason you&apos;re checking today?
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
                    placeholder="Tell us what prompted you to check today."
                    className="w-full resize-none rounded-xl border border-[#d8dde3] bg-white px-4 py-3 text-sm text-[#14203b] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#14203b] focus:ring-2 focus:ring-[#14203b]/10"
                  />
                </div>

                <div className="border-t border-[#e2e6eb] pt-6">
                  <button
                    type="submit"
                    disabled={!formReady}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#d96508] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {otpRequested
                      ? 'OTP Verification Required'
                      : 'Request My Risk Screening'}

                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {otpRequested && (
                    <div className="mt-4 rounded-xl border border-[#e8720c]/20 bg-[#fff7ef] p-4">
                      <p className="text-xs leading-5 text-[#7c430e]">
                        OTP verification is required before the screening can
                        be submitted. Connect this step to your production OTP
                        service before launch.
                      </p>
                    </div>
                  )}

                  <p className="mt-4 text-[11px] leading-5 text-[#7b838e]">
                    By submitting this request, you are asking TruckEase to
                    review publicly available regulatory information related
                    to the identifiers and operating region provided above.
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-[11px] leading-5 text-white/35">
              This screening reviews publicly available regulatory information
              only. It is not a guarantee of compliance, an official
              government rating, or legal advice.
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
                <span className="h-px w-8 bg-[#d7dce3]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#697281]">
                  Beyond the Screening
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#14203b] sm:text-5xl">
                Compliance should give
                <br />
                you{' '}
                <span className="text-[#e8720c]">
                  more confidence.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[#596372]">
                Risk screening is only one part of the bigger picture. TruckEase
                helps operators build greater visibility into the regulatory
                requirements that keep the business moving.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="#screening"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#d96508]"
              >
                Start a Screening
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#d6dce3] bg-white px-6 text-sm font-semibold text-[#14203b] transition hover:border-[#aeb7c2]"
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
   SMALL COMPONENTS
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
      <p className="font-serif text-xl font-medium tracking-[-0.02em] text-[#14203b]">
        {value}
      </p>

      <p className="mt-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8a929e]">
        {label}
      </p>
    </div>
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
      <label className="mb-2 block text-xs font-semibold text-[#14203b]">
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
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#14203b] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#14203b] focus:ring-2 focus:ring-[#14203b]/10"
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
      <label className="mb-2 block text-xs font-semibold text-[#14203b]">
        {label}

        {required && (
          <span className="ml-1 text-[#e8720c]">*</span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#14203b] outline-none transition focus:border-[#14203b] focus:ring-2 focus:ring-[#14203b]/10"
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
