function StatusBar({
  label,
  status,
  value,
  tone = 'good',
}: {
  label: string
  status: string
  value: string
  tone?: 'good' | 'warning' | 'bad'
}) {
  const dot =
    tone === 'good'
      ? 'bg-emerald-400'
      : tone === 'warning'
        ? 'bg-orange-400'
        : 'bg-red-400'

  const text =
    tone === 'good'
      ? 'text-emerald-400'
      : tone === 'warning'
        ? 'text-orange-400'
        : 'text-red-400'

  return (
    <div className="flex items-center gap-3 border-b border-white/10 py-3 last:border-0">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />

      <span className="min-w-0 flex-1 truncate text-[10px] font-medium text-slate-300">
        {label}
      </span>

      <span className={`text-[9px] font-semibold ${text}`}>{status}</span>

      <span className="w-8 text-right text-[9px] text-slate-500">
        {value}
      </span>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-5 rounded-[32px] bg-[#dfe5f2]/70 blur-2xl" />

      <div className="relative overflow-hidden rounded-[22px] border border-slate-300/70 bg-[#0d1528] p-4 shadow-[0_25px_60px_rgba(20,32,59,0.18)] sm:p-5">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] font-semibold text-white">
              Compliance Overview
            </p>
            <p className="mt-1 text-[8px] text-slate-500">
              Current operational position
            </p>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[8px] font-semibold text-emerald-400">
            ● Active Monitoring
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-[150px_1fr]">
          <div className="rounded-xl border border-white/10 bg-[#121b31] p-5">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[7px] border-emerald-400/20 border-t-emerald-400 border-r-emerald-400">
              <div className="text-center">
                <div className="text-xl font-bold text-white">76%</div>
                <div className="text-[7px] uppercase tracking-wider text-slate-500">
                  Position
                </div>
              </div>
            </div>

            <div className="mt-5 text-center text-[8px] text-slate-500">
              Overall compliance position
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#10192c] px-3">
            <StatusBar
              label="Hours of Service"
              status="Needs Attention"
              value="77%"
              tone="bad"
            />
            <StatusBar
              label="Vehicle Maintenance"
              status="Monitoring"
              value="84%"
              tone="warning"
            />
            <StatusBar
              label="IFTA / IRP"
              status="Up to Date"
              value="100%"
            />
            <StatusBar
              label="SFC Renewal"
              status="Upcoming"
              value="92%"
              tone="warning"
            />
            <StatusBar
              label="MCS-150 Records"
              status="Current"
              value="98%"
            />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/10 bg-[#121b31] p-3">
            <span className="text-[7px] uppercase tracking-wider text-slate-500">
              Open items
            </span>
            <p className="mt-1 text-sm font-bold text-white">04</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#121b31] p-3">
            <span className="text-[7px] uppercase tracking-wider text-slate-500">
              Documents
            </span>
            <p className="mt-1 text-sm font-bold text-white">128</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#121b31] p-3">
            <span className="text-[7px] uppercase tracking-wider text-slate-500">
              Alerts
            </span>
            <p className="mt-1 text-sm font-bold text-orange-400">03</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function PlatformPreview() {
  return (
    <section className="overflow-hidden bg-[#f3f6fa] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
              From compliance data
            </span>
          </div>

          <h2 className="max-w-md text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-[#14203b] sm:text-4xl">
            From compliance data
            <br />
            to operational clarity.
          </h2>

          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            A single view that connects requirements, deadlines, documents,
            and monitoring signals so you can understand what is happening
            before you decide what to do next.
          </p>

          <div className="mt-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14203b] text-white">
              ↗
            </span>
            One view. One operational picture.
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  )
}
