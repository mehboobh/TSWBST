import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  ShieldCheck,
} from 'lucide-react'

const articles = [
  {
    category: 'IFTA',
    title: 'IFTA Reporting for Electric and Alternative-Fuel Fleets',
    description:
      'What fleet operators should understand about IFTA reporting as fuel types and vehicle technologies continue to evolve.',
    status: 'INSIGHT',
  },
  {
    category: 'FMCSA',
    title: 'FMCSA Off-Site Audit Digital Portal',
    description:
      'What the move toward digital off-site audit processes means for carriers and the records they need to keep organized.',
    status: 'INSIGHT',
  },
  {
    category: 'REGULATORY',
    title: 'Understanding the FMCSA Regulatory Roadmap',
    description:
      'A practical look at the regulatory changes on the horizon and why staying informed matters for commercial carriers.',
    status: 'INSIGHT',
  },
]

const principles = [
  'Primary-source verification',
  'Practical compliance context',
  'No sensationalized headlines',
  'Real publication dates',
]

export default function BlogPage() {
  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-[#0c1a36]">
      {/* ================================================================ */}
      {/* HERO                                                            */}
      {/* ================================================================ */}

      <section className="relative border-b border-[#e2ded3] bg-[#0c1a36]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#16274a] opacity-70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-250px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#16274a] opacity-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#e8720c]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
                Compliance Insights
              </span>
            </div>

            <h1 className="font-serif text-5xl font-medium leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Compliance
              <br />
              <span className="text-[#e8720c]">Insights.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Practical regulatory information for trucking companies across
              the United States and Canada. Clear enough to understand, useful
              enough to act on.
            </p>
          </div>

          <div className="mt-16 h-px bg-white/10" />

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
              TruckEase Regulatory Insights
            </p>

            <p className="text-xs text-white/35">
              Built for commercial trucking operations
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* INTRODUCTION                                                     */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Why We Publish
                </span>
              </div>

              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0c1a36]">
                <BookOpen className="h-6 w-6 text-[#e8720c]" />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                Regulatory information
                <br />
                without the noise.
              </h2>

              <div className="mt-7 max-w-3xl space-y-5 text-[15px] leading-7 text-[#596372]">
                <p>
                  Regulations change. Guidance evolves. Digital systems
                  replace older processes. For a trucking company, keeping up
                  with those changes is part of staying operational.
                </p>

                <p>
                  Our Compliance Insights section exists to make those
                  developments easier to understand and easier to put into
                  context.
                </p>

                <p>
                  We focus on practical regulatory topics that matter to
                  commercial trucking operations rather than publishing
                  content simply to fill a calendar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* FEATURED / LATEST INSIGHTS                                      */}
      {/* ================================================================ */}

      <section className="border-y border-[#e2ded3] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e2e7ec]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Latest Insights
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                What&apos;s changing
                <br />
                in compliance.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#697281] md:text-right">
              Regulatory topics selected for their practical relevance to
              commercial trucking operations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className={`group flex flex-col rounded-xl border border-[#e2e7ec] bg-[#fdfcf9] p-7 transition hover:-translate-y-0.5 hover:border-[#cfd6df] sm:p-8 ${
                  index === 0 ? 'lg:min-h-[430px]' : 'lg:min-h-[390px]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#697281]">
                    {article.category}
                  </span>

                  <span className="rounded-full border border-[#e2ded3] bg-white px-2.5 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#697281]">
                    {article.status}
                  </span>
                </div>

                <div className="mt-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0eee8]">
                  <FileText className="h-5 w-5 text-[#16274a]" />
                </div>

                <h3 className="mt-7 font-serif text-2xl font-medium leading-tight tracking-[-0.025em] text-[#0c1a36]">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#596372]">
                  {article.description}
                </p>

                <div className="mt-auto pt-8">
                  <div className="flex items-center justify-between border-t border-[#e2e7ec] pt-5">
                    <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-[#8a929e]">
                      <CalendarDays className="h-3.5 w-3.5" />
                      Publication date
                    </span>

                    <span className="text-xs text-[#8a929e]">
                      To be published
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* EDITORIAL STANDARD                                               */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Our Standard
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                A compliance company
                <br />
                has to get compliance
                <br />
                content right.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-[#596372]">
                Regulatory information carries a higher standard than ordinary
                marketing content. Before an article is published, regulatory
                claims should be checked against the appropriate primary
                source.
              </p>

              <div className="mt-9 grid gap-0 sm:grid-cols-2">
                {principles.map((principle, index) => (
                  <div
                    key={principle}
                    className="flex items-center gap-4 border-b border-[#dcd8cf] py-5"
                  >
                    <span className="font-mono text-[9px] text-[#e8720c]">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[#5c8a68]" />

                      <span className="text-sm font-medium text-[#0c1a36]">
                        {principle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-[#e2ded3] bg-[#fdfcf9] p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#16274a]" />

                  <p className="text-sm leading-6 text-[#596372]">
                    Articles are intended for general informational purposes.
                    They do not replace official regulatory guidance, legal
                    advice, or a review of the requirements applicable to a
                    specific operation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CTA                                                              */}
      {/* ================================================================ */}

      <section className="bg-[#0c1a36]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Need a Closer Look?
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Information is useful.
                <br />
                <span className="text-[#e8720c]">
                  Visibility is better.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                If you want to understand your own compliance position rather
                than simply read about regulatory changes, start with a TruckEase
                Risk Screening.
              </p>
            </div>

            <Link
              href="/risk-screening"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
            >
              Request a Risk Screening
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
