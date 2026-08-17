export function CtaBand() {
  return (
    <section className="border-t border-slate-200 bg-[#f3f6fa] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white px-6 py-7 shadow-[0_8px_30px_rgba(20,32,59,0.04)] sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-orange-600">
            Ready for more visibility?
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#14203b]">
            Compliance should support the business — not slow it down.
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500">
            See how TruckEase can bring your compliance requirements,
            operational data, and decisions into one clearer picture.
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap gap-2">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#14203b] px-5 py-3 text-xs font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Talk to TruckEase
            <span>→</span>
          </a>

          <a
            href="/platform"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-[#14203b] transition-colors hover:bg-slate-50"
          >
            Explore Platform
          </a>
        </div>
      </div>
    </section>
  )
}
