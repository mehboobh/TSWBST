'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
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
  const [answers, setAnswers] = useState<Answer[]>(
    Array(questions.length).fill(null),
  )

  const [step, setStep] = useState<'questions' | 'form'>('questions')

  const [form, setForm] = useState<FormState>(initialForm)

  const [otpRequested, setOtpRequested] = useState(false)

  const answeredCount = answers.filter(Boolean).length

  const flaggedCount = answers.filter(
    (answer) => answer === 'unsure',
  ).length

  /*
   * -----------------------------------------------------------------------
   * ANSWERS
   * -----------------------------------------------------------------------
   *
   * All five questions live on one screen.
   *
   * On the first pass:
   * - answering question 5 automatically opens the company form.
   *
   * When the user comes back through "Edit my answers":
   * - changing any answer automatically returns them to the form.
   */
  function handleAnswer(
    questionIndex: number,
    answer: Exclude<Answer, null>,
  ) {
    const updatedAnswers = [...answers]
    updatedAnswers[questionIndex] = answer

    setAnswers(updatedAnswers)

    const allAnswered = updatedAnswers.every(Boolean)

    if (allAnswered) {
      /*
       * Small delay gives the selected state a chance to visibly register
       * before moving to the next step.
       */
      window.setTimeout(() => {
        setStep('form')
        window.setTimeout(() => {
          document
            .getElementById('company-details')
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }, 180)
    }
  }

  /*
   * -----------------------------------------------------------------------
   * EDIT ANSWERS
   * -----------------------------------------------------------------------
   */
  function editAnswers() {
    setStep('questions')

    window.setTimeout(() => {
      document
        .getElementById('your-screening')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  /*
   * -----------------------------------------------------------------------
   * FORM
   * -----------------------------------------------------------------------
   */
  function handleFormChange(
    field: keyof FormState,
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
     * Connect this to the production OTP service before launch.
     */
    setOtpRequested(true)
  }

  const canSubmitForm =
    Boolean(form.fullName) &&
    Boolean(form.email) &&
    Boolean(form.identifier) &&
    Boolean(form.region)

  return (
    <main className="bg-[#f7f4ee] text-[#0c1a36]">
      {/* ================================================================= */}
      {/* HERO                                                             */}
      {/* ================================================================= */}

      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Left */}
            <div>
              <Eyebrow label="Risk Screening" />

              <h1 className="mt-7 max-w-4xl font-serif text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-[#0c1a36] sm:text-6xl lg:text-7xl">
                See the signals
                <br />
                before they become
                <br />
                <span className="text-[#e8720c]">surprises.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#596372] sm:text-lg">
                A quick look at publicly available regulatory information can
                help identify areas that may deserve a closer review before
                they become operational problems.
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
                className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(232,114,12,0.18)] transition hover:bg-[#f17d1b]"
              >
                Start Your Screening
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Right scope card */}
            <div className="relative">
              <div className="rounded-[24px] bg-[#101d3a] p-8 shadow-[0_25px_70px_rgba(12,26,54,0.12)] sm:p-10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#263553]">
                    <ShieldCheck className="h-5 w-5 text-[#e8720c]" />
                  </div>

                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#9da8bc]">
                    Scope
                  </span>
                </div>

                <h2 className="mt-8 font-serif text-3xl font-medium leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                  Operational
                  <br />
                  Confidence
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-6 text-[#9da8bc] sm:text-base">
                  TruckEase Solutions Inc. provides independent compliance
                  software and administrative workflow support for commercial
                  trucking operations.
                </p>

                <div className="mt-8 h-1 w-full rounded-full bg-[#e8720c]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* SCREENING OVERVIEW                                                */}
      {/* ================================================================= */}

      <section
        id="screening-overview"
        className="bg-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="rounded-[24px] bg-[#101d3a] p-7 shadow-[0_25px_70px_rgba(12,26,54,0.08)] sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20">
              <div>
                <Eyebrow
                  label="Screening Overview"
                  dark
                />

                <h2 className="mt-7 max-w-xl font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl">
                  Understand the signals
                  <br />
                  before they become
                  <br />
                  surprises.
                </h2>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-[#9da8bc] sm:text-base">
                The screening is designed to give you a clearer starting point.
                It uses publicly available regulatory information to identify
                potential areas that may deserve additional attention.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <StatCard
                value="05"
                label="Questions"
              />

              <StatCard
                value="01"
                label="Screening"
              />

              <StatCard
                value={String(flaggedCount).padStart(2, '0')}
                label="Areas flagged"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* YOUR SCREENING                                                    */}
      {/* ================================================================= */}

      {step === 'questions' && (
        <section
          id="your-screening"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
            <div className="rounded-[24px] bg-[#101d3a] p-6 shadow-[0_25px_70px_rgba(12,26,54,0.10)] sm:p-9 lg:p-12">
              {/* Header */}
              <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
                <div>
                  <Eyebrow
                    label="Your Screening"
                    dark
                  />

                  <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl">
                    Five questions.
                    <br />
                    A better
                    <br />
                    starting point.
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-6 text-[#9da8bc]">
                    You do not need to know every answer. Knowing what you do
                    not know is useful information too.
                  </p>

                  <div className="mt-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#71809b]">
                        Progress
                      </span>

                      <span className="font-mono text-[10px] font-semibold text-white">
                        {answeredCount}/05
                      </span>
                    </div>

                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#e8720c] transition-all duration-300"
                        style={{
                          width: `${(answeredCount / questions.length) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Questions */}
                <div className="space-y-3">
                  {questions.map((question, index) => {
                    const answer = answers[index]

                    return (
                      <div
                        key={question}
                        className={`rounded-[16px] border p-5 transition ${
                          answer
                            ? 'border-white/15 bg-[#172644]'
                            : 'border-white/10 bg-[#131f3b]'
                        }`}
                      >
                        <div className="flex gap-4">
                          <span className="mt-0.5 font-mono text-[9px] text-[#e8720c]">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium leading-6 text-white">
                              {question}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                              <AnswerButton
                                selected={answer === 'confident'}
                                onClick={() =>
                                  handleAnswer(index, 'confident')
                                }
                                icon={
                                  answer === 'confident' ? (
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                  ) : null
                                }
                              >
                                Confident I know
                              </AnswerButton>

                              <AnswerButton
                                selected={answer === 'unsure'}
                                warning
                                onClick={() =>
                                  handleAnswer(index, 'unsure')
                                }
                                icon={
                                  answer === 'unsure' ? (
                                    <ShieldAlert className="h-3.5 w-3.5" />
                                  ) : null
                                }
                              >
                                Not sure
                              </AnswerButton>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-5 text-[#71809b]">
                  This is not a compliance score. It simply helps identify
                  where a closer review may be useful.
                </p>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#71809b]">
                    {answeredCount === questions.length
                      ? 'Screening complete'
                      : 'Answer all five'}
                  </span>

                  {answeredCount === questions.length && (
                    <CheckCircle2 className="h-4 w-4 text-[#5c8a68]" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================= */}
      {/* COMPANY DETAILS                                                   */}
      {/* ================================================================= */}

      {step === 'form' && (
        <section
          id="company-details"
          className="bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="rounded-[24px] bg-[#101d3a] p-6 shadow-[0_25px_70px_rgba(12,26,54,0.10)] sm:p-9 lg:p-12">
              <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
                {/* Intro */}
                <div>
                  <Eyebrow
                    label="Company Details"
                    dark
                  />

                  <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl">
                    Tell us where
                    <br />
                    to send your
                    <br />
                    findings.
                  </h2>

                  <p className="mt-6 max-w-md text-sm leading-6 text-[#9da8bc]">
                    Provide the information below so the screening can be
                    connected to the right operation and operating region.
                  </p>

                  {/* Screening result summary */}
                  <div className="mt-8 rounded-[16px] border border-white/10 bg-[#172644] p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#71809b]">
                        Your Screening
                      </span>

                      <span className="font-mono text-[10px] text-white">
                        {flaggedCount}/05 flagged
                      </span>
                    </div>

                    <div className="mt-4 h-px bg-white/10" />

                    <p className="mt-4 text-xs leading-5 text-[#9da8bc]">
                      Your responses are saved. You can edit them at any time
                      before submitting your company details.
                    </p>

                    <button
                      type="button"
                      onClick={editAnswers}
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#e8720c] transition hover:text-[#f17d1b]"
                    >
                      Edit my answers
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <div className="rounded-[20px] bg-[#fdfcf9] p-6 sm:p-8">
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
                          handleFormChange(
                            'reason',
                            event.target.value,
                          )
                        }
                        placeholder="Tell us what prompted you to check today."
                        className="w-full resize-none rounded-xl border border-[#d8dde3] bg-white px-4 py-3 text-sm text-[#0c1a36] outline-none transition placeholder:text-[#9aa2ad] focus:border-[#16274a] focus:ring-2 focus:ring-[#16274a]/10"
                      />
                    </div>

                    <div className="border-t border-[#e2e7ec] pt-6">
                      <button
                        type="submit"
                        disabled={!canSubmitForm}
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
                            OTP verification is required before the screening
                            can be submitted. Connect this step to your
                            production OTP service before launch.
                          </p>
                        </div>
                      )}

                      <p className="mt-4 text-[11px] leading-5 text-[#697281]">
                        By submitting this request, you are asking TruckEase to
                        review publicly available regulatory information
                        related to the identifiers and operating region
                        provided above.
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-[11px] leading-5 text-[#71809b]">
                  This screening reviews publicly available regulatory
                  information only. It is not a guarantee of compliance, an
                  official government rating, or legal advice.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================================================================= */}
      {/* WHAT WE LOOK FOR                                                  */}
      {/* ================================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <Eyebrow label="What We Look For" />

              <h2 className="mt-7 font-serif text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Signals worth
                <br />
                understanding.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#596372]">
                The screening is designed to surface potential areas of
                attention from publicly available regulatory information.
              </p>
            </div>

            <div className="grid sm:grid-cols-2">
              {screeningAreas.map((area, index) => (
                <div
                  key={area}
                  className="border-b border-[#e2e7ec] py-6 first:pt-0 sm:px-6 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0"
                >
                  <div className="flex gap-4">
                    <span className="font-mono text-[9px] text-[#e8720c]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <p className="text-sm leading-6 text-[#596372]">
                      {area}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* HOW IT WORKS                                                      */}
      {/* ================================================================= */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="text-center">
            <Eyebrow
              label="How a Screening Works"
              centered
            />

            <h2 className="mt-7 font-serif text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
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
              {screeningSteps.map((item, index) => (
                <div
                  key={item}
                  className="relative text-center"
                >
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#e8720c] bg-[#f7f4ee]">
                    <span className="font-mono text-[10px] font-semibold text-[#0c1a36]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-semibold text-[#0c1a36]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* FINAL CTA                                                         */}
      {/* ================================================================= */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow label="Get Started" />

              <h2 className="mt-7 font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                Build compliance
                <br />
                <span className="text-[#e8720c]">
                  with confidence.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[#596372]">
                Greater visibility starts with knowing where to look. Begin
                your risk screening and get a clearer starting point for your
                operation.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  setStep('questions')

                  window.setTimeout(() => {
                    document
                      .getElementById('your-screening')
                      ?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                  }, 50)
                }}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(232,114,12,0.15)] transition hover:bg-[#f17d1b]"
              >
                Start a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#16274a]/20 bg-white px-6 text-sm font-semibold text-[#16274a] transition hover:border-[#16274a]/40"
              >
                Contact Our Team
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ====================================================================== */
/* EYEBROW                                                                */
/* ====================================================================== */

function Eyebrow({
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
          dark ? 'bg-white/20' : 'bg-[#d8d3c8]'
        }`}
      />

      <span
        className={`font-mono text-[9px] font-medium uppercase tracking-[0.2em] ${
          dark ? 'text-[#71809b]' : 'text-[#697281]'
        }`}
      >
        {label}
      </span>
    </div>
  )
}

/* ====================================================================== */
/* STAT CARD                                                              */
/* ====================================================================== */

function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="rounded-[16px] border border-white/10 bg-[#172644] p-6">
      <div className="font-serif text-4xl font-medium tracking-[-0.03em] text-white">
        {value}
      </div>

      <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#71809b]">
        {label}
      </div>
    </div>
  )
}

/* ====================================================================== */
/* ANSWER BUTTON                                                          */
/* ====================================================================== */

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
  icon?: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-9 items-center gap-2 rounded-lg border px-3.5 text-[10px] font-semibold transition ${
        selected
          ? warning
            ? 'border-[#e8720c]/60 bg-[#e8720c]/10 text-[#f18a32]'
            : 'border-[#5c8a68]/60 bg-[#5c8a68]/10 text-[#91b99b]'
          : 'border-white/10 bg-transparent text-[#9da8bc] hover:border-white/20 hover:text-white'
      }`}
    >
      {children}

      {icon}
    </button>
  )
}

/* ====================================================================== */
/* FORM FIELD                                                             */
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

/* ====================================================================== */
/* SELECT FIELD                                                           */
/* ====================================================================== */

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
