// app/page.tsx

import { Hero } from '@/components/home/hero'
import {
  PlatformPreview,    
  Process,            
} from '@/components/home/platform-sections'

import {
  Problem,            
  HowWeHelp,          
} from '@/components/home/value-sections'

import { RiskCta } from '@/components/home/risk-cta'
import { CtaBand } from '@/components/cta-band'

export default function HomePage() {
  return (
    <>
      <Hero />
      <PlatformPreview />
      <Problem />
      <HowWeHelp />
      <Process />
      <RiskCta />
      <CtaBand />
    </>
  )
}
