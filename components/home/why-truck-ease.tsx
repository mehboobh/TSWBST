const reasons = [
  {
    number: '01',
    title: 'Proactive compliance monitoring',
    text: 'Requirements are monitored continuously so gaps surface early.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l2.5 2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Cross-border regulatory knowledge',
    text: 'Experience spanning requirements across the United States and Canada.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3l7 3v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.5-3.5" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Technology-first compliance',
    text: 'Built for operational visibility, not periodic paperwork.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Organized, accessible records',
    text: 'Records stay organized with appropriate access controls and tracking.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Practical ongoing support',
    text: 'A person to help when a system alone is not enough.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M7 4h7l4 4v12H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M14 4v5h5M9 14h6M9 17h4" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Long-term compliance confidence',
    text: 'Support that adapts as regulations evolve and your business grows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M5 12h14M12 5v14" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
]

export function WhyTruckEase() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-7 bg-orange-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
              Why TruckEase
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#14203b] sm:text-4xl">
            More than filing paperwork.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
            Compliance requires consistency, attention to detail, and technology
            built to catch what manual tracking misses.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_12px_30px_rgba(20,32,59,0.07)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f3ff] text-[#5267d9]">
                  <div className="h-[17px] w-[17px]">{reason.icon}</div>
                </div>

                <span className="text-[9px] font-bold tracking-[0.18em] text-slate-300">
                  {reason.number}
                </span>
              </div>

              <h3 className="text-[14px] font-semibold tracking-[-0.01em] text-[#14203b]">
                {reason.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {reason.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
