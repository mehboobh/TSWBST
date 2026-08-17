import Link from 'next/link'
import {
  ArrowUpRight,
  Clock3,
  Mail,
  ShieldCheck,
} from 'lucide-react'

const navigateLinks = [
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
  { label: 'Legal Disclaimer', href: '/disclaimer' },
]

function TruckEaseMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex h-8 w-9 shrink-0 items-center justify-center"
    >
      <span className="absolute left-0 top-[11px] h-[8px] w-[28px] -skew-x-[20deg] rounded-[2px] bg-white" />
      <span className="absolute left-[8px] top-[7px] h-[7px] w-[15px] -skew-x-[20deg] rounded-[2px] bg-white/65" />
      <span className="absolute right-0 top-[13px] h-[4px] w-[7px] rounded-full bg-[#e8720c]" />
      <span className="absolute bottom-[4px] left-[8px] h-[3px] w-[3px] rounded-full bg-white" />
      <span className="absolute bottom-[4px] right-[5px] h-[3px] w-[3px] rounded-full bg-white" />
    </span>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1 text-[13px] leading-6 text-white/58 transition-colors hover:text-white"
    >
      <span>{children}</span>

      <ArrowUpRight
        className="h-3 w-3 translate-y-[1px] opacity-0 transition-all group-hover:translate-x-[1px] group-hover:opacity-60"
        strokeWidth={1.7}
      />
    </Link>
  )
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#0c1a36] text-white">
      {/* Subtle grid / atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-10 xl:px-12">
        {/* Main footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-10 lg:py-20">
          {/* Brand */}
          <div className="max-w-[390px]">
            <Link
              href="/"
              aria-label="TruckEase Solutions home"
              className="inline-flex items-center gap-3"
            >
              <TruckEaseMark />

              <span className="text-[19px] font-semibold tracking-[-0.025em]">
                TruckEase
                <span className="font-normal text-white/65">
                  {' '}
                  Solutions
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-[370px] text-[14px] leading-7 text-white/58">
              TruckEase helps trucking companies across the United States and
              Canada manage regulatory compliance through modern technology,
              organized records, and direct support when you need it.
            </p>

            <p className="mt-4 text-[14px] font-medium leading-6 text-white/85">
              Compliance built for operational confidence.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[11px] font-medium tracking-[0.04em] text-white/60">
              <ShieldCheck className="h-3.5 w-3.5 text-[#5c8a68]" />
              Serving the United States and Canada
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
              Navigate
            </p>

            <div className="mt-5 flex flex-col items-start">
              {navigateLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
              Legal &amp; Support
            </p>

            <div className="mt-5 flex flex-col items-start">
              {legalLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
              Contact
            </p>

            <div className="mt-5 space-y-5">
              <a
                href="mailto:contact@truckease.co"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045]">
                  <Mail className="h-3.5 w-3.5 text-white/70" />
                </span>

                <span>
                  <span className="block text-[11px] uppercase tracking-[0.08em] text-white/35">
                    Email
                  </span>
                  <span className="mt-0.5 block text-[13px] text-white/70 transition-colors group-hover:text-white">
                    contact@truckease.co
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045]">
                  <Clock3 className="h-3.5 w-3.5 text-white/70" />
                </span>

                <span>
                  <span className="block text-[11px] uppercase tracking-[0.08em] text-white/35">
                    Human Review Hours
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-5 text-white/70">
                    Monday–Friday
                    <br />
                    8:00 AM–6:00 PM EST
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 text-[11px] leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} TruckEase Solutions Inc. All rights reserved.
          </p>

          <p className="max-w-[650px] sm:text-right">
            Risk Screening is not a guarantee of compliance, a government
            rating, or legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
