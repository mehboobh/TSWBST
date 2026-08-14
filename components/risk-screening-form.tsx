// components/risk-screening-form.tsx
'use client'

import React, { useState } from 'react'
import { ShieldCheck, ArrowRight, ArrowLeft, Mail, CheckCircle2, Lock } from 'lucide-react'

const questions = [
  { id: 1, text: 'Which safety category is quietly closest to trouble?' },
  { id: 2, text: 'What would a broker see first on your DOT number?' },
  { id: 3, text: 'Do you actually know why your score moved — or just that it did?' },
  { id: 4, text: 'How many loads or contracts have you quietly lost, without anyone telling you why?' },
  { id: 5, text: 'Same issue, two different trucks, months apart — would you catch the connection?' },
]

const cargoOptions = [
  'General Freight',
  'Refrigerated Goods',
  'Flatbed / Specialized',
  'Hazardous Materials (Hazmat)',
  'Auto Hauler',
  'Tanker',
  'Intermodal Container',
  'Other / Mixed Cargo',
]

const haulOptions = [
  'Interstate (US Cross-State)',
  'Intrastate (Local / In-State)',
  'Cross-Border (US & Canada)',
  'Canadian Provincial / Interprovincial',
]

export function RiskScreeningForm() {
  const [step, setStep] = useState<1 | 2>(1)

  // Screen 1 State
  const [answers, setAnswers] = useState<Record<number, 'confident' | 'not_sure'>>({})

  // Screen 2 Form Fields
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dotNumber, setDotNumber] = useState('')
  const [operatingRegion, setOperatingRegion] = useState('US Only')
  const [cargoType, setCargoType] = useState('')
  const [haulPattern, setHaulPattern] = useState('')
  const [reasonText, setReasonText] = useState('')

  // OTP Verification State
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [otpError, setOtpError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const answeredCount = Object.keys(answers).length
  const allAnswered = answeredCount === questions.length
  const notSureCount = Object.values(answers).filter((v) => v === 'not_sure').length

  const handleAnswerSelect = (qId: number, value: 'confident' | 'not_sure') => {
    setAnswers((prev) => ({ ...prev, [qId]: value }))
  }

  const getHandoffText = () => {
    if (notSureCount > 0) {
      return `Based on what you told us, ${notSureCount} of these ${
        notSureCount === 1 ? 'is' : 'are'
      } worth a closer look — tell us where to send your findings.`
    }
    return "Sounds like you know your numbers well — let's confirm it with your findings."
  }

  const handleSendOtp = () => {
    if (!email || !email.includes('@')) {
      alert('Please enter a valid work email address first.')
      return
    }
    setOtpSent(true)
    setOtpError('')
  }

  const handleVerifyOtp = () => {
    if (otpCode.trim().length === 6) {
      setIsEmailVerified(true)
      setOtpError('')
    } else {
      setOtpError('Please enter a valid 6-digit verification code.')
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmailVerified) return
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm text-center space-y-4">
        <div className="size-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Risk Screening Request Sent!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We verified your email (<span className="font-semibold text-foreground">{email}</span>) and initiated public record review for USDOT / MC / NSC / CVOR <span className="font-semibold text-foreground">#{dotNumber}</span>.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
      {/* Card Header */}
      <div className="flex items-center gap-3 border-b border-border pb-5">
        <div className="flex size-10 items-center justify-center rounded-xl bg-slate-900 text-white">
          <ShieldCheck className="size-5" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Free risk screening</h2>
          <p className="text-xs text-muted-foreground">Takes about 3 minutes</p>
        </div>
      </div>

      {/* SCREEN 1: 5 Questions */}
      {step === 1 && (
        <div className="mt-6 space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Progress ({answeredCount}/5)</span>
            <div className="flex gap-1">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className={`h-1.5 w-6 rounded-full transition-colors ${
                    answers[q.id] ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((q, idx) => {
              const current = answers[q.id]
              return (
                <div key={q.id} className="rounded-xl border border-border bg-muted/30 p-4 space-y-3">
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    {idx + 1}. {q.text}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAnswerSelect(q.id, 'confident')}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                        current === 'confident'
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-card text-foreground hover:bg-muted'
                      }`}
                    >
                      Confident I know
                    </button>
                    <button
                      type="button"
                      onClick={() => handleAnswerSelect(q.id, 'not_sure')}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-all ${
                        current === 'not_sure'
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-border bg-card text-foreground hover:bg-muted'
                      }`}
                    >
                      Not sure
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {allAnswered && (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs font-medium text-foreground">
              {getHandoffText()}
            </div>
          )}

          <button
            type="button"
            disabled={!allAnswered}
            onClick={() => setStep(2)}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            Continue
            <ArrowRight className="size-4" />
          </button>
        </div>
      )}

      {/* SCREEN 2: Details & OTP */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-3 text-xs font-medium text-foreground flex items-center justify-between gap-2">
            <span>{getHandoffText()}</span>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-xs font-bold text-primary hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <ArrowLeft className="size-3" /> Edit
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-foreground">Full name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-foreground">Phone <span className="text-muted-foreground">(optional)</span></label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground">Work email *</label>
            <div className="mt-1.5 flex gap-2">
              <input
                type="email"
                required
                disabled={isEmailVerified}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none disabled:bg-muted"
              />
              {!isEmailVerified && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="px-3 py-2 bg-slate-900 text-white font-semibold text-xs rounded-lg shrink-0 hover:bg-slate-800 transition-colors"
                >
                  {otpSent ? 'Resend' : 'Verify'}
                </button>
              )}
            </div>

            {otpSent && !isEmailVerified && (
              <div className="mt-3 p-3 rounded-lg border border-border bg-muted/40 space-y-2">
                <p className="text-xs font-medium text-foreground flex items-center gap-1.5">
                  <Mail className="size-3.5 text-primary" /> Enter 6-digit code sent to email:
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="123456"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    className="block w-28 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs text-center font-mono text-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleVerifyOtp}
                    className="px-3 py-1.5 bg-primary text-primary-foreground font-semibold text-xs rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Confirm
                  </button>
                </div>
                {otpError && <p className="text-xs text-red-600">{otpError}</p>}
              </div>
            )}

            {isEmailVerified && (
              <p className="mt-1.5 text-xs font-medium text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="size-3.5" /> Email verified
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-foreground">USDOT / MC / NSC / CVOR number *</label>
              <input
                type="text"
                required
                value={dotNumber}
                onChange={(e) => setDotNumber(e.target.value)}
                placeholder="e.g. 1234567"
                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground">Operating region *</label>
              <select
                required
                value={operatingRegion}
                onChange={(e) => setOperatingRegion(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="US Only">US Only</option>
                <option value="Canada Only">Canada Only</option>
                <option value="Cross-Border">Cross-Border</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-foreground">Primary cargo type <span className="text-muted-foreground">(optional)</span></label>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="">Select cargo...</option>
                {cargoOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-foreground">Typical haul pattern <span className="text-muted-foreground">(optional)</span></label>
              <select
                value={haulPattern}
                onChange={(e) => setHaulPattern(e.target.value)}
                className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="">Select pattern...</option>
                {haulOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-foreground">What's the real reason you're checking today? <span className="text-muted-foreground">(optional)</span></label>
            <textarea
              rows={2}
              value={reasonText}
              onChange={(e) => setReasonText(e.target.value)}
              placeholder="Upcoming audit, recent violations, new authority, etc."
              className="mt-1.5 block w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div className="p-3 rounded-lg border border-border bg-muted/20 text-[11px] text-muted-foreground leading-relaxed">
            This screening reviews publicly available regulatory information only. It is not a guarantee of compliance, an official government rating, or legal advice.
          </div>

          <button
            type="submit"
            disabled={!isEmailVerified}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            <Lock className="size-4" />
            Send my risk screening request
          </button>
        </form>
      )}
    </div>
  )
}

export default RiskScreeningForm
