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

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const platformServices = [
  {
    icon: ShieldCheck,
    title: 'Continuous Compliance Monitoring',
    tag: 'PAID MONTHLY',
    tagTone: 'orange',
    description:
      'Registrations, renewals, licensing requirements, and required filings are actively managed and tracked from one central system, including ongoing IRP and IFTA renewal cycles.',
    note: 'The foundation of the ongoing platform.',
  },
  {
    icon: Route,
    title: 'Trip Compliance Support',
    tag: 'INCLUDED FREE',
    tagTone: 'green',
    description:
      'Before dispatch, understand whether additional permits or regulatory requirements may apply to a planned trip, helping reduce avoidable compliance issues.',
    note: 'Included with Continuous Compliance Monitoring.',
  },
  {
    icon: Gauge,
    title: 'Operational Insights',
    tag: 'PLATFORM EXCLUSIVE',
    tagTone: 'blue',
    description:
      'Recurring issues across drivers and vehicles are surfaced through intelligent monitoring, bringing greater visibility to compliance activities that are easy to miss one record at a time.',
    note: 'Built from continuously tracked compliance data.',
  },
  {
    icon: Sparkles,
    title: 'Decision Support',
    tag: 'PLATFORM EXCLUSIVE',
    tagTone: 'blue',
    description:
      'Your compliance data is evaluated against a growing framework of regulatory checks and operational rules to provide practical guidance for what to do next.',
    note: 'Not just another report to review.',
  },
]

const workflowSteps = [
  {
    number: '01',
    title: 'Submit request',
  },
  {
    number: '02',
    title: 'Scope reviewed',
  },
  {
    number: '03',
    title: 'Timeline confirmed',
  },
  {
    number: '04',
    title: 'Filing or update completed',
  },
  {
    number: '05',
    title: 'Documentation organized',
  },
]

function tagClasses(tone: string) {
  switch (tone) {
    case 'orange':
      return 'border-[#f7c8ad] bg-[#fff6f1] text-[#e85d04]'

    case 'green':
      return 'border-[#b9e7d7] bg-[#f1fbf7] text-[#07845c]'

    default:
      return 'border-[#cdd6f7] bg-[#f4f6ff] text-[#4353a4]'
  }
}

