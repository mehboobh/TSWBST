// components/home/compliance-dashboard.tsx

import {
  AlertCircle,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Info,
  Wrench,
} from 'lucide-react'

const complianceItems = [
  {
    icon: AlertCircle,
    title: 'Hours of Service',
    status: 'Needs Attention',
    value: '77%',
    tone: 'danger',
  },
  {
    icon: Wrench,
    title: 'Fleet Maintenance Record',
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
    title: 'MCS-150 Biennial Update',
    status: 'Completed',
    value: '100%',
    tone: 'success',
  },
]

const upcomingTasks = [
  {
    label: 'City Plate Renewal — TRK-101',
    value: '7 Days',
    tone: 'danger',
  },
  {
    label: 'NY OSOW Permit — TRK-131',
    value: '12 Days',
    tone: 'danger',
  },
  {
    label: 'Annual Inspection — TRK-138',
    value: '23 Days',
    tone: 'warning',
  },
]

const recentActivity = [
  {
    label: 'SCAC Renewal',
    date: 'Completed',
  },
  {
    label: 'MCS-150 Biennial Update',
    date: 'Completed',
  },
  {
    label: 'US Carrier Bonded Application',
    date: 'Completed',
  },
]

const atRiskItems = [
  {
    label: 'City Plate Renewal — TRK-101',
    detail: '7 days remaining',
  },
  {
    label: 'NY OSOW Permit — TRK-131',
    detail: '12 days remaining',
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

export function ComplianceDashboard() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-[#26334d] bg-[#080e1b] p-4 shadow-[0_35px_90px_rgba(12,23,48,0.22)] sm:p-6">
      {/* Very subtle dashboard atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5b6cae]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-[#e8720c]/[0.035] blur-3xl"
      />

      <div className="relative">
        {/* Header */}
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
              <div className="relative h-32 w-32">
                <svg
                  viewBox="0 0 120 120"
                  className="h-full w-full -rotate-0"
                  aria-label="76 percent overall compliance position"
                >
                  {/* Track */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#27344d"
                    strokeWidth="9"
                    pathLength="100"
                  />

                  {/* 76% progress.
                      Starts at 12 o'clock and travels clockwise. */}
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    fill="none"
                    stroke="#35d39b"
                    strokeWidth="9"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="76 24"
                    transform="rotate(-90 60 60)"
                  />

                  {/* Small orange checkpoint */}
                  <circle
                    cx="60"
                    cy="12"
                    r="2.5"
                    fill="#e8720c"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[28px] font-bold tracking-tight text-white">
                    76%
                  </span>

                  <span className="mt-0.5 max-w-[70px] text-[8px] leading-[1.25] text-[#9aa7bc]">
                    Overall
                    <br />
                    Compliance
                    <br />
                    Position
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-1.5 text-[9px] font-semibold text-[#00d79b]">
                <span>↑6%</span>
                <span className="text-[#62718a]">vs last 30 days</span>
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
                  className="flex items-center gap-3 rounded-full border border-[#26334d] bg-[#0e1627] px-3 py-2"
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      item.tone === 'danger'
                        ? 'bg-[#ff5470]/10'
                        : item.tone === 'warning'
                          ? 'bg-[#ffb21a]/10'
                          : item.tone === 'success'
                            ? 'bg-[#00d79b]/10'
                            : 'bg-[#38bdf8]/10'
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 ${statusColor(item.tone)}`}
                    />
                  </div>

                  <span className="min-w-0 flex-1 truncate text-[9px] font-semibold text-[#d7dfed] sm:text-[10px]">
                    {item.title}
                  </span>

                  <span
                    className={`shrink-0 text-[8px] font-semibold sm:text-[9px] ${statusColor(
                      item.tone,
                    )}`}
                  >
                    {item.status}
                  </span>

                  <span className="shrink-0 text-[9px] font-bold text-white">
                    {item.value}
                  </span>

                  <ArrowRight className="h-3 w-3 shrink-0 text-[#52627c]" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Lower dashboard cards */}
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {/* Upcoming Tasks */}
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
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot(
                      task.tone,
                    )}`}
                  />

                  <span className="min-w-0 flex-1 truncate text-[#d7dfed]">
                    {task.label}
                  </span>

                  <span
                    className={`shrink-0 font-semibold ${statusColor(
                      task.tone,
                    )}`}
                  >
                    {task.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[7px] leading-3 text-[#64728a]">
              Items due within 15 days are flagged as action required.
            </p>
          </div>

          {/* Recent Activity */}
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

            <div className="mt-3 space-y-3">
              {recentActivity.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-[8px]"
                >
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-[#00d79b]" />

                  <span className="min-w-0 flex-1 truncate text-[#d7dfed]">
                    {item.label}
                  </span>

                  <span className="shrink-0 font-semibold text-[#00d79b]">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* At Risk */}
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
                <div key={item.label} className="flex items-start gap-2">
                  <CircleAlert className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#ff5470]" />

                  <div className="min-w-0">
                    <p className="text-[8px] font-semibold leading-3 text-[#ff7388]">
                      {item.label}
                    </p>

                    <p className="mt-0.5 text-[7px] text-[#b75a70]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-center text-[8px] leading-4 text-[#53627a]">
          Interface concept. Illustrative data shown for demonstration
          purposes.
        </p>
      </div>
    </div>
  )
}
