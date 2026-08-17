import Link from 'next/link'
import {
  Activity,
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  ClipboardCheck,
  FileCheck2,
  Gauge,
  ShieldCheck,
  Truck,
  Users,
  Wrench,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Shared operational state                                                   */
/* -------------------------------------------------------------------------- */

const dashboardStats = [
  {
    label: 'Fleet Power Units',
    value: '41',
    note: 'Active Fleet Units',
    icon: Truck,
    tone: 'blue',
  },
  {
    label: 'Drivers & Contacts',
    value: '67',
    note: 'Active Driver Pool',
    icon: Users,
    tone: 'green',
  },
  {
    label: 'Critical Deficiencies',
    value: '0',
    note: 'Requires Immediate Action',
    icon: ShieldCheck,
    tone: 'red',
  },
  {
    label: '60-Day Expiry Window',
    value: '4',
    note: 'Renewal Upcoming',
    icon: CalendarDays,
    tone: 'orange',
  },
]

const actionItems = [
  {
    status: 'ACTION REQUIRED',
    statusTone: 'red',
    entity: 'TRK-101',
    title: 'TRK-101 City Plate Renewal',
    description: 'Local Plate Registration expiration tracking',
    module: 'Registration',
    due: '7 days left',
    dueTone: 'red',
  },
  {
    status: 'ACTION REQUIRED',
    statusTone: 'red',
    entity: 'TRK-131',
    title: 'TRK-131 — NY OSOW Permit',
    description: 'NY OSOW Permit Renewal Required',
    module: 'Permit',
    due: '12 days left',
    dueTone: 'red',
  },
  {
    status: 'NEEDS ATTENTION',
    statusTone: 'orange',
    entity: 'TRK-138',
    title: 'TRK-138 Annual Inspection',
    description: 'Annual inspection requirement and renewal tracking',
    module: 'Inspection',
    due: '23 days left',
    dueTone: 'orange',
  },
]

const recentActivity = [
  {
    title: 'SCAC Renewal',
    status: 'Completed',
  },
  {
    title: 'MCS-150 Biennial Update',
    status: 'Completed',
  },
  {
    title: 'US Carrier Bonded Application',
    status: 'Completed',
  },
]

const platformCapabilities = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Continuous Compliance Monitoring',
    description:
      'Registrations, renewals, licensing requirements, and required filings are monitored continuously so important dates and obligations do not depend on someone remembering to check them.',
  },
  {
    number: '02',
    icon: FileCheck2,
    title: 'Organized Compliance Records',
    description:
      'Compliance records stay connected to the requirements they support, making it easier to understand what has been completed, what is approaching, and what still needs attention.',
  },
  {
    number: '03',
    icon: Activity,
    title: 'Operational Insights',
    description:
      'The platform brings recurring patterns across drivers, vehicles, inspections, and compliance activity into view so issues can be addressed before they become larger operational problems.',
  },
  {
    number: '04',
    icon: Gauge,
    title: 'Practical Decision Support',
    description:
      'Compliance information is evaluated against regulatory requirements and operational rules to help your team understand what deserves attention and what action comes next.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    body: 'Understand your operation, requirements, and current compliance position.',
    icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'Assess',
    body: 'Review records, requirements, deadlines, and areas where attention is needed.',
    icon: Gauge,
  },
  {
    number: '03',
    title: 'Implement',
    body: 'Address identified gaps and organize the work required to keep your operation moving.',
    icon: FileCheck2,
  },
  {
    number: '04',
    title: 'Monitor',
    body: 'Continuously track requirements and surface changes before they become operational problems.',
    icon: Activity,
  },
  {
    number: '05',
    title: 'Support',
    body: 'Get practical human support when your business needs help navigating what comes next.',
    icon: ShieldCheck,
  },
]

/* -------------------------------------------------------------------------- */
/* Small helpers                                                              */
/* -------------------------------------------------------------------------- */

