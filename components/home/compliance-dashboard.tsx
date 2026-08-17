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

function StatusRing({
  percentage = 76,
}: {
  percentage?: number
}) {
  const radius = 47
  const circumference = 2 * Math.PI * radius
  const progress = Math.max(0, Math.min(100, percentage))
  const dashOffset = circumference * (1 - progress / 100)

  return (
    <div className="relative h-36 w-36">
      <svg
        viewBox="0 0 120 120"
        className="h-full w-full"
        role="img"
        aria-label={`${progress}% overall compliance position`}
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#26344f"
          strokeWidth="9"
        />

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#00d79b"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 60 60)"
        />

        <circle
          cx="60"
          cy="13"
          r="2.1"
          fill="#f45b08"
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-[25px] font-bold leading-none tracking-[-0.04em] text-white">
          {progress}%
        </span>

        <span className="mt-1 text-center text-[9px] leading-[1.25] text-[#a9b5c9]">
          Overall
          <br />
          Compliance
          <br />
          Position
        </span>
      </div>
    </div>
  )
}

export function ComplianceDashboard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] border border-[#273653] bg-[#080e1b] p-4 shadow-[0_35px_90px_rgba(12,23,48,0.24)] sm:p-6">
      {/* Dashboard atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#596ba8]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#f45b08]/[0.035] blur-3xl"
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#202c42] pb-4">
          <h3 className="text-sm font-bold tracking-tight text-white sm:text-base">
            Compliance Overview
          </h3>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#00d79b]/25 bg-[#00d79b]/10 px-3 py-1 text-[9px] font-semibold text-[#00d79b] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00d79b]" />
            Active Monitoring
          </div>
        </div>

        {/* Main dashboard */}
        <div className="mt-4 grid gap-3 lg:grid-cols-[245px_minmax(0,1fr)]">
          {/* Compliance score */}
          <div className="rounded-xl border border-[#26334d] bg-[#0e1627] p-5 sm:p-6">
            <div className="flex h-full min-h-[210px] flex-col items-center justify-center">
              <StatusRing percentage={76} />

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
                  className="group flex min-h-[43px] min-w-0 items-center gap-2 rounded-xl border border-[#26334d] bg-[#0e1627] px-3 transition-colors duration-200 hover:border-[#3a4c6d] hover:bg-[#111b2d] sm:gap-3"
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 ${statusColor(
                      item.tone,
                    )}`}
                    strokeWidth={2}
                  />

                  <span className="min-w-0 flex-1 truncate text-[9px] font-semibold text-[#edf2fa] sm:text-[11px]">
                    {item.title}
                  </span>

                  <span
                    className={`shrink-0 text-[8px] font-semibold sm:text-[9px] ${statusColor(
                      item.tone,
                    )}`}
                  >
                    {item.status}
                  </span>

                  <span className="shrink-0 text-[9px] font-bold text-white sm:text-[10px]">
                    {item.value}
                  </span>

                  <ArrowRight className="h-3 w-3 shrink-0 text-[#52627c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#8090ad]" />
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
                  className="flex min-w-0 items-center gap-2 text-[8px]"
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

            <div className="mt-3 space-y-2.5">
              {recentActivity.map((item) => (
                <div
                  key={item.label}
                  className="flex min-w-0 items-center gap-2 text-[8px]"
                >
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-[#00d79b]" />

                  <span className="min-w-0 flex-1 truncate text-[#d7dfed]">
                    {item.label}
                  </span>

                  <span className="shrink-0 font-semibold text-[#00d79b]">
                    Completed
                  </span>

                  <span className="shrink-0 text-[#66758d]">
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
                <div key={item.label}>
                  <div className="flex items-start gap-2">
                    <CircleAlert className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#ff5470]" />

                    <div className="min-w-0">
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
          Interface concept. Illustrative data shown for demonstration
          purposes.
        </p>
      </div>
    </div>
  )
}
