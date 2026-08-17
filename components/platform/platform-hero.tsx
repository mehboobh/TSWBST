import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf8]">
      {/* Very subtle background treatment */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#eef2fa] blur-[110px]" />

        <div className="absolute right-[-180px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#f5eee7] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#ed6b17]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#ed6b17]">
                The TruckEase Platform
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[clamp(3.5rem,6.5vw,6.5rem)] font-bold leading-[0.88] tracking-[-0.055em] text-[#14203b]">
              Complete
              <br />
              Operational
              <br />
              Visibility
              <br />
              <span className="text-[#ed6b17]">
                &amp; Compliance Tracking.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-9 max-w-[650px] text-[16px] leading-8 text-[#5e6d88] sm:text-[17px]">
              Monitor regulatory standing, manage filings, and maintain
              continuously updated oversight across your entire operation from
              a single compliance workspace.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/risk-screening"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-[12px] bg-[#ed6b17] px-6 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(237,107,23,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f47722]"
              >
                Request a Risk Screening

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[12px] border border-[#cfd7e5] bg-white px-6 text-sm font-semibold text-[#14203b] transition-all duration-200 hover:border-[#aeb9cd] hover:bg-[#f8f9fc]"
              >
                Talk to Our Team
              </Link>
            </div>

            {/* Positioning */}
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-9 bg-[#cbd3e0]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#73819a]">
                One compliance workspace
              </span>

              <span className="h-1 w-1 rounded-full bg-[#ed6b17]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#73819a]">
                Continuous operational visibility
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Soft outer glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[42px] bg-[#e7ebf4]/70 blur-2xl"
            />

            {/* Outer frame */}
            <div className="relative rounded-[30px] border border-[#dbe1eb] bg-white p-3 shadow-[0_30px_80px_rgba(20,32,59,0.12)]">
              {/* Dashboard-style preview */}
              <div className="overflow-hidden rounded-[22px] border border-[#263552] bg-[#101a32]">
                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                  <div>
                    <div className="text-[13px] font-semibold text-white">
                      Fleet Compliance Workspace
                    </div>

                    <div className="mt-1 text-[10px] text-[#8290aa]">
                      Operational overview
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    <span className="text-[9px] font-semibold text-emerald-300">
                      Active Monitoring
                    </span>
                  </div>
                </div>

                {/* Score */}
                <div className="grid gap-3 p-5 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="rounded-[16px] border border-white/10 bg-[#131e38] p-5">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8290aa]">
                      Compliance Position
                    </div>

                    <div className="mt-6 flex items-center justify-center">
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-[#263653]">
                        <div className="absolute inset-[-10px] rounded-full border-[10px] border-transparent border-l-[#36d39a] border-t-[#36d39a] border-r-[#36d39a] rotate-[-42deg]" />

                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">
                            76%
                          </div>

                          <div className="mt-1 text-[8px] leading-3 text-[#8290aa]">
                            Overall
                            <br />
                            Compliance
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 text-center text-[9px] font-medium text-emerald-400">
                      +6% vs last 30 days
                    </div>
                  </div>

                  {/* Status list */}
                  <div className="space-y-2">
                    <PlatformStatus
                      label="Hours of Service"
                      status="Needs Attention"
                      value="77%"
                      tone="red"
                    />

                    <PlatformStatus
                      label="Fleet Maintenance Record"
                      status="Needs Attention"
                      value="81%"
                      tone="amber"
                    />

                    <PlatformStatus
                      label="IRP Fleet Renewal"
                      status="On Track"
                      value="Application Submitted"
                      tone="blue"
                    />

                    <PlatformStatus
                      label="SCAC Renewal"
                      status="Completed"
                      value="100%"
                      tone="green"
                    />

                    <PlatformStatus
                      label="MCS-150 Biennial Update"
                      status="Completed"
                      value="100%"
                      tone="green"
                    />
                  </div>
                </div>

                {/* Lower activity row */}
                <div className="grid gap-2 px-5 pb-5 sm:grid-cols-3">
                  <MiniPanel
                    title="Upcoming Tasks"
                    items={[
                      'TRK-101 City Plate Renewal',
                      'TRK-131 NY OSOW Permit',
                      'TRK-138 Annual Inspection',
                    ]}
                    emphasis="urgent"
                  />

                  <MiniPanel
                    title="Recent Activity"
                    items={[
                      'SCAC Renewal — Completed',
                      'MCS-150 Biennial Update — Completed',
                      'US Carrier Bonded Application — Completed',
                    ]}
                    emphasis="normal"
                  />

                  <MiniPanel
                    title="At Risk"
                    items={[
                      '1 renewal requiring attention',
                      '2 upcoming compliance actions',
                    ]}
                    emphasis="danger"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlatformStatus({
  label,
  status,
  value,
  tone,
}: {
  label: string
  status: string
  value: string
  tone: 'red' | 'amber' | 'blue' | 'green'
}) {
  const toneClasses = {
    red: 'text-[#ff6b7a]',
    amber: 'text-[#f5b82e]',
    blue: 'text-[#5bb7ff]',
    green: 'text-[#3bd39b]',
  }

  return (
    <div className="flex items-center justify-between rounded-[13px] border border-white/10 bg-[#131e38] px-4 py-3">
      <div className="min-w-0">
        <div className="truncate text-[10px] font-semibold text-[#d9dfeb]">
          {label}
        </div>

        <div className={`mt-1 text-[8px] font-medium ${toneClasses[tone]}`}>
          {status}
        </div>
      </div>

      <div className="ml-3 shrink-0 text-[9px] font-semibold text-white">
        {value}
      </div>
    </div>
  )
}

function MiniPanel({
  title,
  items,
  emphasis,
}: {
  title: string
  items: string[]
  emphasis: 'urgent' | 'normal' | 'danger'
}) {
  const titleClass =
    emphasis === 'danger'
      ? 'text-[#ff6877]'
      : emphasis === 'urgent'
        ? 'text-[#f5b82e]'
        : 'text-[#8ca0c1]'

  return (
    <div
      className={`rounded-[14px] border p-4 ${
        emphasis === 'danger'
          ? 'border-[#713243] bg-[#241526]'
          : 'border-white/10 bg-[#131e38]'
      }`}
    >
      <div
        className={`text-[9px] font-semibold uppercase tracking-[0.12em] ${titleClass}`}
      >
        {title}
      </div>

      <div className="mt-3 space-y-2.5">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-2">
            {emphasis === 'normal' ? (
              <CheckCircle2
                size={10}
                className="mt-0.5 shrink-0 text-emerald-400"
              />
            ) : (
              <span
                className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
                  emphasis === 'danger'
                    ? 'bg-[#ff6877]'
                    : 'bg-[#f5b82e]'
                }`}
              />
            )}

            <span className="text-[8px] leading-3 text-[#9aa8bf]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
