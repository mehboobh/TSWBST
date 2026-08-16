import { Hero } from '@/components/home/hero'

import {
  PlatformPreview,
  WhyTruckEase,
} from '@/components/home/platform-sections'

import {
  Problem,
  HowWeHelp,
} from '@/components/home/value-sections'

import { Testimonials } from '@/components/home/testimonials'
import { RiskCta } from '@/components/home/risk-cta'
import { CtaBand } from '@/components/cta-band'

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
      <CtaBand />
    </>
  )
}
