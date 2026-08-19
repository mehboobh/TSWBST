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
                FMCSA
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#142342] sm:text-4xl lg:text-5xl">
              FMCSA Off-Site Audit Digital Portal
            </h1>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a96aa]">
              <CalendarDays className="h-4 w-4 text-[#f57019]" />
              Current
            </div>
          </header>

          <div className="mt-10 space-y-10">
            <section>
              <p className="text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                FMCSA compliance reviews increasingly happen without an investigator ever setting foot at a carrier&apos;s terminal. Off-site reviews — conducted through electronic submission rather than an in-person visit — have become the default process for a large share of carrier audits, and that shift changes what &quot;being audit-ready&quot; actually means in practice.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                How the process actually works
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                Instead of an investigator arriving on-site, a carrier typically receives a data request and submits the requested records electronically, often through FMCSA&apos;s own systems tied to a carrier&apos;s safety profile. The review happens against what&apos;s submitted — which means the quality and organization of what gets uploaded matters as much as whether the underlying records are correct in the first place. A record that exists but is hard to locate, or exists in a format that&apos;s awkward to submit digitally, creates friction at exactly the moment a carrier can least afford it.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                Retention periods that actually matter here
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                A few specific timelines are worth knowing, since they define what &quot;having the record&quot; actually requires:
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  'Driver Vehicle Inspection Reports (DVIRs): 3 months',
                  'Driver Qualification Files: for the duration of employment, plus 3 years after',
                  'Vehicle maintenance records: 1 year, plus 6 months after a vehicle leaves the fleet',
                  'Hours of Service supporting documents: 6 months',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-[15px] leading-7 text-[#5f6f89]">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f57019]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                What actually changes for a carrier
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                The shift toward digital, off-site review rewards carriers whose records are already organized and retrievable, and penalizes carriers whose compliance is real but scattered — folders on different computers, paper in a filing cabinet, PDFs buried in email threads. The underlying compliance might be identical between two carriers, but the one who can produce a clean, complete submission quickly is in a materially better position than the one scrambling to reconstruct records under a deadline.
              </p>
            </section>

            <section>
              <h2 className="text-[22px] font-black tracking-[-0.03em] text-[#142342] sm:text-[25px]">
                The practical takeaway
              </h2>
              <p className="mt-4 text-[16px] leading-8 text-[#5f6f89] sm:text-[17px]">
                Digital submission isn&apos;t really the hard part — most carriers can attach a file to a portal. The hard part is knowing exactly what you have, where it is, and whether it&apos;s still within its retention window, before a request ever arrives. That&apos;s a records-organization problem more than a technology problem, and it&apos;s worth solving before it&apos;s tested, not during.
              </p>
            </section>

            <div className="rounded-2xl border border-[#e0e5ed] bg-[#f7f8fb] p-6">
              <p className="text-[13px] italic leading-6 text-[#697890]">
                Compliance information current as of publication. Verify current FMCSA audit procedures and retention requirements for your operation.
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
