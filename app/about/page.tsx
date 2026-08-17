import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Target,
  Eye,
  Sparkles,
  Users,
  Crosshair,
  FileCheck2,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Data                                                                       */
/* -------------------------------------------------------------------------- */

const values = [
  {
    number: '01',
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We build trust through honest guidance, responsible handling of compliance information, and clear communication about what we know and what still needs attention.',
  },
  {
    number: '02',
    icon: Crosshair,
    title: 'Accuracy',
    description:
      'Compliance decisions depend on details. We approach records, requirements, renewals, and regulatory information with precision and care.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Accountability',
    description:
      'We believe important compliance work should have clear ownership, visibility, and follow-through rather than disappearing into disconnected spreadsheets and inboxes.',
  },
  {
    number: '04',
    icon: Sparkles,
    title: 'Continuous Improvement',
    description:
      'Regulations change, businesses change, and technology changes. TruckEase is designed to keep improving with the operational realities our customers face.',
  },
  {
    number: '05',
    icon: Users,
    title: 'Customer Partnership',
    description:
      'Technology should support the people operating the business. When a person is needed, practical support remains part of the experience.',
  },
  {
    number: '06',
    icon: Target,
    title: 'Professional Excellence',
    description:
      'We hold the platform, the information it manages, and the support surrounding it to a high professional standard.',
  },
]

const footerLinks = [
  { label: 'Platform', href: '/platform' },
  { label: 'Services', href: '/services' },
  { label: 'Risk Screening', href: '/risk-screening' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Legal Disclaimer', href: '/legal-disclaimer' },
]

/* -------------------------------------------------------------------------- */
/* Small reusable UI                                                          */
/* -------------------------------------------------------------------------- */

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${
          light ? 'bg-[#f47b20]' : 'bg-[#e96516]'
        }`}
      />

      <span
        className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
          light ? 'text-[#f47b20]' : 'text-[#e96516]'
        }`}
      >
        {children}
      </span>
    </div>
  )
}

function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="TruckEase Solutions home"
    >
      <span className="relative flex h-7 w-8 items-center justify-center">
        <span className="absolute left-[3px] top-[9px] h-[7px] w-[22px] rounded-[2px] bg-[#142342]" />
        <span className="absolute left-[7px] top-[6px] h-[6px] w-[14px] rounded-[2px] bg-[#142342]" />
        <span className="absolute right-0 top-[9px] h-[3px] w-[5px] rounded-full bg-[#e96516]" />
        <span className="absolute bottom-[3px] left-[8px] h-[4px] w-[4px] rounded-full bg-[#142342]" />
        <span className="absolute bottom-[3px] right-[4px] h-[4px] w-[4px] rounded-full bg-[#142342]" />
      </span>

      <span className="whitespace-nowrap text-[18px] font-semibold tracking-[-0.035em]">
        <span className="text-[#142342]">TruckEase</span>{' '}
        <span className="font-normal text-[#68758b]">Solutions</span>
      </span>
    </Link>
  )
}

