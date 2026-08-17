import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Eye,
  Globe2,
  ShieldCheck,
  Target,
} from 'lucide-react'

const values = [
  'Integrity',
  'Accuracy',
  'Accountability',
  'Continuous Improvement',
  'Customer Partnership',
  'Professional Excellence',
]

export default function AboutPage() {
  return (
    <main className="bg-[#f7f4ee] text-[#0c1a36]">
      {/* ================================================================ */}
      {/* HERO                                                            */}
      {/* ================================================================ */}

      <section className="relative overflow-hidden bg-[#0c1a36]">
        <div
          aria-hidden="true"
          className="absolute right-[-180px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#16274a] opacity-70 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-[#16274a] opacity-50 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
          <div className="max-w-5xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-9 bg-[#e8720c]" />

              <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
                About TruckEase
              </span>
            </div>

            <h1 className="max-w-5xl font-serif text-5xl font-medium leading-[1.03] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Bringing Clarity
              <br />
              and Confidence to
              <br />
              <span className="text-[#e8720c]">
                Commercial Compliance.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Built for United States and Canadian commercial fleets seeking
              continuous operational visibility.
            </p>
          </div>

          <div className="mt-16 h-px bg-white/10" />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
              TruckEase Solutions Inc.
            </p>

            <div className="flex items-center gap-3 text-xs text-white/45">
              <Globe2 className="h-4 w-4" />
              <span>United States &amp; Canada</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* OUR STORY                                                       */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Why TruckEase Exists
                </span>
              </div>

              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0c1a36]">
                <Compass className="h-6 w-6 text-[#e8720c]" />
              </div>

              <p className="mt-6 max-w-sm font-serif text-2xl leading-tight tracking-[-0.02em] text-[#0c1a36]">
                Compliance should create operational confidence, not
                administrative frustration.
              </p>
            </div>

            <div>
              <p className="font-serif text-2xl font-medium leading-[1.35] tracking-[-0.02em] text-[#0c1a36] sm:text-3xl">
                TruckEase was founded on a simple belief: compliance should
                create operational confidence, not administrative frustration.
              </p>

              <div className="mt-8 space-y-6 text-[15px] leading-7 text-[#596372]">
                <p>
                  The trucking industry operates in an environment where
                  regulations keep evolving and documentation requirements keep
                  growing, while running the actual business doesn&apos;t slow
                  down to make room for either.
                </p>

                <p>
                  Our role is to close that gap, not by adding more paperwork,
                  but by building a system that tracks what matters
                  continuously, so problems get caught early instead of
                  discovered late.
                </p>

                <p>
                  We combine regulatory experience with automated monitoring
                  built specifically for that job: organizing records,
                  tracking renewals, and surfacing patterns that are difficult
                  to catch through manual review alone.
                </p>

                <p>
                  We&apos;re not simply here to complete filings. We&apos;re
                  here to help businesses maintain a continuously updated
                  understanding of their compliance position, providing greater
                  visibility before issues become operational challenges.
                </p>

                <p>
                  Because when compliance is visible instead of reactive,
                  businesses spend less time worrying about paperwork and more
                  time running the business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* A DIFFERENT WAY OF THINKING                                     */}
      {/* ================================================================ */}

      <section className="border-y border-[#e2e7ec] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-xl border border-[#e2e7ec] bg-[#fdfcf9] p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0eee8]">
                <Eye className="h-5 w-5 text-[#16274a]" />
              </div>

              <h2 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                Visibility
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#596372]">
                A continuously updated understanding of your compliance
                position, rather than a snapshot assembled when something
                needs attention.
              </p>
            </div>

            <div className="rounded-xl border border-[#e2e7ec] bg-[#fdfcf9] p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0eee8]">
                <ShieldCheck className="h-5 w-5 text-[#16274a]" />
              </div>

              <h2 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                Confidence
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#596372]">
                Regulatory requirements become something the business can
                actively manage instead of something it has to constantly
                worry about.
              </p>
            </div>

            <div className="rounded-xl border border-[#e2e7ec] bg-[#fdfcf9] p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0eee8]">
                <Target className="h-5 w-5 text-[#16274a]" />
              </div>

              <h2 className="mt-7 text-xl font-semibold tracking-[-0.02em]">
                Practical support
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#596372]">
                Technology handles continuous tracking while practical support
                remains available when the situation requires a person, not
                just a system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MISSION / VISION                                                 */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Mission */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Our Mission
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                Confidence through
                <br />
                continuous compliance.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#596372]">
                To help trucking businesses operate with confidence through
                continuously-tracked compliance, smart automation, and
                practical support when you need a person, not just a system.
              </p>
            </div>

            {/* Vision */}
            <div className="border-t border-[#dcd8cf] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#dcd8cf]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Our Vision
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                The trusted compliance
                <br />
                platform for trucking.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-[#596372]">
                To become the trusted compliance platform for trucking
                companies across North America, where regulatory expertise and
                real technology work together, not one standing in for the
                other.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* VALUES                                                          */}
      {/* ================================================================ */}

      <section className="bg-[#0c1a36]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-white/20" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white/45">
                  Our Values
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                How we
                <br />
                work.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                The standards behind how we build the platform, manage
                compliance work, and work with the businesses we serve.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-4 border-b border-white/10 py-6"
                >
                  <span className="font-mono text-[9px] text-[#e8720c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#5c8a68]" />

                    <span className="text-sm font-medium text-white/80">
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* WHERE WE OPERATE                                                 */}
      {/* ================================================================ */}

      <section className="bg-[#f7f4ee]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-8 rounded-2xl border border-[#e2ded3] bg-[#fdfcf9] p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0c1a36]">
                <Globe2 className="h-5 w-5 text-[#e8720c]" />
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#697281]">
                  Where We Operate
                </p>

                <p className="mt-2 font-serif text-2xl font-medium tracking-[-0.02em] text-[#0c1a36]">
                  United States and Canada.
                </p>
              </div>
            </div>

            <p className="max-w-xl text-sm leading-6 text-[#596372] lg:text-right">
              Built for commercial fleets operating in the regulatory
              environments of North America.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CLOSING CTA                                                      */}
      {/* ================================================================ */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e2e7ec]" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#697281]">
                  Get Started
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium leading-tight tracking-[-0.03em] text-[#0c1a36] sm:text-5xl">
                Compliance built for
                <br />
                <span className="text-[#e8720c]">
                  operational confidence.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-[#596372]">
                See where your compliance position stands and discover how
                TruckEase can help you manage what comes next.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/risk-screening"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#e8720c] px-6 text-sm font-semibold text-white transition hover:bg-[#f17d1b]"
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-[#16274a]/25 bg-transparent px-6 text-sm font-semibold text-[#16274a] transition hover:border-[#16274a]/50"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
