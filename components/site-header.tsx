// components/site-header.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Platform', href: '/platform' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Risk Screening', href: '/risk-screening' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
          <Image
            src="/logo.png"
            alt="TruckEase Solutions Logo"
            width={32}
            height={32}
            className="size-8 object-contain"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-foreground">
            TruckEase <span className="text-primary font-normal">Solutions</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/risk-screening"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Request a Risk Screening
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-b border-border bg-background px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-base font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/risk-screening"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-slate-800"
            >
              Request a Risk Screening
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

// Export default as fallback safety so imports never evaluate to undefined
export default SiteHeader
