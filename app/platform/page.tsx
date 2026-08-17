// app/platform/page.tsx

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react'

const platformBenefits = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Proactive, continuously tracked compliance',
    description:
      'Requirements monitored on an ongoing basis so gaps surface early.',
  },
  {
    number: '02',
    icon: Gauge,
    title: 'Cross-border regulatory knowledge',
    description:
      'Experience spanning requirements across the United States and Canada.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'Technology-first compliance platform',
    description:
      'Built for ongoing operational visibility, not periodic paperwork.',
  },
  {
    number: '04',
    icon: FileCheck2,
    title: 'Organized, accessible documents',
    description:
      'Records retained with appropriate access controls and activity tracking.',
  },
  {
    number: '05',
    icon: Users,
    title: 'Practical ongoing support',
    description:
      'A person to help when a system alone is not enough.',
  },
  {
    number: '06',
    icon: CheckCircle2,
    title: 'Long-term compliance confidence',
    description:
      'Support that adapts as regulations evolve and your business grows.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    body: 'We begin by understanding your operation and current compliance requirements.',
  },
  {
    number: '02',
    title: 'Assess',
    body: 'We review your current compliance records, documentation, and regulatory standing.',
  },
  {
    number: '03',
    title: 'Implement',
    body: 'We handle the registrations, renewals, and documentation required to keep your operation compliant.',
  },
  {
    number: '04',
    title: 'Monitor',
    body: 'The platform continues tracking your compliance activity, flagging what needs attention as it comes up, not after the fact.',
  },
  {
    number: '05',
    title: 'Support',
    body: 'As regulations evolve and your business grows, we remain available to help you navigate what’s next.',
  },
]

const actionItems = [
  {
    status: 'Action Required',
    statusTone: 'danger',
    entity: 'TRK-101',
    title: 'TRK-101 City Plate Renewal',
    description: 'Local plate registration expiration tracking',
    module: 'Registration',
    due: '7 days left',
  },
  {
    status: 'Action Required',
    statusTone: 'danger',
    entity: 'TRK-131',
    title: 'TRK-131 — NY OSOW Permit',
    description: 'NY OSOW Permit Renewal Required',
    module: 'Permit',
    due: '12 days left',
  },
  {
    status: 'Needs Attention',
    statusTone: 'warning',
    entity: 'TRK-138',
    title: 'TRK-138 Annual Inspection',
    description: 'Annual inspection requirement and renewal tracking',
    module: 'Inspection',
    due: '23 days left',
  },
]

function dashboardStatusClasses(tone: string) {
  if (tone === 'danger') {
    return {
      badge: 'border-[#ff5470]/35 bg-[#ff5470]/10 text-[#ff5470]',
      dot: 'bg-[#ff5470]',
      due: 'text-[#ff5470]',
    }
  }

  return {
    badge: 'border-[#ffb21a]/35 bg-[#ffb21a]/10 text-[#ffb21a]',
    dot: 'bg-[#ffb21a]',
    due: 'text-[#ffb21a]',
  }
}

