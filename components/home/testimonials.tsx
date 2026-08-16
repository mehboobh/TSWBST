const testimonials = [
  {
    category: 'Safety & Operational Insights',
    quote:
      "What's changed for us isn't just staying compliant — it's seeing things we'd never have caught on our own. Weekly safety scores, HOS reviews, and inspection patterns help us address problems before they're real problems.",
    name: 'Tejinder K.',
    location: 'Alberta, Canada',
  },
  {
    category: 'Compliance & Risk',
    quote:
      "IFTA, IRP, our SFC renewal, HOS — TruckEase keeps track of all of it so we're not scrambling every quarter. Having someone watching our safety score before it becomes a problem has made a real difference.",
    name: 'Harjinder S.',
    location: 'Saskatchewan, Canada',
  },
  {
    category: 'Cross-Border Operations',
    quote:
      "The data and analysis help us look into every aspect of our cross-border operation. TruckEase works behind the wheels with us, helping us understand what's happening across the business so we can make better decisions instead of simply reacting to problems.",
    name: 'Sohail M.',
    location: 'Michigan, USA',
  },
  {
    category: 'Cross-Border Compliance',
    quote:
      "We built our cross-border operation from the ground up with TruckEase — authorities, account setup, vehicle registration, tax filing, all of it. They made sure we weren't wondering if we were compliant.",
    name: 'Wasim M.',
    location: 'Ontario, Canada',
  },
]

function CategoryIcon({ index }: { index: number }) {
  const icons = [
    (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M12 3.5 19 7v5c0 4.5-2.9 7.2-7 8.5C7.9 19.2 5 16.5 5 12V7l7-3.5Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
      </svg>
    ),
    (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.3 5.2 3.3 8.5S14.2 18.1 12 20.5C9.8 18.1 8.7 15.3 8.7 12S9.8 5.9 12 3.5Z" />
      </svg>
    ),
    (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M4 7.5h16v9H4z" />
        <path d="M7 16.5v2h10v-2M8 7.5V5h8v2" />
        <path d="M8 11h.01M11 11h5" />
      </svg>
    ),
  ]

  return icons[index]
}

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 sm:py-24">
      {/* Soft background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-12%] top-[-20%] h-[420px] w-[420px] rounded-full bg-[#e9eef8] opacity-60 blur-3xl" />
        <div className="absolute bottom-[-25%] right-[-8%] h-[380px] w-[380px] rounded-full bg-[#fff0e7] opacity-45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[650px]">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#f15a0a]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#17305f]">
                Experiences from fleet operators
              </span>
            </div>

            <h2 className="text-[34px] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#14213f] sm:text-[42px]">
              Built around the way
              <br className="hidden sm:block" /> your business actually operates.
            </h2>

            <p className="mt-4 max-w-[610px] text-[15px] leading-7 text-[#66738a]">
              Compliance is only part of the picture. Our clients use
              TruckEase data, analysis, and ongoing support to understand
              what is happening across their operations and make better
              decisions.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 pb-1 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#f15a0a]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7a879b]">
              Fleet operator experiences
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="group flex min-h-[345px] flex-col rounded-[20px] border border-[#dce3ee] bg-white p-5 shadow-[0_8px_30px_rgba(20,33,63,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#cdd7e7] hover:shadow-[0_18px_45px_rgba(20,33,63,0.08)]"
            >
              {/* Top row */}
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex min-w-0 items-center gap-2 rounded-full border border-[#dce4f1] bg-[#f7f9fd] px-2.5 py-1.5 text-[10px] font-semibold text-[#52627d]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#edf2ff] text-[#4a63d8]">
                    <CategoryIcon index={index} />
                  </span>

                  <span className="truncate">
                    {testimonial.category}
                  </span>
                </div>

                <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#b1bac9]">
                  Client
                </span>
              </div>

              {/* Quote */}
              <div className="mt-7 flex-1">
                <div className="mb-3 text-[28px] font-serif leading-none text-[#dce4f1]">
                  “
                </div>

                <p className="text-[14px] leading-[1.75] text-[#56657d]">
                  {testimonial.quote}
                </p>
              </div>

              {/* Bottom identity */}
              <div className="mt-6 border-t border-[#e8edf4] pt-4">
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[13px] font-bold text-[#172543]">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-[10px] font-medium text-[#8995a8]">
                      Fleet Owner · {testimonial.location}
                    </p>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f5fb] text-[#4962d6] transition-colors duration-200 group-hover:bg-[#fff0e7] group-hover:text-[#f15a0a]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M5 12h13" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <span className="h-px w-8 bg-[#d8dfeb]" />
          <p className="text-[11px] font-medium text-[#8490a3]">
            Experiences from trucking businesses operating across the U.S. &amp; Canada
          </p>
          <span className="h-px w-8 bg-[#d8dfeb]" />
        </div>
      </div>
    </section>
  )
}
