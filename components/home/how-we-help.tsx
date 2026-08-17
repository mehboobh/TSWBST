import {
  BarChart3,
  FileCheck2,
  Lightbulb,
  ShieldCheck,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

const capabilities = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Compliance Tracking',
    description:
      'Renewals, licensing, and registrations tracked continuously so gaps surface before they become deadlines you are racing.',
  },
  {
    number: '02',
    icon: FileCheck2,
    title: 'Document Organization',
    description:
      'Compliance records stay organized and accessible when documentation is needed for renewals, audits, or operational work.',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Operational Insights',
    description:
      'Patterns across drivers, vehicles, and compliance activity become easier to see before they turn into recurring problems.',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Decision Support',
    description:
      'Compliance data is evaluated against regulatory checks and operational rules to help identify what deserves attention next.',
  },
]

export function HowWeHelp() {
  return (
    <section
      id="how-we-help"
      className="relative overflow-hidden bg-[#fffdfa]"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-[#f45b08]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f45b08]">
              <span className="h-px w-7 bg-[#f45b08]" />
              How TruckEase Helps
              <span className="h-px w-7 bg-[#f45b08]" />
            </div>

            <h2 className="text-balance text-3xl font-bold tracking-[-0.045em] text-[#142342] sm:text-4xl lg:text-[3rem] lg:leading-[1.04]">
              Everything working together,
              <br className="hidden sm:block" />
              continuously.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#60708a] sm:text-[15px]">
              A platform designed so nothing important slips through manual
              tracking, from renewals to the next recommended action.
            </p>
          </div>
        </Reveal>

        {/* Connected capability system */}
        <div className="relative mt-12 lg:mt-14">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-[31px] hidden h-px bg-gradient-to-r from-[#dbe1eb] via-[#f45b08]/45 to-[#dbe1eb] lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon

              return (
                <Reveal key={capability.number} delay={index * 70}>
                  <article className="group relative h-full rounded-[20px] border border-[#dde3ed] bg-white p-5 shadow-[0_8px_28px_rgba(20,35,66,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ccd5e3] hover:shadow-[0_18px_42px_rgba(20,35,66,0.08)] sm:p-6">
                    {/* Top node */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce3f1] bg-[#f4f6ff] text-[#5264d6] transition-all duration-300 group-hover:border-[#f7c7aa] group-hover:bg-[#fff5ef] group-hover:text-[#f45b08]">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.16em] text-[#a1aec1]">
                        {capability.number}
                      </span>
                    </div>

                    {/* Accent */}
                    <div className="mt-6 h-1 w-8 rounded-full bg-[#e5eaf2] transition-all duration-300 group-hover:w-12 group-hover:bg-[#f45b08]" />

                    <h3 className="mt-4 text-base font-bold tracking-[-0.02em] text-[#142342]">
                      {capability.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5.5 text-[#66758d] sm:text-[13px]">
                      {capability.description}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <Reveal delay={180}>
          <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 text-center">
            <span className="h-px w-8 bg-[#d9e0eb]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#718097]">
              From requirements to the next action
            </span>
            <span className="h-px w-8 bg-[#d9e0eb]" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
