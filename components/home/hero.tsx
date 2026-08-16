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
<section className="relative overflow-hidden bg-[#fbfcfe]">

      {/* ------------------------------------------------------------------ */}
      {/* HERO ATMOSPHERE                                                    */}
      {/* ------------------------------------------------------------------ */}

{/* Dusk-derived background atmosphere */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-x-0 top-0 h-[760px] overflow-hidden"
>
  {/* The photo itself, pushed further into frame so its dusk palette reads */}
  <div
    className="absolute inset-0 bg-[url('/hero-truck-neutral.jpg')] bg-cover bg-[center_38%] opacity-[0.42]"
  />

  {/* Color wash sampled from the sky: navy -> indigo -> plum -> horizon amber -> page white.
      Kept dark/opaque well past where the copy sits so text never lands on a bright patch of sky. */}
  <div
    className="absolute inset-0"
    style={{
      background:
        'linear-gradient(180deg, rgba(4,6,15,0.96) 0%, rgba(12,13,32,0.95) 14%, rgba(28,20,48,0.93) 30%, rgba(62,32,42,0.88) 46%, rgba(134,62,38,0.80) 60%, rgba(251,252,254,0.78) 84%, rgba(251,252,254,1) 100%)',
    }}
  />

  {/* Indigo glow, echoing the upper sky */}
  <div className="absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-[#2c2361]/[0.28] blur-[130px]" />

  {/* Amber glow, echoing the horizon light */}
  <div className="absolute -left-32 top-[19rem] h-[34rem] w-[34rem] rounded-full bg-[#f0703a]/[0.20] blur-[130px]" />
</div>

      <div className="relative mx-auto max-w-[1380px] px-6 pb-0 pt-7 lg:px-10">

        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                             */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex min-h-[650px] items-center">

          {/* CONTENT */}
          <div className="relative z-10 pb-10 pt-8 lg:pb-20">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-xs font-semibold text-white shadow-[0_5px_18px_rgba(0,0,0,0.25)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#f15a00]" />
              Operational intelligence platform for the United States and Canada
            </div>

            <h1 className="max-w-[720px] font-extrabold leading-[0.96] tracking-[-0.055em]">
              <span className="block text-[2.5rem] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-[2.9rem] lg:text-[3.1rem]">
                Compliance Built for
              </span>
              <span className="block text-[4.5rem] tracking-[-0.065em] text-[#ff8a3d] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)] sm:text-[5.4rem] lg:text-[5.9rem]">
                Operational Confidence.
              </span>
            </h1>

            <p className="mt-8 text-[17px] font-bold leading-7 text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-3 max-w-[650px] text-[16px] leading-7 text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
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
                className="h-13 rounded-xl bg-[#f15a00] px-7 text-sm font-bold text-white shadow-[0_12px_30px_rgba(241,90,0,0.20)] transition-all hover:-translate-y-0.5 hover:bg-[#dc4f00] hover:shadow-[0_16px_35px_rgba(241,90,0,0.26)]"
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
                className="h-13 rounded-xl border-white/30 bg-black/30 px-7 text-sm font-bold text-white shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-black/45"
              >
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>

            </div>

            <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-black/35 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm">
              <span className="h-px w-8 bg-white/50" />
              Built for trucking operations across the United States and Canada
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* FEATURE STRIP                                                    */}
        {/* ---------------------------------------------------------------- */}

        <div className="relative z-20 -mb-8 overflow-hidden rounded-2xl border border-[#dce4ee] bg-white/95 shadow-[0_18px_50px_rgba(16,33,61,0.10)] backdrop-blur">

          <div className="grid lg:grid-cols-5">

            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={[
                    'flex min-h-[76px] items-center gap-3 px-5 py-4',
                    index !== 0
                      ? 'border-t border-[#edf1f6] lg:border-l lg:border-t-0'
                      : '',
                  ].join(' ')}
                >

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf3ff] text-[#2456d8]">
                    <Icon
                      className="h-[18px] w-[18px]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#142342]">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-4 text-[#71809a]">
                      {feature.description}
                    </p>
                  </div>

                </div>
              )
            })}

          </div>
        </div>

        {/* IMPORTANT:
            Give the feature strip real breathing room instead of relying
            entirely on the negative margin. This prevents the next section
            from visually colliding/cutting off. */}
        <div className="h-20" />

      </div>
    </section>
  )
}
