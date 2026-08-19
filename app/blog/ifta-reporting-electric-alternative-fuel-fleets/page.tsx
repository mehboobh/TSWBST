import Link from 'next/link'
import { ArrowLeft, CalendarDays } from 'lucide-react'

export default function ArticlePage() {
  return (
    <main className="bg-[#f7f8fb] text-[#142342]">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#687790] transition hover:text-[#f57019]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Compliance Insights
        </Link>

        <article className="mt-10 rounded-[28px] border border-[#dce3ed] bg-white p-8 shadow-[0_8px_30px_rgba(20,35,66,0.035)] sm:p-12 lg:p-16">
          <header className="border-b border-[#edf0f4] pb-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                IFTA
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#142342] sm:text-4xl lg:text-5xl">
              IFTA Reporting for Electric and Alternative-Fuel Fleets
            </h1>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a96aa]">
              <CalendarDays className="h-4 w-4 text-[#f57019]" />
              January 1, 2026
            </div>
          </header>

          <div className="mt-10 space-y-10">
            <section>
              <p className="text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                As electric and alternative-fuel trucks become part of more commercial fleets, the reporting rules built for diesel and gasoline are catching up. As of January 1, 2026, the International Fuel Tax Agreement expanded its definition of taxable fuel to include electricity and hydrogen — meaning fleets running electric or hydrogen-powered commercial vehicles now fall under IFTA&apos;s reporting requirements the same way diesel and gas vehicles always have.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                What actually changed
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                For decades, IFTA covered conventional fuel types only. A fleet running an electric truck across state or provincial lines wasn&apos;t tracking that vehicle&apos;s energy use the way it tracked a diesel truck&apos;s fuel purchases, because there was no requirement to. That&apos;s no longer the case. Electric and hydrogen consumption now needs to be tracked by jurisdiction, the same way fuel has always been tracked — miles driven in each jurisdiction, energy consumed, and (where applicable) tax owed.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                Where the rates actually stand
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                This is where it gets uneven, and it&apos;s worth knowing rather than assuming every state has caught up at the same pace. Several jurisdictions have already published tax rates for electricity and hydrogen — Wyoming, Indiana, Iowa, New Mexico, North Dakota, and Pennsylvania among them. Others, including California, currently require reporting but haven&apos;t yet finalized an actual tax rate — meaning the paperwork obligation exists before the tax obligation does. Not every IFTA member jurisdiction has finalized its position, and this is genuinely still moving. A fleet operating across multiple states or provinces should expect this list to keep changing rather than treat it as settled.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                What this means operationally
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                The practical shift is less about the tax itself and more about the tracking. If your fleet includes any electric or alternative-fuel vehicles, mileage and energy consumption by jurisdiction now need to be part of your regular IFTA reporting process, not a side note. Fleets that treat this as &quot;we&apos;ll figure it out later&quot; risk finding out at filing time that they&apos;re missing data they needed to be capturing the whole quarter.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                The bigger pattern
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                This is a good example of something that shows up constantly in trucking compliance: a rule change that&apos;s real, active, and jurisdiction-by-jurisdiction inconsistent, all at once. Waiting for it to fully settle before paying attention isn&apos;t really an option, because by the time it settles, several filing quarters will have already passed under the interim rules.
              </p>
            </section>

            <div className="rounded-2xl border border-[#e0e5ed] bg-[#f7f8fb] p-6">
              <p className="text-[13px] italic leading-6 text-[#697890]">
                Compliance information current as of publication. IFTA jurisdiction-specific rates change — verify current rates for your operating jurisdictions before filing.
              </p>
            </div>
          </div>
        </article>

        <div className="mt-12 rounded-2xl bg-[#0d1831] p-8 text-white">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-black text-white">
                Information is useful. Visibility is better.
              </h3>
              <p className="mt-2 text-[14px] text-[#aeb9ca]">
                If you want to understand your own compliance position, start with a TruckEase Risk Screening.
              </p>
            </div>
            <Link
              href="/risk-screening"
              className="shrink-0 rounded-xl bg-[#f57019] px-6 py-3.5 text-[12px] font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#e0610d]"
            >
              Request a Risk Screening
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
