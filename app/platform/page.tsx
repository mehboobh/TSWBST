import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ShieldCheck, 
  Globe2, 
  Cpu, 
  FolderCheck, 
  UserCheck, 
  TrendingUp,
  Search,
  ClipboardList,
  CheckCircle2,
  Activity,
  Headphones,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Compliance Platform | TruckEase Solutions',
  description:
    'Explore the TruckEase compliance platform designed for United States and Canadian commercial fleets.',
}

const whyPoints = [
  {
    icon: ShieldCheck,
    title: 'Proactive, continuously tracked compliance',
    body: 'Requirements monitored on an ongoing basis so gaps surface early.',
  },
  {
    icon: Globe2,
    title: 'Cross-border regulatory knowledge',
    body: 'Experience spanning requirements across the United States and Canada.',
  },
  {
    icon: Cpu,
    title: 'Technology-first compliance platform',
    body: 'Built for ongoing operational visibility, not periodic paperwork.',
  },
  {
    icon: FolderCheck,
    title: 'Organized, accessible documents',
    body: 'Records retained with appropriate access controls and activity tracking.',
  },
  {
    icon: UserCheck,
    title: 'Practical ongoing support',
    body: 'A person to help when a system alone isn’t enough.',
  },
  {
    icon: TrendingUp,
    title: 'Long-term compliance confidence',
    body: 'Support that adapts as regulations evolve and your business grows.',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Discover',
    icon: Search,
    body: 'We begin by understanding your operation and current compliance requirements.',
  },
  {
    num: '02',
    title: 'Assess',
    icon: ClipboardList,
    body: 'We review your current compliance records, documentation, and regulatory standing.',
  },
  {
    num: '03',
    title: 'Implement',
    icon: CheckCircle2,
    body: 'We handle the registrations, renewals, and documentation required to keep your operation compliant.',
  },
  {
    num: '04',
    title: 'Monitor',
    icon: Activity,
    body: 'The platform continues tracking your compliance activity, flagging what needs attention as it comes due.',
  },
  {
    num: '05',
    title: 'Support',
    icon: Headphones,
    body: 'As regulations evolve and your business grows, we remain available to help you navigate changes.',
  },
]

export default function PlatformPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* 1. Centered Hero Section */}
      <section className="bg-slate-50/50 py-16 lg:py-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-600 shadow-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-cyan-600" />
            THE TRUCKEASE PLATFORM
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl leading-[1.15]">
            Complete Operational Visibility & Compliance Tracking
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Monitor regulatory standing, manage filings, and maintain continuously updated oversight across your entire fleet from a single unified portal.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold">
              <Link href="/risk-screening">
                Request a Risk Screening <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
              <Link href="/services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Platform Preview / Dashboard Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                PLATFORM PREVIEW
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                From Compliance Data to Operational Clarity
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                A single view that connects requirements, deadlines, documents, and monitoring activity, then points to the next action worth taking.
              </p>
            </div>
          </Reveal>

          {/* Interface Preview Container */}
          <Reveal delay={100}>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">TruckEase Compliance Dashboard</span>
                </div>
                <span className="rounded bg-slate-800 px-3 py-1 text-xs text-cyan-400 font-semibold">
                  Live View Concept
                </span>
              </div>

              {/* Dashboard Grid */}
              <div className="grid gap-6 md:grid-cols-12">
                <div className="md:col-span-6 rounded-xl border border-slate-800 bg-slate-950/80 p-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Overall Status</span>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-3.5 w-3.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-2xl font-bold text-white">On Track</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">2 Items Flagged for Upcoming Renewal</p>
                </div>

                <div className="md:col-span-3 rounded-xl border border-slate-800 bg-slate-950/80 p-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Upcoming Renewals</span>
                  <p className="mt-2 text-3xl font-bold text-cyan-400">6</p>
                </div>

                <div className="md:col-span-3 rounded-xl border border-slate-800 bg-slate-950/80 p-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Open Items</span>
                  <p className="mt-2 text-3xl font-bold text-amber-400">3</p>
                </div>

                <div className="md:col-span-6 rounded-xl border border-slate-800 bg-slate-950/80 p-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Upcoming Deadlines</span>
                  <div className="mt-4 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-slate-800/60 pb-2 text-slate-300">
                      <span>• IRP Registration Renewal</span>
                      <span className="text-slate-400">Due in 14 days</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-800/60 pb-2 text-slate-300">
                      <span>• IFTA Quarterly Tax Filing</span>
                      <span className="text-slate-400">Due in 28 days</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>• UCR Annual Filing</span>
                      <span className="text-slate-400">Due in 41 days</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 rounded-xl border border-slate-800 bg-slate-950/80 p-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Document Readiness</span>
                  <div className="mt-4 space-y-4 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1.5">
                        <span>Registrations & Permits</span>
                        <span className="text-cyan-400 font-semibold">92%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[92%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1.5">
                        <span>Driver & Carrier Licensing</span>
                        <span className="text-cyan-400 font-semibold">78%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 w-[78%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-center text-[11px] text-slate-500 font-sans">
                Interface concept. Illustrative data shown for demonstration purposes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Why TruckEase Section */}
      <section className="bg-slate-50/50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                WHY TRUCKEASE
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                More Than Filing Paperwork
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Businesses choose TruckEase because compliance requires consistency, attention to detail, and technology built to catch what manual tracking misses.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map((pt, i) => (
              <Reveal key={pt.title} delay={(i % 3) * 80}>
                <Card className="h-full border border-slate-200/80 bg-white p-6 rounded-xl shadow-sm hover:border-cyan-300 hover:shadow-md transition-all">
                  <div className="rounded-lg bg-cyan-50 p-2.5 text-cyan-600 w-fit mb-4">
                    <pt.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {pt.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">
                OUR PROCESS
              </span>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl mt-2">
                A Clearer Path to Compliance Confidence
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 70}>
                <div className="flex flex-col h-full rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm hover:border-slate-300 transition-colors">
                  <div className="flex items-center justify-between text-slate-400">
                    <step.icon className="h-4 w-4 text-cyan-600" />
                    <span className="font-mono text-xs font-bold">{step.num}</span>
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900 text-sm sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <CtaBand />
    </div>
  )
}
