'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
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
    question:
      'Do you actually know why your score moved — or just that it did?',
  },
  {
    number: '04',
    question:
      'How many loads or contracts have you quietly lost, without anyone telling you why?',
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
    title: 'Safety indicators',
    text: 'Public safety indicators that could attract additional regulatory attention.',
  },
  {
    number: '02',
    title: 'Authority & registration',
    text: 'Authority and registration issues that may interrupt operations.',
  },
  {
    number: '03',
    title: 'Filing consistency',
    text: 'Filing gaps and regulatory inconsistencies that deserve attention.',
  },
  {
    number: '04',
    title: 'Canadian indicators',
    text: 'Canadian compliance indicators where applicable to your operation.',
  },
]

const screeningSteps = [
  {
    number: '01',
    title: 'Answer five questions',
    text: 'Tell us what you know — and where you are unsure.',
  },
  {
    number: '02',
    title: 'Connect your operation',
    text: 'Provide the company details needed to identify your operation.',
  },
  {
    number: '03',
    title: 'Review public information',
    text: 'We look at the regulatory signals available for review.',
  },
  {
    number: '04',
    title: 'Understand what matters',
    text: 'Potential areas of attention become easier to understand and act on.',
  },
]

type Answer = 'confident' | 'unsure' | null

type FormState = {
  fullName: string
  email: string
  phone: string
  identifier: string
  region: string
  cargoType: string
  haulPattern: string
  reason: string
}

