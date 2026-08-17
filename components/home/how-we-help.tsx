'use client'

import {
  Activity,
  BrainCircuit,
  FileCheck2,
  Radar,
} from 'lucide-react'

const helpItems = [
  {
    number: '01',
    title: 'Compliance Tracking',
    description:
      "Renewals, licensing, and registrations tracked continuously, including IRP, IFTA, USDOT, MC, NSC, CVOR/SCF, USC, and state or provincial requirements. Gaps get flagged before they become deadlines you're racing.",
    icon: Radar,
  },
  {
    number: '02',
    title: 'Document Organization',
    description:
      'Compliance records are securely organized and retained within the platform. When documentation is required for renewals, audits, or operational needs, the system helps assemble the relevant records while maintaining appropriate access controls and activity tracking.',
    icon: FileCheck2,
  },
  {
    number: '03',
    title: 'Operational Insights',
    description:
      "An always-on layer that connects what's happening across your operation — which drivers need attention, which trucks keep showing up for the same issue — surfacing patterns that are difficult to identify through manual tracking alone.",
    icon: Activity,
  },
  {
    number: '04',
    title: 'Decision Support',
    description:
      'Your compliance data is evaluated against a growing framework of regulatory checks and operational rules, built on real compliance expertise, to provide practical guidance for what to do next. Not just another report to review.',
    icon: BrainCircuit,
  },
]

export function HowWeHelp() {
  return (
    <section className="relative overflow-hidden bg-[#fffdfa] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#ef6c0a]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ef6c0a]">
              How TruckEase Helps
            </span>

            <span className="h-px w-8 bg-[#ef6c0a]" />
          </div>

          <h2 className="text-balance text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#14203b] sm:text-5xl lg:text-[52px]">
            Everything working together,
            <br className="hidden sm:block" />
            continuously.
          </h2>

          <p className="mx-auto mt-7 max-w-[700px] text-base leading-7 text-[#61708d] sm:text-[17px]">
            A platform designed so nothing important slips through manual
            tracking, from renewals to the next recommended action.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {helpItems.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.number}
                className="group flex min-h-[330px] flex-col rounded-[22px] border border-[#dbe2ef] bg-white p-6 shadow-[0_10px_30px_rgba(20,32,59,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cfd8e8] hover:shadow-[0_18px_40px_rgba(20,32,59,0.07)] sm:p-7"
              >
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="pt-1 text-[11px] font-semibold tracking-[0.16em] text-[#9aa7bd]">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dce5ff] bg-[#f5f7ff] text-[#4c63d2]">
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-9">
                  <h3 className="text-[17px] font-semibold tracking-[-0.02em] text-[#14203b]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-[1.65] text-[#65738e]">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Section marker */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#d8deea]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#ef6c0a]" />
          <span className="h-px w-12 bg-[#d8deea]" />
        </div>
      </div>
    </section>
  )
}
