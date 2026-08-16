import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, FileCheck2, Headphones, ShieldCheck, Eye } from 'lucide-react'

import { Button } from '@/components/ui/button'

const features = [
  {
    icon: ShieldCheck,
    title: 'Continuous Monitoring',
    description: 'Stay informed, always',
  },
  {
    icon: FileCheck2,
    title: 'Organized Records',
    description: 'Everything in one place',
  },
  {
    icon: Eye,
    title: 'Operational Visibility',
    description: 'See what matters',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Expertise',
    description: 'Built for US & Canada',
  },
  {
    icon: Headphones,
    title: 'Practical Human Support',
    description: 'Real people, real help',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* subtle warm atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-orange-50/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-[300px] h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8 lg:pb-10 lg:pt-9">

        {/* HERO */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:gap-8">

          {/* CONTENT */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-[#17345f] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-600" />
              Operational intelligence platform for the United States and Canada
            </div>

            {/* Heading */}
            <h1 className="max-w-[700px] text-[3.8rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#142342] sm:text-[4.3rem] lg:text-[4.65rem]">
              Compliance Built for{' '}
              <span className="text-orange-600">
                Operational Confidence.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-7 text-[17px] font-semibold leading-7 text-[#10213d]">
              Compliance isn't the goal. Operational confidence is.
            </p>

            {/* Description */}
            <p className="mt-3 max-w-[650px] text-[16px] leading-7 text-[#385071]">
              A compliance platform that combines regulatory expertise with
              AI-powered technology to help trucking companies across the
              United States and Canada understand their compliance position,
              stay ahead of regulatory requirements, and operate with greater
              confidence.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-orange-600 px-6 font-bold text-white shadow-[0_10px_24px_rgba(234,88,12,0.18)] hover:bg-orange-700"
              >
                <Link href="/risk-screening">
                  Request a Risk Screening
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-slate-300 bg-white px-6 font-semibold text-[#10213d] hover:bg-slate-50"
              >
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">

            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[3rem] bg-orange-100/40 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#142342] shadow-[0_25px_60px_rgba(16,33,61,0.14)]">

              <Image
                src="/hero-truck-neutral.jpg"
                alt="Commercial tractor-trailer traveling on a highway"
                width={1400}
                height={900}
                priority
                className="aspect-[1.48/1] h-full w-full object-cover"
              />

              {/* subtle navy integration */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#10213d]/10 via-transparent to-[#10213d]/15"
              />

              {/* Confidence badge */}
              <div className="absolute right-5 top-5 rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-xs font-medium text-[#385071]">
                  Operate with
                </p>

                <p className="text-sm font-bold text-[#142342]">
                  Confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURE STRIP */}
        <div className="relative z-20 mt-8 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(16,33,61,0.08)]">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={[
                    'flex min-h-[68px] items-center gap-3 px-5 py-3.5',
                    index !== 0
                      ? 'border-t border-slate-100 lg:border-l lg:border-t-0'
                      : '',
                  ].join(' ')}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold leading-4 text-[#142342]">
                      {feature.title}
                    </p>

                    <p className="mt-0.5 truncate text-[11px] leading-4 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
