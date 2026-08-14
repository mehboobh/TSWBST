// components/home/testimonials.tsx

import { Card } from '@/components/ui/card'
import { ShieldCheck, Globe2, Truck, FileCheck } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Running interprovincial routes from BC to Quebec requires keeping up with shifting provincial rules across Canada. Having them handle our full compliance workflow gives us complete peace of mind.",
    author: "Tejinder K.",
    role: "Fleet Owner",
    location: "Alberta, Canada",
    type: "Interprovincial Fleet Partner",
    badgeIcon: ShieldCheck,
  },
  {
    quote:
      "Managing a cross-border fleet comes with strict audit standards on both sides of the border. As our dedicated compliance partner, their proactive tracking means we never worry about missing critical renewals or facing inspection delays.",
    author: "Sohail S.",
    role: "Fleet Owner",
    location: "Michigan, USA",
    type: "Cross-Border Fleet Partner",
    badgeIcon: Globe2,
  },
  {
    quote:
      "When we launched, they handled everything from the ground up—operating authorities, permits, vehicle registrations, and tax filings. They made setup simple and ensured we were fully legal to cross the border from day one.",
    author: "Wasim M.",
    role: "Fleet Owner",
    location: "Ontario, Canada",
    type: "Startup & Cross-Border Setup",
    badgeIcon: Truck,
  },
  {
    quote:
      "We count on them for our quarterly IFTA filings, IRP renewals, and Safety Fitness Certificate management. Whenever we need fast, accurate filing support or regulatory updates, they deliver every single time.",
    author: "Harjinder S.",
    role: "Fleet Owner",
    location: "Saskatchewan, Canada",
    type: "IFTA & Renewal Support",
    badgeIcon: FileCheck,
  },
]

export function Testimonials() {
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="bg-slate-50/60 py-16 lg:py-24 border-t border-slate-200/60 overflow-hidden">
      {/* Inline Keyframes style so you don't need app/globals.css changes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-loop {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-loop:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            CLIENT TRUST
          </span>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl mt-2">
            Trusted by Fleet Owners Across North America
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From single-unit startups to established cross-border fleets, see how we bring operational clarity and audit confidence to carriers.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-6 animate-marquee-loop">
            {infiniteTestimonials.map((t, idx) => {
              const Icon = t.badgeIcon
              return (
                <Card
                  key={`${t.author}-${idx}`}
                  className="w-[320px] sm:w-[380px] shrink-0 flex flex-col justify-between border border-slate-200/80 bg-white p-6 rounded-xl shadow-sm hover:border-accent/40 transition-colors"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-800 mb-4">
                      <Icon className="size-3.5 text-accent shrink-0" />
                      {t.type}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="font-bold text-navy text-sm">{t.author}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} &bull; {t.location}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