function statTone(tone: string) {
  switch (tone) {
    case 'green':
      return {
        icon: 'bg-[#eefaf5] text-[#07845c]',
        value: 'text-[#142342]',
      }
    case 'red':
      return {
        icon: 'bg-[#fff0f2] text-[#e3364e]',
        value: 'text-[#d9233f]',
      }
    case 'orange':
      return {
        icon: 'bg-[#fff7ef] text-[#d8610c]',
        value: 'text-[#142342]',
      }
    default:
      return {
        icon: 'bg-[#eef2ff] text-[#4353a4]',
        value: 'text-[#142342]',
      }
  }
}

function statusClasses(tone: string) {
  if (tone === 'red') {
    return 'border-[#ffb6c1] bg-[#fff2f4] text-[#e3364e]'
  }

  return 'border-[#f4d18f] bg-[#fff9ed] text-[#c56a00]'
}

function dueClasses(tone: string) {
  if (tone === 'red') {
    return 'text-[#e3364e]'
  }

  return 'text-[#c56a00]'
}

/* -------------------------------------------------------------------------- */
/* Compliance score                                                           */
/* -------------------------------------------------------------------------- */

function ComplianceScore() {
  const percentage = 76
  const radius = 43
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - percentage / 100)

  return (
    <div className="relative h-[108px] w-[108px] shrink-0">
      <svg
        viewBox="0 0 110 110"
        className="h-full w-full"
        role="img"
        aria-label="76 percent compliance score"
      >
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#2b3a59"
          strokeWidth="8"
        />

        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#38d39f"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 55 55)"
        />

        <circle
          cx="55"
          cy="12"
          r="2.2"
          fill="#f57019"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[25px] font-black tracking-[-0.05em] text-white">
          76%
        </span>

        <span className="mt-1 text-center text-[8px] leading-3 text-[#9ba9c0]">
          Compliance
          <br />
          Score
        </span>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Detailed workspace dashboard                                               */
/* -------------------------------------------------------------------------- */

function FleetComplianceWorkspace() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#d7deea] bg-white shadow-[0_30px_90px_rgba(20,35,66,0.12)]">
      {/* Workspace header */}
      <div className="relative overflow-hidden bg-[#0d1831] px-5 py-5 sm:px-7 sm:py-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full bg-[#46598f]/20 blur-3xl"
        />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#f57019] px-3 py-1 text-[9px] font-black uppercase tracking-[0.06em] text-white">
                Motor Carrier Active
              </span>

              <span className="text-[10px] font-semibold text-white/55">
                Compliance workspace
              </span>
            </div>

            <h3 className="mt-3 text-[24px] font-black tracking-[-0.035em] text-white sm:text-[28px]">
              Fleet Compliance Workspace
            </h3>

            <p className="mt-1 text-[12px] leading-5 text-[#aab6c9]">
              One workspace for requirements, records, and upcoming actions.
            </p>
          </div>

          <div className="flex items-center gap-5 rounded-2xl border border-[#31466f] bg-[#162340] px-5 py-3">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8797b3]">
                Compliance Score
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-[29px] font-black leading-none text-white">
                  76%
                </span>

                <span className="h-2.5 w-2.5 rounded-full bg-[#38d39f]" />
              </div>
            </div>

            <div className="h-10 w-px bg-[#31405e]" />

            <div className="space-y-1.5 text-[9px]">
              <div className="flex items-center gap-2 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5470]" />
                Action Required: <strong className="text-white">2</strong>
              </div>

              <div className="flex items-center gap-2 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb21a]" />
                Needs Attention: <strong className="text-white">1</strong>
              </div>

              <div className="flex items-center gap-2 text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-[#38d39f]" />
                On Track: <strong className="text-white">4</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="bg-[#f7f9fc] p-4 sm:p-6">
        {/* KPI cards */}
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => {
            const Icon = stat.icon
            const tone = statTone(stat.tone)

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#dce3ed] bg-white p-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#74829a]">
                      {stat.label}
                    </p>

                    <p
                      className={`mt-5 text-[27px] font-black leading-none tracking-[-0.04em] ${tone.value}`}
                    >
                      {stat.value}
                    </p>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${tone.icon}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                </div>

                <p className="mt-3 text-[9px] font-medium text-[#7b879c]">
                  {stat.note}
                </p>
              </div>
            )
          })}
        </div>

        {/* Main workspace */}
        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_255px]">
          {/* Action table */}
          <div className="overflow-hidden rounded-2xl border border-[#dce3ed] bg-white">
            <div className="flex flex-col gap-3 border-b border-[#e4e9f0] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <CircleAlert className="h-4 w-4 text-[#f57019]" />

                  <h4 className="text-[13px] font-bold text-[#142342]">
                    Compliance Action Items &amp; Expiration Alerts
                  </h4>
                </div>

                <p className="mt-1 text-[10px] text-[#7b879c]">
                  Monitored permits, registrations, and inspections sorted by urgency.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-[#bfd2ff] bg-[#f5f8ff] px-3 py-2 text-[9px] font-bold text-[#4353a4] transition hover:bg-[#edf3ff]"
              >
                <FileCheck2 className="h-3.5 w-3.5" />
                Upload Document to Clear Alert
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-[#e4e9f0] bg-[#fafbfc] text-left">
                    <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-[#6f7d95]">
                      Status
                    </th>

                    <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-[#6f7d95]">
                      Entity / Unit
                    </th>

                    <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-[#6f7d95]">
                      Requirement / Alert Title
                    </th>

                    <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-[#6f7d95]">
                      Module
                    </th>

                    <th className="px-4 py-3 text-[8px] font-bold uppercase tracking-[0.12em] text-[#6f7d95]">
                      Days Left / Due
                    </th>

                    <th className="px-4 py-3 text-right text-[8px] font-bold uppercase tracking-[0.12em] text-[#6f7d95]">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {actionItems.map((item) => (
                    <tr
                      key={item.entity}
                      className="border-b border-[#e8edf3] last:border-0"
                    >
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-full border px-2 py-1 text-[7px] font-black tracking-[0.04em] ${statusClasses(
                            item.statusTone,
                          )}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              item.statusTone === 'red'
                                ? 'bg-[#ff5470]'
                                : 'bg-[#ffb21a]'
                            }`}
                          />
                          {item.status}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-[10px] font-bold text-[#142342]">
                        {item.entity}
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-[10px] font-bold text-[#142342]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[8px] leading-4 text-[#7b879c]">
                          {item.description}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <span className="inline-flex rounded-full border border-[#dbe2ec] bg-[#f8fafc] px-2 py-1 text-[7px] font-semibold text-[#687790]">
                          {item.module}
                        </span>
                      </td>

                      <td
                        className={`px-4 py-4 text-[9px] font-bold ${dueClasses(
                          item.dueTone,
                        )}`}
                      >
                        {item.due}
                      </td>

                      <td className="px-4 py-4 text-right">
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 rounded-lg bg-[#f0f4ff] px-2.5 py-1.5 text-[8px] font-bold text-[#4353a4] transition hover:bg-[#e7edff]"
                        >
                          Resolve
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-5 py-3 text-[8px] text-[#8995a8]">
              Illustrative operational data shown for demonstration purposes.
            </div>
          </div>

          {/* Score / activity side */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-[#dce3ed] bg-[#0d1831] p-5">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-[#92a0b8]">
                  Overall Position
                </p>

                <Gauge className="h-4 w-4 text-[#38d39f]" />
              </div>

              <div className="mt-3 flex items-center justify-center">
                <ComplianceScore />
              </div>

              <div className="mt-1 text-center">
                <p className="text-[9px] font-semibold text-[#38d39f]">
                  ↑ 6% vs last 30 days
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#dce3ed] bg-white p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[#4353a4]" />

                  <h4 className="text-[11px] font-bold text-[#142342]">
                    Recent Activity
                  </h4>
                </div>

                <span className="text-[8px] font-semibold text-[#4353a4]">
                  View all
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {recentActivity.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eefaf5]">
                      <CheckCircle2 className="h-3 w-3 text-[#07845c]" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold leading-4 text-[#263654]">
                        {item.title}
                      </p>

                      <p className="mt-0.5 text-[8px] font-semibold text-[#07845c]">
                        {item.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Workspace footer indicators */}
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-[#dce3ed] bg-white p-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-[#07845c]" />
              <span className="text-[10px] font-bold text-[#142342]">
                On Track
              </span>
            </div>

            <p className="mt-2 text-[9px] leading-4 text-[#7b879c]">
              Requirements currently within their expected compliance window.
            </p>
          </div>

          <div className="rounded-2xl border border-[#f1d69f] bg-[#fffaf0] p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-[#d88a00]" />
              <span className="text-[10px] font-bold text-[#142342]">
                Needs Attention
              </span>
            </div>

            <p className="mt-2 text-[9px] leading-4 text-[#7b879c]">
              Items approaching their renewal or inspection window.
            </p>
          </div>

          <div className="rounded-2xl border border-[#ffb8c2] bg-[#fff3f5] p-4">
            <div className="flex items-center gap-2">
              <CircleAlert className="h-4 w-4 text-[#e3364e]" />
              <span className="text-[10px] font-bold text-[#142342]">
                Action Required
              </span>
            </div>

            <p className="mt-2 text-[9px] leading-4 text-[#7b879c]">
              Renewal activity within 15 days is surfaced as urgent.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function PlatformPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8fb] text-[#142342]">
      {/* ==================================================================== */}
      {/* HERO                                                                 */}
      {/* ==================================================================== */}

      <section className="relative overflow-hidden bg-[#0d1831]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#405486]/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-[-240px] h-[520px] w-[520px] rounded-full bg-[#f57019]/[0.045] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                The TruckEase Platform
              </span>
            </div>

            <h1 className="max-w-4xl text-[46px] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-[58px] lg:text-[72px]">
              Complete Operational Visibility
              <br />
              <span className="text-[#f57019]">
                &amp; Compliance Tracking.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[#aeb9ca] sm:text-[17px]">
              Monitor regulatory standing, manage filings, and maintain
              continuously updated oversight across your entire operation from
              a single compliance workspace.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/risk-screening"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#f57019] px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(245,112,25,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e8650e]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white transition hover:bg-white/[0.08]"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#74839d]">
            <span className="h-px w-8 bg-[#43516d]" />
            One compliance workspace
            <span className="h-1 w-1 rounded-full bg-[#f57019]" />
            Continuous operational visibility
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* WORKSPACE                                                            */}
      {/* ==================================================================== */}

      <section className="relative bg-[#f1f4f9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-220px] top-20 h-[480px] w-[480px] rounded-full bg-[#dce5ff]/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-220px] top-40 h-[480px] w-[480px] rounded-full bg-[#f7dfd1]/45 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            {/* Left explanation */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#f57019]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                  Platform Overview
                </span>
              </div>

              <h2 className="max-w-[460px] text-[42px] font-black leading-[0.98] tracking-[-0.045em] text-[#142342] sm:text-[48px]">
                From Compliance Data{' '}
                <span className="text-[#f57019]">
                  to Operational Clarity.
                </span>
              </h2>

              <p className="mt-7 max-w-[470px] text-[16px] leading-7 text-[#60708f]">
                A single compliance workspace that connects requirements,
                records, deadlines, and monitoring activity — so your team can
                see what needs attention and what comes next.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#142342] text-white shadow-[0_8px_20px_rgba(20,35,66,0.15)]">
                  <Gauge className="h-4 w-4" />
                </div>

                <div className="h-px w-10 bg-[#c7d1e1]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#71809a]">
                  One Compliance Workspace
                </span>
              </div>
            </div>

            {/* Dashboard */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-7 rounded-[40px] bg-[radial-gradient(circle_at_55%_45%,rgba(66,81,137,0.16),rgba(245,112,25,0.045),transparent_70%)] blur-2xl"
              />

              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[30px] border border-[#d4dce8]/70 bg-white/45 shadow-[0_30px_90px_rgba(29,42,76,0.08)]"
              />

              <div className="relative">
                <FleetComplianceWorkspace />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CAPABILITIES                                                         */}
      {/* ==================================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                More Than Filing Paperwork
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
              Compliance is stronger when{' '}
              <span className="text-[#f57019]">
                everything stays connected.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-[#65748d]">
              TruckEase connects the requirements, records, deadlines, and
              operational signals that are difficult to manage when compliance
              is spread across spreadsheets, inboxes, folders, and memory.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {platformCapabilities.map((capability) => {
              const Icon = capability.icon

              return (
                <article
                  key={capability.number}
                  className="group relative rounded-2xl border border-[#dce3ed] bg-white p-6 shadow-[0_8px_28px_rgba(20,35,66,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#c8d2e2] hover:shadow-[0_18px_40px_rgba(20,35,66,0.07)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef2ff] text-[#4353a4]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-[9px] font-bold tracking-[0.12em] text-[#a3afc2]">
                      {capability.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-[15px] font-bold leading-5 tracking-[-0.02em] text-[#142342]">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#697890]">
                    {capability.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-[#edf0f4]" />

                  <div className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#8793a8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#f57019]" />
                    Built into the workspace
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* HOW THE PLATFORM WORKS                                               */}
      {/* ==================================================================== */}

      <section className="border-y border-[#e0e5ed] bg-[#f7f8fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                Our Process
              </span>

              <span className="h-px w-8 bg-[#f57019]" />
            </div>

            <h2 className="text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#142342] sm:text-5xl">
              A clearer path to{' '}
              <span className="text-[#f57019]">
                compliance confidence.
              </span>
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#687790]">
              A practical process designed to move from understanding your
              position to maintaining confidence in your operation.
            </p>
          </div>

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute left-[9%] right-[9%] top-6 hidden h-px bg-[#d3dbe8] lg:block"
            />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {processSteps.map((step) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.number}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7dfeb] bg-white shadow-[0_7px_22px_rgba(20,35,66,0.08)]">
                      <Icon className="h-4.5 w-4.5 text-[#4353a4]" />
                    </div>

                    <span className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#f57019]">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-[14px] font-bold text-[#142342]">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[180px] text-[11px] leading-5 text-[#6d7b92]">
                      {step.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* WHY THE DATA MATTERS                                                 */}
      {/* ==================================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#f57019]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                  Built as a System
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
                The value grows as{' '}
                <span className="text-[#f57019]">
                  the data grows.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#687790]">
                A compliance platform becomes more useful when requirements,
                records, deadlines, inspections, and operational activity stay
                connected over time. That accumulated context helps surface
                patterns that are difficult to see one record at a time.
              </p>

              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#142342] transition hover:text-[#f57019]"
              >
                Explore our services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#dce3ed] bg-[#f8f9fc] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Truck className="h-4.5 w-4.5 text-[#4353a4]" />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#142342]">
                  Track
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#71809a]">
                  Requirements, renewals, inspections, and compliance activity
                  stay organized in one place.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dce3ed] bg-[#f8f9fc] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Wrench className="h-4.5 w-4.5 text-[#4353a4]" />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#142342]">
                  Understand
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#71809a]">
                  Patterns and recurring issues become easier to see across
                  vehicles, inspections, and drivers.
                </p>
              </div>

              <div className="rounded-2xl border border-[#dce3ed] bg-[#f8f9fc] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#4353a4]" />
                </div>

                <h3 className="mt-5 text-sm font-bold text-[#142342]">
                  Act
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-[#71809a]">
                  Compliance information becomes practical guidance for what
                  deserves attention and what to do next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CTA                                                                  */}
      {/* ==================================================================== */}

      <section className="bg-[#f7f8fb]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="relative overflow-hidden rounded-[24px] bg-[#0d1831] px-7 py-9 shadow-[0_25px_65px_rgba(20,35,66,0.14)] sm:px-10 sm:py-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#43568e]/20 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#f57019]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                    Get Started
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                  Build compliance with confidence.
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-[#aab6c9]">
                  Whether you are looking for greater visibility into your
                  compliance position or a more organized way to manage
                  regulatory requirements, TruckEase is ready to help.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/risk-screening"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#f57019] px-5 text-[12px] font-bold text-white transition hover:bg-[#e8650e]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 text-[12px] font-bold text-white transition hover:bg-white/[0.08]"
                >
                  Contact Our Team
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
