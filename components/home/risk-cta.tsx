import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

const steps = [
  'Review requested',
  'Public information reviewed',
  'Potential areas for attention',
  'Next steps discussed',
]

export function RiskCta() {
  return (
    <section className="bg-background">
      <div className="container-site section-padding-lg">
        <div className="overflow-hidden rounded-2xl border border-border bg-navy text-navy-foreground">
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div
              className="grid-lines absolute inset-0 opacity-30"
              aria-hidden="true"
            />
            <Reveal className="relative">
              <span className="inline-flex items-center gap-2 text-eyebrow text-accent">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                Risk Screening
              </span>
              <h2 className="mt-4 text-balance text-section-title text-navy-foreground">
                Understand Your Compliance Position Before Small Issues Become
                Bigger Problems.
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-navy-muted">
                Our Risk Screening reviews publicly available regulatory
                information to identify potential compliance signals that may
                deserve attention. The review is designed to give you greater
                visibility into your current position and highlight where a
                closer look might be worthwhile.
              </p>
              <p className="mt-4 font-medium text-navy-foreground">
                No obligation. Just a real answer to where you stand.
              </p>
              <Button
                asChild
                variant="cta"
                size="lg"
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/risk-screening">Request Your Risk Screening →</Link>
              </Button>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-navy-muted">
                  How a screening works
                </p>
                <ol className="mt-5 space-y-4">
                  {steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-4">
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                        {i < steps.length ? (
                          <Check className="size-4" />
                        ) : (
                          i + 1
                        )}
                      </span>
                      <span className="text-sm font-medium">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-navy-muted">
                  A screening reviews available information only. It is not a
                  guarantee of compliance or an official government rating.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
