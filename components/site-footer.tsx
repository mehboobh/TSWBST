import Image from 'next/image'
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

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.29-.04-1.29-.13-2.45-.13-2.43 0-4.1 1.49-4.1 4.22V10H7.4v3h2.75v8h3.35Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M6.5 8.5A1.75 1.75 0 1 0 6.5 5a1.75 1.75 0 0 0 0 3.5ZM5 9.75h3V19H5V9.75Zm5 0h2.88v1.27h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V19h-3v-4.37c0-1.04-.02-2.38-1.45-2.38-1.45 0-1.67 1.13-1.67 2.3V19h-3V9.75Z" />
    </svg>
  )
}

function XTwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path
        d="M18.244 2.25H21.552L14.325 10.507L22.827 21.75H16.17L10.954 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.794 8.481L18.244 2.25ZM17.083 19.77H18.917L7.084 4.126H5.116L17.083 19.77Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.3"
        cy="6.8"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: FacebookIcon,
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: LinkedInIcon,
  },
  {
    label: 'Twitter',
    href: '#',
    icon: XTwitterIcon,
  },
  {
    label: 'Instagram',
    href: '#',
    icon: InstagramIcon,
  },
]

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
      {/* Subtle background grid */}
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
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr] lg:gap-6 lg:py-20">
          {/* Brand */}
          <div className="max-w-[390px]">
            <Link
              href="/"
              aria-label="TruckEase Solutions home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="TruckEase Solutions"
                width={200}
                height={54}
                className="h-auto w-[170px] object-contain brightness-0 invert"
                priority
              />
            </Link>

            <p className="mt-3 max-w-[320px] text-[14px] leading-6 text-white/58">
            Compliance management for trucking companies
            across the United States and Canada.
            </p>

            <p className="mt-3 text-[14px] font-medium leading-6 text-white/85">
              Compliance built for operational confidence.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[11px] font-medium tracking-[0.04em] text-white/60">
              <ShieldCheck className="h-3.5 w-3.5 text-[#5c8a68]" />
              Secure, access-controlled records
            </div>

            {/* Social media */}
            <div className="mt-6">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
                Follow TruckEase
              </p>

              <div className="mt-4 flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.045] text-white/60 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.09] hover:text-white"
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:self-center lg:border-l lg:border-white/[0.06] lg:pl-8 xl:pl-10">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
              Navigate
            </p>

            <div className="mt-5 flex flex-col items-start">
              {navigateLinks.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:self-center lg:border-l lg:border-white/[0.06] lg:pl-8 xl:pl-10">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#e8720c]">
              Legal &amp; Support
            </p>

            <div className="mt-5 flex flex-col items-start">
              {legalLinks.map((item) => (
                <FooterLink
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:self-center lg:border-l lg:border-white/[0.06] lg:pl-8 xl:pl-10">
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

        {/* Divider */}
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
