export function PlatformPreview() {
  return (
    <section
      id="platform"
      className="relative scroll-mt-20 overflow-hidden bg-white"
    >
      {/* subtle section atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-blue-50/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-14rem] bottom-[-12rem] h-[32rem] w-[32rem] rounded-full bg-orange-50/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 sm:px-8 lg:px-10 lg:pb-32 lg:pt-36">

        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-[0.72fr_1.28fr]">

            {/* Heading */}
            <SectionHeading
              eyebrow="Platform preview"
              title="From Compliance Data to Operational Clarity."
              description="A single view that connects requirements, deadlines, documents, and monitoring activity, then points to the next action worth taking."
            />

            {/* small visual marker */}
            <div className="hidden justify-end lg:flex">
              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#17345f] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-orange-600" />
                One operational view
              </div>
            </div>
          </div>
        </Reveal>

        {/* PRODUCT PRESENTATION */}
        <Reveal delay={100} className="mt-12 lg:mt-14">

          <div className="relative">

            {/* dashboard backing surface */}
            <div className="absolute inset-x-5 bottom-[-20px] top-5 rounded-[2rem] bg-[#10213d]/5 blur-2xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-3 shadow-[0_30px_90px_rgba(16,33,61,0.13)] sm:p-5 lg:p-6">

              {/* fake browser/application chrome */}
              <div className="mb-4 flex items-center justify-between border-b border-slate-200 px-2 pb-4">

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>

                <div className="hidden rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-[10px] font-medium text-slate-400 sm:block">
                  TruckEase Compliance Platform
                </div>

                <div className="text-[10px] font-medium text-slate-400">
                  Live view
                </div>
              </div>

              <ComplianceDashboard />

              <p className="mt-4 text-center text-xs text-slate-400">
                Interface concept. Illustrative data shown for demonstration and does not represent real customer data.
              </p>
            </div>
          </div>
        </Reveal>

        {/* supporting statement */}
        <Reveal delay={160}>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600">
              <span className="h-px w-5 bg-orange-600" />
              Operational visibility
              <span className="h-px w-5 bg-orange-600" />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
