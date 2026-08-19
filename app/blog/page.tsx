import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Article Metadata for Cards                                                 */
/* -------------------------------------------------------------------------- */

const articles = [
  {
    slug: 'ifta-reporting-electric-alternative-fuel-fleets',
    category: 'IFTA',
    title: 'IFTA Reporting for Electric and Alternative-Fuel Fleets',
    excerpt:
      'As electric and alternative-fuel trucks become part of more commercial fleets, the reporting rules built for diesel and gasoline are catching up.',
    date: 'January 1, 2026',
  },
  {
    slug: 'fmcsa-off-site-audits-digital-portal',
    category: 'FMCSA',
    title: 'FMCSA Off-Site Audit Digital Portal',
    excerpt:
      "FMCSA compliance reviews increasingly happen without an investigator ever setting foot at a carrier's terminal.",
    date: 'Current',
  },
  {
    slug: 'understanding-fmcsa-regulatory-roadmap',
    category: 'Regulatory',
    title: 'Understanding the FMCSA Regulatory Roadmap',
    excerpt:
      "Compliance rarely changes all at once. It shifts in pieces — an Hours of Service adjustment here, a scoring model update there — and the cumulative effect on a fleet is easy to miss if you're only paying attention when something breaks.",
    date: 'Current',
  },
]

/* -------------------------------------------------------------------------- */
/* Components                                                                 */
/* -------------------------------------------------------------------------- */

function ArticleCard({
  article,
}: {
  article: (typeof articles)[number]
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#dce3ed] bg-white shadow-[0_8px_28px_rgba(20,35,66,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#cbd5e3] hover:shadow-[0_20px_45px_rgba(20,35,66,0.08)]">
      <div className="flex items-center justify-between border-b border-[#edf0f4] px-6 py-5">
        <span className="inline-flex items-center rounded-full bg-[#fff1e8] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-[#d8610c]">
          {article.category}
        </span>

        <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#97a3b5]">
          Compliance Insights
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#8a96aa]">
          <CalendarDays className="h-3.5 w-3.5" />
          {article.date}
        </div>

        <h3 className="mt-5 text-[20px] font-black leading-[1.12] tracking-[-0.035em] text-[#142342]">
          {article.title}
        </h3>

        <p className="mt-4 text-[13px] leading-6 text-[#687790]">
          {article.excerpt}
        </p>

        <div className="mt-auto pt-7">
          <Link
            href={`/blog/${article.slug}`}
            className="group/link inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#142342] transition-colors hover:text-[#f57019]"
          >
            Read article
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8fb] text-[#142342]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0d1831]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#405486]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-[-240px] h-[520px] w-[520px] rounded-full bg-[#f57019]/[0.045] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                COMPLIANCE INSIGHTS
              </span>
            </div>

            <h1 className="max-w-4xl text-[46px] font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-[58px] lg:text-[72px]">
              Compliance{' '}
              <span className="text-[#f57019]">
                Insights.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-[16px] leading-7 text-[#aeb9ca] sm:text-[17px]">
              Practical regulatory information for trucking companies across the United States and Canada. Clear enough to understand, useful enough to act on.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#74839d]">
            <span className="h-px w-8 bg-[#43516d]" />
            Regulatory information without the noise.
            <span className="h-1 w-1 rounded-full bg-[#f57019]" />
            Practical compliance context
          </div>
        </div>
      </section>

      {/* WHY WE PUBLISH */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#f57019]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                  Why We Publish
                </span>
              </div>

              <h2 className="mt-5 max-w-[430px] text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
                Regulatory information without the noise.
              </h2>
            </div>

            <div className="space-y-6 text-[15px] leading-7 text-[#5f6f89] sm:text-[16px] sm:leading-8">
              <p>
                Regulations change. Guidance evolves. Digital systems replace older processes. For a trucking company, keeping up with those changes is part of staying operational. Our Compliance Insights section exists to make those developments easier to understand and easier to put into context. We focus on practical regulatory topics that matter to commercial trucking operations rather than publishing content simply to fill a calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section className="border-t border-[#e8ecf2] bg-[#f7f8fb]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                Latest Insights
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
              What&apos;s changing in compliance.
            </h2>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#687790] sm:text-[16px]">
              Regulatory topics selected for their practical relevance to commercial trucking operations.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR STANDARD */}
      <section className="border-t border-[#e8ecf2] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-start gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#f57019]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                  Our Standard
                </span>
              </div>

              <h2 className="mt-5 max-w-[430px] text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
                A compliance company has to get compliance content right.
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-[15px] leading-7 text-[#5f6f89] sm:text-[16px] sm:leading-8">
                Regulatory information carries a higher standard than ordinary marketing content. Before an article is published, regulatory claims should be checked against the appropriate primary source.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Primary-source verification',
                  'Practical compliance context',
                  'No sensationalized headlines',
                  'Real publication dates',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#e1e6ee] bg-[#f8f9fc] p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#f57019]" />
                    <span className="text-[14px] font-bold text-[#142342]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-[#e0e5ed] bg-[#f7f8fb] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#142342]" />
                  <p className="text-[13px] leading-6 text-[#697890]">
                    Articles are intended for general informational purposes. They do not replace official regulatory guidance, legal advice, or a review of the requirements applicable to a specific operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#f7f8fb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[32px] bg-[#0d1831] px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 shadow-2xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-[380px] w-[380px] rounded-full bg-[#405486]/20 blur-3xl"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
                  Information is useful.{' '}
                  <span className="text-[#f57019]">
                    Visibility is better.
                  </span>
                </h2>
                <p className="mt-5 text-[15px] leading-7 text-[#aeb9ca] sm:text-[16px]">
                  If you want to understand your own compliance position rather than simply read about regulatory changes, start with a TruckEase Risk Screening.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-4">
                <Link
                  href="/risk-screening"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f57019] px-7 py-4 text-[12px] font-black uppercase tracking-[0.12em] text-white transition hover:bg-[#e0610d]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
