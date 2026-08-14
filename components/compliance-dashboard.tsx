import {
  Activity,
  BellRing,
  CalendarClock,
  CheckCircle2,
  FileText,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const renewals = [
  { label: 'IRP Renewal', due: 'Due in 21 days', tone: 'warn' },
  { label: 'IFTA Quarterly Filing', due: 'Due in 51 days', tone: 'ok' },
  { label: 'SCAC Renewal', due: 'Due in 41 days', tone: 'ok' },
]

const documents = [
  { label: 'Registrations', value: 92 },
  { label: 'Driver Qualification Files', value: 87 },
  { label: 'Vehicle Maintenance', value: 78 },
]

const activity = [
  { label: 'USDOT record checked', time: 'Just now' },
  { label: 'New MC filing detected', time: '2h ago' },
  { label: 'CVOR status monitored', time: '5h ago' },
]

export function ComplianceDashboard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-white/10 bg-navy text-navy-foreground shadow-2xl shadow-navy/30',
        className,
      )}
      role="img"
      aria-label="TruckEase compliance dashboard interface concept showing overall compliance status, upcoming renewals, document readiness, open items, and regulatory monitoring activity across the United States and Canada."
    >
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative p-5 sm:p-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-white/10">
              <ShieldCheck className="size-4 text-accent" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Compliance Overview</p>
              <p className="text-[11px] text-navy-muted">
                US &amp; Canada · Live monitoring
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-2.5 py-1 text-[11px] font-medium text-navy-muted ring-1 ring-inset ring-white/10">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Platform preview
          </span>
        </div>

        {/* Status + open items */}
        <div className="mt-5 grid gap-3 sm:grid-cols-5">
          <div className="rounded-xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10 sm:col-span-3">
            <p className="text-[11px] uppercase tracking-wider text-navy-muted">
              Overall status
            </p>
            <div className="mt-3 flex items-center gap-4">
              <StatusRing value={81} />
              <div>
                <p className="text-2xl font-semibold tabular-nums">On track</p>
                <p className="mt-1 text-xs text-navy-muted">
                  3 items flagged for review
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:col-span-2">
            <MiniStat
              icon={CalendarClock}
              label="Upcoming renewals"
              value="6"
            />
            <MiniStat icon={BellRing} label="Open items" value="3" tone="warn" />
          </div>
        </div>

        {/* Renewals + documents */}
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Upcoming deadlines</p>
              <CalendarClock className="size-4 text-navy-muted" />
            </div>
            <ul className="mt-3 space-y-2.5">
              {renewals.map((r) => (
                <li
                  key={r.label}
                  className="flex items-center justify-between gap-3 text-xs"
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        'size-1.5 rounded-full',
                        r.tone === 'warn' ? 'bg-accent' : 'bg-emerald-400',
                      )}
                    />
                    {r.label}
                  </span>
                  <span className="text-navy-muted">{r.due}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Document readiness</p>
              <FileText className="size-4 text-navy-muted" />
            </div>
            <ul className="mt-3 space-y-3">
              {documents.map((d) => (
                <li key={d.label}>
                  <div className="flex items-center justify-between text-xs">
                    <span>{d.label}</span>
                    <span className="tabular-nums text-navy-muted">
                      {d.value}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${d.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Monitoring activity + next action */}
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold">Monitoring activity</p>
              <Activity className="size-4 text-navy-muted" />
            </div>
            <ul className="mt-3 space-y-2.5">
              {activity.map((a) => (
                <li
                  key={a.label}
                  className="flex items-center justify-between gap-3 text-xs"
                >
                  <span className="flex items-center gap-2 text-navy-foreground/90">
                    <CheckCircle2 className="size-3.5 text-emerald-400" />
                    {a.label}
                  </span>
                  <span className="text-navy-muted">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-accent/12 p-4 ring-1 ring-inset ring-accent/25">
            <div className="flex items-center gap-2">
              <TrendingUp className="size-4 text-accent" />
              <p className="text-xs font-semibold">Recommended next action</p>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-navy-foreground/90">
              Review IRP renewal ahead of its 21-day window to keep
              operations uninterrupted.
            </p>
            <div className="mt-3 inline-flex w-fit items-center rounded-md bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
              Assigned for review
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusRing({ value }: { value: number }) {
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="relative grid size-16 place-items-center">
      <svg viewBox="0 0 64 64" className="size-16 -rotate-90">
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="var(--color-navy-foreground)"
          strokeOpacity="0.15"
          strokeWidth="6"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="absolute text-sm font-semibold tabular-nums">
        {value}%
      </span>
    </div>
  )
}

function MiniStat({
  icon: Icon,
  label,
  value,
  tone = 'default',
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  tone?: 'default' | 'warn'
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/[0.06] p-4 ring-1 ring-inset ring-white/10">
      <span
        className={cn(
          'grid size-9 place-items-center rounded-lg',
          tone === 'warn' ? 'bg-accent/15 text-accent' : 'bg-white/10 text-navy-foreground',
        )}
      >
        <Icon className="size-4" />
      </span>
      <div className="leading-tight">
        <p className="text-lg font-semibold tabular-nums">{value}</p>
        <p className="text-[11px] text-navy-muted">{label}</p>
      </div>
    </div>
  )
}
