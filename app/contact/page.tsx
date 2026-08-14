// app/contact/page.tsx
'use client'

import React, { useState } from 'react'
import { Mail, Clock, MapPin, ShieldCheck, Check, Send, Sparkles } from 'lucide-react'

const inquiryTopics = [
  'CSA / BASIC scores',
  'Driver qualification files',
  'Hours of Service compliance',
  'Drug & alcohol program review',
  'Vehicle maintenance records',
  'Risk Screening & Audits',
  'IFTA & Highway Use Tax filing',
  'Platform / pricing question',
  'New authority setup',
  'General Support',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-white min-h-screen text-slate-900">
      
      {/* 
        HERO SECTION 
        Matches the exact style of About, Services, and Platform pages 
      */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 px-4 max-w-4xl mx-auto text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-slate-600 mb-6 shadow-sm">
          <div className="size-1.5 rounded-full bg-cyan-600" />
          Support & Inquiries
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          Talk to Us
        </h1>
        
        <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Have a question about compliance, the platform, or something specific to your operation? Send us a message and we'll get back to you.
        </p>
      </section>

      {/* THE LINE BREAK - Matching established site design */}
      <div className="w-full border-t border-slate-100"></div>

      {/* CONTENT SECTION */}
      <section className="bg-slate-50/50 pb-20 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            
            {/* Left Panel: Direct Channels */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Direct Channels
                  </h2>
                </div>

                <div className="space-y-7">
                  {/* Email Info */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-50 p-3 text-blue-600 shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Email Contact</h3>
                      <p className="text-xs text-slate-500 mt-1">General &amp; Support Inquiries</p>
                      <a
                        href="mailto:contact@truckease.co"
                        className="mt-1.5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        contact@truckease.co
                      </a>
                    </div>
                  </div>

                  {/* Desk Hours */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-50 p-3 text-blue-600 shrink-0">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Human Review Hours</h3>
                      <p className="text-sm text-slate-600 mt-1 font-medium">Monday – Friday</p>
                      <p className="text-xs text-slate-500 mt-0.5">8:00 AM – 6:00 PM EST</p>
                    </div>
                  </div>

                  {/* Coverage */}
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-blue-50 p-3 text-blue-600 shrink-0">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Regional Operations</h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        Serving commercial fleets across the United States and Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operational Confidence - Dark Accent Box for contrast */}
              <div className="bg-slate-900 rounded-3xl p-8 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs tracking-wider uppercase">
                  <ShieldCheck className="size-4" />
                  Operational Confidence
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  TruckEase Solutions Inc. provides independent compliance software and administrative workflow support for commercial trucking operations.
                </p>
              </div>
            </div>

            {/* Right Panel: Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
              <div className="space-y-2 pb-8 border-b border-slate-100 mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-sm text-slate-500">
                  Fill out the form below and our team will get back to you during desk review hours.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center space-y-4">
                  <div className="mx-auto size-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="size-6 stroke-[3]" />
                  </div>
                  <h3 className="font-bold text-xl text-emerald-950">Thank you for reaching out!</h3>
                  <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                    Your message has been received. Our support desk will review your inquiry and respond during human review hours.
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Inputs Grid */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        required
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-600/10 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company-name"
                        name="company-name"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-600/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-600/10 transition-all font-medium"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="dot-number" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        USDOT / MC / NSC / CVOR
                      </label>
                      <input
                        type="text"
                        id="dot-number"
                        name="dot-number"
                        className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-600/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Topic Pills */}
                  <div className="space-y-3 pt-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      What's this about, more specifically?{' '}
                      <span className="font-normal text-slate-400 lowercase">(optional)</span>
                    </label>
                    
                    <div className="flex flex-wrap gap-2 pt-1">
                      {inquiryTopics.map((topic) => {
                        const isChecked = selectedTopics.includes(topic)
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => toggleTopic(topic)}
                            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                              isChecked
                                ? 'bg-slate-900 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60'
                            }`}
                          >
                            {isChecked ? <Check className="size-3.5 stroke-[3]" /> : <Sparkles className="size-3 opacity-40" />}
                            <span>{topic}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2 pt-2">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      What's driving this today? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-cyan-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-600/10 transition-all font-medium resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-600 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-600/20 active:scale-[0.99]"
                    >
                      <Send className="size-4" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
