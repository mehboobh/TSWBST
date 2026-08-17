'use client'

// components/home/testimonials.tsx

import { Card } from '@/components/ui/card'
import {
  ShieldCheck,
  Globe2,
  Truck,
  FileCheck,
  ArrowRight,
} from 'lucide-react'

const testimonials = [
  {
    quote:
      "What's actually changed for us isn't just staying compliant. It's seeing things we'd never have caught on our own. Weekly safety score, HOS reviews, patterns across pre- and post-trip inspections. We know which drivers need a conversation before it's a real problem, and which trucks keep showing up in inspections for the same reason.",
    author: 'Tejinder K.',
    role: 'Fleet Owner',
    location: 'Alberta, Canada',
    type: 'Safety & Operational Insights',
    badgeIcon: ShieldCheck,
  },
  {
    quote:
      "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone actually watching our safety score before it becomes a problem has made a real difference.",
    author: 'Harjinder S.',
    role: 'Fleet Owner',
    location: 'Saskatchewan, Canada',
    type: 'Compliance & Risk',
    badgeIcon: FileCheck,
  },
  {
    quote:
      "The data and analysis help us look into every aspect of our cross-border operation. TruckEase works behind the wheels with us, helping us understand what's happening across the business so we can make better decisions instead of simply reacting to problems.",
    author: 'Sohail M.',
    role: 'Fleet Owner',
    location: 'Michigan, USA',
    type: 'Cross-Border Operations',
    badgeIcon: Globe2,
  },
  {
    quote:
      "We built our cross-border operation from the ground up with TruckEase — authorities, account setup, vehicle registration, tax filing, all of it. Starting a business is stressful enough without wondering if you're compliant. They made sure we weren't.",
    author: 'Wasim M.',
    role: 'Fleet Owner',
    location: 'Ontario, Canada',
    type: 'Cross-Border Compliance',
    badgeIcon: Truck,
  },
]

export function Testimonials() {
  /*
   * Duplicate the real testimonials only for the visual loop.
   * We are NOT creating fictional customer stories.
   */
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-[#dce2eb] bg-[#f7f8fb] py-20 lg:py-28"
    >
      {/* Background atmosphere */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/80 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-24 h-[360px] w-[360px] rounded-full bg-[#4353a4]/[0.035] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-[360px] w-[360px] rounded-full bg-[#e8720c]/[0.025] blur-3xl"
      />

      {/* Marquee animation */}
      <style>{`
        @keyframes truckease-testimonial-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .truckease-testimonial-track {
          animation: truckease-testimonial-marquee 42s linear infinite;
          will-change: transform;
        }

        .truckease-testimonial-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .truckease-testimonial-track {
            animation: none;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#e8720c]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8720c]">
              Client Trust
            </span>

            <span className="h-px w-8 bg-[#e8720c]" />
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#0c1a36] sm:text-4xl lg:text-[3.05rem] lg:leading-[1.05]">
            Trusted by Fleet Owners
            <br className="hidden sm:block" />
            Across North America
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#5b6472] sm:text-[15px]">
            From single-unit startups to established cross-border fleets, see
            how we bring operational clarity and audit confidence to carriers.
          </p>
        </div>

        {/* Trust signal */}

        <div className="mt-8 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9e0ea] bg-white/80 px-4 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5c8a68]/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5c8a68]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#53627a]">
              Customer experience across the U.S. & Canada
            </span>
          </div>
        </div>

        {/* Infinite testimonial track */}

        <div className="relative mt-12 lg:mt-14">
          {/* Left fade */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#f7f8fb] to-transparent sm:w-32 lg:w-48"
          />

          {/* Right fade */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#f7f8fb] to-transparent sm:w-32 lg:w-48"
          />

          {/* Track */}

          <div className="relative w-full overflow-hidden">
            <div className="truckease-testimonial-track flex w-max gap-5 pr-5">
              {infiniteTestimonials.map((testimonial, index) => {
                const Icon = testimonial.badgeIcon

                return (
                  <Card
                    key={`${testimonial.author}-${index}`}
                    className="
                      group relative flex w-[310px] shrink-0
                      flex-col justify-between overflow-hidden
                      rounded-[20px] border border-[#dce2eb]
                      bg-white p-6
                      shadow-[0_10px_35px_rgba(12,26,54,0.055)]
                      transition-all duration-300
                      hover:border-[#c9d2df]
                      hover:shadow-[0_18px_45px_rgba(12,26,54,0.10)]
                      sm:w-[360px] sm:p-7
                    "
                  >
                    <div>
                      {/* Customer category */}

                      <div className="flex items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#e0e5ec] bg-[#f7f8fa] px-3 py-1.5">
                          <Icon className="h-3.5 w-3.5 text-[#4353a4]" />

                          <span className="text-[10px] font-semibold text-[#53627a]">
                            {testimonial.type}
                          </span>
                        </div>

                        <span className="text-[9px] font-bold tracking-[0.12em] text-[#b0bac8]">
                          CLIENT
                        </span>
                      </div>

                      {/* Quote mark */}

                      <div
                        aria-hidden="true"
                        className="mt-7 text-4xl font-serif leading-none text-[#dce3f0]"
                      >
                        “
                      </div>

                      {/* Quote */}

                      <p className="-mt-1 text-[13px] leading-6 text-[#4f5f77] sm:text-sm sm:leading-6.5">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Customer */}

                    <div className="mt-7 border-t border-[#edf0f4] pt-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold tracking-[-0.01em] text-[#0c1a36]">
                            {testimonial.author}
                          </p>

                          <p className="mt-1 text-[11px] text-[#7a879a]">
                            {testimonial.role} · {testimonial.location}
                          </p>
                        </div>

                        <div
                          aria-hidden="true"
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f4fa] text-[#4353a4] transition-colors duration-300 group-hover:bg-[#e9efff]"
                        >
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent */}

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#e8720c] transition-all duration-300 group-hover:w-12"
                    />
                  </Card>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}

        <div className="mt-10 flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-[#d6dde8]" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />

          <div className="h-px w-10 bg-[#d6dde8]" />
        </div>
      </div>
    </section>
  )
}
