import type { ReactNode } from 'react'

type StatusTone = 'danger' | 'warning' | 'info' | 'success'

function Icon({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.06] ${className}`}
    >
      {children}
    </span>
  )
}

function StatusIcon({ tone }: { tone: StatusTone }) {
  const styles = {
    danger: 'text-red-400',
    warning: 'text-amber-400',
    info: 'text-sky-400',
    success: 'text-emerald-400',
  }

  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-3.5 w-3.5 ${styles[tone]}`}
      aria-hidden="true"
    >
      {tone === 'success' ? (
        <>
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M7 10.2 9 12l4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ) : tone === 'danger' ? (
        <>
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 6.5v4.2M10 13.5h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : tone === 'warning' ? (
        <>
          <path
            d="m10 3 7 12.5H3L10 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 7.5v3.2M10 13h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      ) : (
        <>
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 8v4M10 6.3h.01"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  )
}

function StatusRow({
  label,
  status,
  value,
  tone,
}: {
  label: string
  status: string
  value: string
  tone: StatusTone
}) {
  const statusColor = {
    danger: 'text-red-400',
    warning: 'text-amber-400',
    info: 'text-sky-400',
    success: 'text-emerald-400',
  }[tone]

  return (
    <div className="flex min-w-0 items-center gap-2.5 border-b border-white/[0.07] py-2.5 last:border-b-0">
      <StatusIcon tone={tone} />

      <div className="min-w-0 flex-1">
        <p className="truncate text-[9px] font-semibold text-slate-200">
          {label}
        </p>
      </div>

      <span className={`shrink-0 text-[8px] font-semibold ${statusColor}`}>
        {status}
      </span>

      <span className="w-7 shrink-0 text-right text-[8px] font-medium text-slate-500">
        {value}
      </span>

      <span className="text-[10px] text-slate-600">›</span>
    </div>
  )
}

function MetricCard({
  label,
  value,
  detail,
  icon,
  tone = 'blue',
}: {
  label: string
  value: string
  detail: string
  icon: ReactNode
  tone?: 'blue' | 'green' | 'orange'
}) {
  const iconStyles = {
    blue: 'bg-blue-400/10 text-blue-300',
    green: 'bg-emerald-400/10 text-emerald-300',
    orange: 'bg-orange-400/10 text-orange-300',
  }

  return (
    <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#10192c] p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[7px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          {label}
        </span>

        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${iconStyles[tone]}`}
        >
          {icon}
        </span>
      </div>

      <div className="mt-3 flex items-end justify-between gap-2">
        <span className="text-lg font-bold tracking-tight text-white">
          {value}
        </span>

        <span className="text-right text-[7px] leading-3 text-slate-500">
          {detail}
        </span>
      </div>
    </div>
  )
}

function ComplianceRing() {
  return (
    <div className="flex min-h-[138px] items-center justify-center rounded-xl border border-white/[0.08] bg-[#10192c] p-4">
      <div className="relative flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[conic-gradient(from_220deg,#32d39a_0deg,#32d39a_274deg,rgba(50,211,154,0.12)_274deg,rgba(50,211,154,0.12)_360deg)]">
        <div className="absolute inset-[7px] flex flex-col items-center justify-center rounded-full bg-[#10192c]">
          <span className="text-[24px] font-bold tracking-[-0.05em] text-white">
            76%
          </span>

          <span className="mt-0.5 text-center text-[6px] uppercase leading-[1.2] tracking-[0.08em] text-slate-500">
            Overall
            <br />
            compliance
            <br />
            position
          </span>
        </div>

        <span className="absolute right-[5px] top-[17px] h-1.5 w-1.5 rounded-full bg-orange-400" />
      </div>
    </div>
  )
}

function SmallPanel({
  title,
  action,
  children,
}: {
  title: string
  action?: string
  children: ReactNode
}) {
  return (
    <div className="min-w-0 rounded-xl border border-white/[0.08] bg-[#10192c] p-3">
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <span className="truncate text-[8px] font-semibold text-slate-200">
          {title}
        </span>

        {action && (
          <span className="shrink-0 text-[7px] font-medium text-sky-400">
            {action}
          </span>
        )}
      </div>

      {children}
    </div>
  )
}

function TaskRow({
  label,
  value,
  tone = 'neutral',
}: {
  label: string
  value: string
  tone?: 'neutral' | 'warning' | 'danger' | 'success'
}) {
  const dot = {
    neutral: 'bg-slate-500',
    warning: 'bg-amber-400',
    danger: 'bg-red-400',
    success: 'bg-emerald-400',
  }[tone]

  const valueColor = {
    neutral: 'text-slate-500',
    warning: 'text-amber-400',
    danger: 'text-red-400',
    success: 'text-emerald-400',
  }[tone]

  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />

      <span className="min-w-0 flex-1 truncate text-[7px] text-slate-400">
        {label}
      </span>

      <span className={`shrink-0 text-[7px] font-semibold ${valueColor}`}>
        {value}
      </span>
    </div>
  )
}

export function ComplianceDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      {/* Outer glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[34px] bg-[radial-gradient(circle_at_55%_45%,rgba(62,81,145,0.24),rgba(245,112,25,0.06),transparent_72%)] blur-2xl"
      />

      {/* Dashboard frame */}
      <div className="relative overflow-hidden rounded-[24px] border border-[#293654] bg-[#080f1f] p-3 shadow-[0_28px_80px_rgba(20,32,59,0.22)] sm:p-4">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between gap-4 border-b border-white/[0.08] px-1 pb-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-[11px] font-bold tracking-[-0.02em] text-white sm:text-xs">
                Compliance Overview
              </h3>

              <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[6px] font-semibold text-emerald-400 sm:inline-flex">
                Active Monitoring
              </span>
            </div>

            <p className="mt-1 text-[7px] text-slate-500">
              One operational view across your compliance position
            </p>
          </div>

          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2 py-1 text-[7px] font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Monitoring
          </span>
        </div>

        {/* Main dashboard */}
        <div className="grid gap-3 lg:grid-cols-[155px_1fr]">
          {/* Score */}
          <ComplianceRing />

          {/* Compliance signals */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0d1629] px-3">
            <StatusRow
              label="Hours of Service"
              status="Needs Attention"
              value="77%"
              tone="danger"
            />

            <StatusRow
              label="Vehicle Maintenance Record"
              status="Needs Attention"
              value="81%"
              tone="warning"
            />

            <StatusRow
              label="TRK-101 Plate Renewal"
              status="Upcoming"
              value="7d"
              tone="warning"
            />

            <StatusRow
              label="TRK-131 NY OSOW Permit"
              status="Renewal Due"
              value="12d"
              tone="warning"
            />

            <StatusRow
              label="TRK-138 Annual Inspection"
              status="Upcoming"
              value="23d"
              tone="info"
            />
          </div>
        </div>

        {/* Operational metrics */}
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <MetricCard
            label="Fleet Power Units"
            value="41"
            detail="Active fleet units"
            tone="blue"
            icon={
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="M3 5.5h9v8H3v-8ZM12 8h2.5l2 2v3.5H12V8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle
                  cx="6"
                  cy="15"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="15"
                  cy="15"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            }
          />

          <MetricCard
            label="Drivers & Contacts"
            value="67"
            detail="Active driver pool"
            tone="green"
            icon={
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="7"
                  r="2.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.5 15c.5-2.4 2-3.5 4.5-3.5S12 12.6 12.5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13 5.5a2.2 2.2 0 0 1 0 4M14 11.8c1.5.5 2.3 1.5 2.5 3.2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />

          <MetricCard
            label="Compliance Alerts"
            value="03"
            detail="Items to monitor"
            tone="orange"
            icon={
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="m10 3 7 13H3L10 3Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 7.5v3.5M10 13.5h.01"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>

        {/* Lower intelligence row */}
        <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
          <SmallPanel title="Upcoming Tasks" action="View all">
            <TaskRow
              label="TRK-101 Plate Renewal"
              value="7 days"
              tone="warning"
            />

            <TaskRow
              label="TRK-131 NY OSOW Permit"
              value="12 days"
              tone="warning"
            />

            <TaskRow
              label="TRK-138 Annual Inspection"
              value="23 days"
              tone="warning"
            />
          </SmallPanel>

          <SmallPanel title="Recent Activity" action="View all">
            <TaskRow
              label="Compliance monitoring"
              value="Active"
              tone="success"
            />

            <TaskRow
              label="Fleet records reviewed"
              value="Current"
              tone="success"
            />

            <TaskRow
              label="Driver records"
              value="Updated"
              tone="success"
            />
          </SmallPanel>

          <SmallPanel title="At Risk" action="View all">
            <TaskRow
              label="Plate renewal"
              value="7 days"
              tone="danger"
            />

            <TaskRow
              label="OSOW permit"
              value="12 days"
              tone="warning"
            />

            <TaskRow
              label="Annual inspection"
              value="23 days"
              tone="warning"
            />
          </SmallPanel>
        </div>

        {/* Footer */}
        <div className="mt-3 flex items-center justify-between gap-3 px-1 pt-1">
          <span className="text-[6px] uppercase tracking-[0.12em] text-slate-600">
            TruckEase operational intelligence
          </span>

          <span className="text-[6px] text-slate-600">
            Data shown for demonstration purposes
          </span>
        </div>
      </div>
    </div>
  )
}
