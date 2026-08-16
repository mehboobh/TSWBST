import {
  CheckCircle2,
  ClipboardCheck,
  Layers,
  Radar,
  ShieldCheck,
  Search,
  Settings2,
  Headset,
} from 'lucide-react'

import { ComplianceDashboard } from '@/components/compliance-dashboard'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

/* -------------------------------------------------------------------------- */
/* PLATFORM PREVIEW                                                          */
/* -------------------------------------------------------------------------- */

export function PlatformPreview() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-20 overflow-hidden bg-[#f7f9fc]"
    >
      {/* Distant atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[70rem] -translate-x-1/2 rounded-full bg-[#dce7ff]/45 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-[#f5c6a7]/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <Reveal>
          <SectionHeading
            eyebrow="Platform preview"
            title="From Compliance Data to Operational Clarity."
            description="A single view that connects requirements, deadlines, documents, and monitoring activity, then points to the next action worth taking."
          />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="relative mx-auto max-w-5xl">

            {/* Soft platform halo */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[2rem] bg-[#17294b]/[0.055] blur-2xl"
            />

            {/* Dashboard frame */}
            <div className="relative rounded-[1.5rem] border border-[#dbe3ef] bg-white p-2 shadow-[0_30px_90px_rgba(18,35,65,0.12)] sm:p-3">

              <ComplianceDashboard />

            </div>

            <p className="mt-4 text-center text-xs text-[#71809a]">
              Interface concept. Illustrative data shown for demonstration and
              does not represent real customer data.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* WHY TRUCKEASE                                                              */
/* -------------------------------------------------------------------------- */

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

export function WhyTruckEase() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Very subtle continuation of the hero atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-16rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[#dce6fb]/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <Reveal>
          <SectionHeading
            eyebrow="Why TruckEase"
            title="More than filing paperwork."
            description="Businesses choose TruckEase because compliance requires more than filing paperwork. It requires consistency, attention to detail, and technology built to catch what manual tracking misses."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={(i % 3) * 80}
              className="group"
            >
              <div className="h-full rounded-2xl border border-[#e1e7f0] bg-white p-6 shadow-[0_8px_30px_rgba(20,35,60,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd7e8] hover:shadow-[0_18px_45px_rgba(20,35,60,0.08)]">

                <span className="grid size-11 place-items-center rounded-xl bg-[#edf3ff] text-[#2456d8] transition-colors group-hover:bg-[#e5edff]">
                  <benefit.icon className="size-5" />
                </span>

                <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-[#142342]">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#61708a]">
                  {benefit.body}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* PROCESS                                                                    */
/* -------------------------------------------------------------------------- */

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Discover',
    body: 'We begin by understanding your operation and current compliance requirements.',
  },
  {
    n: '02',
    icon: ClipboardCheck,
    title: 'Assess',
    body: 'We review your current compliance records, documentation, and regulatory requirements to understand where your operation stands and identify areas that may require attention.',
  },
  {
    n: '03',
    icon: Settings2,
    title: 'Implement',
    body: 'We handle the registrations, renewals, and documentation required to keep your operation compliant, set up as part of your Compliance Platform from day one.',
  },
  {
    n: '04',
    icon: Radar,
    title: 'Monitor',
    body: 'The platform continues tracking your compliance activity, flagging what needs attention as it comes up, not after the fact.',
  },
  {
    n: '05',
    icon: Headset,
    title: 'Support',
    body: 'As regulations evolve and your business grows, we remain available to help you navigate what’s next.',
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc]">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[20rem] w-[60rem] -translate-x-1/2 rounded-full bg-white blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our process"
            title="A Clearer Path to Compliance Confidence."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-5">

          {/* Connecting line */}
          <div
            className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-[#d7dfeb] md:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 90}
              className="relative flex flex-col items-start"
            >

              <span className="relative z-10 grid size-12 place-items-center rounded-xl border border-[#d8e1ed] bg-white text-[#142342] shadow-[0_6px_20px_rgba(20,35,60,0.07)]">
                <step.icon className="size-5 text-[#f15a00]" />
              </span>

              <span className="mt-4 font-mono text-xs font-semibold text-[#8a96a8]">
                {step.n}
              </span>

              <h3 className="mt-1 text-base font-semibold text-[#142342]">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#61708a]">
                {step.body}
              </p>

            </Reveal>
          ))}

        </ol>
      </div>
    </section>
  )
}
