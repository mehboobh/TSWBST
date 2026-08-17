import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Gauge,
  Route,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const platformServices = [
  {
    icon: ShieldCheck,
    title: 'Continuous Compliance Monitoring',
    tag: 'PAID MONTHLY',
    tagClass: 'border-[#e8720c]/25 bg-[#fff7ef] text-[#e8720c]',
    description:
      'Registrations, renewals, licensing requirements, and required filings, actively managed and tracked from one central system, including ongoing IRP and IFTA renewal cycles.',
    note: 'The foundation of the ongoing platform.',
  },
  {
    icon: Route,
    title: 'Trip Compliance Support',
    tag: 'INCLUDED FREE',
    tagClass: 'border-[#5c8a68]/25 bg-[#f4f8f4] text-[#5c8a68]',
    description:
      'Before dispatch, understand whether additional permits or regulatory requirements may apply to a planned trip, helping reduce avoidable compliance issues.',
    note: 'Included with Continuous Compliance Monitoring.',
  },
  {
    icon: Gauge,
    title: 'Operational Insights',
    tag: 'PLATFORM EXCLUSIVE',
    tagClass: 'border-[#d7dde5] bg-[#f5f7fa] text-[#16274a]',
    description:
      'Recurring issues across drivers and vehicles, the kind that are easy to miss one record at a time, surfaced through intelligent monitoring that brings greater visibility to your compliance activities.',
    note: 'Built from continuously tracked compliance data.',
  },
  {
    icon: Sparkles,
    title: 'Decision Support',
    tag: 'PLATFORM EXCLUSIVE',
    tagClass: 'border-[#d7dde5] bg-[#f5f7fa] text-[#16274a]',
    description:
      'Your compliance data is evaluated against a growing framework of regulatory checks and operational rules, built on real compliance expertise, to provide practical guidance for what to do next. Not just another report to review.',
    note: 'Available only through the ongoing platform.',
  },
]

const workflow = [
  'Submit request',
  'Scope reviewed',
  'Timeline confirmed',
  'Filing or update completed',
  'Documentation organized',
]

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#0c1a36]">
      {/* ================================================================ */}
      {/* HERO                                                            */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-[#0c1a36]">
        <div
          aria-hidden="true"
          className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#16274a] opacity-70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#16274a] opacity-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="grid items-end gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-9 bg-[#e8720c]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
                  Compliance Services
                </span>
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
                Compliance Solutions
                <br />
                Built Around
                <br />
                <span className="text-[#e8720c]">Your Business.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Managing regulatory requirements shouldn&apos;t distract you
                from running your business. TruckEase provides a unified
                compliance platform backed by direct, hands-on support.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/risk-screening"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/platform"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/25 bg-transparent px-6 text-sm font-semibold text-white transition hover:border-white/50"
                >
                  Explore the Platform
                </Link>
              </div>
            </div>

            <div className="lg:pb-2">
              <div className="rounded-2xl border border-white/10 bg-[#16274a]/80 p-7 backdrop-blur-sm sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
                    The Compliance Platform
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-[#5c8a68]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5c8a68]" />
                    Continuous
                  </span>
                </div>

                <div className="mt-12">
                  <p className="font-serif text-3xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-4xl">
                    One platform,
                    <br />
                    working continuously.
                  </p>

                  <p className="mt-5 text-sm leading-6 text-white/55">
                    Combining continuous monitoring, intelligent automation,
                    and practical compliance expertise to help you stay ahead
                    of regulatory deadlines.
                  </p>
                </div>

                <div className="mt-9 border-t border-white/10 pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5c8a68]" />

                    <p className="text-xs leading-5 text-white/55">
                      The platform is designed to keep compliance activity
                      visible instead of leaving requirements scattered across
                      manual records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plain divider — Services does not use checkpoint motif */}
          <div className="mt-16 h-px bg-white/10" />
        </div>
      </section>

      {/* ================================================================ */}
      {/* THE COMPLIANCE PLATFORM                                         */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e2ded3]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#5b6472]">
                The Compliance Platform
              </span>
            </div>

            <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
              One platform,
              <br />
              working continuously.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#5b6472]">
              Combining continuous monitoring, intelligent automation, and
              practical compliance expertise to help you stay ahead of
              regulatory deadlines.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {platformServices.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="rounded-xl border border-[#e2ded3] bg-[#fdfcf9] p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0eee8]">
                      <Icon className="h-5 w-5 text-[#16274a]" />
                    </div>

                    <span
                      className={`rounded-full border px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] ${service.tagClass}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em] text-[#0c1a36]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#5b6472]">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 border-t border-[#e2ded3] pt-5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#5c8a68]" />

                    <span className="text-xs font-medium text-[#5b6472]">
                      {service.note}
                    </span>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Why exclusive capabilities are platform-only */}
          <div className="mt-7 rounded-xl border border-[#e2ded3] bg-[#fdfcf9] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0eee8]">
                <Search className="h-4 w-4 text-[#16274a]" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#0c1a36]">
                  Why Operational Insights and Decision Support are
                  platform-exclusive
                </h3>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-[#5b6472]">
                  Both depend on continuously-tracked data that builds up over
                  time. There&apos;s nothing for either capability to work from
                  without an active ongoing platform subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* DIRECT FILING SUPPORT                                           */}
      {/* ================================================================ */}

      <section className="border-y border-[#e2e7ec] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e2e7ec]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#5b6472]">
                  Direct Filing Support
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36]">
                Specific filings,
                <br />
                handled case by case.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#5b6472]">
                For clients already on the Compliance Platform, we also handle
                filings and registration work that falls outside your regular
                renewal cycle: entity changes, government portal updates,
                one-off amendments, and similar work, case by case.
              </p>

              <div className="mt-7 rounded-xl border border-[#e2e7ec] bg-[#f7f8fa] p-5">
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[#16274a]" />

                  <p className="text-sm leading-6 text-[#5b6472]">
                    Turnaround times vary depending on the scope and urgency of
                    the work. If you have a deadline, we&apos;ll confirm
                    expected timelines before the engagement begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Filing workflow */}
            <div className="rounded-xl border border-[#e2e7ec] bg-[#fdfcf9] p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-[#e2e7ec] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#0c1a36]">
                    Filing Workflow
                  </p>

                  <p className="mt-1 text-xs text-[#5b6472]">
                    A clear process from request to organized records.
                  </p>
                </div>

                <FileCheck2 className="h-5 w-5 text-[#16274a]" />
              </div>

              <div className="mt-7">
                {workflow.map((step, index) => (
                  <div key={step} className="relative flex gap-5">
                    {index < workflow.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-5 top-10 h-[calc(100%-4px)] w-px bg-[#e2e7ec]"
                      />
                    )}

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7dde5] bg-white font-mono text-[9px] font-semibold text-[#16274a]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="pb-7 pt-2">
                      <p className="text-sm font-semibold text-[#0c1a36]">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FINAL CTA                                                        */}
      {/* ================================================================ */}

      <section className="bg-[#0c1a36]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e2e7ec]/30" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Get Started
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Build compliance around
                <br />
                <span className="text-[#e8720c]">your operation.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                Whether you&apos;re looking for greater visibility into your
                compliance position or a more organized way to manage ongoing
                regulatory requirements, TruckEase is ready to help.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/risk-screening"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/25 bg-transparent px-6 text-sm font-semibold text-white transition hover:border-white/50"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
