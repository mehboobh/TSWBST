import {
  Activity,
  BrainCircuit,
  FileCheck2,
  Radar,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

const capabilities = [
  {
    number: '01',
    icon: Radar,
    title: 'Compliance Tracking',
    body:
      'Renewals, licensing, and registrations tracked continuously, including IRP, IFTA, USDOT, MC, NSC, CVOR/SFC, UCR, and state or provincial requirements. Gaps get flagged before they become deadlines you’re racing.',
  },
  {
    number: '02',
    icon: FileCheck2,
    title: 'Document Organization',
    body:
      'Compliance records are securely organized and retained within the platform. When documentation is required for renewals, audits, or operational needs, the system helps assemble the relevant records while maintaining appropriate access controls and activity tracking.',
  },
  {
    number: '03',
    icon: Activity,
    title: 'Operational Insights',
    body:
      'An always-on layer that connects what’s happening across your operation — which drivers need attention, which trucks keep showing up for the same issue — surfacing patterns that are difficult to identify through manual tracking alone.',
  },
  {
    number: '04',
    icon: BrainCircuit,
    title: 'Decision Support',
    body:
      'Your compliance data is evaluated against a growing framework of regulatory checks and operational rules, built on real compliance expertise, to provide practical guidance for what to do next. Not just another report to review.',
  },
]

export function HowWeHelp() {
  return (
    <section
      id="how-truckease-helps"
      className="relative overflow-hidden bg-[#fdfcf9]"
    >
      {/* ---------------------------------------------------------------- */}
      {/* Background                                                        */}
      {/* ---------------------------------------------------------------- */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#edf1f8]/80 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-52 top-28 h-[420px] w-[420px] rounded-full bg-[#4353a4]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 bottom-0 h-[360px] w-[360px] rounded-full bg-[#e8720c]/[0.025] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-[#dfe5ee]"
      />

      {/* ---------------------------------------------------------------- */}
      {/* Content                                                           */}
      {/* ---------------------------------------------------------------- */}

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#e8720c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8720c]">
                How TruckEase Helps
              </span>

              <span className="h-px w-8 bg-[#e8720c]" />
            </div>

            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#0c1a36] sm:text-4xl lg:text-[3.15rem] lg:leading-[1.05]">
              Everything working together,
              <br className="hidden sm:block" />
              continuously.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5b6472] sm:text-[15px]">
              A platform designed so nothing important slips through manual
              tracking, from renewals to the next recommended action.
            </p>
          </div>
        </Reveal>

        {/* ---------------------------------------------------------------- */}
        {/* Capability cards                                                   */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon

            return (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="h-full"
              >
                <article
                  className="
                    group relative flex h-full min-h-[335px]
                    flex-col overflow-hidden rounded-[20px]
                    border border-[#dce2eb]
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(12,26,54,0.045)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#c9d2e1]
                    hover:shadow-[0_20px_50px_rgba(12,26,54,0.09)]
                  "
                >
                  {/* Top number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#a5afbf]">
                      {item.number}
                    </span>

                    <span
                      className="
                        flex h-11 w-11 items-center justify-center
                        rounded-xl
                        border border-[#dce5ff]
                        bg-[#f1f5ff]
                        text-[#4353a4]
                        transition-all duration-300
                        group-hover:border-[#ccd7ff]
                        group-hover:bg-[#e9efff]
                        group-hover:text-[#36479a]
                      "
                    >
                      <Icon
                        className="h-[18px] w-[18px]"
                        strokeWidth={1.8}
                      />
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="mt-8 text-base font-bold tracking-[-0.015em] text-[#0c1a36]">
                    {item.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-4 text-xs leading-[1.7] text-[#667085]">
                    {item.body}
                  </p>

                  {/* Bottom accent */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute bottom-0 left-6 h-[2px] w-0
                      bg-[#4353a4]
                      transition-all duration-300
                      group-hover:w-10
                    "
                  />
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* Closing visual transition                                         */}
        {/* ---------------------------------------------------------------- */}

        <Reveal delay={420}>
          <div className="mt-14 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#d7dee9]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />

            <div className="h-px w-12 bg-[#d7dee9]" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
