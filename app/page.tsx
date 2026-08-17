import { Hero } from '@/components/home/hero'
import { WhyTruckEase } from '@/components/home/why-truck-ease'
import { PlatformPreview } from '@/components/home/platform-sections'
import { Problem } from '@/components/home/problem'
import { HowWeHelp } from '@/components/home/how-we-help'
import { Testimonials } from '@/components/home/testimonials'
import { RiskCta } from '@/components/home/risk-cta'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Why TruckEase */}
      <WhyTruckEase />

      {/* 03 — Platform Preview */}
      <PlatformPreview />

      {/* 04 — The Problem */}
      <Problem />

      {/* 05 — How TruckEase Helps */}
      <HowWeHelp />

      {/* 06 — Client Trust */}
      <Testimonials />

      {/* 07 — Risk Screening */}
      <RiskCta />

      {/* 08 — Closing CTA */}
      <CtaBand />
    </>
  )
}
