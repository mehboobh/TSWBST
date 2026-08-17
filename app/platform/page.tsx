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
  Settings2,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

/* ============================================================================
   PLATFORM PAGE
   ----------------------------------------------------------------------------
   This page is intentionally self-contained.

   It does NOT import:
   - components/home/platform-sections
   - Home page sections
   - Home page CTA components

   That keeps the Platform route isolated from Home.
   ========================================================================== */

const colors = {
  ink: '#0c1a36',
  inkSoft: '#16274a',
  paper: '#f7f4ee',
  ivory: '#fdfcf9',
  ember: '#e8720c',
  slate: '#5b6472',
  mistCool: '#e2e7ec',
}

/* ============================================================================
   DATA
   ========================================================================== */

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

const processSteps = [
  {
    number: '01',
    icon: Radar,
    title: 'Discover',
    body: 'We begin by understanding your operation and current compliance requirements.',
  },
  {
    number: '02',
    icon: Settings2,
    title: 'Assess',
    body: 'We review your current compliance records, documentation, and regulatory standing.',
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Implement',
    body: 'We handle the registrations, renewals, and documentation required to keep your operation compliant.',
  },
  {
    number: '04',
    icon: Activity,
    title: 'Monitor',
    body: 'The platform continues tracking your compliance activity, flagging what needs attention as it comes up, not after the fact.',
  },
  {
    number: '05',
    icon: ShieldCheck,
    title: 'Support',
    body: 'As regulations evolve and your business grows, we remain available to help you navigate what’s next.',
  },
]

/* ============================================================================
   HELPERS
   ========================================================================== */

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

/* ============================================================================
   SMALL UI COMPONENTS
   ========================================================================== */

