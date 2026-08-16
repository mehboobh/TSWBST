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

      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[38rem] w-[38rem] rounded-full bg-orange-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-18rem] top-[24rem] h-[34rem] w-[34rem] rounded-full bg-blue-50/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1380px] px-6 pb-0 pt-7 lg:px-10">

        {/* ─────────────────────────────
            HERO
        ───────────────────────────── */}

        <div className="grid min-h-[650px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">

          {/* LEFT */}
          <div className="relative z-10 pb-10 pt-8 lg:pb-20">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#17345f] shadow-[0_5px_18px_rgba(15,35,65,0.06)]">
              <span className="h-2 w-2 rounded-full bg-orange-600" />
              Operational intelligence platform for the United States and Canada
            </div>

            <h1 className="max-w-[720px] text-[4rem] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#142342] sm:text-[4.8rem] lg:text-[5.25rem]">
              Compliance Built for{' '}
              <span className="text-orange-600">
                Operational Confidence.
              </span>
            </h1>

            <p className="mt-8 text-[17px] font-bold leading-7 text-[#10213d]">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-3 max-w-[650px] text-[16px] leading-7 text-[#385071]">
              A compliance platform that combines regulatory expertise with
              AI-powered technology to help trucking companies across the
              United States and Canada understand their compliance position,
              stay ahead of regulatory requirements, and operate with greater
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-13 rounded-xl bg-orange-600 px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(234,88,12,0.20)] transition-all hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-[0_16px_35px_rgba(234,88,12,0.26)]"
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
                className="h-13 rounded-xl border-slate-300 bg-white px-7 text-sm font-bold text-[#10213d] shadow-sm hover:bg-slate-50"
              >
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>

            {/* Small trust statement */}
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
              <span className="h-px w-8 bg-slate-300" />
              Built for trucking operations across the United States and Canada
            </div>
          </div>

          {/* RIGHT — IMAGE COMPOSITION */}
          <div className="relative lg:-mr-16">

            {/* warm glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-10 rounded-[4rem] bg-orange-100/50 blur-3xl"
            />

            {/* image frame */}
            <div className="relative">

              <div className="absolute -bottom-5 -left-5 -right-5 h-20 rounded-[2rem] bg-[#10213d]/5 blur-xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#142342] shadow-[0_30px_80px_rgba(16,33,61,0.18)]">

                <Image
                  src="/hero-truck-neutral.jpg"
                  alt="Commercial tractor-trailer traveling on a highway"
                  width={1600}
                  height={1050}
                  priority
                  className="aspect-[1.38/1] w-full object-cover"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#10213d]/25 via-transparent to-transparent"
                />

                {/* confidence badge */}
                <div className="absolute right-6 top-6 rounded-2xl border border-white/70 bg-white/92 px-5 py-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.12)] backdrop-blur-md">
                  <p className="text-xs font-medium text-slate-500">
                    Operate with
                  </p>
                  <p className="text-sm font-bold text-[#142342]">
                    Confidence.
                  </p>
                </div>

                {/* bottom image label */}
                <div className="absolute bottom-6 left-6 rounded-xl border border-white/20 bg-[#10213d]/75 px-4 py-3 text-white backdrop-blur-md">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">
                    TruckEase Solutions
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Compliance built around operations.
                  </p>
                </div>
              </div>

              {/* floating accent */}
              <div className="absolute -bottom-7 -left-7 hidden h-20 w-20 rounded-2xl border border-slate-200 bg-white shadow-xl lg:block">
                <div className="flex h-full items-center justify-center">
                  <ShieldCheck className="h-7 w-7 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            FEATURE STRIP
        ───────────────────────────── */}

        <div className="relative z-20 -mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(16,33,61,0.10)]">

          <div className="grid lg:grid-cols-5">

            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={[
                    'flex min-h-[76px] items-center gap-3 px-5 py-4',
                    index !== 0
                      ? 'border-t border-slate-100 lg:border-l lg:border-t-0'
                      : '',
                  ].join(' ')}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#142342]">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-slate-500">
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
