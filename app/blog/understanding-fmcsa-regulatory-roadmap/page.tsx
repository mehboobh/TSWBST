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
                Regulatory
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#142342] sm:text-4xl lg:text-5xl">
              Understanding the FMCSA Regulatory Roadmap
            </h1>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a96aa]">
              <CalendarDays className="h-4 w-4 text-[#f57019]" />
              Current
            </div>
          </header>

          <div className="mt-10 space-y-10">
            <section>
              <p className="text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                Compliance rarely changes all at once. It shifts in pieces — an Hours of Service adjustment here, a scoring model update there — and the cumulative effect on a fleet is easy to miss if you&apos;re only paying attention when something breaks. A few areas of ongoing FMCSA activity are worth tracking specifically, because they&apos;re the ones most likely to affect day-to-day operations rather than sitting purely in regulatory language.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                Hours of Service
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                HOS rules continue to be reviewed and adjusted at the federal level. These changes tend to affect flexibility around break timing and short-haul exceptions more than the core daily and weekly driving limits, but even small adjustments can matter for how a dispatch schedule gets built.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                Drug &amp; Alcohol Clearinghouse
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                The Clearinghouse — the database tracking drug and alcohol program violations across the industry — continues to see updates to reporting requirements and query obligations. For carriers, this means the process for checking a driver&apos;s Clearinghouse status, and the recordkeeping tied to that process, is something worth revisiting periodically rather than assuming it&apos;s unchanged since the last time someone checked.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                CSA scoring
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                The Compliance, Safety, Accountability program&apos;s scoring methodology — the calculation behind the BASIC categories that feed into a carrier&apos;s safety profile — has seen adjustments to how certain violations are weighted. A carrier&apos;s actual safety performance might not have changed at all, but the score attached to that performance can shift when the underlying calculation does. This is exactly the kind of change that&apos;s easy to miss until a score moves and nobody&apos;s sure why.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                Vehicle maintenance and Driver Qualification File requirements
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                Documentation standards around maintenance records and driver qualification files continue to receive regulatory attention, generally trending toward more specific expectations about what needs to be retained and for how long — reinforcing the same retention discipline covered in our piece on FMCSA off-site audits.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                Why this matters as a pattern, not just a list
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                None of these individually is dramatic. Together, they represent a regulatory environment that keeps moving in small increments rather than large, obvious jumps — which is precisely what makes it easy for a carrier to fall behind without noticing. The fleets least affected by any single change tend to be the ones already set up to track changes continuously, rather than the ones checking in once a year and hoping nothing significant happened in between.
              </p>
            </section>

            <div className="rounded-2xl border border-[#e0e5ed] bg-[#f7f8fb] p-6">
              <p className="text-[13px] italic leading-6 text-[#697890]">
                Compliance information current as of publication. FMCSA regulations are subject to ongoing revision — verify current requirements applicable to your operation.
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
