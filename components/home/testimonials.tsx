const testimonials = [
  {
    category: 'Safety & Operational Insights',
    quote:
      "What's actually changed for us isn't just staying compliant. It's seeing things we'd never have caught on our own. Weekly safety score, HOS reviews, patterns across pre- and post-trip inspections. We know which drivers need a conversation before it's a real problem, and which trucks keep showing up in inspections for the same reason.",
    name: 'Tejinder K.',
    location: 'Fleet Owner · Alberta, Canada',
  },
  {
    category: 'Compliance & Risk',
    quote:
      "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone watching our safety score before it becomes a problem has made a real difference.",
    name: 'Harjinder S.',
    location: 'Fleet Owner · Saskatchewan, Canada',
  },
  {
    category: 'Cross-Border Operations',
    quote:
      "The data and analysis help us look into every aspect of our cross-border operation. TruckEase works behind the wheels with us, helping us understand what's happening across the business so we can make better decisions instead of simply reacting to problems.",
    name: 'Sohail M.',
    location: 'Fleet Owner · Michigan, USA',
  },
  {
    category: 'Cross-Border Compliance',
    quote:
      "We built our cross-border operation from the ground up with TruckEase — authorities, account setup, vehicle registration, tax filing, all of it. Starting a business is stressful enough without wondering if you're compliant. They made sure we weren't.",
    name: 'Wasim M.',
    location: 'Fleet Owner · Ontario, Canada',
  },
]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number]
}) {
  return (
    <article className="flex h-[318px] w-[320px] shrink-0 flex-col rounded-[20px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(20,32,59,0.04)] sm:w-[350px]">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[9px] font-semibold text-slate-500">
          {testimonial.category}
        </span>

        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-slate-300">
          Client
        </span>
      </div>

      <div className="mt-6 text-2xl leading-none text-[#dbe2f2]">“</div>

      <p className="mt-1 flex-1 overflow-hidden text-[12.5px] leading-[1.7] text-slate-500">
        {testimonial.quote}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <p className="text-[12px] font-bold text-[#14203b]">
            {testimonial.name}
          </p>

          <p className="mt-0.5 text-[9px] text-slate-400">
            {testimonial.location}
          </p>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0f3fb] text-sm text-[#5267d9]">
          →
        </span>
      </div>
    </article>
  )
}

export function Testimonials() {
  const loop = [...testimonials, ...testimonials]

  return (
    <section className="overflow-hidden bg-[#f3f6fa] py-16 sm:py-20">
      <div className="mx-auto mb-9 max-w-6xl px-5 text-center sm:px-8">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-7 bg-orange-500" />

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600">
            Client trust
          </span>

          <span className="h-px w-7 bg-orange-500" />
        </div>

        <h2 className="text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#14203b] sm:text-4xl">
          Trusted by Fleet Owners
          <br />
          Across North America
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500">
          Real experiences from operators using TruckEase to stay ahead of
          compliance, understand their operation, and make better decisions.
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f3f6fa] to-transparent sm:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f3f6fa] to-transparent sm:w-32" />

        <div className="testimonial-track flex w-max gap-4 px-4 hover:[animation-play-state:paused]">
          {loop.map((testimonial, index) => (
            <TestimonialCard
              testimonial={testimonial}
              key={`${testimonial.name}-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
        <span className="h-px w-10 bg-slate-300" />
      </div>

      <style jsx>{`
        .testimonial-track {
          animation: testimonial-scroll 42s linear infinite;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 8px));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