function Header() {
  return (
    <header className="relative z-50 border-b border-[#e3e7ef] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 sm:px-8 lg:px-10">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          <Link
            href="/platform"
            className="text-[13px] font-medium text-[#566276] transition-colors hover:text-[#142342]"
          >
            Platform
          </Link>

          <Link
            href="/services"
            className="text-[13px] font-medium text-[#566276] transition-colors hover:text-[#142342]"
          >
            Services
          </Link>

          <Link
            href="/about"
            className="relative py-7 text-[13px] font-semibold text-[#142342]"
          >
            About
            <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 bg-[#e96516]" />
          </Link>

          <Link
            href="/blog"
            className="text-[13px] font-medium text-[#566276] transition-colors hover:text-[#142342]"
          >
            Blog
          </Link>

          <Link
            href="/risk-screening"
            className="text-[13px] font-medium text-[#566276] transition-colors hover:text-[#142342]"
          >
            Risk Screening
          </Link>

          <Link
            href="/contact"
            className="text-[13px] font-medium text-[#566276] transition-colors hover:text-[#142342]"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/risk-screening"
          className="group inline-flex items-center gap-3 rounded-[12px] bg-[#101d3b] px-5 py-3.5 text-[12px] font-bold text-white shadow-[0_12px_28px_rgba(16,29,59,0.14)] transition-all hover:-translate-y-0.5 hover:bg-[#17284e]"
        >
          Request a Risk Screening
          <ArrowRight
            size={15}
            strokeWidth={1.8}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-[#233253] bg-[#0d1a36] text-white">
      <div className="mx-auto max-w-[1280px] px-6 pb-8 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.45fr_0.75fr_0.85fr_1fr]">
          {/* Brand */} 
          <div>
            <Logo />

            <p className="mt-7 max-w-[390px] text-[14px] leading-7 text-[#aebbd2]">
              TruckEase helps trucking companies across the United States and
              Canada manage regulatory compliance through modern technology,
              organized records, and direct support when you need it.
            </p>

            <p className="mt-5 text-[14px] font-semibold text-white">
              Compliance built for operational confidence.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#334463] bg-[#152442] px-4 py-2.5">
              <Globe2 size={14} className="text-[#72b89d]" />

              <span className="text-[11px] font-medium text-[#aebbd2]">
                Serving the United States and Canada
              </span>
            </div>
          </div>

          {/* Navigate */} 
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f47b20]">
              Navigate
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#aebbd2] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */} 
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f47b20]">
              Legal & Support
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#aebbd2] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */} 
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f47b20]">
              Contact
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#74839e]">
                  Email
                </p>

                <a
                  href="mailto:contact@truckease.co"
                  className="mt-1 block text-[13px] text-[#d6deeb] transition-colors hover:text-white"
                >
                  contact@truckease.co
                </a>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#74839e]">
                  Human Review Hours
                </p>

                <p className="mt-1 text-[13px] leading-6 text-[#d6deeb]">
                  Monday–Friday
                  <br />
                  8:00 AM–6:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#263553] pt-6">
          <div className="flex flex-col gap-4 text-[10px] text-[#71809b] sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} TruckEase Solutions Inc. All rights
              reserved.
            </span>

            <span>
              Risk Screening is not a guarantee of compliance, a government
              rating, or legal advice.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#f8f9fc] text-[#142342]">
        {/* ================================================================== */}
        {/* HERO                                                               */}
        {/* ================================================================== */}

        <section className="relative overflow-hidden border-b border-[#e1e6ef] bg-white">
          {/* Atmospheric background */} 
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-44 -top-44 h-[620px] w-[620px] rounded-full bg-[#e96516]/[0.045] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-48 bottom-[-220px] h-[520px] w-[520px] rounded-full bg-[#536da8]/[0.045] blur-3xl"
          />

          <div className="relative mx-auto max-w-[1280px] px-6 py-20 sm:px-8 lg:px-10 lg:py-[108px]">
            <div className="grid items-center gap-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-24">
              {/* Left */} 
              <div>
                <Eyebrow>About TruckEase</Eyebrow>

                <h1 className="mt-7 max-w-[720px] text-[48px] font-black leading-[0.98] tracking-[-0.055em] text-[#142342] sm:text-[62px] lg:text-[76px]">
                  Bringing Clarity
                  <br />
                  and Confidence to
                  <br />
                  <span className="text-[#e96516]">
                    Commercial Compliance.
                  </span>
                </h1>

                <p className="mt-8 max-w-[600px] text-[17px] leading-8 text-[#61708a] sm:text-[18px]">
                  Built for United States and Canadian commercial fleets
                  seeking continuous operational visibility.
                </p>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    href="/risk-screening"
                    className="group inline-flex items-center gap-3 rounded-[12px] bg-[#ec6b17] px-6 py-4 text-[13px] font-bold text-white shadow-[0_16px_32px_rgba(236,107,23,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#d95d0d]"
                  >
                    Request a Risk Screening
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-[12px] border border-[#cfd7e4] bg-white px-6 py-4 text-[13px] font-bold text-[#142342] transition-colors hover:border-[#9eabc0] hover:bg-[#f8f9fc]"
                  >
                    Talk to Our Team
                  </Link>
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <span className="h-px w-9 bg-[#cbd4e2]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b879b]">
                    Compliance designed around the way trucking businesses
                    operate
                  </span>
                </div>
              </div>

              {/* Right visual */} 
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_50%_45%,rgba(59,78,132,0.13),rgba(233,101,22,0.045),transparent_70%)] blur-2xl"
                />

                <div className="relative overflow-hidden rounded-[28px] border border-[#d5ddea] bg-[#142342] p-6 shadow-[0_35px_80px_rgba(20,35,66,0.14)] sm:p-8">
                  {/* Grid */} 
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:32px_32px]"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f47b20]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#bdc9dc]">
                          One platform
                        </span>
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#71809b]">
                        Built continuously
                      </span>
                    </div>

                    <div className="mt-14 max-w-[440px]">
                      <p className="text-[30px] font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-[36px]">
                        Compliance should create
                        <span className="text-[#f47b20]">
                          {' '}
                          operational confidence.
                        </span>
                      </p>
                    </div>

                    <div className="mt-12 h-px bg-white/10" />

                    <div className="mt-7 flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.08]">
                        <CheckCircle2
                          size={17}
                          className="text-[#48c999]"
                        />
                      </div>

                      <p className="max-w-[390px] text-[14px] leading-6 text-[#b4c0d4]">
                        A clearer understanding of your compliance position,
                        before issues become operational problems.
                      </p>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-3">
                      {[
                        ['Visibility', '01'],
                        ['Confidence', '02'],
                        ['Support', '03'],
                      ].map(([label, number]) => (
                        <div
                          key={number}
                          className="rounded-[12px] border border-white/10 bg-white/[0.035] p-4"
                        >
                          <div className="text-[9px] font-bold tracking-[0.15em] text-[#647493]">
                            {number}
                          </div>

                          <div className="mt-3 text-[11px] font-semibold text-[#d6deeb]">
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* OUR STORY / WHY TRUCK EASE                                         */}
        {/* ================================================================== */}

        <section className="bg-[#f4f1eb]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8 lg:px-10 lg:py-[100px]">
            <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
              {/* Pull quote */} 
              <div className="lg:pt-2">
                <Eyebrow>Why TruckEase Exists</Eyebrow>

                <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#10203f] text-white shadow-sm">
                  <Crosshair size={19} />
                </div>

                <p className="mt-5 max-w-[220px] font-serif text-[21px] leading-[1.3] tracking-[-0.025em] text-[#142342]">
                  Compliance should create operational confidence, not
                  administrative frustration.
                </p>
              </div>

              {/* Story */} 
              <div className="max-w-[760px]">
                <h2 className="max-w-[760px] font-serif text-[34px] leading-[1.1] tracking-[-0.035em] text-[#142342] sm:text-[42px]">
                  TruckEase was founded on a simple belief:
                  <span className="text-[#e96516]">
                    {' '}
                    compliance should work for the operation, not against it.
                  </span>
                </h2>

                <div className="mt-8 grid gap-6 text-[14px] leading-7 text-[#66738a]">
                  <p>
                    The trucking industry operates in an environment where
                    regulations keep evolving and documentation requirements
                    keep growing, while running the actual business doesn&apos;t
                    slow down to make room for either.
                  </p>

                  <p>
                    Our role is to close that gap, not by adding more
                    paperwork, but by building a system that tracks what
                    matters continuously, so problems get caught early instead
                    of discovered late.
                  </p>

                  <p>
                    We combine regulatory experience with automated monitoring
                    built specifically for that job: organizing records,
                    tracking renewals, and surfacing patterns that are
                    difficult to catch through manual review alone.
                  </p>

                  <p>
                    We&apos;re not simply here to complete filings. We&apos;re
                    here to help businesses maintain a continuously updated
                    understanding of their compliance position, providing
                    greater visibility before issues become operational
                    challenges.
                  </p>

                  <p className="font-medium text-[#4f5e76]">
                    Because when compliance is visible instead of reactive,
                    businesses spend less time worrying about paperwork and
                    more time running the business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* THREE PILLARS                                                      */}
        {/* ================================================================== */}

        <section className="border-y border-[#e4e8ef] bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Eye,
                  title: 'Visibility',
                  text: 'A continuously updated understanding of your compliance position, rather than a snapshot assembled when something goes wrong.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Confidence',
                  text: 'Regulatory requirements become something the business can actively manage instead of something it has to constantly worry about.',
                },
                {
                  icon: Users,
                  title: 'Practical support',
                  text: 'Technology handles continuous tracking while practical support remains available when the situation calls for a person.',
                },
              ].map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-[18px] border border-[#dce2eb] bg-[#fbfcfe] p-7 transition-all hover:-translate-y-0.5 hover:border-[#cbd4e1] hover:shadow-[0_16px_35px_rgba(20,35,66,0.06)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[#dbe3f1] bg-[#f4f7fc] text-[#435ca2]">
                      <Icon size={18} />
                    </div>

                    <h3 className="mt-6 text-[16px] font-bold tracking-[-0.02em] text-[#142342]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[13px] leading-6 text-[#69768d]">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* MISSION + VISION                                                   */}
        {/* ================================================================== */}

        <section className="bg-[#f8f6f1]">
          <div className="mx-auto max-w-[1180px] px-6 py-20 sm:px-8 lg:px-10 lg:py-[100px]">
            <div className="mb-12">
              <Eyebrow>What We&apos;re Building Toward</Eyebrow>
            </div>

            <div className="grid gap-0 lg:grid-cols-2">
              {/* Mission */} 
              <div className="border-b border-[#d9d8d1] pb-12 lg:border-b-0 lg:border-r lg:pr-16 lg:pb-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#142342] text-white">
                    <Target size={17} />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c8797]">
                    Our Mission
                  </span>
                </div>

                <h2 className="mt-7 max-w-[500px] font-serif text-[36px] leading-[1.08] tracking-[-0.035em] text-[#142342] sm:text-[42px]">
                  Confidence through
                  <br />
                  <span className="text-[#e96516]">
                    continuous compliance.
                  </span>
                </h2>

                <p className="mt-6 max-w-[510px] text-[14px] leading-7 text-[#69768b]">
                  To help trucking businesses operate with confidence through
                  continuously-tracked compliance, smart automation, and
                  practical support when you need a person, not just a system.
                </p>
              </div>

              {/* Vision */} 
              <div className="pt-12 lg:pl-16 lg:pt-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e96516] text-white">
                    <Eye size={17} />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c8797]">
                    Our Vision
                  </span>
                </div>

                <h2 className="mt-7 max-w-[500px] font-serif text-[36px] leading-[1.08] tracking-[-0.035em] text-[#142342] sm:text-[42px]">
                  The trusted compliance
                  <br />
                  platform for trucking.
                </h2>

                <p className="mt-6 max-w-[510px] text-[14px] leading-7 text-[#69768b]">
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
        {/* VALUES                                                             */}
        {/* ================================================================== */}

        <section className="relative overflow-hidden bg-[#0d1a36] text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]"
          />

          <div className="relative mx-auto max-w-[1180px] px-6 py-20 sm:px-8 lg:px-10 lg:py-[92px]">
            <div className="grid gap-14 lg:grid-cols-[300px_1fr] lg:gap-20">
              {/* Intro */} 
              <div>
                <Eyebrow light>Our Values</Eyebrow>

                <h2 className="mt-7 font-serif text-[40px] leading-[1.02] tracking-[-0.04em] text-white sm:text-[48px]">
                  How we
                  <br />
                  <span className="text-[#f47b20]">work.</span>
                </h2>

                <p className="mt-6 max-w-[270px] text-[14px] leading-7 text-[#9eacc3]">
                  The standards behind how we build the platform, manage
                  compliance work, and work with the businesses we serve.
                </p>
              </div>

              {/* Value list */} 
              <div className="grid sm:grid-cols-2">
                {values.map((value, index) => {
                  const Icon = value.icon

                  return (
                    <div
                      key={value.title}
                      className={`group flex gap-4 border-[#263553] py-6 ${
                        index < 4 ? 'border-b' : ''
                      } ${
                        index % 2 === 0
                          ? 'sm:border-r sm:pr-7'
                          : 'sm:pl-7'
                      }`}
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#334563] bg-[#152442]">
                        <Icon size={14} className="text-[#65a98e]" />
                      </div>

                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] font-bold tracking-[0.16em] text-[#e96516]">
                            {value.number}
                          </span>

                          <h3 className="text-[14px] font-semibold text-white">
                            {value.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-[12px] leading-6 text-[#8291aa]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* WHERE WE OPERATE                                                   */}
        {/* ================================================================== */}

        <section className="bg-[#f4f1eb]">
          <div className="mx-auto max-w-[1180px] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
            <div className="flex flex-col gap-5 rounded-[18px] border border-[#dddcd5] bg-white/70 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#10203f] text-white">
                  <Globe2 size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a93a0]">
                    Where We Operate
                  </p>

                  <p className="mt-1 font-serif text-[20px] tracking-[-0.025em] text-[#142342]">
                    United States and Canada.
                  </p>
                </div>
              </div>

              <p className="max-w-[430px] text-[12px] leading-6 text-[#737d8d] sm:text-right">
                Built for commercial fleets operating in the regulatory
                environments of North America.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* CTA                                                                */}
        {/* ================================================================== */}

        <section className="border-t border-[#e0e4eb] bg-white">
          <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 lg:px-10 lg:py-[82px]">
            <div className="rounded-[22px] bg-[#101d3b] px-7 py-10 shadow-[0_25px_60px_rgba(16,29,59,0.12)] sm:px-10 lg:px-12">
              <div className="flex flex-col gap-9 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <Eyebrow light>Get Started</Eyebrow>

                  <h2 className="mt-5 max-w-[650px] font-serif text-[34px] leading-[1.08] tracking-[-0.035em] text-white sm:text-[42px]">
                    Compliance built for
                    <br />
                    <span className="text-[#f47b20]">
                      operational confidence.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-[#aebbd2]">
                    See where your compliance position stands and discover how
                    TruckEase can help you manage what comes next.
                  </p>
                </div>

                <div className="flex shrink-0 flex-wrap gap-3">
                  <Link
                    href="/risk-screening"
                    className="group inline-flex items-center gap-3 rounded-[11px] bg-[#ec6b17] px-5 py-3.5 text-[12px] font-bold text-white transition-all hover:bg-[#d95d0d]"
                  >
                    Request a Risk Screening
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-[11px] border border-white/20 px-5 py-3.5 text-[12px] font-bold text-white transition-colors hover:border-white/40"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer deliberately starts as a separate dark region. */}
      <Footer />
    </>
  )
}
