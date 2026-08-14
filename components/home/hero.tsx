import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ShieldCheck, 
  FileCheck2, 
  Eye, 
  Award, 
  Headphones 
} from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background section-padding-md">
      <div className="container-site">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-1 text-eyebrow text-muted-foreground">
          <span className="size-2 rounded-full bg-accent" />
          Operational intelligence platform for the United States and Canada
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-6">
            <h1 className="text-display text-foreground">
              Compliance Built for{' '}
              <span className="text-primary">Operational Confidence</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-foreground">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              A compliance platform that combines regulatory expertise with AI-powered
              technology to help trucking companies across the United States and Canada
              understand their compliance position, stay ahead of regulatory requirements,
              and operate with greater confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="cta" size="lg">
                <Link href="/risk-screening">Request a Risk Screening →</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </div>

          {/* Semi-Truck Visual Container */}
          <div className="relative lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-xl">
              <Image
                src="/hero-truck.png"
                alt="TruckEase Commercial Fleet Tractor and Trailer"
                width={800}
                height={500}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-accent shrink-0" />
              <span>Continuous Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="size-4 text-accent shrink-0" />
              <span>Organized Records</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="size-4 text-accent shrink-0" />
              <span>Operational Visibility</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="size-4 text-accent shrink-0" />
              <span>Regulatory Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="size-4 text-accent shrink-0" />
              <span>Practical Human Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
