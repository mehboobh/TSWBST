import {
  Activity,
  CheckCircle2,
  FileCheck2,
  Radar,
  Settings2,
  ShieldCheck,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

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
    icon: Activity,
    title: 'Technology-first compliance platform',
    body: 'Built for ongoing operational visibility, not periodic paperwork.',
  },
  {
    icon: CheckCircle2,
    title: 'Organized, accessible documents',
    body: 'Records retained with appropriate access controls and activity tracking.',
  },
  {
    icon: FileCheck2,
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
    <section
      id="why-truckease"
      className="relative overflow-hidden bg-white"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background atmosphere                                               */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Soft dusk/navy atmosphere at the top */}
        <div className="absolute inset-x-0 top-0 h-[260px] bg-[radial-gradient(circle_at_50%_0%,rgba(66,82,145,0.09),transparent_68%)]" />

        {/* Very subtle warm transition on the right */}
        <div className="absolute -right-48 top-24 h-[420px] w-[420px] rounded-full bg-[#f3e8df]/35 blur-3xl" />

        {/* Cool transition on the left */}
        <div className="absolute -left-48 bottom-0 h-[360px] w-[360px] rounded-full bg-[#e9eefc]/45 blur-3xl" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Section content                                                     */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-[#e85d04]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#526078]">
                Why TruckEase
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-[2.25rem] font-bold leading-[0.98] tracking-[-0.045em] text-[#142342] sm:text-[2.75rem] lg:text-[3.35rem]">
              More than filing paperwork.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#66758d] sm:text-[15px]">
              Businesses choose TruckEase because compliance requires more
              than filing paperwork. It requires consistency, attention to
              detail, and technology built to catch what manual tracking
              misses.
            </p>
          </div>
        </Reveal>

        {/* ---------------------------------------------------------------- */}
        {/* Benefits                                                          */}
        {/* ---------------------------------------------------------------- */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon

            return (
              <Reveal
                key={benefit.title}
                delay={index * 70}
                className="h-full"
              >
                <article
                  className="
                    group relative flex h-full min-h-[190px] flex-col
                    overflow-hidden rounded-[22px]
                    border border-[#dce3ef]
                    bg-white
                    p-6
                    shadow-[0_10px_35px_rgba(20,35,66,0.045)]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#cbd5e5]
                    hover:shadow-[0_18px_45px_rgba(20,35,66,0.09)]
                  "
                >
                  {/* Very subtle card highlight */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-x-0 top-0 h-20
                      bg-[radial-gradient(circle_at_20%_0%,rgba(67,83,164,0.08),transparent_70%)]
                      opacity-0 transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      relative flex h-10 w-10 shrink-0 items-center
                      justify-center rounded-xl
                      border border-[#dce5ff]
                      bg-[#f1f5ff]
                      text-[#4353a4]
                      transition-colors duration-300
                      group-hover:border-[#cbd6ff]
                      group-hover:bg-[#e9efff]
                    "
                  >
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="relative mt-7">
                    <h3 className="text-[14px] font-bold leading-5 text-[#142342]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#687790]">
                      {benefit.body}
                    </p>
                  </div>

                  {/* Tiny bottom indicator */}
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
        {/* Bottom transition                                                  */}
        {/* ---------------------------------------------------------------- */}

        <Reveal delay={420}>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-[#d8dfeb] to-transparent" />

            <div className="h-1.5 w-1.5 rounded-full bg-[#aeb9cc]" />

            <div className="h-px flex-1 bg-gradient-to-l from-[#d8dfeb] to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
