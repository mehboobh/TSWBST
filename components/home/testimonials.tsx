// components/home/testimonials.tsx

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
    "What's changed for us isn't staying compliant. It's seeing things we'd never have caught on our own. Weekly safety score, HOS reviews, patterns across pre- and post-trip inspections. We know which drivers need a conversation before it's a problem, and which trucks keep showing up in inspections for the same reason.",
    author: 'Tejinder K.',
    role: 'Fleet Owner',
    location: 'Alberta, Canada',
    type: 'Safety & Operational Insights',
    icon: ShieldCheck,
  },
  {
    quote:
      "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone actually watching our safety score before it becomes a problem has made a real difference.",
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

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  const Icon = testimonial.icon

  return (
    <article
      className="
        group relative flex h-[350px] w-[330px] shrink-0 flex-col
        overflow-hidden rounded-[22px]
        border border-[#dbe2ed]
        bg-white
        p-6
        shadow-[0_8px_30px_rgba(12,26,54,0.045)]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#cbd5e3]
        hover:shadow-[0_18px_45px_rgba(12,26,54,0.09)]
        sm:h-[360px] sm:w-[350px] sm:p-7
        lg:w-[365px]
      "
    >
      {/* top row */}
      <div className="flex items-center justify-between gap-3">
        <div
          className="
            inline-flex min-w-0 max-w-[82%] items-center gap-2
            rounded-full border border-[#e0e6ef]
            bg-[#f7f9fc]
            px-3 py-1.5
          "
        >
          <span
            className="
              flex h-6 w-6 shrink-0 items-center justify-center
              rounded-full bg-[#eef2ff]
            "
          >
            <Icon className="h-3.5 w-3.5 text-[#4353a4]" />
          </span>

          <span
            className="
              truncate text-[10px] font-semibold
              tracking-[-0.01em] text-[#52627b]
            "
          >
            {testimonial.type}
          </span>
        </div>

        <span
          className="
            shrink-0 text-[9px] font-bold
            uppercase tracking-[0.14em]
            text-[#aeb8c8]
          "
        >
          CLIENT
        </span>
      </div>

      {/* quote */}
      <div className="mt-6">
        <div
          aria-hidden="true"
          className="
            mb-2 font-serif text-[38px] leading-[0.7]
            text-[#dfe5ef]
          "
        >
          “
        </div>

        <p
        className="
        text-[13px] leading-[1.7]
        text-[#506079]
        sm:text-[13px]
        "
        >
          {testimonial.quote}
        </p>
      </div>

      {/* customer */}
      <div className="mt-auto border-t border-[#edf0f5] pt-5">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p
              className="
                text-sm font-bold tracking-[-0.015em]
                text-[#0c1a36]
              "
            >
              {testimonial.author}
            </p>

            <p className="mt-1 text-[11px] text-[#7b8799]">
              {testimonial.role} · {testimonial.location}
            </p>
          </div>

          <div
            aria-hidden="true"
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-[#f1f4fa]
              text-[#4353a4]
              transition-all duration-300
              group-hover:bg-[#e9efff]
              group-hover:text-[#31439a]
            "
          >
            <ArrowRight
              className="
                h-4 w-4
                transition-transform duration-300
                group-hover:translate-x-0.5
              "
            />
          </div>
        </div>
      </div>

      {/* subtle orange accent */}
      <div
        aria-hidden="true"
        className="
          absolute bottom-0 left-0
          h-[2px] w-0
          bg-[#f05a00]
          transition-all duration-300
          group-hover:w-16
        "
      />
    </article>
  )
}

export function Testimonials() {
  /*
   * IMPORTANT:
   *
   * We duplicate the ENTIRE group rather than simply duplicating
   * individual cards inside one flex row.
   *
   * Group A + Group B have exactly the same width.
   * The animation moves exactly 50% of the complete track.
   * Therefore when Group B reaches the position of Group A,
   * the browser can continue seamlessly with no visible jump.
   */

  return (
    <section
      id="testimonials"
      className="
        relative overflow-hidden
        border-t border-[#dce2eb]
        bg-[#f7f8fb]
        py-20
        lg:py-24
      "
    >
      {/* background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-x-0 top-0 h-56
          bg-gradient-to-b from-white/90 to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-48 top-32 h-[420px] w-[420px]
          rounded-full bg-[#4353a4]/[0.035]
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-48 bottom-0 h-[420px] w-[420px]
          rounded-full bg-[#f05a00]/[0.025]
          blur-3xl
        "
      />

      {/* Inline CSS keeps this section independent from globals.css */}
      <style>{`
        @keyframes truckease-testimonials-loop {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .truckease-testimonials-track {
          display: flex;
          width: max-content;
          animation: truckease-testimonials-loop 32s linear infinite;
          will-change: transform;
        }

        .truckease-testimonials-group {
          display: flex;
          flex-shrink: 0;
          gap: 20px;
          padding-right: 20px;
        }

        .truckease-testimonials-track:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .truckease-testimonials-track {
            animation-duration: 28s;
          }

          .truckease-testimonials-group {
            gap: 14px;
            padding-right: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .truckease-testimonials-track {
            animation: none;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-[1440px]">
        {/* section heading */}
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#f05a00]" />

            <span
              className="
                text-[10px] font-bold uppercase
                tracking-[0.2em] text-[#f05a00]
              "
            >
              Client Trust
            </span>

            <span className="h-px w-8 bg-[#f05a00]" />
          </div>

          <h2
            className="
              text-3xl font-bold
              tracking-[-0.045em]
              text-[#0c1a36]
              sm:text-4xl
              lg:text-[3rem]
              lg:leading-[1.05]
            "
          >
            Trusted by Fleet Owners
            <br className="hidden sm:block" />
            Across North America
          </h2>

          <p
            className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-7
              text-[#5b6472]
              sm:text-[15px]
            "
          >
            Real experiences from operators using TruckEase to stay ahead of
            compliance, understand their operation, and make better decisions.
          </p>
        </div>

        {/* trust indicator */}
        <div className="mt-7 flex justify-center px-6">
          <div
            className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#d9e0ea]
              bg-white
              px-4 py-2
              shadow-[0_4px_15px_rgba(12,26,54,0.04)]
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute inline-flex h-full w-full
                  animate-ping rounded-full
                  bg-[#5c8a68]/30
                "
              />

              <span
                className="
                  relative inline-flex h-2 w-2
                  rounded-full bg-[#5c8a68]
                "
              />
            </span>

            <span
              className="
                text-[9px] font-semibold uppercase
                tracking-[0.14em] text-[#53627a]
                sm:text-[10px]
              "
            >
              Experiences from fleet operators across the U.S. & Canada
            </span>
          </div>
        </div>

        {/* carousel */}
        <div className="relative mt-11 lg:mt-12">
          {/* left fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-0 left-0 z-20
              w-14
              bg-gradient-to-r
              from-[#f7f8fb]
              to-transparent
              sm:w-24
              lg:w-40
            "
          />

          {/* right fade */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-0 right-0 z-20
              w-14
              bg-gradient-to-l
              from-[#f7f8fb]
              to-transparent
              sm:w-24
              lg:w-40
            "
          />

          {/* viewport */}
          <div className="w-full overflow-hidden">
            {/*
             * Two identical groups.
             *
             * NO gap is placed between the groups themselves.
             * Each group owns its own trailing padding.
             * This is what makes the -50% animation mathematically
             * line up with the beginning of the next group.
             */}
            <div className="truckease-testimonials-track">
              {/* GROUP A */}
              <div className="truckease-testimonials-group">
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`a-${testimonial.author}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>

              {/* GROUP B */}
              <div
                className="truckease-testimonials-group"
                aria-hidden="true"
              >
                {testimonials.map((testimonial) => (
                  <TestimonialCard
                    key={`b-${testimonial.author}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom indicator */}
        <div className="mt-9 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#d6dde8]" />

          <span
            className="
              h-1.5 w-1.5 rounded-full
              bg-[#f05a00]
              shadow-[0_0_0_4px_rgba(240,90,0,0.08)]
            "
          />

          <span className="h-px w-10 bg-[#d6dde8]" />
        </div>
      </div>
    </section>
  )
}
