import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Eye,
  FileCheck2,
  Headphones,
  ShieldCheck,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

const heroItems = [
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
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* Soft visual atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-orange-100/50 blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-15rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-10 lg:pt-8">

        {/* Main hero */}
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-4">

          {/* Copy */}
          <div className="relative z-10 lg:col-span-6 lg:pr-4">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Operational intelligence platform for the United States and Canada
            </div>

            <h1 className="max-w-3xl text-balance text-5xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#10213d] sm:text-6xl lg:text-[4.55rem]">
              Compliance Built for{' '}
              <span className="text-orange-600">
                Operational Confidence.
              </span>
            </h1>

            <p className="mt-6 text-lg font-semibold leading-7 text-[#10213d]">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
              A compliance platform that combines regulatory expertise with
              AI-powered technology to help trucking companies across the
              United States and Canada understand their compliance position,
              stay ahead of regulatory requirements, and operate with greater
              confidence.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-orange-600 px-6 font-semibold text-white shadow-[0_10px_25px_rgba(234,88,12,0.18)] hover:bg-orange-700"
              >
                <Link href="/risk-screening">
                  Request a Risk Screening
                  <ArrowRight className="ml-1 size-4" />
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

          {/* Real truck photograph */}
          <div className="relative lg:col-span-6 lg:-ml-8">

            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-8 h-72 rounded-full bg-orange-100/40 blur-[80px]"
            />

            <div className="relative overflow-hidden rounded-[2rem]">

              <Image
                src="/hero-truck-neutral.jpg"
                alt="Commercial tractor-trailer on the road"
                width={1200}
                height={700}
                priority
                className="relative z-10 h-auto w-full object-cover"
              />

              {/* Subtle readability gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-white/15 via-transparent to-transparent"
              />

              {/* Small neutral product marker */}
              <div className="absolute right-5 top-5 z-30 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur">
                <div className="text-xs font-semibold text-[#10213d]">
                  Operate with
                </div>
                <div className="text-sm font-bold text-[#10213d]">
                  Confidence.
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Feature strip */}
        <div className="relative z-30 mt-8 rounded-2xl border border-slate-200 bg-white shadow-[0_15px_45px_rgba(16,33,61,0.08)]">
          <div className="grid grid-cols-2 lg:grid-cols-5">

            {heroItems.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className={[
                    'flex items-center gap-3 px-5 py-4',
                    index > 0
                      ? 'border-t border-slate-100 lg:border-l lg:border-t-0'
                      : '',
                  ].join(' ')}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700">
                    <Icon className="size-[18px]" />
                  </span>

                  <div>
                    <p className="text-xs font-bold text-[#10213d]">
                      {item.title}
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500">
                      {item.description}
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
