import {
  AlarmClockOff,
  ArrowRight,
  Boxes,
  BrainCircuit,
  ClipboardList,
  FileWarning,
  Radar,
  SearchCheck,
} from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Philosophy() {
  return (
    <section className="bg-background">
      <div className="container-site section-padding-lg">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Compliance Should Be Continuously Understood."
              description="TruckEase combines AI-powered technology with regulatory expertise to help trucking companies operate with confidence."
            />
            <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
              We believe compliance should be continuously understood, not
              periodically discovered. That&apos;s why we help businesses
              identify issues earlier, stay organized, and make more informed
              operational decisions.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-muted/60 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Reactive compliance
                  </p>
                  <p className="mt-3 text-sm text-foreground/80">
                    Issues discovered at renewal, at a checkpoint, or after a
                    load is turned away.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <FileWarning className="size-4 text-muted-foreground" />
                    Found late
                  </div>
                </div>
                <div className="rounded-xl border border-accent/30 bg-accent/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                    Continuously monitored
                  </p>
                  <p className="mt-3 text-sm text-foreground/90">
                    Requirements tracked continuously, with gaps surfaced before
                    they turn into deadlines.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-accent-foreground">
                    <Radar className="size-4" />
                    Caught early
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3 rounded-xl border border-dashed border-border py-3 text-xs font-medium text-muted-foreground">
                Reactive
                <ArrowRight className="size-4 text-accent" />
                Continuously understood
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const problems = [
  {
    icon: AlarmClockOff,
    title: 'Missed renewals',
    body: 'Registrations and licensing that lapse quietly, until the moment they interrupt a load.',
  },
  {
    icon: ClipboardList,
    title: 'Incomplete documentation',
    body: 'Records scattered across inboxes and folders, hard to assemble when they are needed most.',
  },
  {
    icon: SearchCheck,
    title: 'Late discovery of issues',
    body: 'Compliance gaps found after the fact, rather than while there is still time to act.',
  },
]

export function Problem() {
  return (
    <section className="bg-muted/40">
      <div className="container-site section-padding-lg">
        <Reveal>
          <SectionHeading
            eyebrow="The problem"
            title="Compliance Should Never Be an Afterthought."
            description="Every trucking business depends on compliance to keep operations moving. Missed renewals, incomplete records, or overlooked regulatory requirements don't just create paperwork. They interrupt operations, right when you can least afford it."
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
            TruckEase was built to change when you find out. Not after a load
            gets turned away. Not at renewal. Before a missed requirement becomes
            an operational problem.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 100}>
              <Card className="card-site h-full">
                <span className="icon-container">
                  <problem.icon className="size-5 text-accent" />
                </span>
                <h3 className="mt-5 text-card-title text-foreground">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {problem.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Radar,
    title: 'Compliance Tracking',
    body: 'Renewals, licensing, and registrations tracked continuously, including IRP, IFTA, USDOT, MC, NSC, CVOR/SFC, UCR, and state or provincial requirements. Gaps get flagged before they become deadlines you\u2019re racing.',
  },
  {
    icon: Boxes,
    title: 'Document Organization',
    body: 'Compliance records are securely organized and retained within the platform. When documentation is required for renewals, audits, or operational needs, the system helps assemble relevant records while maintaining appropriate access controls and activity tracking.',
  },
  {
    icon: BrainCircuit,
    title: 'Operational Insights',
    body: 'An always-on layer that connects what\u2019s happening across your operation and surfaces patterns that are difficult to identify through manual tracking alone.',
  },
  {
    icon: ClipboardList,
    title: 'Decision Support',
    body: 'Your compliance data is evaluated against a growing framework of regulatory checks and operational rules, built on real compliance expertise, to provide practical guidance for what to do next. Not just another report to review.',
  },
]

export function HowWeHelp() {
  return (
    <section className="bg-background">
      <div className="container-site section-padding-lg">
        <Reveal>
          <SectionHeading
            eyebrow="How TruckEase helps"
            title="Everything working together, continuously."
            description="A platform designed so nothing important slips through manual tracking, from renewals to the next recommended action."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 2) * 100}>
              <Card className="card-site h-full sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="icon-container">
                    <feature.icon className="size-5 text-accent" />
                  </span>
                  <div>
                    <h3 className="text-card-title text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
