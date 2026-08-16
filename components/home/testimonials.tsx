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
      "What's actually changed for us isn't just staying compliant — it's seeing things we'd never have caught on our own. Weekly safety score, HOS reviews, and patterns across inspections help us know which drivers need a conversation before it's a real problem.",
    author: 'Tejinder K.',
    role: 'Fleet Owner',
    location: 'Alberta, Canada',
    type: 'Safety & Operations',
    icon: ShieldCheck,
  },
  {
    quote:
      "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone watching our safety score before it becomes a problem has made a real difference.",
    author: 'Harjinder S.',
    role: 'Fleet Owner',
    location: 'Saskatchewan, Canada',
    type: 'Compliance & Risk',
    icon: FileCheck,
  },
  {
    quote:
      "The data and analysis help us look into every aspect of our cross-border operation. TruckEase works behind the wheels with us, helping us understand what's happening across the business so we can make better decisions instead of simply reacting to problems.",
    author: 'Sohail M.',
    role: 'Fleet Owner',
    location: 'Michigan, USA',
    type: 'Cross-Border Operations',
    icon: Globe2,
  },
  {
    quote:
      "We built our cross-border operation from the ground up with TruckEase — authorities, account setup, vehicle registration, tax filing, all of it. Starting a business is stressful enough without wondering if you're compliant. They made sure we weren't.",
    author: 'Wasim M.',
    role: 'Fleet Owner',
    location: 'Ontario, Canada',
    type: 'Cross-Border Compliance',
    icon: Truck,
  },
]

/*
 * The testimonials are duplicated only to create the continuous
 * carousel effect. It does NOT imply additional customers.
 */
const marqueeTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-[#e2e7ef] bg-[#f7f9fc] py-16 sm:py-20 lg:py-24"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#4353a4]/[0.025] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#e8720c]/[0.025] blur-3xl"
      />

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
          animation: truckease-testimonial-marquee 48s linear infinite;
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

        {/* ============================================================
            SECTION INTRO
            ============================================================ */}

        <div className="mx-auto max-w-2xl text-center">

          <div className="mb-4 inline-flex items-center gap-2.5">
            <span className="h-px w-7 bg-[#e8720c]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e8720c]">
              Client Experience
            </span>

            <span className="h-px w-7 bg-[#e8720c]" />
          </div>

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#101d39] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.05]">
            Built Around How Fleets
            <br className="hidden sm:block" />
            Actually Operate
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#667085]">
            Compliance data becomes more valuable when it helps you understand
            what is happening across the operation — and decide what to do next.
          </p>

        </div>

        {/* ============================================================
            OPERATOR SIGNAL
            ============================================================ */}

        <div className="mt-7 flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce3ed] bg-white px-3.5 py-1.5 shadow-[0_3px_12px_rgba(16,29,57,0.04)]">

            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5c8a68]/40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5c8a68]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#53627a]">
              Experiences from fleet operators across the U.S. & Canada
            </span>

          </div>

        </div>

        {/* ============================================================
            TESTIMONIAL CAROUSEL
            ============================================================ */}

        <div className="relative mt-10 sm:mt-12">

          {/* Edge fades */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#f7f9fc] to-transparent sm:w-24 lg:w-40"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#f7f9fc] to-transparent sm:w-24 lg:w-40"
          />

          <div className="overflow-hidden">

            <div className="truckease-testimonial-track flex w-max gap-4 pr-4">

              {marqueeTestimonials.map((testimonial, index) => {
                const Icon = testimonial.icon

                return (
                  <Card
                    key={`${testimonial.author}-${index}`}
                    className="
                      group relative
                      flex h-[330px] w-[310px]
                      shrink-0 flex-col
                      overflow-hidden rounded-[18px]
                      border border-[#dce2eb]
                      bg-white
                      p-5
                      shadow-[0_8px_28px_rgba(16,29,57,0.045)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#cbd4e1]
                      hover:shadow-[0_16px_38px_rgba(16,29,57,0.08)]
                      sm:h-[315px]
                      sm:w-[350px]
                      sm:p-6
                    "
                  >

                    {/* ==================================================
                        TOP ROW
                        ================================================== */}

                    <div className="flex items-center justify-between">

                      <div className="inline-flex items-center gap-2 rounded-full border border-[#e1e6ee] bg-[#f8f9fc] px-2.5 py-1.5">

                        <Icon
                          className="h-3.5 w-3.5 text-[#4353a4]"
                          strokeWidth={1.8}
                        />

                        <span className="text-[9px] font-semibold text-[#53627a]">
                          {testimonial.type}
                        </span>

                      </div>

                      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#b1bac8]">
                        CLIENT
                      </span>

                    </div>

                    {/* ==================================================
                        QUOTE
                        ================================================== */}

                    <div className="flex-1">

                      <div
                        aria-hidden="true"
                        className="mt-5 font-serif text-[32px] leading-none text-[#dfe5ef]"
                      >
                        “
                      </div>

                      <p className="mt-1 text-[12px] leading-[1.65] text-[#52617a] sm:text-[13px] sm:leading-[1.65]">
                        {testimonial.quote}
                      </p>

                    </div>

                    {/* ==================================================
                        CUSTOMER
                        ================================================== */}

                    <div className="mt-4 flex items-center justify-between border-t border-[#edf0f4] pt-4">

                      <div>

                        <p className="text-[12px] font-bold tracking-[-0.01em] text-[#101d39]">
                          {testimonial.author}
                        </p>

                        <p className="mt-0.5 text-[9px] text-[#7b8798]">
                          {testimonial.role} · {testimonial.location}
                        </p>

                      </div>

                      <div
                        aria-hidden="true"
                        className="
                          flex h-7 w-7 items-center justify-center
                          rounded-full bg-[#f1f4fa]
                          text-[#4353a4]
                          transition-all duration-300
                          group-hover:bg-[#e9efff]
                        "
                      >
                        <ArrowRight className="h-3 w-3" />
                      </div>

                    </div>

                    {/* Subtle orange accent */}

                    <div
                      aria-hidden="true"
                      className="
                        absolute bottom-0 left-0
                        h-[2px] w-0
                        bg-[#e8720c]
                        transition-all duration-300
                        group-hover:w-10
                      "
                    />

                  </Card>
                )
              })}

            </div>

          </div>
        </div>

        {/* ============================================================
            CAROUSEL INDICATOR
            ============================================================ */}

        <div className="mt-8 flex items-center justify-center gap-3">

          <span className="h-px w-10 bg-[#d8dfe9]" />

          <span className="h-1.5 w-1.5 rounded-full bg-[#e8720c]" />

          <span className="h-px w-10 bg-[#d8dfe9]" />

        </div>

      </div>
    </section>
  )
}
