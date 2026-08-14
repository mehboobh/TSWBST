import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'

export function CtaBand() {
  return (
    <section className="border-t border-border bg-muted/40 section-padding-md">
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-eyebrow text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Get started
          </span>
          <h2 className="mt-4 text-balance text-section-title">
            Build Compliance With Confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Whether you&apos;re looking for greater visibility into your
            compliance position or a more organized way to manage ongoing
            regulatory requirements, TruckEase is ready to help. Let&apos;s build
            a stronger compliance foundation for your business.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="cta" size="lg">
              <Link href="/risk-screening">Request a Risk Screening →</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