export default function RiskScreeningPage() {
  const formRef = useRef<HTMLElement | null>(null)

  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null),
  )

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    identifier: '',
    region: '',
    cargoType: '',
    haulPattern: '',
    reason: '',
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const answeredCount = useMemo(
    () => answers.filter(Boolean).length,
    [answers],
  )

  const unsureCount = useMemo(
    () => answers.filter((answer) => answer === 'unsure').length,
    [answers],
  )

  const screeningComplete = answeredCount === questions.length

  useEffect(() => {
    if (!screeningComplete) return

    const timer = window.setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 350)

    return () => window.clearTimeout(timer)
  }, [screeningComplete])

  function setAnswer(index: number, answer: Exclude<Answer, null>) {
    setAnswers((current) => {
      const updated = [...current]
      updated[index] = answer
      return updated
    })
  }

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    /*
     * Production OTP / backend submission should be connected here.
     * The UI does not pretend that a real submission occurred.
     */
    setFormSubmitted(true)
  }

  return (
    <main className="overflow-hidden bg-[#f7f6f2] text-[#101a2f]">
      {/* ================================================================
          HERO
      ================================================================= */}

      <section className="relative bg-[#f7f6f2]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[-240px] h-[520px] w-[520px] rounded-full bg-[#e7e4dc] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[420px] w-[420px] rounded-full bg-[#ece9e2] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="grid items-end gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#687180]">
                  Risk Screening
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#101a2f] sm:text-6xl lg:text-[76px]">
                See the risk
                <br />
                <span className="text-[#e8720c]">before it matters.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#5d6674] sm:text-lg">
                A focused screening designed to surface compliance signals
                that may deserve attention — before they become operational
                surprises.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#screening"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#d96608]"
                >
                  Start Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </a>

                <span className="text-xs font-medium text-[#747c87]">
                  No cost · No obligation
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[26px] border border-[#dcdad4] bg-white p-7 shadow-[0_24px_70px_rgba(16,26,47,0.07)] sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7a828d]">
                      Screening Overview
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#101a2f]">
                      A closer look at your risk signals.
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4eee7]">
                    <ShieldCheck className="h-5 w-5 text-[#e8720c]" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 divide-x divide-[#e7e5df] border-y border-[#e7e5df] py-5">
                  <HeroMetric
                    value="05"
                    label="Questions"
                  />

                  <HeroMetric
                    value="01"
                    label="Screening"
                  />

                  <HeroMetric
                    value="$0"
                    label="Cost"
                  />
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5c8a68]" />

                  <p className="text-xs leading-5 text-[#737b86]">
                    Public regulatory information only. This is not a
                    government rating, compliance certification, or legal
                    advice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#d9d7d0]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8a919a]">
              Start below
            </span>

            <div className="h-px w-20 bg-[#d9d7d0]" />

            <ChevronDown className="h-4 w-4 text-[#e8720c]" />
          </div>
        </div>
      </section>

      {/* ================================================================
          FIVE QUESTIONS
      ================================================================= */}

      <section
        id="screening"
        className="bg-[#101a2f]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Five Questions
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl">
                Start with what
                <br />
                you know.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                You do not need to know every answer. The places where you are
                unsure can be useful signals too.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                    Progress
                  </span>

                  <span className="font-mono text-[10px] font-semibold text-white">
                    {answeredCount}/05
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#e8720c] transition-all duration-300"
                    style={{
                      width: `${(answeredCount / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs leading-5 text-white/35">
                  {screeningComplete
                    ? 'Screening complete. Your company details are next.'
                    : 'Answer all five questions to continue.'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {questions.map((item, index) => {
                const answer = answers[index]

                return (
                  <div
                    key={item.number}
                    className={`rounded-2xl border p-5 transition sm:p-6 ${
                      answer
                        ? 'border-white/15 bg-white/[0.07]'
                        : 'border-white/10 bg-white/[0.035]'
                    }`}
                  >
                    <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
                      <div className="flex gap-4">
                        <span className="pt-1 font-mono text-[9px] font-semibold text-[#e8720c]">
                          {item.number}
                        </span>

                        <h3 className="max-w-2xl text-base font-medium leading-7 text-white sm:text-lg">
                          {item.question}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-2 lg:w-[210px]">
                        <AnswerButton
                          active={answer === 'confident'}
                          onClick={() => setAnswer(index, 'confident')}
                        >
                          Confident
                        </AnswerButton>

                        <AnswerButton
                          active={answer === 'unsure'}
                          warning
                          onClick={() => setAnswer(index, 'unsure')}
                        >
                          Not sure
                        </AnswerButton>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div
                className={`mt-5 rounded-2xl border p-5 transition sm:p-6 ${
                  screeningComplete
                    ? 'border-[#e8720c]/40 bg-[#e8720c]/10'
                    : 'border-white/10 bg-white/[0.025]'
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Screening Status
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {screeningComplete
                        ? unsureCount > 0
                          ? `${unsureCount} area${
                              unsureCount === 1 ? '' : 's'
                            } marked for a closer look.`
                          : 'You feel confident across all five areas.'
                        : `${questions.length - answeredCount} question${
                            questions.length - answeredCount === 1 ? '' : 's'
                          } remaining.`}
                    </p>
                  </div>

                  {screeningComplete && (
                    <div className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#f29a58]">
                      Continue to company details
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHAT WE LOOK FOR
      ================================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#78808b]">
                  What We Look For
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#101a2f] sm:text-5xl">
                Signals worth
                <br />
                understanding.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#626b78]">
                The screening is designed to make potential areas of attention
                easier to see — not to replace formal regulatory guidance.
              </p>
            </div>

            <div className="grid border-t border-[#e4e3df] sm:grid-cols-2">
              {screeningAreas.map((area) => (
                <div
                  key={area.number}
                  className="border-b border-[#e4e3df] py-7 sm:px-7 sm:nth-[2n+1]:border-r"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-mono text-[9px] font-semibold text-[#e8720c]">
                      {area.number}
                    </span>

                    <ArrowRight className="h-4 w-4 text-[#c1c5ca]" />
                  </div>

                  <h3 className="mt-7 text-sm font-semibold text-[#101a2f]">
                    {area.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#68717e]">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          HOW IT WORKS
      ================================================================= */}

      <section className="bg-[#ecebe6]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#bfc1bc]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#707780]">
                  How It Works
                </span>
              </div>

              <h2 className="max-w-2xl font-serif text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-[#101a2f] sm:text-5xl">
                Simple process.
                <br />
                Clearer direction.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#68717e]">
              The goal is straightforward: give you a clearer starting point
              for understanding where your operation may need attention.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#d8d7d1] bg-[#d8d7d1] md:grid-cols-2 lg:grid-cols-4">
            {screeningSteps.map((step) => (
              <div
                key={step.number}
                className="bg-[#f7f6f2] p-7 lg:p-8"
              >
                <span className="font-mono text-[9px] font-semibold text-[#e8720c]">
                  {step.number}
                </span>

                <h3 className="mt-12 text-sm font-semibold text-[#101a2f]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#69727d]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          COMPANY DETAILS FORM
      ================================================================= */}

      <section
        ref={formRef}
        id="screening-form"
        className="scroll-mt-8 bg-[#101a2f]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Company Details
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl">
                Now connect the
                <br />
                screening to your
                <br />
                <span className="text-[#e8720c]">operation.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                Tell us who you are and which operation we should review. The
                information below helps connect the screening to the right
                regulatory footprint.
              </p>

              <div className="mt-8 space-y-4">
                <TrustPoint>
                  Public regulatory information reviewed
                </TrustPoint>

                <TrustPoint>
                  No government rating or certification
                </TrustPoint>

                <TrustPoint>
                  No legal advice — just greater visibility
                </TrustPoint>
              </div>
            </div>

            <div className="rounded-[24px] bg-[#f7f6f2] p-6 sm:p-9 lg:p-10">
              {!screeningComplete ? (
                <div className="rounded-2xl border border-[#deddd7] bg-white p-6 sm:p-8">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7b838d]">
                    Complete the screening first
                  </p>

                  <h3 className="mt-4 font-serif text-3xl font-medium tracking-[-0.025em] text-[#101a2f]">
                    Five questions, then your company details.
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-[#69727e]">
                    Answer all five questions above and this form will become
                    the next step automatically.
                  </p>

                  <a
                    href="#screening"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e8720c]"
                  >
                    Return to screening
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ) : formSubmitted ? (
                <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f0e8]">
                    <Check className="h-6 w-6 text-[#4e7b59]" />
                  </div>

                  <h3 className="mt-7 font-serif text-3xl font-medium tracking-[-0.025em] text-[#101a2f] sm:text-4xl">
                    Screening request ready.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[#68717d]">
                    The production submission and OTP verification step should
                    be connected to your backend before launch.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#e8720c] px-6 py-3 text-sm font-semibold text-white"
                  >
                    Contact TruckEase
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-[#deddd7] pb-6">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7b838d]">
                      Step 02
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-medium tracking-[-0.025em] text-[#101a2f]">
                      Tell us about your operation.
                    </h3>
                  </div>

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
                      required
                      type="email"
                      value={form.email}
                      onChange={(value) =>
                        updateField('email', value)
                      }
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Phone"
                      value={form.phone}
                      onChange={(value) =>
                        updateField('phone', value)
                      }
                    />

                    <Field
                      label="USDOT / MC / NSC / CVOR number"
                      required
                      value={form.identifier}
                      onChange={(value) =>
                        updateField('identifier', value)
                      }
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField
                      label="Operating region"
                      required
                      value={form.region}
                      onChange={(value) =>
                        updateField('region', value)
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
                        updateField('cargoType', value)
                      }
                    />
                  </div>

                  <Field
                    label="Typical haul pattern"
                    value={form.haulPattern}
                    onChange={(value) =>
                      updateField('haulPattern', value)
                    }
                  />

                  <div>
                    <label
                      htmlFor="reason"
                      className="mb-2 block text-xs font-semibold text-[#101a2f]"
                    >
                      What&apos;s the real reason you&apos;re checking today?
                      <span className="ml-1 font-normal text-[#8a919a]">
                        Optional
                      </span>
                    </label>

                    <textarea
                      id="reason"
                      rows={4}
                      value={form.reason}
                      onChange={(event) =>
                        updateField('reason', event.target.value)
                      }
                      placeholder="Tell us what prompted you to check today."
                      className="w-full resize-none rounded-xl border border-[#d8d9d6] bg-white px-4 py-3 text-sm text-[#101a2f] outline-none transition placeholder:text-[#9aa0a8] focus:border-[#101a2f] focus:ring-2 focus:ring-[#101a2f]/10"
                    />
                  </div>

                  <div className="border-t border-[#deddd7] pt-6">
                    <button
                      type="submit"
                      disabled={
                        !form.fullName ||
                        !form.email ||
                        !form.identifier ||
                        !form.region
                      }
                      className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#d96608] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Request My Risk Screening
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <p className="mt-4 text-[11px] leading-5 text-[#777f89]">
                      By submitting this request, you are asking TruckEase to
                      review publicly available regulatory information related
                      to the identifiers and operating region provided.
                    </p>
                  </div>
                </form>
              )}
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
      ================================================================= */}

      <section className="bg-[#f7f6f2]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#747c86]">
                  Need More Visibility?
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-[1.04] tracking-[-0.035em] text-[#101a2f] sm:text-5xl">
                Know where you stand.
                <br />
                <span className="text-[#e8720c]">
                  Then decide what comes next.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#101a2f] px-6 text-sm font-semibold text-white transition hover:bg-[#182744]"
            >
              Talk to TruckEase
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ======================================================================
   SMALL COMPONENTS
====================================================================== */

function HeroMetric({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="px-4 text-center first:pl-0 last:pr-0">
      <p className="font-serif text-2xl font-medium tracking-[-0.025em] text-[#101a2f]">
        {value}
      </p>

      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a919a]">
        {label}
      </p>
    </div>
  )
}

function AnswerButton({
  children,
  active,
  warning = false,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  warning?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-lg border px-3 text-xs font-semibold transition ${
        active
          ? warning
            ? 'border-[#e8720c] bg-[#e8720c]/15 text-[#f3a05f]'
            : 'border-[#5c8a68] bg-[#5c8a68]/15 text-[#9bc0a2]'
          : 'border-white/10 bg-white/[0.025] text-white/55 hover:border-white/20 hover:text-white'
      }`}
    >
      <span className="flex items-center justify-center gap-2">
        {active && (
          <CheckCircle2 className="h-3.5 w-3.5" />
        )}

        {children}
      </span>
    </button>
  )
}

function TrustPoint({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5c8a68]" />

      <span className="text-xs leading-5 text-white/45">
        {children}
      </span>
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
      <label className="mb-2 block text-xs font-semibold text-[#101a2f]">
        {label}

        {required ? (
          <span className="ml-1 text-[#e8720c]">*</span>
        ) : (
          <span className="ml-1 font-normal text-[#8a919a]">
            Optional
          </span>
        )}
      </label>

      <input
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8d9d6] bg-white px-4 text-sm text-[#101a2f] outline-none transition placeholder:text-[#9aa0a8] focus:border-[#101a2f] focus:ring-2 focus:ring-[#101a2f]/10"
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
      <label className="mb-2 block text-xs font-semibold text-[#101a2f]">
        {label}

        {required && (
          <span className="ml-1 text-[#e8720c]">*</span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8d9d6] bg-white px-4 text-sm text-[#101a2f] outline-none transition focus:border-[#101a2f] focus:ring-2 focus:ring-[#101a2f]/10"
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
