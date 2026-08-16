import {
  Activity,
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  FileCheck2,
  Gauge,
  Info,
  Radar,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

/* -------------------------------------------------------------------------- */
/* Dashboard                                                                  */
/* -------------------------------------------------------------------------- */

const complianceItems = [
  {
    icon: CircleAlert,
    title: 'Hours of Service',
    status: 'Needs Attention',
    value: '77%',
    tone: 'danger',
  },
  {
    icon: Wrench,
    title: 'Vehicle Maintenance Record',
    status: 'Needs Attention',
    value: '81%',
    tone: 'warning',
  },
  {
    icon: Info,
    title: 'IRP Fleet Renewal',
    status: 'On Track',
    value: 'Application Submitted',
    tone: 'info',
  },
  {
    icon: CheckCircle2,
    title: 'SCAC Renewal',
    status: 'Completed',
    value: '100%',
    tone: 'success',
  },
  {
    icon: CheckCircle2,
    title: 'MCS-150 Biannual Update',
    status: 'Completed',
    value: '100%',
    tone: 'success',
  },
]

const upcomingTasks = [
  {
    label: 'Annual Inspection – Unit T104',
    value: '21 Days',
    tone: 'danger',
  },
  {
    label: 'Schedule Maintenance – T134',
    value: '36 Days',
    tone: 'warning',
  },
  {
    label: 'IFTA Filing',
    value: '41 Days',
    tone: 'warning',
  },
]

const recentActivity = [
  {
    label: 'MCS-150 Biannual Update',
    date: 'June 19',
  },
  {
    label: 'SCAC Renewal',
    date: 'June 10',
  },
  {
    label: 'US Bonded Carrier App.',
    date: 'June 02',
  },
]

const atRiskItems = [
  {
    label: '1 Trailer Inspection Expiring in 4 days',
    detail: 'Reminder sent 8',
  },
  {
    label: '2 Driver Files Expiring in 12 days',
    detail: 'Reminders sent 5',
  },
]

function statusColor(tone: string) {
  switch (tone) {
    case 'danger':
      return 'text-[#ff5470]'
    case 'warning':
      return 'text-[#ffb21a]'
    case 'success':
      return 'text-[#00d79b]'
    default:
      return 'text-[#38bdf8]'
  }
}

function statusDot(tone: string) {
  switch (tone) {
    case 'danger':
      return 'bg-[#ff5470]'
    case 'warning':
      return 'bg-[#ffb21a]'
    case 'success':
      return 'bg-[#00d79b]'
    default:
      return 'bg-[#38bdf8]'
  }
}

function Dashboard() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#26334d] bg-[#080e1b] p-4 shadow-[0_35px_90px_rgba(12,23,48,0.22)] sm:p-6">
      {/* very subtle twilight atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5b6cae]/10 blur-3xl"
      />

      <div className="relative">
        {/* Dashboard heading */}
        <div className="flex items-center justify-between border-b border-[#202c42] pb-4">
          <div>
            <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">
              Compliance Overview
            </h3>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#00d79b]/25 bg-[#00d79b]/10 px-3 py-1 text-[9px] font-semibold text-[#00d79b] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00d79b]" />
            Active Monitoring
          </div>
        </div>

        {/* Main dashboard row */}
        <div className="mt-4 grid gap-3 lg:grid-cols-[245px_1fr]">
          {/* Compliance score */}
          <div className="rounded-xl border border-[#26334d] bg-[#0e1627] p-5 sm:p-6">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="relative h-36 w-36">
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full"
                  aria-label="76 percent overall compliance position"
                >
                  {/* track */}
                  <circle
                    cx="60"
                    cy="60"
                    r="47"
                    fill="none"
                    stroke="#22304a"
                    strokeWidth="9"
                  />

                  {/* progress
                      Circle begins at 12 o'clock naturally.
                      rotate(180) moves the beginning to 9 o'clock.
                      Positive stroke direction remains clockwise. */}
                  <circle
                    cx="60"
                    cy="60"
                    r="47"
                    fill="none"
                    stroke="#00d79b"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeDasharray="295.31"
                    strokeDashoffset="70.87"
                    transform="rotate(180 60 60)"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold tracking-tight text-white">
                    76%
                  </span>
                  <span className="mt-0.5 text-[9px] leading-3 text-[#a9b5c9]">
                    Overall
                    <br />
                    Compliance
                    <br />
                    Position
                  </span>
                </div>
              </div>

              <div className="mt-2 text-[9px] font-medium text-[#00d79b]">
                ↑ 6% vs last 30 days
              </div>
            </div>
          </div>

          {/* Compliance status list */}
          <div className="space-y-2">
            {complianceItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group flex min-h-[43px] items-center gap-3 rounded-xl border border-[#26334d] bg-[#0e1627] px-3 transition-colors hover:border-[#34445f]"
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${statusColor(item.tone)}`}
                    strokeWidth={2}
                  />

                  <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-[#edf2fa] sm:text-[11px]">
                    {item.title}
                  </span>

                  <span
                    className={`text-[9px] font-semibold ${statusColor(
                      item.tone,
                    )}`}
                  >
                    {item.status}
                  </span>

                  <span className="text-[10px] font-bold text-white">
                    {item.value}
                  </span>

                  <ArrowRight className="h-3 w-3 text-[#52627c]" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Lower dashboard cards */}
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {/* Upcoming */}
          <div className="rounded-xl border border-[#26334d] bg-[#0e1627] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5 text-[#a9b5c9]" />
                <span className="text-[10px] font-semibold text-white">
                  Upcoming Tasks
                </span>
              </div>

              <span className="text-[8px] font-semibold text-[#38bdf8]">
                View all
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              {upcomingTasks.map((task) => (
                <div
                  key={task.label}
                  className="flex items-center gap-2 text-[8px]"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${statusDot(
                      task.tone,
                    )}`}
                  />

                  <span className="min-w-0 flex-1 truncate text-[#d7dfed]">
                    {task.label}
                  </span>

                  <span
                    className={`font-semibold ${statusColor(task.tone)}`}
                  >
                    {task.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl border border-[#26334d] bg-[#0e1627] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock3 className="h-3.5 w-3.5 text-[#a9b5c9]" />
                <span className="text-[10px] font-semibold text-white">
                  Recent Activity
                </span>
              </div>

              <span className="text-[8px] font-semibold text-[#38bdf8]">
                View all
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              {recentActivity.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-[8px]"
                >
                  <CheckCircle2 className="h-3 w-3 text-[#00d79b]" />

                  <span className="min-w-0 flex-1 truncate text-[#d7dfed]">
                    {item.label}
                  </span>

                  <span className="font-semibold text-[#00d79b]">
                    Completed
                  </span>

                  <span className="text-[#66758d]">{item.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* At risk */}
          <div className="rounded-xl border border-[#8f2443]/70 bg-[#1a101a] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-3.5 w-3.5 text-[#ff5470]" />
                <span className="text-[10px] font-semibold text-[#ff5470]">
                  At Risk
                </span>
              </div>

              <span className="text-[8px] font-semibold text-[#ff5470]">
                View all
              </span>
            </div>

            <div className="mt-3 space-y-3">
              {atRiskItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-start gap-2">
                    <CircleAlert className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#ff5470]" />

                    <div>
                      <p className="text-[8px] font-semibold text-[#ff7388]">
                        {item.label}
                      </p>

                      <p className="mt-0.5 text-[7px] text-[#b75a70]">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-center text-[8px] text-[#53627a]">
          Interface concept. Illustrative data shown for demonstration
          purposes.
        </p>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section 2                                                                  */
/* -------------------------------------------------------------------------- */

export function PlatformPreview() {
  return (
    <section
      id="platform-preview"
      className="relative overflow-hidden bg-[#f8fafc]"
    >
      {/* Dusk-derived background treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_50%_0%,rgba(67,78,132,0.14),transparent_58%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-40 h-[420px] w-[420px] rounded-full bg-[#dce5ff]/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-20 h-[460px] w-[460px] rounded-full bg-[#f5dfd0]/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#e85d04]">
                <span className="h-px w-7 bg-[#e85d04]" />
                From compliance data
              </div>

              <h2 className="max-w-xl text-balance text-3xl font-bold tracking-[-0.035em] text-[#142342] sm:text-4xl lg:text-[3.15rem] lg:leading-[1.04]">
                From Compliance Data
                <br />
                to Operational Clarity.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#536782] sm:text-[15px]">
                A single view that connects requirements, deadlines, documents,
                and monitoring activity, then points to the next action worth
                taking.
              </p>

              {/* Small visual bridge */}
              <div className="mt-8 hidden items-center gap-3 lg:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#142342] text-white">
                  <Gauge className="h-4 w-4" />
                </div>

                <div className="h-px w-10 bg-[#c7d1e1]" />

                <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#697990]">
                  One operational view
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative">
              {/* soft frame behind dashboard */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[32px] bg-[linear-gradient(135deg,rgba(53,67,112,0.10),rgba(245,112,25,0.07))] blur-xl"
              />

              <div className="relative">
                <Dashboard />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

const processSteps = [
  {
    number: '01',
    icon: Radar,
    title: 'Discover',
    body: 'Understand your operation, requirements, and current compliance position.',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Assess',
    body: 'Evaluate compliance records, documentation, and requirements to understand where attention is needed.',
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Implement',
    body: 'Organize records, address identified gaps, and document the work required to keep your operation on track.',
  },
  {
    number: '04',
    icon: Activity,
    title: 'Monitor',
    body: 'Continuously monitor requirements and surface changes or issues before they become operational problems.',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Support',
    body: 'Get practical human support when your business needs help navigating what comes next.',
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* twilight hairline / atmosphere */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7d88b5]/40 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="A Clearer Path to Compliance Confidence."
            description="A practical process designed to move from understanding your position to maintaining confidence in your operation."
          />
        </Reveal>

        <div className="relative mt-14">
          {/* connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-gradient-to-r from-[#d9dfeb] via-[#8793b6] to-[#d9dfeb] lg:block"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <Reveal
                  key={step.number}
                  delay={index * 70}
                  className="relative"
                >
                  <div className="flex flex-col items-start lg:items-center lg:text-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#dbe2ef] bg-white shadow-[0_6px_20px_rgba(20,35,66,0.08)]">
                      <Icon className="h-4.5 w-4.5 text-[#4353a4]" />
                    </div>

                    <div className="mt-5">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#e85d04]">
                        {step.number}
                      </span>

                      <h3 className="mt-2 text-sm font-bold text-[#142342]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[#66758d]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Compatibility export                                                       */
/* -------------------------------------------------------------------------- */

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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Why TruckEase"
            title="More than filing paperwork."
            description="Businesses choose TruckEase because compliance requires more than filing paperwork. It requires consistency, attention to detail, and technology built to catch what manual tracking misses."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon

            return (
              <Reveal
                key={benefit.title}
                delay={(i % 3) * 80}
                className="group"
              >
                <div className="h-full rounded-2xl border border-[#e0e5ee] bg-white p-6 shadow-[0_8px_30px_rgba(20,35,66,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d0e3] hover:shadow-[0_16px_40px_rgba(20,35,66,0.08)]">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#edf1ff] text-[#4353a4]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 text-base font-semibold text-[#142342]">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#66758d]">
                    {benefit.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
