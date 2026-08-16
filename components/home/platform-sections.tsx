import {
  CheckCircle2,
  ClipboardCheck,
  Layers,
  Radar,
  ShieldCheck,
  Search,
  Settings2,
  Headset,
} from 'lucide-react'
import { ComplianceDashboard } from '@/components/compliance-dashboard'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function PlatformPreview() {
  return (
    <section id="platform" className="scroll-mt-20 bg-navy text-navy-foreground">
      <div className="relative overflow-hidden">
        <div
          className="grid-lines absolute inset-0 opacity-40"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 size-[30rem] rounded-full bg-accent/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Platform preview"
              title="From Compliance Data to Operational Clarity."
              description="A single view that connects requirements, deadlines, documents, and monitoring activity, then points to the next action worth taking."
            />
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <div className="mx-auto max-w-4xl">
              <ComplianceDashboard />
              <p className="mt-4 text-center text-xs text-navy-muted">
                Interface concept. Illustrative data shown for demonstration and
                does not represent real customer data.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const benefits = [
  {
    icon: Radar,
    title: 'Proactive, continuously tracked compliance',
    body: 'Requirements monitored on an ongoing basis so gaps surface early.',
  },
  {
    icon: ShieldCheck,
    title: 'Cross-border regulatory knowledge',
    body: 'Experience spanning requirements across the United States and Canada.',
  },
  {
    icon: Layers,
    title: 'Technology-first compliance platform',
    body: 'Built for ongoing operational visibility, not periodic paperwork.',
  },
  {
    icon: CheckCircle2,
    title: 'Organized, accessible documents',
    body: 'Records retained with appropriate access controls and activity tracking.',
  },
  {
    icon: Headset,
    title: 'Practical ongoing support',
    body: 'A person to help when a system alone isn\u2019t enough.',
  },
  {
    icon: Settings2,
    title: 'Long-term compliance confidence',
    body: 'Support that adapts as regulations evolve and your business grows.',
  },
]

export function WhyTruckEase() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Why TruckEase"
            title="More than filing paperwork."
            description="Businesses choose TruckEase because compliance requires more than filing paperwork. It requires consistency, attention to detail, and technology built to catch what manual tracking misses."
          />
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={(i % 3) * 80}
              className="flex gap-4 border-t border-border pt-6"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/12 text-accent-foreground">
                <benefit.icon className="size-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {benefit.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Discover',
    body: 'We begin by understanding your operation and current compliance requirements.',
  },
  {
    n: '02',
    icon: ClipboardCheck,
    title: 'Assess',
    body: 'We review your current compliance records, documentation, and regulatory requirements to understand where your operation stands and identify areas that may require attention.',
  },
  {
    n: '03',
    icon: Settings2,
    title: 'Implement',
    body: 'We handle the registrations, renewals, and documentation required to keep your operation compliant, set up as part of your Compliance Platform from day one.',
  },
  {
    n: '04',
    icon: Radar,
    title: 'Monitor',
    body: 'The platform continues tracking your compliance activity, flagging what needs attention as it comes up, not after the fact.',
  },
  {
    n: '05',
    icon: Headset,
    title: 'Support',
    body: 'As regulations evolve and your business grows, we remain available to help you navigate what\u2019s next.',
  },
]

export function Process() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Our process"
            title="A Clearer Path to Compliance Confidence."
          />
        </Reveal>

        <ol className="relative mt-14 grid gap-8 md:grid-cols-5">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 90}
              className="relative flex flex-col items-start"
            >
              <span className="relative z-10 grid size-12 place-items-center rounded-xl border border-border bg-background text-navy shadow-sm">
                <step.icon className="size-5 text-accent" />
              </span>
              <span className="mt-4 font-mono text-xs font-medium text-muted-foreground">
                {step.n}
              </span>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
