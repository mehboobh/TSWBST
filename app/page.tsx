import { Hero } from '@/components/home/hero'
import { WhyTruckEase } from '@/components/home/why-truck-ease'

import { PlatformPreview } from '@/components/home/platform-sections'

import { Problem } from '@/components/home/problem'
import { HowWeHelp } from '@/components/home/value-sections'

import { Testimonials } from '@/components/home/testimonials'

import { RiskCta } from '@/components/home/risk-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyTruckEase />
      <PlatformPreview />
      <Problem />
      <HowWeHelp />
      <Testimonials />
      <RiskCta />
    </>
  )
}
