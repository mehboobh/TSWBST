import {
  CheckCircle2,
  FileCheck2,
  Headset,
  Layers,
  Radar,
  Settings2,
  ShieldCheck,
} from 'lucide-react'

import { ComplianceDashboard } from '@/components/compliance-dashboard'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const benefits = [
  {
    icon: Radar,
    title: 'Proactive, continuously tracked compliance',
    body: 'Requirements monitored on an ongoing basis so gaps surface early.',
  },
  {
    icon: ShieldCheck,
    title: 'Cross-border regulatory knowledge',
    body: 'Experience spanning requirements across the United States and Canada.',
  },
  {
    icon: Layers,
    title: 'Technology-first compliance platform',
    body: 'Built for ongoing operational visibility, not periodic paperwork.',
  },
  {
    icon: CheckCircle2,
    title: 'Organized, accessible documents',
    body: 'Records retained with appropriate access controls and activity tracking.',
  },
  {
    icon: Headset,
    title: 'Practical ongoing support',
    body: 'A person to help when a system alone isn’t enough.',
  },
  {
    icon: Settings2,
    title: 'Long-term compliance confidence',
    body: 'Support that adapts as regulations evolve and your business grows.',
  },
]

/* =========================================================
   PLATFORM PREVIEW
   ========================================================= */

export function PlatformPreview() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-white"
    >
      {/* Dusk-inspired atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-56 -top-48 h-[650px] w-[650px] rounded-full bg-[#182957]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-56 bottom-[-300px] h-[650px] w-[650px] rounded-full bg-orange-500/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1380px] px-6 py-24 lg:px-10 lg:py-32">

        <Reveal>
          <SectionHeading
            eyebrow="Platform preview"
            title="From Compliance Data to Operational Clarity."
            description="A single view that connects requirements, deadlines, documents, and monitoring activity, then points to the next action worth taking."
          />
        </Reveal>

        <Reveal
          delay={100}
          className="mt-12 lg:mt-16"
        >
          <div className="relative">

            {/* Soft shadow behind dashboard */}
            <div
              aria-hidden="true"
              className="absolute inset-x-8 bottom-[-30px] top-8 rounded-[2.5rem] bg-[#10213d]/10 blur-3xl"
            />

            {/* Dashboard frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-3 shadow-[0_30px_100px_rgba(16,33,61,0.12)] sm:p-5 lg:rounded-[2.5rem] lg:p-6">

              {/* Browser-like header */}
              <div className="mb-5 flex items-center justify-between border-b border-slate-200 px-2 pb-4">

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>

                <div className="hidden rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-semibold text-slate-400 sm:block">
                  TruckEase Compliance Platform
                </div>

                <div className="text-[10px] font-medium text-slate-400">
                  Platform preview
                </div>

              </div>

              <ComplianceDashboard />

              <p className="mt-4 text-center text-[11px] leading-5 text-slate-400">
                Interface concept. Illustrative data shown for demonstration and does not represent real customer data.
              </p>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

/* =========================================================
   WHY TRUCK EASE
   ========================================================= */

export function WhyTruckEase() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Very subtle visual continuity from the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-18rem] top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[#182957]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1380px] px-6 py-24 lg:px-10 lg:py-28">

        <Reveal>
          <SectionHeading
            eyebrow="Why TruckEase"
            title="More than filing paperwork."
            description="Businesses choose TruckEase because compliance requires more than filing paperwork. It requires consistency, attention to detail, and technology built to catch what manual tracking misses."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">

          {benefits.map((benefit, i) => {
            const Icon = benefit.icon

            return (
              <Reveal
                key={benefit.title}
                delay={(i % 3) * 80}
                className="group"
              >
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(16,33,61,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(16,33,61,0.08)]">

                  <div className="flex items-start gap-4">

                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-[#10213d] group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.9} />
                    </span>

                    <div>
                      <h3 className="text-[15px] font-bold leading-6 text-[#142342]">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {benefit.body}
                      </p>
                    </div>

                  </div>

                </article>
              </Reveal>
            )
          })}

        </div>

      </div>
    </section>
  )
}
