import Link from 'next/link'
import { MapPin, Mail, Clock } from 'lucide-react'
import { Logo } from '@/components/logo'
import { footerNav, siteConfig } from '@/lib/site'

// Safe, zero-dependency Brand SVG Icons
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z" />
    </svg>
  )
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/truckease',
    icon: LinkedInIcon,
  },
  {
    name: 'X / Twitter',
    href: 'https://x.com/truckease',
    icon: TwitterIcon,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/truckease',
    icon: FacebookIcon,
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-navy-foreground border-t border-navy-border">
      <div className="container-site py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-md">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-navy-muted">
              {siteConfig.description}
            </p>
            <p className="mt-5 text-sm font-medium text-navy-foreground">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-navy-muted">
              <MapPin className="size-3.5 text-accent" />
              Serving the United States and Canada
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-eyebrow text-navy-muted">
                Navigate
              </h2>
              <ul className="mt-4 space-y-3">
                {footerNav.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-navy-foreground/80 transition-colors hover:text-accent"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-eyebrow text-navy-muted">
                Legal & Support
              </h2>
              <ul className="mt-4 space-y-3">
                {footerNav.slice(6).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-navy-foreground/80 transition-colors hover:text-accent"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Digital Support Desk & Hours Block */}
              <div className="mt-6 border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-navy-foreground/90 font-medium">
                  <Mail className="size-3.5 text-accent shrink-0" />
                  <a href="mailto:contact@truckease.co" className="hover:text-accent transition-colors">
                    contact@truckease.co
                  </a>
                </div>

                <div className="flex items-start gap-2 text-xs text-navy-muted">
                  <Clock className="size-3.5 text-navy-muted shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-navy-foreground/90">Human Review Hours</p>
                    <p className="mt-0.5">Mon – Fri: 8:00 AM – 6:00 PM EST</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Links */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-navy-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p>&copy; {year} TruckEase Solutions Inc. All rights reserved.</p>
            <p className="text-[11px] text-navy-muted/80">
              Risk Screening is not a guarantee of compliance, a government rating, or legal advice.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-white/10 bg-white/5 p-2 text-navy-muted transition-colors hover:border-accent/40 hover:bg-white/10 hover:text-accent"
                  aria-label={item.name}
                >
                  <Icon className="size-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
