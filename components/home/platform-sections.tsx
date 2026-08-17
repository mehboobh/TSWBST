import { ComplianceDashboard } from '@/components/home/compliance-dashboard'

export function PlatformPreview() {
  return (
    <section className="overflow-hidden bg-[#f3f6fa] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        {/* Copy */}
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
            and monitoring activity, then points to the next action worth
            taking.
          </p>

          <div className="mt-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#14203b] text-white">
              ↗
            </span>

            <span>One operational view</span>
          </div>
        </div>

        {/* Full dashboard composition */}
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
            <ComplianceDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
