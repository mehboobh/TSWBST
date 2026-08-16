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
    body: 'A person to help when a system alone isn’t enough.',
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
