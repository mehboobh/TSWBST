import { PageHero } from "@/components/page-hero"

export type LegalSection = {
  heading: string
  paragraphs: string[]
}

export function LegalPage({
  title,
  breadcrumb,
  updated,
  intro,
  sections,
}: {
  title: string
  breadcrumb: string
  updated: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow={`Last updated ${updated}`} title={title} description={intro} breadcrumb={breadcrumb} />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-accent/30 bg-accent/8 px-5 py-4 text-sm leading-relaxed text-foreground">
            This is placeholder legal copy for demonstration purposes. Replace it with language reviewed by your own
            legal counsel before publishing.
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <div key={section.heading}>
                <h2 className="flex items-baseline gap-3 text-xl font-semibold text-foreground">
                  <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