function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <div
      className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] ${
        dark ? 'text-[#f2a15d]' : 'text-[#e8720c]'
      }`}
    >
      <span
        className={`h-px w-8 ${
          dark ? 'bg-[#e8720c]' : 'bg-[#e8720c]'
        }`}
      />
      <span>{children}</span>
    </div>
  )
}

function CheckpointLine() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-7xl items-center gap-3 px-6"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#cfd7e5] to-[#cfd7e5]" />

      <div className="flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-[#cfd7e5]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />
        <span className="h-1 w-1 rounded-full bg-[#cfd7e5]" />
      </div>

      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#cfd7e5] to-[#cfd7e5]" />
    </div>
  )
}

/* ============================================================================
   DASHBOARD
   ----------------------------------------------------------------------------
   IMPORTANT:
   SVG starts at 3 o'clock by default.
   rotate(-90 60 60) moves the starting point to 12 o'clock.
   Stroke progression remains clockwise.
   ========================================================================== */

function PlatformDashboard() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#26334d] bg-[#080e1b] p-4 shadow-[0_35px_90px_rgba(12,23,48,0.22)] sm:p-6">
      {/* subtle dusk atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5b6cae]/10 blur-3xl"
      />

      <div className="relative">
        {/* Dashboard header */}
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

        {/* Main dashboard */}
        <div className="mt-4 grid gap-3 lg:grid-cols-[245px_1fr]">
          {/* Compliance score */}
          <div className="rounded-xl border border-[#26334d] bg-[#0e1627] p-5 sm:p-6">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="relative h-36 w-36">
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full"
                  role="img"
                  aria-label="76 percent overall compliance position"
                >
                  {/* background track */}
                  <circle
                    cx="60"
                    cy="60"
                    r="47"
                    fill="none"
                    stroke="#22304a"
                    strokeWidth="9"
                  />

                  {/* 
                    76% progress

                    Circle default start = 3 o'clock.
                    -90 degrees = 12 o'clock.
                    SVG stroke proceeds clockwise.

                    Circumference:
                    2 × π × 47 = 295.31

                    Remaining 24%:
                    295.31 × 0.24 = 70.87
                  */}
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
                    transform="rotate(-90 60 60)"
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

          {/* Compliance items */}
          <div className="space-y-2">
            {complianceItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group flex min-h-[43px] items-center gap-3 rounded-xl border border-[#26334d] bg-[#0e1627] px-3 transition-colors hover:border-[#34445f]"
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${statusColor(
                      item.tone,
                    )}`}
                    strokeWidth={2}
                  />

                  <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-[#edf2fa] sm:text-[11px]">
                    {item.title}
                  </span>

                  <span
                    className={`hidden text-[9px] font-semibold sm:block ${statusColor(
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

        {/* Lower cards */}
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

        {/* Disclaimer */}
        <p className="mt-5 text-center text-[8px] leading-4 text-[#53627a]">
          Interface concept. Illustrative data shown for demonstration and
          does not represent real customer data.
        </p>
      </div>
    </div>
  )
}

/* ============================================================================
   PLATFORM HERO
   ========================================================================== */

function PlatformHero() {
  return (
    <section className="relative overflow-hidden bg-[#0c1a36] text-white">
      {/* subtle atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#42578e]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-1/3 h-[420px] w-[420px] rounded-full bg-[#e8720c]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
        <div className="max-w-4xl">
          <Eyebrow dark>The TruckEase Platform</Eyebrow>

          <h1 className="max-w-4xl text-balance text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[4.7rem]">
            Complete Operational Visibility
            <span className="block text-[#f3f5fa]">
              &amp; Compliance Tracking
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#c0cadb] sm:text-lg">
            Monitor regulatory standing, manage filings, and maintain
            continuously-updated oversight across your entire operation from a
            single unified portal.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/risk-screening"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-bold text-white shadow-[0_12px_30px_rgba(232,114,12,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Request a Risk Screening
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#platform-overview"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              Explore the Platform
            </a>
          </div>
        </div>

        {/* checkpoint motif */}
        <div className="mt-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />
              <span className="h-1 w-1 rounded-full bg-white/20" />
            </div>

            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
   DASHBOARD SECTION
   ========================================================================== */

function PlatformOverview() {
  return (
    <section
      id="platform-overview"
      className="relative overflow-hidden bg-[#f7f9fc]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(circle_at_55%_0%,rgba(61,76,130,0.13),transparent_62%)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div>
            <Eyebrow>Platform Overview</Eyebrow>

            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#0c1a36] sm:text-4xl lg:text-[3.4rem]">
              From Compliance Data
              <span className="block text-[#e8720c]">
                to Operational Clarity.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#5b6b84]">
              A single view that connects requirements, deadlines, documents,
              and monitoring activity, then points to the next action worth
              taking.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0c1a36] text-white">
                <Gauge className="h-4.5 w-4.5" />
              </div>

              <div className="h-px w-10 bg-[#c7d1e1]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#697990]">
                One operational view
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[32px] bg-[linear-gradient(135deg,rgba(53,67,112,0.10),rgba(245,112,25,0.06))] blur-xl"
            />

            <div className="relative">
              <PlatformDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
   MORE THAN FILING PAPERWORK
   ========================================================================== */

function MoreThanPaperwork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <Eyebrow>More Than Filing Paperwork</Eyebrow>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0c1a36] sm:text-4xl">
            Compliance is stronger when
            <span className="text-[#e8720c]"> everything stays connected.</span>
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#5b6b84]">
            Businesses choose TruckEase because compliance requires more than
            filing paperwork. It requires consistency, attention to detail,
            and technology built to catch what manual tracking misses.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article
                key={benefit.title}
                className="group rounded-2xl border border-[#e0e5ee] bg-[#fdfcf9] p-6 shadow-[0_8px_30px_rgba(20,35,66,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9d2e1] hover:shadow-[0_18px_45px_rgba(20,35,66,0.08)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#edf1ff] text-[#4353a4]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#c1c9d7]">
                    0{benefits.indexOf(benefit) + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-[15px] font-bold leading-6 text-[#142342]">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#66758d]">
                  {benefit.body}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
   OUR PROCESS
   ========================================================================== */

function OurProcess() {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ee]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Process</Eyebrow>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0c1a36] sm:text-4xl lg:text-[3rem]">
            A Clearer Path to
            <span className="text-[#e8720c]"> Compliance Confidence.</span>
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#5b6b84]">
            A practical process designed to move from understanding your
            position to maintaining confidence in your operation.
          </p>
        </div>

        <div className="relative mt-14">
          {/* desktop connector */}
          <div
            aria-hidden="true"
            className="absolute left-[9%] right-[9%] top-6 hidden h-px bg-gradient-to-r from-[#d8d5cd] via-[#9ea7b9] to-[#d8d5cd] lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className="relative text-left lg:text-center"
                >
                  <div className="relative z-10 mx-0 flex h-12 w-12 items-center justify-center rounded-full border border-[#d7dce5] bg-white shadow-[0_8px_24px_rgba(20,35,66,0.08)] lg:mx-auto">
                    <Icon className="h-[18px] w-[18px] text-[#4353a4]" />
                  </div>

                  <div className="mt-5">
                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e8720c]">
                      {step.number}
                    </span>

                    <h3 className="mt-2 text-sm font-bold text-[#142342]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-[#66758d]">
                      {step.body}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
   CLOSING CTA
   ========================================================================== */

function ClosingCta() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0c1a36] px-6 py-10 shadow-[0_25px_70px_rgba(12,26,54,0.16)] sm:px-10 lg:px-14 lg:py-12">
          {/* atmosphere */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#3e527f]/25 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-[#e8720c]/[0.07] blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f2a15d]">
                <span className="h-px w-8 bg-[#e8720c]" />
                Get Started
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                Build Compliance With Confidence.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#b8c3d6] sm:text-[15px]">
                Whether you're looking for greater visibility into your
                compliance position or a more organized way to manage ongoing
                regulatory requirements, TruckEase is ready to help. Let's
                build a stronger compliance foundation for your business.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="/risk-screening"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e8720c] px-5 text-sm font-bold text-white transition-transform duration-200 hover:-translate-y-0.5"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-white/25 bg-transparent px-5 text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================================================
   PAGE
   ========================================================================== */

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-white text-[#0c1a36]">
      <PlatformHero />

      <PlatformOverview />

      <CheckpointLine />

      <MoreThanPaperwork />

      <OurProcess />

      <ClosingCta />
    </main>
  )
}
