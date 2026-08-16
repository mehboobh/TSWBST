import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  FileCheck2,
  Headphones,
  ShieldCheck,
  Eye,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: "Continuous Monitoring",
    description: "Stay informed, always",
  },
  {
    icon: FileCheck2,
    title: "Organized Records",
    description: "Everything in one place",
  },
  {
    icon: Eye,
    title: "Operational Visibility",
    description: "See what matters",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Expertise",
    description: "Built for US & Canada",
  },
  {
    icon: Headphones,
    title: "Practical Human Support",
    description: "Real people, real help",
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Very subtle background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-orange-50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-[360px] h-[420px] w-[420px] rounded-full bg-blue-50/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8 lg:pb-10 lg:pt-10">

        {/* ─────────────────────────────
            HERO CONTENT
        ───────────────────────────── */}

        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">

          {/* LEFT — MESSAGE */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[12px] font-semibold text-[#17345f] shadow-[0_2px_8px_rgba(15,35,65,0.07)]">
              <span className="h-2 w-2 rounded-full bg-orange-600" />
              Operational intelligence platform for the United States and Canada
            </div>

            {/* Main heading */}
            <h1 className="max-w-[700px] text-balance text-[4rem] font-extrabold leading-[0.98] tracking-[-0.055em] text-[#142342] sm:text-[4.5rem] lg:text-[4.65rem]">
              Compliance Built for{" "}
              <span className="text-orange-600">
                Operational Confidence.
              </span>
            </h1>

            {/* Supporting headline */}
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

            {/* CTA */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-orange-600 px-6 text-sm font-bold text-white shadow-[0_10px_24px_rgba(234,88,12,0.18)] transition-all hover:bg-orange-700 hover:shadow-[0_12px_28px_rgba(234,88,12,0.25)]"
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
                className="h-12 rounded-xl border-slate-300 bg-white px-6 text-sm font-semibold text-[#10213d] hover:bg-slate-50"
              >
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT — TRUCK IMAGE */}
          <div className="relative">

            {/* Soft warm glow behind photograph */}
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

              {/* Very subtle navy integration gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#10213d]/10 via-transparent to-[#10213d]/15"
              />

              {/* Confidence badge */}
              <div className="absolute right-5 top-5 rounded-[20px] border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-[12px] font-medium text-[#385071]">
                  Operate with
                </p>
                <p className="text-[14px] font-bold text-[#142342]">
                  Confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────
            FEATURE STRIP
        ───────────────────────────── */}

        <div className="relative z-20 mt-8 overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(16,33,61,0.08)]">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={[
                    "flex min-h-[68px] items-center gap-3 px-5 py-3.5",
                    index !== 0
                      ? "border-t border-slate-100 lg:border-l lg:border-t-0"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[12px] font-bold leading-4 text-[#142342]">
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
