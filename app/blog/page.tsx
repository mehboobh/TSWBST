import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Article content                                                            */
/* -------------------------------------------------------------------------- */

const articles = [
  {
    id: 'ifta-reporting-electric-alternative-fuel-fleets',
    category: 'IFTA',
    title: 'IFTA Reporting for Electric and Alternative-Fuel Fleets',
    excerpt:
      "As electric and alternative-fuel trucks become part of more commercial fleets, the reporting rules built for diesel and gasoline are catching up.",
    date: 'January 1, 2026',
    sections: [
      {
        heading: null,
        paragraphs: [
          "As electric and alternative-fuel trucks become part of more commercial fleets, the reporting rules built for diesel and gasoline are catching up. As of January 1, 2026, the International Fuel Tax Agreement expanded its definition of taxable fuel to include electricity and hydrogen — meaning fleets running electric or hydrogen-powered commercial vehicles now fall under IFTA's reporting requirements the same way diesel and gas vehicles always have.",
        ],
      },
      {
        heading: 'What actually changed',
        paragraphs: [
          "For decades, IFTA covered conventional fuel types only. A fleet running an electric truck across state or provincial lines wasn't tracking that vehicle's energy use the way it tracked a diesel truck's fuel purchases, because there was no requirement to. That's no longer the case. Electric and hydrogen consumption now needs to be tracked by jurisdiction, the same way fuel has always been tracked — miles driven in each jurisdiction, energy consumed, and (where applicable) tax owed.",
        ],
      },
      {
        heading: 'Where the rates actually stand',
        paragraphs: [
          "This is where it gets uneven, and it's worth knowing rather than assuming every state has caught up at the same pace. Several jurisdictions have already published tax rates for electricity and hydrogen — Wyoming, Indiana, Iowa, New Mexico, North Dakota, and Pennsylvania among them. Others, including California, currently require reporting but haven't yet finalized an actual tax rate — meaning the paperwork obligation exists before the tax obligation does. Not every IFTA member jurisdiction has finalized its position, and this is genuinely still moving. A fleet operating across multiple states or provinces should expect this list to keep changing rather than treat it as settled.",
        ],
      },
      {
        heading: 'What this means operationally',
        paragraphs: [
          'The practical shift is less about the tax itself and more about the tracking. If your fleet includes any electric or alternative-fuel vehicles, mileage and energy consumption by jurisdiction now need to be part of your regular IFTA reporting process, not a side note. Fleets that treat this as "we\'ll figure it out later" risk finding out at filing time that they\'re missing data they needed to be capturing the whole quarter.',
        ],
      },
      {
        heading: 'The bigger pattern',
        paragraphs: [
          "This is a good example of something that shows up constantly in trucking compliance: a rule change that's real, active, and jurisdiction-by-jurisdiction inconsistent, all at once. Waiting for it to fully settle before paying attention isn't really an option, because by the time it settles, several filing quarters will have already passed under the interim rules.",
        ],
      },
    ],
    disclaimer:
      'Compliance information current as of publication. IFTA jurisdiction-specific rates change — verify current rates for your operating jurisdictions before filing.',
  },
  {
    id: 'fmcsa-off-site-audits-digital-portal',
    category: 'FMCSA',
    title: 'FMCSA Off-Site Audit Digital Portal',
    excerpt:
      "FMCSA compliance reviews increasingly happen without an investigator ever setting foot at a carrier's terminal.",
    date: 'Current',
    sections: [
      {
        heading: null,
        paragraphs: [
          'FMCSA compliance reviews increasingly happen without an investigator ever setting foot at a carrier\'s terminal. Off-site reviews — conducted through electronic submission rather than an in-person visit — have become the default process for a large share of carrier audits, and that shift changes what "being audit-ready" actually means in practice.',
        ],
      },
      {
        heading: 'How the process actually works',
        paragraphs: [
          "Instead of an investigator arriving on-site, a carrier typically receives a data request and submits the requested records electronically, often through FMCSA's own systems tied to a carrier's safety profile. The review happens against what's submitted — which means the quality and organization of what gets uploaded matters as much as whether the underlying records are correct in the first place. A record that exists but is hard to locate, or exists in a format that's awkward to submit digitally, creates friction at exactly the moment a carrier can least afford it.",
        ],
      },
      {
        heading: 'Retention periods that actually matter here',
        paragraphs: [
          'A few specific timelines are worth knowing, since they define what "having the record" actually requires:',
        ],
        bullets: [
          'Driver Vehicle Inspection Reports (DVIRs): 3 months',
          'Driver Qualification Files: for the duration of employment, plus 3 years after',
          'Vehicle maintenance records: 1 year, plus 6 months after a vehicle leaves the fleet',
          'Hours of Service supporting documents: 6 months',
        ],
      },
      {
        heading: 'What actually changes for a carrier',
        paragraphs: [
          "The shift toward digital, off-site review rewards carriers whose records are already organized and retrievable, and penalizes carriers whose compliance is real but scattered — folders on different computers, paper in a filing cabinet, PDFs buried in email threads. The underlying compliance might be identical between two carriers, but the one who can produce a clean, complete submission quickly is in a materially better position than the one scrambling to reconstruct records under a deadline.",
        ],
      },
      {
        heading: 'The practical takeaway',
        paragraphs: [
          "Digital submission isn't really the hard part — most carriers can attach a file to a portal. The hard part is knowing exactly what you have, where it is, and whether it's still within its retention window, before a request ever arrives. That's a records-organization problem more than a technology problem, and it's worth solving before it's tested, not during.",
        ],
      },
    ],
    disclaimer:
      'Compliance information current as of publication. Verify current FMCSA audit procedures and retention requirements for your operation.',
  },
  {
    id: 'understanding-fmcsa-regulatory-roadmap',
    category: 'Regulatory',
    title: 'Understanding the FMCSA Regulatory Roadmap',
    excerpt:
      "Compliance rarely changes all at once. It shifts in pieces — an Hours of Service adjustment here, a scoring model update there — and the cumulative effect on a fleet is easy to miss if you're only paying attention when something breaks.",
    date: 'Current',
    sections: [
      {
        heading: null,
        paragraphs: [
          "Compliance rarely changes all at once. It shifts in pieces — an Hours of Service adjustment here, a scoring model update there — and the cumulative effect on a fleet is easy to miss if you're only paying attention when something breaks. A few areas of ongoing FMCSA activity are worth tracking specifically, because they're the ones most likely to affect day-to-day operations rather than sitting purely in regulatory language.",
        ],
      },
      {
        heading: 'Hours of Service',
        paragraphs: [
          'HOS rules continue to be reviewed and adjusted at the federal level. These changes tend to affect flexibility around break timing and short-haul exceptions more than the core daily and weekly driving limits, but even small adjustments can matter for how a dispatch schedule gets built.',
        ],
      },
      {
        heading: 'Drug & Alcohol Clearinghouse',
        paragraphs: [
          "The Clearinghouse — the database tracking drug and alcohol program violations across the industry — continues to see updates to reporting requirements and query obligations. For carriers, this means the process for checking a driver's Clearinghouse status, and the recordkeeping tied to that process, is something worth revisiting periodically rather than assuming it's unchanged since the last time someone checked.",
        ],
      },
      {
        heading: 'CSA scoring',
        paragraphs: [
          "The Compliance, Safety, Accountability program's scoring methodology — the calculation behind the BASIC categories that feed into a carrier's safety profile — has seen adjustments to how certain violations are weighted. A carrier's actual safety performance might not have changed at all, but the score attached to that performance can shift when the underlying calculation does. This is exactly the kind of change that's easy to miss until a score moves and nobody's sure why.",
        ],
      },
      {
        heading: 'Vehicle maintenance and Driver Qualification File requirements',
        paragraphs: [
          'Documentation standards around maintenance records and driver qualification files continue to receive regulatory attention, generally trending toward more specific expectations about what needs to be retained and for how long — reinforcing the same retention discipline covered in our piece on FMCSA off-site audits.',
        ],
      },
      {
        heading: 'Why this matters as a pattern, not just a list',
        paragraphs: [
          "None of these individually is dramatic. Together, they represent a regulatory environment that keeps moving in small increments rather than large, obvious jumps — which is precisely what makes it easy for a carrier to fall behind without noticing. The fleets least affected by any single change tend to be the ones already set up to track changes continuously, rather than the ones checking in once a year and hoping nothing significant happened in between.",
        ],
      },
    ],
    disclaimer:
      'Compliance information current as of publication. FMCSA regulations are subject to ongoing revision — verify current requirements applicable to your operation.',
  },
]

