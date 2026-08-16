import {
  AlertTriangle,
  Clock3,
  FileWarning,
  ArrowRight,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

const problems = [
  {
    number: '01',
    icon: Clock3,
    title: 'Missed renewals',
    description:
      'Registrations and licensing can lapse quietly until they interrupt a load, renewal, or operating requirement.',
  },
  {
    number: '02',
    icon: FileWarning,
    title: 'Incomplete documentation',
    description:
      'Records can end up scattered across inboxes and folders, making them difficult to assemble when they are needed most.',
  },
  {
    number: '03',
    icon: AlertTriangle,
    title: 'Late discovery of issues',
    description:
      'Compliance gaps are often discovered after the fact instead of while there is still time to act.',
  },
]

export function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#f5f7fb]"
    >
      {/* Subtle transition from the dashboard section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent"
      />

      {/* Very subtle warm/cool atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#f05a00]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#18264b]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f05a00]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f05a00]">
                The Problem
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold tracking-[-0.045em] text-[#162347] sm:text-5xl lg:text-[56px] lg:leading-[1.02]">
              Compliance should never be an afterthought.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#536782] sm:text-[17px] sm:leading-8">
              Every trucking business depends on compliance to keep operations
              moving. Missed renewals, incomplete records, or overlooked
              regulatory requirements do not just create paperwork. They can
              interrupt operations, right when you can least afford it.
            </p>
          </div>
        </Reveal>

        {/* Main message + cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left statement */}
          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-[24px] border border-[#d9e1ec] bg-[#162347] p-7 shadow-[0_24px_70px_rgba(22,35,71,0.12)] sm:p-9">
              {/* Decorative glow */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f05a00]/10 blur-3xl"
              />

              <div className="relative">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aebbd2]">
                    The operational cost
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#f05a00]">
                    <AlertTriangle className="h-4 w-4" />
                  </span>
                </div>

                <p className="max-w-md text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
                  The real problem is not finding out that something is wrong.
                  It is finding out too late.
                </p>

                <div className="mt-8 h-px bg-white/10" />

                <p className="mt-6 text-sm leading-7 text-[#b9c5d8]">
                  TruckEase was built to change when you find out — before a
                  missed requirement becomes an operational problem.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Find issues while there is still time
                  <ArrowRight className="h-4 w-4 text-[#f05a00]" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Three problem cards */}
          <div className="grid gap-4">
            {problems.map((problem, index) => {
              const Icon = problem.icon

              return (
                <Reveal key={problem.title} delay={120 + index * 70}>
                  <article className="group relative overflow-hidden rounded-[20px] border border-[#d9e1ec] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c6d1e1] hover:shadow-[0_18px_45px_rgba(22,35,71,0.08)] sm:p-7">
                    <div className="flex gap-5">
                      {/* Number */}
                      <div className="hidden shrink-0 pt-1 text-[11px] font-bold tracking-[0.15em] text-[#a4afc1] sm:block">
                        {problem.number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef3ff] text-[#3e5eff]">
                              <Icon className="h-[18px] w-[18px]" />
                            </span>

                            <h3 className="text-base font-bold tracking-[-0.015em] text-[#172544] sm:text-lg">
                              {problem.title}
                            </h3>
                          </div>

                          <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-[#b8c2d1] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#f05a00]" />
                        </div>

                        <p className="mt-4 max-w-xl text-sm leading-6 text-[#667791]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Closing line */}
        <Reveal delay={320}>
          <div className="mt-12 flex items-center gap-4 border-t border-[#dce3ed] pt-7">
            <span className="h-px w-10 bg-[#f05a00]" />

            <p className="text-sm font-medium text-[#536782]">
              Before a missed requirement becomes an operational problem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