function PlatformDashboard() {
  return (
    <div className="relative rounded-[18px] border border-[#dbe2ec] bg-[#f8fafc] p-3 shadow-[0_28px_80px_rgba(20,35,66,0.12)] sm:p-5">
      <div className="rounded-[14px] border border-[#dce3ed] bg-white">
        {/* Company header */}
        <div className="border-b border-[#e3e7ee] bg-[#0c1a36] px-5 py-5 text-white sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#e8720c] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide">
                  Motor Carrier Active
                </span>

                <span className="text-[10px] font-medium text-[#d5dbea]">
                  Compliance workspace
                </span>
              </div>

              <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                Fleet Compliance Workspace
              </h3>

              <p className="mt-1 text-xs text-[#aebbd0]">
                One operational view for requirements, records, and upcoming
                actions.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-5 rounded-xl border border-[#30466f] bg-[#142342] px-5 py-3">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8fa1bf]">
                  Compliance Score
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="text-2xl font-bold">76%</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#35d39b]" />
                </div>
              </div>

              <div className="h-10 w-px bg-[#30466f]" />

              <div className="space-y-1 text-[9px]">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff5470]" />
                  <span className="text-[#d9e0ec]">Action Required:</span>
                  <strong>2</strong>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ffb21a]" />
                  <span className="text-[#d9e0ec]">Needs Attention:</span>
                  <strong>1</strong>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#35d39b]" />
                  <span className="text-[#d9e0ec]">On Track:</span>
                  <strong>4</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-[#dfe5ee] bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#687791]">
                Fleet Power Units
              </span>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#eef3ff] text-[#4353a4]">
                <Truck className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <strong className="text-2xl font-bold text-[#0c1a36]">41</strong>
              <span className="text-[9px] font-medium text-[#64728a]">
                Active Fleet Units
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#dfe5ee] bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#687791]">
                Drivers &amp; Contacts
              </span>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#edf9f3] text-[#16845d]">
                <Users className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <strong className="text-2xl font-bold text-[#0c1a36]">67</strong>
              <span className="text-[9px] font-medium text-[#16845d]">
                Active Driver Pool
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#ffb7c0] bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#d51e3a]">
                Critical Deficiencies
              </span>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff0f2] text-[#e11d3f]">
                <AlertTriangle className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <strong className="text-2xl font-bold text-[#d51e3a]">0</strong>
              <span className="text-[9px] font-medium text-[#d51e3a]">
                Requires Immediate Action
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#f0d37b] bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b76b00]">
                60-Day Expiry Window
              </span>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fff8e8] text-[#bd7100]">
                <AlertTriangle className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between">
              <strong className="text-2xl font-bold text-[#b76b00]">4</strong>
              <span className="text-[9px] font-medium text-[#b76b00]">
                Renewal Upcoming
              </span>
            </div>
          </div>
        </div>

        {/* Action table */}
        <div className="mx-4 mb-4 overflow-hidden rounded-xl border border-[#dfe5ee] bg-white">
          <div className="flex flex-col gap-3 border-b border-[#e3e7ee] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-[#e8720c]" />

                <h4 className="text-sm font-bold text-[#0c1a36]">
                  Compliance Action Items &amp; Expiration Alerts
                </h4>
              </div>

              <p className="mt-1 text-[10px] text-[#687791]">
                Monitored permits, registrations, and inspections sorted by
                urgency.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-[#bcd0ff] bg-[#f5f8ff] px-3 py-2 text-[10px] font-semibold text-[#3658b4] transition hover:bg-[#eef3ff]"
            >
              <FileCheck2 className="h-3.5 w-3.5" />
              Upload Document to Clear Alert
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#e3e7ee] bg-[#f8fafc]">
                  <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.1em] text-[#52617a]">
                    Status
                  </th>

                  <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.1em] text-[#52617a]">
                    Entity / Unit
                  </th>

                  <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.1em] text-[#52617a]">
                    Requirement / Alert Title
                  </th>

                  <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.1em] text-[#52617a]">
                    Module
                  </th>

                  <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.1em] text-[#52617a]">
                    Days Left / Due
                  </th>

                  <th className="px-4 py-3 text-right text-[8px] font-bold uppercase tracking-[0.1em] text-[#52617a]">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {actionItems.map((item) => {
                  const styles = dashboardStatusClasses(item.statusTone)

                  return (
                    <tr
                      key={item.entity}
                      className="border-b border-[#e8ebf0] last:border-b-0"
                    >
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[8px] font-bold uppercase ${styles.badge}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
                          />
                          {item.status}
                        </span>
                      </td>

                      <td className="px-4 py-3 text-[10px] font-bold text-[#142342]">
                        {item.entity}
                      </td>

                      <td className="px-4 py-3">
                        <p className="text-[10px] font-semibold text-[#142342]">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-[8px] text-[#687791]">
                          {item.description}
                        </p>
                      </td>

                      <td className="px-4 py-3">
                        <span className="rounded-md border border-[#dfe5ee] bg-[#f8fafc] px-2 py-1 text-[8px] font-medium text-[#52617a]">
                          {item.module}
                        </span>
                      </td>

                      <td
                        className={`px-4 py-3 text-[9px] font-bold ${styles.due}`}
                      >
                        {item.due}
                      </td>

                      <td className="px-4 py-3 text-right">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded-md bg-[#eef3ff] px-2.5 py-1.5 text-[8px] font-bold text-[#3658b4]"
                        >
                          Resolve
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="px-5 pb-4 text-[8px] leading-4 text-[#7a8799]">
          Interface concept. Illustrative data shown for demonstration
          purposes.
        </p>
      </div>
    </div>
  )
}

export default function PlatformPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#0c1a36] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(68,91,155,0.28),transparent_42%),radial-gradient(circle_at_15%_80%,rgba(232,114,12,0.07),transparent_35%)]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e8720c]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8720c]">
                The TruckEase Platform
              </span>
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              Complete Operational Visibility
              <br />
              <span className="text-[#e8720c]">
                &amp; Compliance Tracking
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b8c4d8] sm:text-base">
              Monitor regulatory standing, manage filings, and maintain
              continuously-updated oversight across your entire operation from
              a single unified portal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/risk-screening"
                className="inline-flex items-center gap-2 rounded-xl bg-[#e8720c] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(232,114,12,0.22)] transition hover:bg-[#d96508]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#platform-overview"
                className="inline-flex items-center gap-2 rounded-xl border border-[#52627e] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
              >
                Explore the Platform
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />
              <span className="h-px w-8 bg-[#52627e]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8795ad]">
                Built for trucking operations across the United States and
                Canada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* OPERATIONAL OVERVIEW                                               */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="platform-overview"
        className="relative overflow-hidden bg-[#f5f7fb]"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#dce5ff]/40 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-[#f5dfd0]/35 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#e8720c]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e8720c]">
                  Platform Overview
                </span>
              </div>

              <h2 className="mt-5 max-w-md text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-[#142342] sm:text-4xl">
                From
                <br />
                Compliance Data
                <br />
                <span className="text-[#e8720c]">
                  to Operational Clarity.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#66758d]">
                A single view that connects requirements, deadlines,
                documents, and monitoring activity, then points to the next
                action worth taking.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#142342] text-white">
                  <Gauge className="h-4 w-4" />
                </div>

                <span className="h-px w-10 bg-[#c7d1e1]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#697990]">
                  One operational view
                </span>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_55%_45%,rgba(66,81,137,0.18),rgba(245,112,25,0.05),transparent_70%)] blur-2xl"
              />

              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[32px] border border-[#d6ddea]/70 bg-white/40 shadow-[0_30px_90px_rgba(29,42,76,0.10)] backdrop-blur-[2px]"
              />

              <div className="relative">
                <PlatformDashboard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MORE THAN FILING PAPERWORK                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#e8720c]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e8720c]">
                More Than Filing Paperwork
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#142342] sm:text-4xl">
              Compliance is stronger when{' '}
              <span className="text-[#e8720c]">
                everything stays connected.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#66758d]">
              Businesses choose TruckEase because compliance requires more than
              filing paperwork. It requires consistency, attention to detail,
              and technology built to catch what manual tracking misses.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {platformBenefits.map((benefit) => {
              const Icon = benefit.icon

              return (
                <article
                  key={benefit.number}
                  className="group rounded-2xl border border-[#dce3ed] bg-[#fdfcf9] p-5 transition hover:-translate-y-0.5 hover:border-[#cbd5e4] hover:shadow-[0_16px_35px_rgba(20,35,66,0.07)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#dbe3ff] bg-[#f1f4ff] text-[#4353a4]">
                      <Icon className="h-4 w-4" />
                    </div>

                    <span className="text-[8px] font-bold tracking-[0.14em] text-[#a4afc0]">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-sm font-bold tracking-tight text-[#142342]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#69778e]">
                    {benefit.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* OUR PROCESS                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden bg-[#f7f4ee]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c6bdad] to-transparent"
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#e8720c]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e8720c]">
                Our Process
              </span>

              <span className="h-px w-7 bg-[#e8720c]" />
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.035em] text-[#142342] sm:text-4xl">
              A Clearer Path to{' '}
              <span className="text-[#e8720c]">Compliance Confidence.</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-[#66758d]">
              A practical process designed to move from understanding your
              position to maintaining confidence in your operation.
            </p>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-[#d8d0c2] via-[#9b9b9b] to-[#d8d0c2] lg:block"
            />

            <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe2ef] bg-white shadow-[0_6px_20px_rgba(20,35,66,0.08)]">
                    <span className="text-xs font-bold text-[#4353a4]">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-[#142342]">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[190px] text-xs leading-5 text-[#66758d]">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CLOSING CTA                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="relative overflow-hidden rounded-[20px] bg-[#0c1a36] px-6 py-8 text-white shadow-[0_24px_70px_rgba(12,26,54,0.16)] sm:px-8 lg:px-10">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_50%,rgba(70,92,158,0.26),transparent_65%)]"
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#e8720c]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e8720c]">
                    Get Started
                  </span>
                </div>

                <h2 className="mt-3 text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
                  Build Compliance With Confidence.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#b7c3d6]">
                  Whether you&apos;re looking for greater visibility into your
                  compliance position or a more organized way to manage ongoing
                  regulatory requirements, TruckEase is ready to help.
                </p>
              </div>

              <div className="relative flex shrink-0 flex-wrap gap-3">
                <a
                  href="/risk-screening"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#e8720c] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#d96508]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#52627e] px-5 py-3 text-xs font-bold text-white transition hover:bg-white/[0.06]"
                >
                  Contact Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