/* -------------------------------------------------------------------------- */
/* Small helpers                                                              */
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
            href={`/blog#${article.id}`}
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

function ArticleSection({
  heading,
  paragraphs,
  bullets,
}: {
  heading: string | null
  paragraphs: string[]
  bullets?: string[]
}) {
  return (
    <section className="scroll-mt-28">
      {heading && (
        <h3 className="text-[21px] font-black tracking-[-0.03em] text-[#142342] sm:text-[24px]">
          {heading}
        </h3>
      )}

      <div className={heading ? 'mt-4' : ''}>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[15px] leading-7 text-[#5f6f89] sm:text-[16px] sm:leading-8"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {bullets && (
        <ul className="mt-5 space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 text-[14px] leading-6 text-[#5f6f89] sm:text-[15px]"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f57019]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function FullArticle({
  article,
}: {
  article: (typeof articles)[number]
}) {
  return (
    <article
      id={article.id}
      className="scroll-mt-24 border-t border-[#e1e6ee] py-16 sm:py-20 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        {/* Article introduction */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#f57019]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
              {article.category}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-4xl">
            {article.title}
          </h2>

          <div className="mt-6 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#8a96aa]">
            <CalendarDays className="h-3.5 w-3.5" />
            {article.date}
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl space-y-10">
          {article.sections.map((section, index) => (
            <ArticleSection
              key={`${article.id}-${index}`}
              heading={section.heading}
              paragraphs={section.paragraphs}
              bullets={section.bullets}
            />
          ))}

          <div className="rounded-2xl border border-[#e0e5ed] bg-[#f7f8fb] px-5 py-4 sm:px-6">
            <p className="text-[12px] italic leading-6 text-[#697890]">
              {article.disclaimer}
            </p>
          </div>
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
      {/* ==================================================================== */}
      {/* HERO                                                                 */}
      {/* ==================================================================== */}

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
              Practical regulatory information for trucking companies across
              the United States and Canada. Clear enough to understand, useful
              enough to act on.
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

      {/* ==================================================================== */}
      {/* WHY WE PUBLISH                                                       */}
      {/* ==================================================================== */}

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

            <div className="max-w-2xl">
              <p className="text-[15px] leading-7 text-[#687790] sm:text-[16px] sm:leading-8">
                Regulations change. Guidance evolves. Digital systems replace
                older processes. For a trucking company, keeping up with those
                changes is part of staying operational. Our Compliance Insights
                section exists to make those developments easier to understand
                and easier to put into context. We focus on practical
                regulatory topics that matter to commercial trucking operations
                rather than publishing content simply to fill a calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* LATEST INSIGHTS                                                      */}
      {/* ==================================================================== */}

      <section className="bg-[#f1f4f9]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#f57019]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                Latest Insights
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
              What's changing in compliance.
            </h2>

            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#687790]">
              Regulatory topics selected for their practical relevance to
              commercial trucking operations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* OUR STANDARD                                                         */}
      {/* ==================================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#f57019]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                  Our Standard
                </span>
              </div>

              <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#142342] sm:text-5xl">
                A compliance company has to get compliance content right.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-[15px] leading-7 text-[#687790] sm:text-[16px] sm:leading-8">
                Regulatory information carries a higher standard than ordinary
                marketing content. Before an article is published, regulatory
                claims should be checked against the appropriate primary
                source.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Primary-source verification',
                  'Practical compliance context',
                  'No sensationalized headlines',
                  'Real publication dates',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-[#dce3ed] bg-[#f8f9fc] px-4 py-4"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#07845c]" />

                    <span className="text-[12px] font-semibold text-[#394966]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#d9e0eb] bg-[#f7f8fb] p-5 sm:p-6">
                <p className="text-[13px] leading-6 text-[#697890]">
                  Articles are intended for general informational purposes.
                  They do not replace official regulatory guidance, legal
                  advice, or a review of the requirements applicable to a
                  specific operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================== */}
      {/* FULL ARTICLES                                                        */}
      {/* ==================================================================== */}

      <section className="bg-[#f7f8fb]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {articles.map((article) => (
            <FullArticle key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* ==================================================================== */}
      {/* CLOSING CTA                                                          */}
      {/* ==================================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="relative overflow-hidden rounded-[24px] bg-[#0d1831] px-7 py-10 shadow-[0_25px_65px_rgba(20,35,66,0.14)] sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-[#43568e]/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-40 -bottom-48 h-[420px] w-[420px] rounded-full bg-[#f57019]/[0.045] blur-3xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div className="max-w-2xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#f57019]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f57019]">
                    Closing CTA
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl">
                  Information is useful.{' '}
                  <span className="text-[#f57019]">
                    Visibility is better.
                  </span>
                </h2>

                <p className="mt-4 text-[13px] leading-6 text-[#aab6c9] sm:text-[14px]">
                  If you want to understand your own compliance position rather
                  than simply read about regulatory changes, start with a
                  TruckEase Risk Screening.
                </p>
              </div>

              <Link
                href="/risk-screening"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-xl bg-[#f57019] px-6 text-sm font-bold text-white shadow-[0_14px_30px_rgba(245,112,25,0.22)] transition hover:-translate-y-0.5 hover:bg-[#e8650e]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
