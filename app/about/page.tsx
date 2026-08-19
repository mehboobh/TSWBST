import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  Eye,
  FileCheck2,
  Globe2,
  Lock,
  Quote,
  RefreshCw,
  ShieldCheck,
  Target,
  Users,
  Award,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
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

const story = [
  'The trucking industry operates in an environment where regulations keep evolving and documentation requirements keep growing, while running the actual business doesn\u2019t slow down to make room for either.',
  'Our role is to close that gap, not by adding more paperwork, but by building a system that tracks what matters continuously, so problems get caught early instead of discovered late.',
  'We combine regulatory experience with automated monitoring built specifically for that job: organizing records, tracking renewals, and surfacing patterns that are difficult to catch through manual review alone.',
  'We\u2019re not simply here to complete filings. We\u2019re here to help businesses maintain a continuously updated understanding of their compliance position, providing greater visibility before issues become operational challenges.',
  'Because when compliance is visible instead of reactive, businesses spend less time worrying about paperwork and more time running the business.',
]

const commitments = [
  {
    icon: FileCheck2,
    title: 'No legal advice, ever',
    body: 'Screenings and monitoring reflect publicly available regulatory information. They are not a government rating or a substitute for legal counsel.',
  },
  {
    icon: Lock,
    title: 'Your data stays yours',
    body: 'Information you share is used to support your compliance position, not sold, and not repurposed for anything outside that work.',
  },
  {
    icon: Clock,
    title: 'A person, when you need one',
    body: 'Automated monitoring runs continuously. Human review is available Monday\u2013Friday, 8:00 AM\u20136:00 PM EST, for anything that needs judgment.',
  },
  {
    icon: Globe2,
    title: 'Built for two countries, one system',
    body: 'United States and Canadian requirements are tracked side by side, so cross-border operations don\u2019t need two separate processes.',
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

<section className="relative overflow-hidden bg-white">
  {/* atmosphere — brand navy + orange + indigo */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -right-48 -top-56 h-[640px] w-[640px] rounded-full bg-[#e85d04]/[0.07] blur-[120px]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute -left-56 bottom-[-260px] h-[560px] w-[560px] rounded-full bg-[#4353a4]/[0.07] blur-[120px]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.028]"
    style={{
      backgroundImage:
        'linear-gradient(#142342 1px, transparent 1px), linear-gradient(90deg, #142342 1px, transparent 1px)',
      backgroundSize: '46px 46px',
      maskImage:
        'radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)',
    }}
  />

  <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-28">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
      
      {/* Left Column Content */}
      <div className="max-w-2xl">
        {/* eyebrow */}
        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-8 bg-[#e85d04]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
            About TruckEase
          </span>
        </div>

        {/* headline */}
        <h1 className="text-[44px] font-black leading-[0.98] tracking-[-0.05em] text-[#142342] sm:text-[56px] lg:text-[70px]">
          Bringing Clarity
          <br />
          and Confidence to
          <br />
          <span className="relative inline-block">
            <span
              aria-hidden="true"
              className="absolute -inset-x-2 bottom-[0.1em] top-[0.32em] -z-10 rounded-full bg-[#e85d04]/[0.12] blur-xl"
            />
            <span className="text-[#e85d04]">
              Commercial Compliance.
            </span>
          </span>
        </h1>

        {/* supporting statement */}
        <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#5f708c] sm:text-[18px]">
          Built for United States and Canadian commercial fleets seeking
          continuous operational visibility.
        </p>
      </div>

      {/* Right Column Dark Box Card */}
      <div className="relative w-full max-w-md justify-self-center lg:justify-self-end">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0d172c] p-8 text-white shadow-[0_25px_60px_-15px_rgba(13,23,44,0.3)] border border-white/10 sm:p-10">
          
          {/* Card Top Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-6 bg-[#e85d04]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
              Overview
            </span>
          </div>

          {/* Card Heading */}
          <h2 className="font-serif text-[26px] leading-[1.15] tracking-[-0.02em] text-white sm:text-[30px]">
            Understand the signals before they become surprises.
          </h2>

          {/* Card Subtitle */}
          <p className="mt-4 text-xs leading-6 text-[#8a9bba]">
            Continuous monitoring and regulatory clarity designed for seamless cross-border operations.
          </p>

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                2
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#6b7c96]">
                Countries Covered
              </p>
            </div>

            <div>
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                24/7
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#6b7c96]">
                Automated Monitoring
              </p>
            </div>

            <div>
              <p className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Mon&ndash;Fri
              </p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#6b7c96]">
                Human Review
              </p>
            </div>
          </div>

          {/* Bottom Footer Note */}
          <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-[11px] text-[#71829e]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#e85d04]" />
            <span>Continuous visibility for US and Canadian fleets.</span>
          </div>

        </div>
      </div>

    </div>
  </div>

  {/* soft blend into the next section */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#f5f1e9]"
  />
</section>

      {/* ================================================================== */}
      {/* WHY TRUCK EASE                                                     */}
      {/* ================================================================== */}

      <section className="relative bg-[#f5f1e9]">
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            {/* Pull quote */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#e85d04]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6b50]">
                  Why TruckEase Exists
                </span>
              </div>

              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#142342] text-white shadow-[0_10px_25px_rgba(20,35,66,0.18)]">
                <Quote className="h-5 w-5" />
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

              <div className="relative mt-9 space-y-8 border-l border-[#d7d0c5] pl-7 text-[14px] leading-7 text-[#66758c] sm:text-[15px]">
                {story.map((paragraph, index) => (
                  <p
                    key={index}
                    className="relative"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-1.5 h-2 w-2 rounded-full border-2 border-[#f5f1e9] bg-[#e85d04]"
                    />
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THREE PRINCIPLES                                                   */}
      {/* ================================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">

          <div className="grid gap-5 md:grid-cols-3">

            <article className="group relative overflow-hidden rounded-2xl border border-[#dce3ed] bg-[#fbfcfe] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2e6] hover:shadow-[0_20px_45px_rgba(20,35,66,0.08)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-5 font-serif text-[90px] font-medium leading-none text-[#142342]/[0.04] transition-colors duration-300 group-hover:text-[#4353a4]/[0.06]"
              >
                01
              </span>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3ff] transition-colors duration-300 group-hover:bg-[#4353a4]/[0.12]">
                <Eye className="h-[18px] w-[18px] text-[#4353a4]" />
              </div>

              <h3 className="relative mt-5 text-base font-bold text-[#142342]">
                Visibility
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-[#71809a]">
                A continuously updated understanding of your compliance
                position, rather than a snapshot assembled when something
                needs attention.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-[#dce3ed] bg-[#fbfcfe] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2e6] hover:shadow-[0_20px_45px_rgba(20,35,66,0.08)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-5 font-serif text-[90px] font-medium leading-none text-[#142342]/[0.04] transition-colors duration-300 group-hover:text-[#4353a4]/[0.06]"
              >
                02
              </span>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3ff] transition-colors duration-300 group-hover:bg-[#4353a4]/[0.12]">
                <ShieldCheck className="h-[18px] w-[18px] text-[#4353a4]" />
              </div>

              <h3 className="relative mt-5 text-base font-bold text-[#142342]">
                Confidence
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-[#71809a]">
                Regulatory requirements become something the business can
                actively manage instead of something it has to constantly
                worry about.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-[#dce3ed] bg-[#fbfcfe] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c7d2e6] hover:shadow-[0_20px_45px_rgba(20,35,66,0.08)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-5 font-serif text-[90px] font-medium leading-none text-[#142342]/[0.04] transition-colors duration-300 group-hover:text-[#4353a4]/[0.06]"
              >
                03
              </span>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f3ff] transition-colors duration-300 group-hover:bg-[#4353a4]/[0.12]">
                <Users className="h-[18px] w-[18px] text-[#4353a4]" />
              </div>

              <h3 className="relative mt-5 text-base font-bold text-[#142342]">
                Practical support
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-[#71809a]">
                Technology handles continuous tracking while practical
                support remains available when the situation requires a
                person, not just a system.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* MISSION + VISION                                                   */}
      {/* ================================================================== */}

      <section className="relative bg-[#f5f1e9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#d7d0c5] to-transparent lg:block hidden"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">

            <div className="lg:pr-16">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#142342]/[0.06]">
                  <Target className="h-3.5 w-3.5 text-[#8a6b50]" />
                </div>

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
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#142342]/[0.06]">
                  <Compass className="h-3.5 w-3.5 text-[#8a6b50]" />
                </div>

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
                companies across North America, where regulatory expertise
                and real technology work together, not one standing in for
                the other.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* OUR COMMITMENT — policy & trust, in plain language                 */}
      {/* ================================================================== */}

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#e85d04]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85d04]">
                Our Commitment
              </span>
            </div>

            <h2 className="font-serif text-[30px] leading-[1.12] tracking-[-0.025em] text-[#142342] sm:text-[36px]">
              What we promise, in plain terms.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#69778c]">
              No fine print required to understand where TruckEase stands.
              These are the same commitments that shape every screening,
              every record we track, and every conversation with our team.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#e4e8f0] bg-[#fbfcfe] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e85d04]/30 hover:shadow-[0_18px_40px_rgba(232,93,4,0.08)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#142342] transition-colors duration-300 group-hover:bg-[#e85d04]">
                    <Icon className="h-[18px] w-[18px] text-white" />
                  </div>

                  <h3 className="mt-5 text-sm font-bold text-[#142342]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#71809a]">
                    {item.body}
                  </p>
                </div>
              )
            })}
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

            {/* ambient brand glows, echoing the hero */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#e85d04]/[0.10] blur-[110px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 bottom-[-160px] h-[380px] w-[380px] rounded-full bg-[#4353a4]/[0.14] blur-[110px]"
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
                        className="group relative border-b border-white/10 py-5 pl-4 -ml-4 transition-colors duration-300 first:border-t first:border-white/10 hover:bg-white/[0.025] sm:first:border-t-0 sm:nth-[2]:border-t-0"
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-[#e85d04] transition-transform duration-300 group-hover:scale-y-100"
                        />

                        <div className="flex items-start gap-3">

                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-[#e85d04]/40 group-hover:bg-[#e85d04]/10">
                            <Icon className="h-3.5 w-3.5 text-[#8fa1c5] transition-colors duration-300 group-hover:text-[#f0a56b]" />
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

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-[#e85d04]/[0.16] blur-[100px]"
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
                  className="inline-flex min-h-11 items-center justify-center gap-3 rounded-xl bg-[#e85d04] px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(232,93,4,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d95200] hover:shadow-[0_14px_32px_rgba(232,93,4,0.24)]"
                >
                  Request a Risk Screening
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-3 rounded-xl border border-white/20 bg-transparent px-5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40"
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
