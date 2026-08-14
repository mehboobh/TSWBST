// app/about/page.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  Eye, 
  Compass, 
  Layers, 
  CheckCircle2,
  Globe2,
  Award,
  Users,
  Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About Us | TruckEase Solutions',
  description:
    'Learn how TruckEase combines regulatory expertise with intelligent automation to bring clarity and operational confidence to commercial fleet compliance.',
}

const philosophyCards = [
  {
    icon: Compass,
    tag: 'THE INDUSTRY REALITY',
    text: 'The trucking industry operates in an environment where regulations keep evolving and documentation requirements keep growing, while running the actual business doesn’t slow down to make room for either.',
  },
  {
    icon: Target,
    tag: 'OUR PURPOSE',
    text: 'Our role is to close that gap, not by adding more paperwork, but by building a system that tracks what matters continuously, so problems get caught early instead of discovered late.',
  },
  {
    icon: Layers,
    tag: 'THE APPROACH',
    text: 'We combine regulatory experience with automated monitoring built specifically for that job: organizing records, tracking renewals, and surfacing patterns that are difficult to catch through manual review alone.',
  },
  {
    icon: Eye,
    tag: 'OUR VALUE',
    text: 'We’re not simply here to complete filings. We’re here to help businesses maintain a continuously updated understanding of their compliance position, providing greater visibility before issues become operational challenges.',
  },
]

const valuesList = [
  { name: 'Integrity', desc: 'Uncompromised honesty and ethics in every audit, filing, and customer interaction.' },
  { name: 'Accuracy', desc: 'Precision-first compliance tracking where details and deadlines matter most.' },
  { name: 'Accountability', desc: 'Taking true ownership of our platform insights and client workflows.' },
  { name: 'Continuous Improvement', desc: 'Constant platform evolution to keep pace with shifting regulations.' },
  { name: 'Customer Partnership', desc: 'Building long-term success alongside fleet owners and operators.' },
  { name: 'Professional Excellence', desc: 'Delivering industry-grade rigor and dependable support at scale.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-slate-50/50 py-16 lg:py-20 text-center border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            ABOUT TRUCKEASE
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
            Bringing Clarity and Confidence to Commercial Compliance
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Built for United States and Canadian commercial fleets seeking continuous operational visibility and hassle-free regulatory management.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
              <Link href="/risk-screening">
                Request a Risk Screening <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              <Link href="/platform">
                Explore the Platform
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Our Mission & Vision Section */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Mission Card */}
              <Card className="flex flex-col justify-between border border-slate-200/80 bg-slate-50/30 p-8 sm:p-10 rounded-2xl shadow-sm">
                <div className="space-y-4">
                  <div className="rounded-xl bg-cyan-50 text-cyan-600 size-12 flex items-center justify-center">
                    <Target className="size-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                    OUR MISSION
                  </span>
                  <p className="text-slate-800 text-lg sm:text-xl font-medium leading-relaxed pt-1">
                    To help trucking businesses operate with confidence through continuously-tracked compliance, smart automation, and practical support when you need a person, not just a system.
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200/60 pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Users className="size-4 text-cyan-600" />
                  Human-In-The-Loop Technology
                </div>
              </Card>

              {/* Vision Card */}
              <Card className="flex flex-col justify-between border border-slate-200/80 bg-slate-50/30 p-8 sm:p-10 rounded-2xl shadow-sm">
                <div className="space-y-4">
                  <div className="rounded-xl bg-cyan-50 text-cyan-600 size-12 flex items-center justify-center">
                    <Compass className="size-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                    OUR VISION
                  </span>
                  <p className="text-slate-800 text-lg sm:text-xl font-medium leading-relaxed pt-1">
                    To become the trusted compliance platform for trucking companies across North America, where regulatory expertise and real technology work together, not one standing in for the other.
                  </p>
                </div>
                <div className="mt-8 border-t border-slate-200/60 pt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  <Truck className="size-4 text-cyan-600" />
                  North American Fleet Standard
                </div>
              </Card>

            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Interactive Core Philosophy Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                OUR PHILOSOPHY
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                Why We Build for Operational Confidence
              </h2>
            </div>
          </Reveal>

          {/* 4 Quadrant Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {philosophyCards.map((card, i) => (
              <Reveal key={card.tag} delay={i * 90}>
                <Card className="flex h-full flex-col justify-between border border-slate-200/80 bg-white p-8 rounded-xl shadow-sm hover:border-cyan-300 hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="rounded-lg bg-cyan-50 p-3 text-cyan-600">
                        <card.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase font-mono">
                        {card.tag}
                      </span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed font-normal">
                      {card.text}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Statement 5: Highlighted Banner Callout */}
          <Reveal delay={200}>
            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-8 sm:p-10 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-white mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-lg sm:text-xl font-bold text-slate-900 max-w-3xl mx-auto leading-relaxed">
                "Because when compliance is visible instead of reactive, businesses spend less time worrying about paperwork and more time running the business."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section className="bg-slate-50/50 py-16 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm mb-3">
                <Award className="size-3.5 text-cyan-600" />
                GUIDED PRINCIPLES
              </div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Our Values
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valuesList.map((val, i) => (
              <Reveal key={val.name} delay={i * 60}>
                <Card className="h-full border border-slate-200/80 bg-white p-6 shadow-sm hover:border-cyan-300 transition-colors">
                  <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
                    <CheckCircle2 className="size-4 text-cyan-600 shrink-0" />
                    {val.name}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6 mt-2">
                    {val.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Where We Operate Callout Section */}
      <section className="bg-white py-16 lg:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-8 sm:p-12 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                  <Globe2 className="size-3.5" />
                  REGIONAL SCOPE
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Where We Operate
                </h2>
                <p className="text-slate-200 text-lg font-semibold">
                  United States and Canada.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Providing cross-border regulatory tracking, state/provincial filings, and fleet risk screening across all major jurisdictions.
                </p>
              </div>

              <div className="shrink-0">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold">
                  <Link href="/risk-screening">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Core Commitments */}
      <section className="bg-slate-50/50 py-16 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                WHAT DRIVES US
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                Built to solve real compliance friction.
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                We design tools and workflows specifically around commercial transportation regulations across US and Canadian jurisdictions.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 mb-3" />
                  <h3 className="font-semibold text-slate-900">Continuous Oversight</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Moving away from last-minute annual scrambles toward calm, automated tracking.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="h-6 w-6 text-cyan-600 mb-3" />
                  <h3 className="font-semibold text-slate-900">Cross-Border Scope</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Designed from the ground up for fleets traversing state and provincial borders.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <CtaBand />
    </div>
  )
}
