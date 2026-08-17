import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Target,
  Eye,
  Users,
  Award,
  RefreshCw,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Values                                                                     */
/* -------------------------------------------------------------------------- */

const values = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Integrity',
    body: 'We do the right thing for the operation, even when the easier answer is different.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Accuracy',
    body: 'Compliance decisions depend on details. We treat accuracy as foundational, not optional.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Accountability',
    body: 'We take responsibility for the work, the information we surface, and the next step.',
  },
  {
    number: '04',
    icon: RefreshCw,
    title: 'Continuous Improvement',
    body: 'Regulations change and operations evolve. The way we work has to keep improving too.',
  },
  {
    number: '05',
    icon: Users,
    title: 'Customer Partnership',
    body: 'We work alongside the business, providing practical support when a person is needed.',
  },
  {
    number: '06',
    icon: Award,
    title: 'Professional Excellence',
    body: 'We combine regulatory knowledge, technology, organization, and disciplined execution.',
  },
]

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f7f8fb] text-[#142342]">

      {/* ================================================================== */}
      {/* HERO                                                               */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden border-b border-[#dfe5ef] bg-white">

        {/* subtle atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-[#e85d04]/[0.035] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#4353a4]/[0.035] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">

          <div className="max-w-5xl">

            {/* eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e85d04]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
                About TruckEase
              </span>
            </div>

            {/* headline */}
            <h1 className="max-w-4xl text-[48px] font-black leading-[0.98] tracking-[-0.05em] text-[#142342] sm:text-[62px] lg:text-[78px]">
              Bringing Clarity
              <br />
              and Confidence to
              <br />
              <span className="text-[#e85d04]">
                Commercial Compliance.
              </span>
            </h1>

            {/* supporting statement */}
            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#5f708c] sm:text-[18px]">
              Built for United States and Canadian commercial fleets seeking
              continuous operational visibility.
            </p>

            {/* bottom signal */}
            <div className="mt-12 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#71809a]">
              <span className="h-px w-10 bg-[#cbd5e3]" />
              <span>Compliance built for operational confidence.</span>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* WHY TRUCK EASE                                                     */}
      {/* ================================================================== */}

      <section className="bg-[#f5f1e9]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* Pull quote */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e85d04]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6b50]">
                  Why TruckEase Exists
                </span>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#142342] text-white">
                <Target className="h-5 w-5" />
              </div>

              <p className="mt-6 max-w-xs font-serif text-[24px] leading-[1.2] tracking-[-0.02em] text-[#142342]">
                Compliance should create operational confidence, not
                administrative frustration.
              </p>
            </div>

            {/* Main story */}
            <div className="max-w-3xl">

              <h2 className="font-serif text-[30px] leading-[1.12] tracking-[-0.025em] text-[#142342] sm:text-[36px]">
                TruckEase was founded on a simple belief: compliance should
                create operational confidence, not administrative frustration.
              </h2>

              <div className="mt-7 space-y-5 text-[14px] leading-7 text-[#66758c] sm:text-[15px]">

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

      {/* ================================================================== */}
      {/* THREE PRINCIPLES                                                   */}
      {/* ================================================================== */}

      <section className="border-b border-[#e1e5ec] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid gap-5 md:grid-cols-3">

            <article className="rounded-2xl border border-[#dce3ed] bg-[#fbfcfe] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3ff]">
                <Eye className="h-4.5 w-4.5 text-[#4353a4]" />
              </div>

              <h3 className="mt-5 text-base font-bold text-[#142342]">
                Visibility
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71809a]">
                A continuously updated understanding of your compliance
                position, rather than a snapshot assembled when something
                needs attention.
              </p>
            </article>

            <article className="rounded-2xl border border-[#dce3ed] bg-[#fbfcfe] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3ff]">
                <ShieldCheck className="h-4.5 w-4.5 text-[#4353a4]" />
              </div>

              <h3 className="mt-5 text-base font-bold text-[#142342]">
                Confidence
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71809a]">
                Regulatory requirements become something the business can
                actively manage instead of something it has to constantly
                worry about.
              </p>
            </article>

            <article className="rounded-2xl border border-[#dce3ed] bg-[#fbfcfe] p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3ff]">
                <Users className="h-4.5 w-4.5 text-[#4353a4]" />
              </div>

              <h3 className="mt-5 text-base font-bold text-[#142342]">
                Practical support
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#71809a]">
                Technology handles continuous tracking while practical support
                remains available when the situation requires a person, not
                just a system.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION + VISION                                                   */}
      {/* ================================================================== */}

      <section className="bg-[#f5f1e9]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">

            <div className="lg:border-r lg:border-[#d7d0c5] lg:pr-16">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9b79f]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6b50]">
                  Our Mission
                </span>
              </div>

              <h2 className="max-w-xl font-serif text-[32px] leading-[1.08] tracking-[-0.025em] text-[#142342] sm:text-[40px]">
                Confidence through
                <br />
                continuous compliance.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#69778c]">
                To help trucking businesses operate with confidence through
                continuously-tracked compliance, smart automation, and
                practical support when you need a person, not just a system.
              </p>
            </div>

            <div className="lg:pl-16">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c9b79f]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6b50]">
                  Our Vision
                </span>
              </div>

              <h2 className="max-w-xl font-serif text-[32px] leading-[1.08] tracking-[-0.025em] text-[#142342] sm:text-[40px]">
                The trusted compliance
                <br />
                platform for trucking.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#69778c]">
                To become the trusted compliance platform for trucking
                companies across North America, where regulatory expertise and
                real technology work together, not one standing in for the
                other.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* OUR VALUES                                                         */}
      {/* IMPORTANT: contained to the same visual width as GET STARTED      */}
      {/* ================================================================== */}

      <section className="bg-[#f5f1e9] px-6 pb-20 sm:px-8 lg:px-10 lg:pb-24">

        {/* This boundary intentionally does NOT span the viewport. */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-[#0e1b38] shadow-[0_24px_70px_rgba(20,35,66,0.12)]">

          <div className="relative px-7 py-12 sm:px-10 lg:px-14 lg:py-14">

            {/* subtle grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
              }}
            />

            <div className="relative">

              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">

                {/* left */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#e85d04]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
                      Our Values
                    </span>
                  </div>

                  <h2 className="max-w-xs font-serif text-[34px] leading-[1.08] tracking-[-0.025em] text-white sm:text-[40px]">
                    How we
                    <br />
                    work.
                  </h2>

                  <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
                    The standards behind how we build the platform, manage
                    compliance work, and work with the businesses we serve.
                  </p>
                </div>

                {/* right */}
                <div className="grid gap-x-8 sm:grid-cols-2">

                  {values.map((value) => {
                    const Icon = value.icon

                    return (
                      <article
                        key={value.number}
                        className="group border-b border-white/10 py-5 first:border-t first:border-white/10 sm:first:border-t-0 sm:nth-[2]:border-t-0"
                      >
                        <div className="flex items-start gap-3">

                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                            <Icon className="h-3.5 w-3.5 text-[#8fa1c5]" />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold tracking-[0.12em] text-[#e85d04]">
                                {value.number}
                              </span>

                              <h3 className="text-sm font-bold text-white">
                                {value.title}
                              </h3>
                            </div>

                            <p className="mt-2 text-xs leading-5 text-white/50">
                              {value.body}
                            </p>

                          </div>
                        </div>
                      </article>
                    )
                  })}

                </div>
              </div>

              {/* operating region */}
              <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">
                    <Globe2 className="h-4 w-4 text-[#e85d04]" />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Where we operate
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-white">
                      United States and Canada.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-white/40">
                  Built for commercial fleets operating across North America.
                </p>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* GET STARTED                                                        */}
      {/* Same max-width as OUR VALUES                                       */}
      {/* ================================================================== */}

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-[24px] bg-[#0e1b38] px-7 py-10 shadow-[0_20px_60px_rgba(20,35,66,0.10)] sm:px-10 lg:px-12 lg:py-12">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
              }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-2xl">

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#7d88a6]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fa1c5]">
                    Get Started
                  </span>
                </div>

                <h2 className="font-serif text-[30px] leading-[1.1] tracking-[-0.025em] text-white sm:text-[38px]">
                  Compliance built for
                  <br />
                  <span className="text-[#e85d04]">
                    operational confidence.
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-6 text-white/55">
                  See where your compliance position stands and discover how
                  TruckEase can help you manage what comes next.
                </p>

              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

                <Link
                  href="/risk-screening"
                  className="inline-flex min-h-11 items-center justify-center gap-3 rounded-xl bg-[#e85d04] px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(232,93,4,0.18)] transition hover:-translate-y-0.5 hover:bg-[#d95200]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-3 rounded-xl border border-white/20 bg-transparent px-5 text-sm font-bold text-white transition hover:border-white/40"
                >
                  Contact Our Team
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
