import {
  AlertTriangle,
  ArrowRight,
  FileWarning,
  ShieldAlert,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'

const problems = [
  {
    number: '01',
    icon: FileWarning,
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
    icon: ShieldAlert,
    title: 'Late discovery of issues',
    description:
      'Compliance gaps are often discovered after the fact instead of while there is still time to act.',
  },
]

export function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-[#f7f9fd]"
    >
      {/* Very subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-[#6474ae]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#f45b08]/[0.025] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f45b08]">
              <span className="h-px w-7 bg-[#f45b08]" />
              The Problem
            </div>

            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-[-0.045em] text-[#142342] sm:text-4xl lg:text-[3.15rem] lg:leading-[1.03]">
              Compliance should never
              <br className="hidden sm:block" />
              be an afterthought.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#536782] sm:text-[15px]">
              Every trucking business depends on compliance to keep operations
              moving. Missed renewals, incomplete records, or overlooked
              regulatory requirements do not just create paperwork. They can
              interrupt operations, right when you can least afford it.
            </p>
          </div>
        </Reveal>

        {/* Main problem layout */}
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[0.78fr_1.22fr] lg:gap-5">
          {/* Dark statement card */}
          <Reveal>
            <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[22px] bg-[#182343] p-7 text-white shadow-[0_24px_60px_rgba(20,35,66,0.16)] sm:p-8 lg:min-h-0">
              {/* Grid texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.075]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
                  backgroundSize: '42px 42px',
                }}
              />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#aab6ca]">
                    The operational cost
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                    <AlertTriangle className="h-3.5 w-3.5 text-[#f45b08]" />
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="max-w-md text-2xl font-bold leading-[1.12] tracking-[-0.035em] sm:text-[1.75rem]">
                    The real problem is not finding out that something is
                    wrong.
                    <br />
                    It is finding out too late.
                  </h3>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="max-w-md text-xs leading-6 text-[#b7c1d1] sm:text-[13px]">
                    TruckEase was built to change when you find out — before a
                    missed requirement becomes an operational problem.
                  </p>
                </div>

                <div className="mt-auto pt-8">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                    Find issues while there is still time
                    <ArrowRight className="h-3.5 w-3.5 text-[#f45b08]" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Supporting problems */}
          <div className="grid gap-4">
            {problems.map((problem, index) => {
              const Icon = problem.icon

              return (
                <Reveal key={problem.number} delay={index * 70}>
                  <div className="group flex h-full min-h-[124px] flex-col rounded-[18px] border border-[#d7dfeb] bg-white p-5 shadow-[0_8px_28px_rgba(20,35,66,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c4cede] hover:shadow-[0_14px_34px_rgba(20,35,66,0.07)] sm:p-6">
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <span className="pt-1 text-[10px] font-bold tracking-[0.12em] text-[#a1aec2]">
                        {problem.number}
                      </span>

                      {/* Icon */}
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef2ff] text-[#5264d6]">
                        <Icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-base font-bold tracking-[-0.02em] text-[#142342]">
                            {problem.title}
                          </h3>

                          <ArrowRight className="h-4 w-4 shrink-0 text-[#aab6c8] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#5264d6]" />
                        </div>

                        <p className="mt-2 max-w-2xl text-xs leading-5.5 text-[#64748b] sm:text-[13px]">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Closing line */}
        <Reveal delay={120}>
          <div className="mt-8 flex items-center gap-3 border-t border-[#d9e0eb] pt-5">
            <span className="h-px w-8 bg-[#f45b08]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#697990]">
              Before a missed requirement becomes an operational problem.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