/* -------------------------------------------------------------------------- */
/* Shared section primitives                                                  */
/* -------------------------------------------------------------------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#e85d04]" />

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
        {children}
      </span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8fb] text-[#142342]">
      {/* ==================================================================== */}
      {/* HERO                                                                  */}
      {/* ==================================================================== */}

      <section className="relative border-b border-[#dfe5ef] bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#e85d04]/[0.045] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#4353a4]/[0.035] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-end gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            {/* Hero copy */}
            <div>
              <SectionLabel>Compliance Services</SectionLabel>

              <h1 className="max-w-4xl text-[48px] font-black leading-[0.98] tracking-[-0.045em] text-[#142342] sm:text-[58px] lg:text-[72px]">
                Compliance Solutions
                <br />
                Built Around
                <br />
                <span className="text-[#e85d04]">Your Business.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#5f708c] sm:text-[18px]">
                Managing regulatory requirements shouldn&apos;t distract you
                from running your business. TruckEase provides a unified
                compliance platform backed by direct, hands-on support.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/risk-screening"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e85d04] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(232,93,4,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d95200]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#cfd8e7] bg-transparent px-6 text-sm font-bold text-[#142342] transition hover:border-[#aebbd0] hover:bg-[#f8faff]"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>

            {/* Hero statement */}
            <div className="lg:pb-2">
              <div className="relative overflow-hidden rounded-[24px] border border-[#dbe2ee] bg-[#142342] p-7 shadow-[0_24px_60px_rgba(20,35,66,0.12)] sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e85d04]" />
                      One platform
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35">
                      Working continuously
                    </span>
                  </div>

                  <div className="mt-12">
                    <p className="max-w-xl text-[29px] font-bold leading-[1.14] tracking-[-0.025em] text-white sm:text-[34px]">
                      Continuous monitoring,
                      <br />
                      intelligent automation,
                      <br />
                      <span className="text-[#ff7a22]">
                        practical expertise.
                      </span>
                    </p>

                    <div className="mt-10 h-px bg-white/10" />

                    <div className="mt-6 flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.07]">
                        <CheckCircle2 className="h-4 w-4 text-[#00d79b]" />
                      </div>

                      <p className="text-sm leading-6 text-white/60">
                        Built to help you stay ahead of regulatory deadlines
                        instead of reacting after the fact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Checkpoint line */}
          <div className="mt-14 flex items-center gap-3 text-xs text-[#71809a]">
            <span className="h-px w-9 bg-[#cbd5e3]" />

            <span>
              Compliance support designed around the way trucking businesses
              actually operate.
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* THE COMPLIANCE PLATFORM                                               */}
      {/* ==================================================================== */}

      <section className="bg-[#f7f8fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <SectionLabel>The Compliance Platform</SectionLabel>

            <h2 className="text-4xl font-black tracking-[-0.04em] text-[#142342] sm:text-5xl">
              One platform,
              <br />
              working continuously.
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] leading-7 text-[#64748b]">
              Combining continuous monitoring, intelligent automation, and
              practical compliance expertise to help you stay ahead of
              regulatory deadlines.
            </p>
          </div>

          {/* Why some capabilities are platform-only */}
          <div className="mt-10 rounded-2xl border border-[#dbe2ed] bg-white p-5 shadow-[0_10px_30px_rgba(20,35,66,0.04)] sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef2ff]">
                <Search className="h-5 w-5 text-[#4353a4]" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#142342]">
                  Why some capabilities live inside the ongoing platform
                </p>

                <p className="mt-1.5 max-w-4xl text-sm leading-6 text-[#687891]">
                  Operational Insights and Decision Support depend on
                  continuously tracked data that builds up over time. They are
                  therefore platform capabilities, not separate per-service
                  offerings.
                </p>
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {platformServices.map((service) => {
              const Icon = service.icon

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#d9e1ec] bg-white p-7 shadow-[0_10px_28px_rgba(20,35,66,0.035)] transition duration-300 hover:-translate-y-0.5 hover:border-[#c9d4e4] hover:shadow-[0_18px_38px_rgba(20,35,66,0.07)] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f3ff]">
                      <Icon className="h-5 w-5 text-[#4353a4]" />
                    </div>

                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] ${tagClasses(
                        service.tagTone,
                      )}`}
                    >
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold tracking-[-0.02em] text-[#142342]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748b]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-[#e7ebf1] pt-5 text-xs font-semibold text-[#7a879b]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#4353a4]" />
                    {service.note}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* PLATFORM LOGIC                                                        */}
      {/* ==================================================================== */}

      <section className="border-y border-[#dce3ed] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <SectionLabel>Built as a System</SectionLabel>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#142342] sm:text-4xl">
                The value grows
                <br />
                as the data grows.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#687891]">
                The ongoing platform is designed around continuously tracked
                compliance activity. That creates the foundation for
                operational visibility and practical decision support over
                time.
              </p>

              <Link
                href="/platform"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#142342] transition hover:text-[#e85d04]"
              >
                Explore the platform
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {/* Track */}
              <div className="rounded-2xl border border-[#dce3ed] bg-[#f8f9fc] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-[#4353a4]" />
                </div>

                <p className="mt-5 text-sm font-bold text-[#142342]">
                  Track
                </p>

                <p className="mt-2 text-xs leading-5 text-[#71809a]">
                  Requirements, renewals, filings, and compliance activity stay
                  organized in one place.
                </p>
              </div>

              {/* Understand */}
              <div className="rounded-2xl border border-[#dce3ed] bg-[#f8f9fc] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Gauge className="h-5 w-5 text-[#4353a4]" />
                </div>

                <p className="mt-5 text-sm font-bold text-[#142342]">
                  Understand
                </p>

                <p className="mt-2 text-xs leading-5 text-[#71809a]">
                  Patterns and recurring issues become easier to see across
                  drivers and vehicles.
                </p>
              </div>

              {/* Act */}
              <div className="rounded-2xl border border-[#dce3ed] bg-[#f8f9fc] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Sparkles className="h-5 w-5 text-[#4353a4]" />
                </div>

                <p className="mt-5 text-sm font-bold text-[#142342]">
                  Act
                </p>

                <p className="mt-2 text-xs leading-5 text-[#71809a]">
                  Compliance information becomes practical guidance for what to
                  look at and what to do next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* DIRECT FILING SUPPORT                                                 */}
      {/* ==================================================================== */}

      <section className="bg-[#f7f8fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <SectionLabel>Direct Filing Support</SectionLabel>

              <h2 className="text-3xl font-black tracking-[-0.035em] text-[#142342] sm:text-4xl">
                Specific filings,
                <br />
                handled case by case.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#687891]">
                For clients already on the Compliance Platform, TruckEase also
                handles filings and registration work that falls outside the
                regular renewal cycle: entity changes, government portal
                updates, one-off amendments, and similar work.
              </p>

              <div className="mt-6 rounded-xl border border-[#e4e8ef] bg-white p-5">
                <div className="flex items-start gap-3">
                  <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[#e85d04]" />

                  <p className="text-xs leading-5 text-[#71809a]">
                    Turnaround times vary depending on the scope and urgency of
                    the work. If you have a deadline, we&apos;ll confirm
                    expected timelines before the engagement begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Filing workflow */}
            <div className="rounded-[24px] border border-[#d9e1ec] bg-white p-6 shadow-[0_16px_40px_rgba(20,35,66,0.05)] sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-[#e5e9ef] pb-5">
                <div>
                  <p className="text-sm font-bold text-[#142342]">
                    Filing Workflow
                  </p>

                  <p className="mt-1 text-xs text-[#7a879b]">
                    A clear process from request to organized records.
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff4ed]">
                  <FileCheck2 className="h-5 w-5 text-[#e85d04]" />
                </div>
              </div>

              <div className="mt-7">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative flex gap-5 pb-7 last:pb-0"
                  >
                    {index < workflowSteps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="absolute left-[19px] top-10 h-[calc(100%-10px)] w-px bg-[#dbe2ed]"
                      />
                    )}

                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f3c4a7] bg-[#fff7f2] text-[9px] font-bold tracking-[0.08em] text-[#e85d04]">
                      {step.number}
                    </div>

                    <div className="pt-2">
                      <p className="text-sm font-bold text-[#142342]">
                        {step.title}
                      </p>

                      {step.number === '01' && (
                        <p className="mt-1 text-xs leading-5 text-[#7a879b]">
                          Send the filing or registration request and relevant
                          information.
                        </p>
                      )}

                      {step.number === '02' && (
                        <p className="mt-1 text-xs leading-5 text-[#7a879b]">
                          We review the scope, requirements, and information
                          needed.
                        </p>
                      )}

                      {step.number === '03' && (
                        <p className="mt-1 text-xs leading-5 text-[#7a879b]">
                          If there is a deadline, expected timing is confirmed
                          before work begins.
                        </p>
                      )}

                      {step.number === '04' && (
                        <p className="mt-1 text-xs leading-5 text-[#7a879b]">
                          The requested filing, amendment, or government portal
                          update is completed.
                        </p>
                      )}

                      {step.number === '05' && (
                        <p className="mt-1 text-xs leading-5 text-[#7a879b]">
                          Completed documentation is organized for your records
                          and future reference.
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CLOSING CTA                                                           */}
      {/* ==================================================================== */}

      {/*
        IMPORTANT:
        SiteFooter is rendered globally by app/layout.tsx.

        This CTA intentionally sits on a LIGHT page background and is contained
        inside its own rounded dark card. This creates a clear visual boundary
        between the end of the Services page and the shared site footer.
      */}

      <section className="bg-white px-6 pb-24 pt-4 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[24px] bg-[#142342] px-7 py-12 shadow-[0_24px_70px_rgba(20,35,66,0.14)] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            {/* Subtle grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Soft orange atmosphere */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-28 -top-32 h-72 w-72 rounded-full bg-[#e85d04]/[0.12] blur-3xl"
            />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-2xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#e85d04]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
                    Get Started
                  </span>
                </div>

                <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl">
                  Build compliance around
                  <br />
                  <span className="text-[#e85d04]">your operation.</span>
                </h2>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                  Whether you&apos;re looking for greater visibility into your
                  compliance position or a more organized way to manage ongoing
                  regulatory requirements, TruckEase is ready to help.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:pb-1">
                <Link
                  href="/risk-screening"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e85d04] px-6 text-sm font-bold text-white shadow-[0_12px_28px_rgba(232,93,4,0.22)] transition hover:-translate-y-0.5 hover:bg-[#d95200]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 bg-transparent px-6 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/[0.05]"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
