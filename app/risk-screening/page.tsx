'use client'

import { useMemo, useState } from 'react'
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
  'Potential areas for attention identified',
  'Next steps discussed',
]

type Answer = 'confident' | 'unsure' | null

export default function RiskScreeningPage() {
  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null),
  )

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [screeningStarted, setScreeningStarted] = useState(false)

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

  const [otpRequested, setOtpRequested] = useState(false)

  const answeredCount = useMemo(
    () => answers.filter(Boolean).length,
    [answers],
  )

  const flaggedCount = useMemo(
    () => answers.filter((answer) => answer === 'unsure').length,
    [answers],
  )

  const currentAnswer = answers[currentQuestion]

  function answerQuestion(answer: Exclude<Answer, null>) {
    const updated = [...answers]
    updated[currentQuestion] = answer

    setAnswers(updated)

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((value) => value + 1)
      }, 180)
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

  function requestOtp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    /*
     * OTP delivery must be connected to the real backend before launch.
     * The UI intentionally does not pretend an OTP was sent.
     */
    setOtpRequested(true)
  }

  return (
    <main className="bg-[#f7f4ee] text-[#0c1a36]">
      {/* ================================================================ */}
      {/* HERO                                                            */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-[#0c1a36]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#16274a] opacity-70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#16274a] opacity-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
                  No Cost, No Obligation
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                See your compliance risk
                <br />
                before it disrupts
                <br />
                <span className="text-[#e8720c]">your operation.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                A quick screening surfaces the compliance signals most likely
                to need attention — so you can act on your timeline, not find
                out the hard way.
              </p>

              <button
                type="button"
                onClick={() => {
                  setScreeningStarted(true)

                  document
                    .getElementById('screening')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
              >
                Start Your Screening
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Hero summary panel */}
            <div className="rounded-2xl border border-white/10 bg-[#16274a]/80 p-7 backdrop-blur-sm sm:p-9">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40">
                  Risk Screening
                </span>

                <ShieldAlert className="h-5 w-5 text-[#e8720c]" />
              </div>

              <div className="mt-10">
                <p className="font-serif text-3xl font-medium leading-tight tracking-[-0.025em] text-white">
                  A closer look at the signals that may deserve attention.
                </p>

                <p className="mt-5 text-sm leading-6 text-white/50">
                  The screening uses publicly available regulatory information
                  to identify potential areas worth a closer look.
                </p>
              </div>

              <div className="mt-9 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5c8a68]" />

                  <p className="text-xs leading-5 text-white/45">
                    No obligation. No government rating. No legal advice.
                    Just greater visibility into where attention may be
                    warranted.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Checkpoint line */}
          <div className="relative mt-16 h-8">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-white/15" />

            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((tick) => (
                <span
                  key={tick}
                  className={`h-2 w-px ${
                    tick === 4 ? 'bg-[#e8720c]' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8720c] shadow-[0_0_0_5px_rgba(232,114,12,0.12)]" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SCREENING QUESTIONS                                             */}
      {/* ================================================================ */}

      <section
        id="screening"
        className="bg-[#f7f4ee]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
            {/* Intro */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Quick Screening
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
                Five questions.
                <br />
                A better starting point.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#596372]">
                You don't need to know every answer. In fact, knowing what you
                don't know is useful information too.
              </p>

              <div className="mt-8 rounded-xl border border-[#e2ded3] bg-[#fdfcf9] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#697281]">
                    Progress
                  </span>

                  <span className="font-mono text-[10px] font-semibold text-[#0c1a36]">
                    {answeredCount}/{questions.length}
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e5e1d8]">
                  <div
                    className="h-full rounded-full bg-[#e8720c] transition-all duration-300"
                    style={{
                      width: `${(answeredCount / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs leading-5 text-[#697281]">
                  This is not a compliance score. It simply helps determine
                  which areas may deserve a closer look.
                </p>
              </div>
            </div>

            {/* Question card */}
            <div className="rounded-2xl border border-[#e2ded3] bg-[#fdfcf9] p-7 shadow-[0_18px_50px_rgba(12,26,54,0.04)] sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#697281]">
                  Question {String(currentQuestion + 1).padStart(2, '0')}
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#697281]">
                  {currentQuestion + 1} of {questions.length}
                </span>
              </div>

              <div className="mt-12">
                <h3 className="max-w-3xl font-serif text-3xl font-medium leading-tight tracking-[-0.025em] sm:text-4xl">
                  {questions[currentQuestion]}
                </h3>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => answerQuestion('confident')}
                  className={`min-h-14 rounded-xl border px-5 text-left text-sm font-semibold transition ${
                    currentAnswer === 'confident'
                      ? 'border-[#5c8a68] bg-[#f4f8f4] text-[#35563e]'
                      : 'border-[#d8dde3] bg-white text-[#0c1a36] hover:border-[#aeb7c2]'
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    Confident I know
                    {currentAnswer === 'confident' && (
                      <CheckCircle2 className="h-4 w-4 text-[#5c8a68]" />
                    )}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => answerQuestion('unsure')}
                  className={`min-h-14 rounded-xl border px-5 text-left text-sm font-semibold transition ${
                    currentAnswer === 'unsure'
                      ? 'border-[#e8720c] bg-[#fff7ef] text-[#9a4a08]'
                      : 'border-[#d8dde3] bg-white text-[#0c1a36] hover:border-[#aeb7c2]'
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    Not sure
                    {currentAnswer === 'unsure' && (
                      <ShieldAlert className="h-4 w-4 text-[#e8720c]" />
                    )}
                  </span>
                </button>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#e2ded3] pt-6">
                <button
                  type="button"
                  disabled={currentQuestion === 0}
                  onClick={() =>
                    setCurrentQuestion((value) => Math.max(0, value - 1))
                  }
                  className="text-xs font-semibold text-[#697281] transition hover:text-[#0c1a36] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Previous
                </button>

                <div className="flex gap-1.5">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to question ${index + 1}`}
                      onClick={() => setCurrentQuestion(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentQuestion
                          ? 'w-6 bg-[#e8720c]'
                          : answers[index]
                            ? 'w-1.5 bg-[#5c8a68]'
                            : 'w-1.5 bg-[#d5d9df]'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  disabled={
                    currentQuestion === questions.length - 1 ||
                    !currentAnswer
                  }
                  onClick={() =>
                    setCurrentQuestion((value) =>
                      Math.min(questions.length - 1, value + 1),
                    )
                  }
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0c1a36] transition hover:text-[#e8720c] disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>

              {answeredCount === questions.length && (
                <div className="mt-8 rounded-xl border border-[#e2ded3] bg-white p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#697281]">
                    Screening handoff
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#0c1a36]">
                    {flaggedCount > 0
                      ? `Based on what you told us, ${flaggedCount} of these are worth a closer look — tell us where to send your findings.`
                      : "Sounds like you know your numbers well — let's confirm it with your findings."}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      document
                        .getElementById('screening-form')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#e8720c]"
                  >
                    Continue to your findings
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT WE LOOK FOR                                                */}
      {/* ================================================================ */}

      <section className="border-y border-[#e2e7ec] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e2e7ec]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  What Your Risk Screening Looks For
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

            <div className="grid gap-0 sm:grid-cols-2">
              {screeningAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex gap-4 border-b border-[#e2e7ec] py-6 sm:pr-7"
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

      {/* ================================================================ */}
      {/* HOW SCREENING WORKS                                             */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#dcd8cf]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                How a Screening Works
              </span>

              <span className="h-px w-8 bg-[#dcd8cf]" />
            </div>

            <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
              Simple process.
              <br />
              Clear next steps.
            </h2>
          </div>

          <div className="relative mt-16">
            {/* Desktop connector */}
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#d5d9df] lg:block"
            />

            <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
              {screeningSteps.map((step, index) => (
                <div
                  key={step}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#e8720c] bg-[#f7f4ee]">
                    <span className="font-mono text-[10px] font-semibold text-[#0c1a36]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#0c1a36]">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FORM                                                            */}
      {/* ================================================================ */}

      <section
        id="screening-form"
        className="bg-[#0c1a36]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            {/* Form intro */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Send Your Findings
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Tell us where
                <br />
                to send them.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                Provide the information below so the screening can be connected
                to the right operation and operating region.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-[#16274a] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5c8a68]" />

                  <p className="text-xs leading-5 text-white/45">
                    Your screening is based on publicly available regulatory
                    information only.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-[#fdfcf9] p-7 sm:p-10">
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
                    className="mb-2 block text-xs font-semibold text-[#0c1a36]"
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
                    className="w-full resize-none rounded-xl border border-[#d8dde3] bg-white px-4 py-3 text-sm text-[#0c1a36] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
                    placeholder="Tell us what prompted you to check today."
                  />
                </div>

                <div className="border-t border-[#e2e7ec] pt-6">
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

                  <p className="mt-4 text-[11px] leading-5 text-[#697281]">
                    By submitting this request, you are asking TruckEase to
                    review publicly available regulatory information related to
                    the identifiers and operating region provided above.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Required disclaimer */}
          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-[11px] leading-5 text-white/40">
              This screening reviews publicly available regulatory information
              only. It is not a guarantee of compliance, an official government
              rating, or legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CLOSING CTA                                                      */}
      {/* ================================================================ */}

      <section className="bg-[#fdfcf9]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Get Started
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                Build Compliance
                <br />
                <span className="text-[#e8720c]">With Confidence.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[#596372]">
                Whether you&apos;re looking for greater visibility into your
                compliance position or a more organized way to manage ongoing
                regulatory requirements, TruckEase is ready to help.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById('screening-form')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#16274a]/25 bg-transparent px-6 text-sm font-semibold text-[#16274a] transition hover:border-[#16274a]/50"
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

/* ====================================================================== */
/* FORM COMPONENTS                                                        */
/* ====================================================================== */

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
      <label
        className="mb-2 block text-xs font-semibold text-[#0c1a36]"
      >
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
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#0c1a36] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
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
      <label
        className="mb-2 block text-xs font-semibold text-[#0c1a36]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[#e8720c]">*</span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#0c1a36] outline-none transition focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
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
