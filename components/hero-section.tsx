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

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-600">
          <span className="h-2 w-2 rounded-full bg-cyan-600" />
          Operational intelligence platform for the United States and Canada
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Main Text Content */}
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
              Compliance Built for{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Operational Confidence
              </span>
            </h1>

            <p className="mt-4 text-lg font-semibold text-slate-800">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              A compliance platform that combines regulatory expertise with AI-powered
              technology to help trucking companies across the United States and Canada
              understand their compliance position, stay ahead of regulatory requirements,
              and operate with greater confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow-sm">
                <Link href="/risk-screening">
                  Request a Risk Screening &rarr;
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>
          </div>

          {/* Semi-Truck Visual Container with Subtle Depth Effect */}
          <div className="relative lg:col-span-6 flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 via-slate-100 to-transparent rounded-3xl -rotate-1 scale-95 -z-10" />
            
            <div className="relative w-full max-w-xl transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/hero-truck.png"
                alt="TruckEase Commercial Fleet Tractor and Trailer"
                width={800}
                height={500}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.12)]"
              />
            </div>
          </div>

        </div>

        {/* Bottom Feature Badges */}
        <div className="mt-16 border-t border-slate-100 pt-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Continuous Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Organized Records</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Operational Visibility</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Regulatory Expertise</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4 text-cyan-600 shrink-0" />
              <span>Practical Human Support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
