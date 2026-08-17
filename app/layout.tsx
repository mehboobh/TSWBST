import type { Metadata } from 'next'
import './globals.css'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'TruckEase Solutions',
  description:
    'Compliance built for operational confidence across the United States and Canada.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fdfcf9] text-[#0c1a36] antialiased">
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
    </html>
  )
}
