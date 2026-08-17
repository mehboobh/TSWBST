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

  const [screeningStarted, setScreeningStarted] = useState(false)
  const [showCompanyDetails, setShowCompanyDetails] = useState(false)

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

  function answerQuestion(
    questionIndex: number,
    answer: Exclude<Answer, null>,
  ) {
    const updated = [...answers]
    updated[questionIndex] = answer
    setAnswers(updated)

    if (questionIndex === questions.length - 1) {
      setTimeout(() => {
        setShowCompanyDetails(true)

        document
          .getElementById('company-details')
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 220)
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
    setOtpRequested(true)
  }

  function startScreening() {
    setScreeningStarted(true)

    document
      .getElementById('your-screening')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="bg-white text-[#0c1a36]">
      {/* ================================================================ */}
      {/* HERO                                                             */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#f3f0e9]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-15rem] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#f7f5f1]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-end gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Risk Screening
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.045em] text-[#0c1a36] sm:text-6xl lg:text-7xl">
                A quick look can reveal what routine operations may not.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-[#596372] sm:text-lg">
                We look at publicly available regulatory information and help
                identify areas that may deserve a closer review.
              </p>

              <button
                type="button"
                onClick={startScreening}
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0c1a36] px-6 text-sm font-semibold text-white transition hover:bg-[#16274a]"
              >
                Start Your Screening
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="border border-[#dfe3e8] bg-[#f7f4ee] p-7 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#697281]">
                  Screening Overview
                </span>

                <ShieldCheck className="h-5 w-5 text-[#e8720c]" />
              </div>

              <div className="mt-8 grid grid-cols-3 divide-x divide-[#d9d6ce]">
                <OverviewStat value="05" label="Questions" />
                <OverviewStat value="01" label="Screening" />
                <OverviewStat value="0$" label="Cost" />
              </div>

              <div className="mt-8 border-t border-[#d9d6ce] pt-6">
                <p className="text-sm leading-6 text-[#596372]">
                  No obligation. No government rating. No legal advice. Just
                  greater visibility into where attention may be warranted.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-16 h-8">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#dfe3e8]" />

            <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between">
              {Array.from({ length: 9 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-px ${
                    index === 4 ? 'bg-[#e8720c]' : 'bg-[#cbd1d8]'
                  }`}
                />
              ))}
            </div>

            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8720c] shadow-[0_0_0_5px_rgba(232,114,12,0.10)]" />
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* SCREENING OVERVIEW                                               */}
      {/* ================================================================ */}

      <section className="bg-[#0c1a36] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Screening Overview
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
                Understand the signals
                <br />
                before they become surprises.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              The screening is designed to give you a clearer starting point.
              It uses publicly available regulatory information to identify
              potential areas that may deserve additional attention.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* YOUR SCREENING                                                   */}
      {/* ================================================================ */}

      <section
        id="your-screening"
        className="scroll-mt-20 bg-[#0c1a36] pb-20 text-white sm:pb-24 lg:pb-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="border border-white/10 bg-[#111f3a] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                    Your Screening
                  </span>

                  <span className="font-mono text-[10px] font-semibold text-white/55">
                    {String(answeredCount).padStart(2, '0')}/05
                  </span>
                </div>

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#e8720c] transition-all duration-300"
                    style={{
                      width: `${(answeredCount / questions.length) * 100}%`,
                    }}
                  />
                </div>

                <h2 className="mt-9 font-serif text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                  Five questions.
                  <br />
                  A better starting point.
                </h2>

                <p className="mt-5 text-sm leading-6 text-white/50">
                  You do not need to know every answer. Knowing what you do not
                  know is useful information too.
                </p>
              </div>

              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
                    Answer all five
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
                    No score assigned
                  </span>
                </div>

                <div className="space-y-3">
                  {questions.map((question, index) => {
                    const answer = answers[index]

                    return (
                      <div
                        key={question}
                        className={`border p-5 transition ${
                          answer
                            ? 'border-white/15 bg-white/[0.045]'
                            : 'border-white/10 bg-white/[0.02]'
                        }`}
                      >
                        <div className="flex gap-4">
                          <span
                            className={`mt-0.5 shrink-0 font-mono text-[9px] ${
                              answer
                                ? 'text-[#e8720c]'
                                : 'text-white/30'
                            }`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="text-sm leading-6 text-white/80 sm:text-[15px]">
                              {question}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <AnswerButton
                                active={answer === 'confident'}
                                onClick={() =>
                                  answerQuestion(index, 'confident')
                                }
                                variant="confident"
                              >
                                Confident I know
                              </AnswerButton>

                              <AnswerButton
                                active={answer === 'unsure'}
                                onClick={() =>
                                  answerQuestion(index, 'unsure')
                                }
                                variant="unsure"
                              >
                                Not sure
                              </AnswerButton>

                              {answer && (
                                <span className="ml-auto inline-flex items-center gap-1.5 px-2 text-[10px] font-medium text-white/35">
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                  Answered
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {answeredCount === questions.length && (
                  <div className="mt-6 flex flex-col gap-5 border border-[#e8720c]/20 bg-[#e8720c]/[0.07] p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#e8720c]">
                        Screening complete
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {flaggedCount > 0
                          ? `${flaggedCount} answer${
                              flaggedCount === 1 ? '' : 's'
                            } may be worth a closer look.`
                          : 'You appear confident across all five questions.'}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setShowCompanyDetails(true)

                        document
                          .getElementById('company-details')
                          ?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          })
                      }}
                      className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#e8720c] px-5 text-xs font-semibold text-white transition hover:bg-[#f17d1b]"
                    >
                      Continue to Company Details
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHAT WE LOOK FOR                                                 */}
      {/* ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dfe3e8]" />

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

            <div className="grid border-t border-[#e2e7ec] sm:grid-cols-2 sm:border-t-0">
              {screeningAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex gap-4 border-b border-[#e2e7ec] py-6 sm:pr-8"
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
      {/* HOW SCREENING WORKS                                              */}
      {/* ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-24">
          <div className="border-t border-[#e2e7ec] pt-16 lg:pt-20">
            <div className="text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#dfe3e8]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  How a Screening Works
                </span>

                <span className="h-px w-8 bg-[#dfe3e8]" />
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
                Simple process.
                <br />
                Clear next steps.
              </h2>
            </div>

            <div className="relative mt-14">
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
                    <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#e8720c] bg-white">
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
        </div>
      </section>

      {/* ================================================================ */}
      {/* COMPANY DETAILS                                                  */}
      {/* ================================================================ */}

      <section
        id="company-details"
        className="scroll-mt-20 bg-[#0c1a36] text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Company Details
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
                Tell us where
                <br />
                to send your findings.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                Provide the information below so the screening can be connected
                to the right operation and operating region.
              </p>

              <div className="mt-8 border border-white/10 bg-[#111f3a] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#5c8a68]" />

                  <p className="text-xs leading-5 text-white/45">
                    Your screening is based on publicly available regulatory
                    information only.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-[#dfe3e8] bg-white p-7 sm:p-10">
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
                    <div className="mt-4 border border-[#e8720c]/20 bg-[#fff7ef] p-4">
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dfe3e8]" />

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
/* SMALL UI COMPONENTS                                                    */
/* ====================================================================== */

function OverviewStat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="px-4 first:pl-0 last:pr-0">
      <div className="font-serif text-2xl font-medium tracking-[-0.025em] text-[#0c1a36]">
        {value}
      </div>

      <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.12em] text-[#697281]">
        {label}
      </div>
    </div>
  )
}

function AnswerButton({
  active,
  onClick,
  variant,
  children,
}: {
  active: boolean
  onClick: () => void
  variant: 'confident' | 'unsure'
  children: React.ReactNode
}) {
  const activeClasses =
    variant === 'confident'
      ? 'border-[#5c8a68] bg-[#f4f8f4] text-[#35563e]'
      : 'border-[#e8720c] bg-[#fff7ef] text-[#9a4a08]'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-10 rounded-lg border px-4 text-xs font-semibold transition ${
        active
          ? activeClasses
          : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-white/20 hover:text-white'
      }`}
    >
      <span className="flex items-center gap-2">
        {children}

        {active &&
          (variant === 'confident' ? (
            <CheckCircle2 className="h-3.5 w-3.5" />
          ) : (
            <ShieldAlert className="h-3.5 w-3.5" />
          ))}
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
        className="h-12 w-full rounded-xl border border-[#d8dde3] bg-white px-4 text-sm text-[#0c1a36] outline-none transition focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
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
