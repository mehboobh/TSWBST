'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Platform', href: '/platform' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Risk Screening', href: '/risk-screening' },
  { label: 'Contact', href: '/contact' },
]

function Logo() {
  return (
    <Link
      href="/"
      aria-label="TruckEase Solutions home"
      className="group inline-flex items-center"
    >
      <Image
        src="/logo.png"
        alt="TruckEase Solutions"
        width={180}
        height={48}
        priority
        className="h-auto w-[148px] object-contain sm:w-[158px]"
      />
    </Link>
  )
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-[#e2e7ec] bg-[#fdfcf9]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-full max-w-[1400px] items-center px-5 sm:px-7 lg:h-[74px] lg:px-10 xl:px-12">
        {/* Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden items-center gap-1 lg:flex"
        >
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors',
                  active
                    ? 'text-[#0c1a36]'
                    : 'text-[#5b6472] hover:text-[#0c1a36]',
                ].join(' ')}
              >
                {item.label}

                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#e8720c]"
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/risk-screening"
          className="ml-5 hidden h-11 items-center gap-2 rounded-[11px] bg-[#0c1a36] px-5 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(12,26,54,0.12)] transition-all hover:-translate-y-[1px] hover:bg-[#16274a] hover:shadow-[0_8px_22px_rgba(12,26,54,0.16)] lg:inline-flex"
        >
          Request a Risk Screening

          <ArrowRight
            className="h-4 w-4"
            strokeWidth={1.8}
          />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#dce2eb] text-[#0c1a36] transition hover:bg-[#f2f4f7] lg:hidden"
        >
          {mobileOpen ? (
            <X
              className="h-5 w-5"
              strokeWidth={1.8}
            />
          ) : (
            <Menu
              className="h-5 w-5"
              strokeWidth={1.8}
            />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        className={[
          'overflow-hidden border-t border-[#e2e7ec] bg-[#fdfcf9] transition-all duration-300 lg:hidden',
          mobileOpen
            ? 'max-h-[520px] opacity-100'
            : 'max-h-0 border-t-0 opacity-0',
        ].join(' ')}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1400px] flex-col px-5 py-3 sm:px-7"
        >
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={[
                  'flex min-h-[48px] items-center justify-between border-b border-[#edf0f3] text-[14px] font-medium transition-colors',
                  active
                    ? 'text-[#0c1a36]'
                    : 'text-[#5b6472]',
                ].join(' ')}
              >
                <span>{item.label}</span>

                <ArrowRight
                  className={[
                    'h-4 w-4 transition-transform',
                    active
                      ? 'text-[#e8720c]'
                      : 'text-[#9aa3b0]',
                  ].join(' ')}
                  strokeWidth={1.8}
                />
              </Link>
            )
          })}

          <Link
            href="/risk-screening"
            onClick={() => setMobileOpen(false)}
            className="my-4 flex h-12 items-center justify-center gap-2 rounded-[11px] bg-[#0c1a36] px-5 text-[14px] font-semibold text-white"
          >
            Request a Risk Screening

            <ArrowRight
              className="h-4 w-4"
              strokeWidth={1.8}
            />
          </Link>
        </nav>
      </div>
    </header>
  )
}
