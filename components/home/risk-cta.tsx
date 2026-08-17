const screeningSteps = [
  'Review requested',
  'Public information reviewed',
  'Potential areas for attention',
  'Next steps discussed',
]

export function RiskCta() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[26px] border border-[#263454] bg-[#14203b] px-6 py-8 text-white sm:px-8 sm:py-9 lg:px-10">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                backgroundSize: '44px 44px',
              }}
            />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-orange-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
                  Risk screening
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-4xl">
                Understand your compliance position before small issues become
                bigger problems.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
                Our Risk Screening reviews publicly available regulatory
                information to identify potential compliance signals that may
                deserve attention.
              </p>

              <p className="mt-3 text-sm font-semibold text-white">
                No obligation. Just a real answer to where you stand.
              </p>

              <a
                href="/risk-screening"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-xs font-bold text-[#14203b] transition-transform hover:-translate-y-0.5"
              >
                Request Your Risk Screening
                <span>→</span>
              </a>
            </div>

            <div className="rounded-[20px] border border-white/15 bg-white/[0.055] p-5 sm:p-6">
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                How a screening works
              </div>

              <div className="space-y-3">
                {screeningSteps.map((step) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-[#14203b]">
                      ✓
                    </span>

                    <span className="text-xs font-semibold text-slate-200">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-[10px] leading-5 text-slate-400">
                  A screening reviews available information only. It is not a
                  guarantee of compliance or an official government rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
