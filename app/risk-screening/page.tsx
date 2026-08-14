// app/risk-screening/page.tsx

import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { RiskScreeningForm } from "@/components/risk-screening-form"
import { Reveal } from "@/components/reveal"
import { ClipboardList, Globe, AlertTriangle, MessagesSquare, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Risk Screening",
  description:
    "Get a no-obligation compliance risk screening from TruckEase Solutions. We review public records and surface your biggest operational exposures.",
}

const steps = [
  {
    icon: ClipboardList,
    title: "1. Review requested",
    body: "Complete a 3-minute self-assessment to highlight where you need clarity, then share basic information about your business to get started.",
  },
  {
    icon: Globe,
    title: "2. Public information reviewed",
    body: "We examine publicly available data to see what regulators, insurance providers, and brokers currently see connected to your business.",
  },
  {
    icon: AlertTriangle,
    title: "3. Potential areas for attention identified",
    body: "We evaluate your current setup against available records to surface quiet red flags, sudden score shifts, and hidden issues before they turn into costly problems.",
  },
  {
    icon: MessagesSquare,
    title: "4. Next steps discussed",
    body: "We walk you through what needs immediate attention, what can wait, and how our specialized compliance services can take the heavy lifting off your hands.",
  },
]

export default function RiskScreeningPage() {
  return (
    <>
<PageHero
        variant="light"
        align="center"
        eyebrow="No cost, no obligation"
        title={
          <>
            See your compliance risk before it becomes an{" "}
            <span className="text-destructive underline decoration-destructive/30 decoration-2 underline-offset-4 font-bold">
              operational problem.
            </span>
          </>
        }
        description="A quick screening surfaces the violations, gaps, and score trends most likely to cost you—so you can fix them on your timeline, not an auditor's."
        breadcrumb="Risk Screening"
      />

      <section className="border-b border-border bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-accent/12 text-accent">
                    <step.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <Reveal className="lg:sticky lg:top-24">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-3.5 py-1.5 text-xs font-semibold text-accent">
                <Mail className="size-3.5 shrink-0" />
                Clear risk breakdown sent to your inbox
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-foreground text-balance sm:text-4xl">
                Tell us about your fleet
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                The more you share, the sharper your snapshot. Everything you submit stays confidential and is used only
                to prepare your screening.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "No credit card, no contract, no obligation.",
                  "Clear, prioritized breakdown of your operational standing.",
                  "Practical next steps based on what your screening finds.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <RiskScreeningForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
