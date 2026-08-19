'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Check,
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

const initialForm: FormState = {
  fullName: '',
  email: '',
  phone: '',
  identifier: '',
  region: '',
  cargoType: '',
  haulPattern: '',
  reason: '',
}

export default function RiskScreeningPage() {
  /*
   * STEP 1 = five questions
   * STEP 2 = company details
   */
  const [step, setStep] = useState<1 | 2>(1)

  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null),
  )

  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [form, setForm] = useState<FormState>(initialForm)

  const [submitted, setSubmitted] = useState(false)

  const answeredCount = useMemo(
    () => answers.filter(Boolean).length,
    [answers],
  )

  const flaggedCount = useMemo(
    () => answers.filter((answer) => answer === 'unsure').length,
    [answers],
  )

  const allQuestionsAnswered = answeredCount === questions.length

  function answerQuestion(answer: Exclude<Answer, null>) {
    const updated = [...answers]

    updated[currentQuestion] = answer

    setAnswers(updated)
  }

  function goToNextQuestion() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((value) => value + 1)
      return
    }

    if (allQuestionsAnswered) {
      setStep(2)

      window.setTimeout(() => {
        document
          .getElementById('company-details')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }

  function goToForm() {
    if (!allQuestionsAnswered) return

    setStep(2)

    window.setTimeout(() => {
      document
        .getElementById('company-details')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function editAnswers() {
    setStep(1)

    window.setTimeout(() => {
      document
        .getElementById('your-screening')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  function handleFormChange(
    field: keyof FormState,
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
     * Production OTP / backend submission should be connected here.
     * We intentionally don't fake an OTP being sent.
     */
    setSubmitted(true)
  }

  return (
    <main className="bg-white text-[#0c1a36]">
      {/* ================================================================
          HERO
      ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-20 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
            {/* Left */}
            <div>
              <SectionLabel label="Risk Screening" />

              <h1 className="mt-7 max-w-3xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#172544] sm:text-6xl lg:text-[72px]">
                See the signals
                <br />
                before they
                <br />
                become a
                <br />
                <span className="text-[#e8720c]">problem.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#66748a] sm:text-lg">
                A quick look can reveal what routine operations may not.
                We review publicly available regulatory information and help
                identify areas that may deserve a closer review.
              </p>

              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById('your-screening')
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(232,114,12,0.18)] transition hover:bg-[#f17d1b]"
              >
                Start Your Screening
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Screening Overview */}
            <div className="rounded-[24px] bg-[#101c39] p-7 text-white shadow-[0_25px_60px_rgba(12,26,54,0.12)] sm:p-9 lg:p-10">
              <SectionLabel
                label="Screening Overview"
                dark
              />

              <h2 className="mt-8 font-serif text-3xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-4xl">
                Understand the signals
                <br />
                before they become
                <br />
                surprises.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                The screening is designed to give you a clearer starting
                point. It uses publicly available regulatory information to
                identify potential areas that may deserve additional attention.
              </p>

              <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">
                <HeroStat
                  value="05"
                  label="Questions"
                />

                <HeroStat
                  value="01"
                  label="Screening"
                />

                <HeroStat
                  value="0$"
                  label="Cost"
                />
              </div>

              <div className="mt-8 flex items-start gap-3 border-t border-white/10 pt-6">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#e8720c]" />

                <p className="text-xs leading-5 text-white/45">
                  No obligation. No government rating. No legal advice.
                  Simply greater visibility into where attention may be
                  warranted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SCREENING OVERVIEW / CONTEXT CARD
      ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-20">
          <div className="rounded-[24px] bg-[#101c39] px-7 py-9 text-white sm:px-10 sm:py-11 lg:px-12 lg:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
              <div>
                <SectionLabel
                  label="Before You Begin"
                  dark
                />

                <h2 className="mt-7 max-w-xl font-serif text-3xl font-medium leading-[1.08] tracking-[-0.03em] sm:text-4xl">
                  A better starting point for understanding your compliance
                  position.
                </h2>
              </div>

              <div>
                <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  You don't need to know every answer. In fact, knowing what
                  you don't know is useful information too.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <DarkInfoItem
                    number="01"
                    title="Answer"
                    text="Five practical questions."
                  />

                  <DarkInfoItem
                    number="02"
                    title="Review"
                    text="Understand what may deserve attention."
                  />

                  <DarkInfoItem
                    number="03"
                    title="Continue"
                    text="Tell us where to send your findings."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          YOUR SCREENING
          WHITE / STANDARD CARD
      ================================================================ */}

      <section
        id="your-screening"
        className="scroll-mt-20 bg-[#f7f5f0]"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            {/* Intro */}
            <div>
              <SectionLabel label="Your Screening" />

              <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Five questions.
                <br />
                A better starting point.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#697589]">
                These questions are not a compliance score. They simply help
                frame where a closer look may be useful.
              </p>

              {/* Progress */}
              <div className="mt-8 rounded-[20px] border border-[#e0ddd5] bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7a8493]">
                    Progress
                  </span>

                  <span className="font-mono text-[10px] font-semibold text-[#101c39]">
                    {answeredCount}/{questions.length}
                  </span>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e8e4dc]">
                  <div
                    className="h-full rounded-full bg-[#e8720c] transition-all duration-300"
                    style={{
                      width: `${(answeredCount / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <p className="mt-4 text-xs leading-5 text-[#7a8493]">
                  Answer all five questions to continue to your company
                  details.
                </p>
              </div>

              {/* Current result */}
              {answeredCount > 0 && (
                <div className="mt-4 flex items-center gap-3 rounded-[20px] border border-[#e0ddd5] bg-white px-5 py-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff3e8]">
                    <CheckCircle2 className="h-4 w-4 text-[#e8720c]" />
                  </div>

                  <p className="text-xs leading-5 text-[#697589]">
                    {flaggedCount > 0
                      ? `${flaggedCount} answer${flaggedCount === 1 ? '' : 's'} may deserve a closer look.`
                      : 'Your answers indicate a strong level of confidence.'}
                  </p>
                </div>
              )}
            </div>

            {/* Questions */}
            <div className="rounded-[24px] border border-[#dedbd3] bg-white p-6 shadow-[0_18px_45px_rgba(12,26,54,0.04)] sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#e6e2da] pb-5">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7a8493]">
                    Question {String(currentQuestion + 1).padStart(2, '0')}
                  </p>

                  <p className="mt-1 text-xs text-[#9aa2ad]">
                    {currentQuestion + 1} of {questions.length}
                  </p>
                </div>

                <div className="flex gap-1.5">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Go to question ${index + 1}`}
                      onClick={() => setCurrentQuestion(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentQuestion
                          ? 'w-7 bg-[#e8720c]'
                          : answers[index]
                            ? 'w-1.5 bg-[#5c8a68]'
                            : 'w-1.5 bg-[#d4d8de]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question */}
              <div className="py-9">
                <span className="font-mono text-[10px] font-semibold text-[#e8720c]">
                  {String(currentQuestion + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-4 max-w-3xl font-serif text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-[#101c39] sm:text-4xl">
                  {questions[currentQuestion]}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-[#7a8493]">
                  Choose the answer that best reflects your current
                  understanding.
                </p>
              </div>

              {/* Answers */}
              <div className="grid gap-3 border-t border-[#e6e2da] pt-7 sm:grid-cols-2">
                <AnswerButton
                  selected={answers[currentQuestion] === 'confident'}
                  onClick={() => answerQuestion('confident')}
                  icon={
                    <CheckCircle2 className="h-4 w-4 text-[#5c8a68]" />
                  }
                >
                  Confident I know
                </AnswerButton>

                <AnswerButton
                  selected={answers[currentQuestion] === 'unsure'}
                  warning
                  onClick={() => answerQuestion('unsure')}
                  icon={
                    <ShieldAlert className="h-4 w-4 text-[#e8720c]" />
                  }
                >
                  Not sure
                </AnswerButton>
              </div>

              {/* Navigation */}
              <div className="mt-7 flex flex-col gap-4 border-t border-[#e6e2da] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={currentQuestion === 0}
                  onClick={() =>
                    setCurrentQuestion((value) =>
                      Math.max(0, value - 1),
                    )
                  }
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#7a8493] transition hover:text-[#101c39] disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </button>

                {currentQuestion < questions.length - 1 ? (
                  <button
                    type="button"
                    disabled={!answers[currentQuestion]}
                    onClick={goToNextQuestion}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#101c39] px-5 text-xs font-semibold text-white transition hover:bg-[#172544] disabled:pointer-events-none disabled:opacity-30"
                  >
                    Next Question
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!allQuestionsAnswered}
                    onClick={goToForm}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#e8720c] px-5 text-xs font-semibold text-white transition hover:bg-[#f17d1b] disabled:pointer-events-none disabled:opacity-30"
                  >
                    Continue to Company Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WHAT WE LOOK FOR
      ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <SectionLabel label="What We Look For" />

              <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Signals worth
                <br />
                understanding.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#697589]">
                The screening is designed to surface potential areas of
                attention from publicly available regulatory information.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {screeningAreas.map((area, index) => (
                <div
                  key={area}
                  className={`flex gap-4 border-[#e4e1da] py-6 ${
                    index < 2 ? 'border-b' : ''
                  } ${
                    index % 2 === 0
                      ? 'sm:border-r sm:pr-8'
                      : 'sm:pl-8'
                  }`}
                >
                  <span className="font-mono text-[9px] font-semibold text-[#e8720c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <p className="text-sm leading-6 text-[#596579]">
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

      <section className="bg-[#f7f5f0]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="text-center">
            <SectionLabel
              label="How a Screening Works"
              centered
            />

            <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Simple process.
              <br />
              Clear next steps.
            </h2>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-[#d8d4cb] lg:block"
            />

            <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
              {screeningSteps.map((item, index) => (
                <div
                  key={item}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e8720c] bg-[#f7f5f0]">
                    <span className="font-mono text-[10px] font-semibold text-[#101c39]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#101c39]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          COMPANY DETAILS
          DARK ROUNDED CARD
      ================================================================ */}

      <section
        id="company-details"
        className="scroll-mt-20 bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="rounded-[24px] bg-[#101c39] p-6 sm:p-9 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              {/* Intro */}
              <div className="text-white">
                <SectionLabel
                  label="Company Details"
                  dark
                />

                <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                  Tell us where
                  <br />
                  to send your
                  <br />
                  findings.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
                  Provide the information below so the screening can be
                  connected to the right operation and operating region.
                </p>

                <button
                  type="button"
                  onClick={editAnswers}
                  className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-white/70 transition hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Edit my answers
                </button>

                {/* Answer summary */}
                <div className="mt-8 rounded-[18px] border border-white/10 bg-white/[0.035] p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Your Screening
                    </span>

                    <span className="text-[10px] text-white/35">
                      {flaggedCount} flagged
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    {answers.map((answer, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${
                            answer === 'unsure'
                              ? 'bg-[#e8720c]/15'
                              : 'bg-[#5c8a68]/15'
                          }`}
                        >
                          {answer === 'unsure' ? (
                            <ShieldAlert className="h-3 w-3 text-[#e8720c]" />
                          ) : (
                            <Check className="h-3 w-3 text-[#5c8a68]" />
                          )}
                        </div>

                        <p className="truncate text-[11px] text-white/50">
                          Question {String(index + 1).padStart(2, '0')}
                          {' — '}
                          {answer === 'unsure'
                            ? 'Not sure'
                            : 'Confident I know'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#5c8a68]" />

                  <p className="text-xs leading-5 text-white/40">
                    Your screening is based on publicly available regulatory
                    information only.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="rounded-[20px] bg-white p-6 sm:p-8 lg:p-9">
                {submitted ? (
                  <SuccessState />
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
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
                        className="mb-2 block text-xs font-semibold text-[#101c39]"
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
                          handleFormChange(
                            'reason',
                            event.target.value,
                          )
                        }
                        className="w-full resize-none rounded-xl border border-[#d8dde3] bg-white px-4 py-3 text-sm text-[#101c39] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#101c39] focus:ring-2 focus:ring-[#101c39]/10"
                        placeholder="Tell us what prompted you to check today."
                      />
                    </div>

                    <div className="border-t border-[#e4e1da] pt-6">
                      <button
                        type="submit"
                        disabled={
                          !form.fullName ||
                          !form.email ||
                          !form.identifier ||
                          !form.region
                        }
                        className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b] disabled:pointer-events-none disabled:opacity-40"
                      >
                        Request My Risk Screening
                        <ArrowRight className="h-4 w-4" />
                      </button>

                      <p className="mt-4 text-[11px] leading-5 text-[#697281]">
                        By submitting this request, you are asking TruckEase
                        to review publicly available regulatory information
                        related to the identifiers and operating region
                        provided above.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-[11px] leading-5 text-white/35">
                This screening reviews publicly available regulatory
                information only. It is not a guarantee of compliance, an
                official government rating, or legal advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          GET STARTED
          DARK ROUNDED CARD
      ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-4 sm:px-8 lg:px-10 lg:pb-20">
          <div className="rounded-[24px] bg-[#101c39] px-7 py-10 text-white sm:px-10 lg:px-12 lg:py-12">
            <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <SectionLabel
                  label="Get Started"
                  dark
                />

                <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                  Build compliance
                  <br />
                  <span className="text-[#e8720c]">
                    with confidence.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
                  Whether you're looking for greater visibility into your
                  compliance position or a more organized way to manage ongoing
                  regulatory requirements, TruckEase is ready to help.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    document
                      .getElementById('company-details')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                  }}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </button>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 bg-transparent px-6 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Contact Our Team
                </Link>
              </div>
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

function SectionLabel({
  label,
  dark = false,
  centered = false,
}: {
  label: string
  dark?: boolean
  centered?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 ${
        centered ? 'justify-center' : ''
      }`}
    >
      <span
        className={`h-px w-8 ${
          dark ? 'bg-white/25' : 'bg-[#d8d4cb]'
        }`}
      />

      <span
        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.2em] ${
          dark ? 'text-[#e8720c]' : 'text-[#e8720c]'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

function HeroStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div>
      <p className="font-serif text-2xl font-medium text-white">
        {value}
      </p>

      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-white/35">
        {label}
      </p>
    </div>
  )
}

function DarkInfoItem({
  number,
  title,
  text,
}: {
  number: string
  title: string
  text: string
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-white/[0.035] p-4">
      <span className="font-mono text-[9px] font-semibold text-[#e8720c]">
        {number}
      </span>

      <p className="mt-3 text-xs font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-5 text-white/40">
        {text}
      </p>
    </div>
  )
}

function AnswerButton({
  children,
  selected,
  warning = false,
  onClick,
  icon,
}: {
  children: React.ReactNode
  selected: boolean
  warning?: boolean
  onClick: () => void
  icon: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-14 rounded-xl border px-5 text-left text-sm font-semibold transition ${
        selected
          ? warning
            ? 'border-[#e8720c] bg-[#fff6ed] text-[#9a4a08]'
            : 'border-[#5c8a68] bg-[#f3f8f4] text-[#35563e]'
          : 'border-[#d8dde3] bg-white text-[#101c39] hover:border-[#aeb7c2]'
      }`}
    >
      <span className="flex items-center justify-between gap-3">
        {children}

        {selected && icon}
      </span>
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
      <label className="mb-2 block text-xs font-semibold text-[#101c39]">
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
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#101c39] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#101c39] focus:ring-2 focus:ring-[#101c39]/10"
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
      <label className="mb-2 block text-xs font-semibold text-[#101c39]">
        {label}

        {required && (
          <span className="ml-1 text-[#e8720c]">*</span>
        )}
      </label>

      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#101c39] outline-none transition focus:border-[#101c39] focus:ring-2 focus:ring-[#101c39]/10"
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

function SuccessState() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eef7f0]">
        <CheckCircle2 className="h-7 w-7 text-[#5c8a68]" />
      </div>

      <h3 className="mt-7 font-serif text-3xl font-medium tracking-[-0.03em] text-[#101c39]">
        Request received.
      </h3>

      <p className="mt-4 max-w-md text-sm leading-7 text-[#697589]">
        Your risk screening request has been captured. The production
        workflow can now connect this step to your OTP verification and
        screening service.
      </p>
    </div>
  )
}
