'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'

const proofItems = [
  {
    title: 'Continuous Monitoring',
    text: 'Stay informed, always',
  },
  {
    title: 'Organized Records',
    text: 'Everything in one place',
  },
  {
    title: 'Operational Visibility',
    text: 'See what matters',
  },
  {
    title: 'Regulatory Expertise',
    text: 'Built for US & Canada',
  },
  {
    title: 'Practical Human Support',
    text: 'Real people, real help',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fdfcf9]">
      {/* Very subtle atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-10%] top-[-15%] h-[620px] w-[620px] rounded-full bg-[#e9edf5] opacity-45 blur-[120px]" />
        <div className="absolute left-[-15%] bottom-[-20%] h-[420px] w-[420px] rounded-full bg-[#f3e8df] opacity-35 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10 xl:px-12">
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-[680px]">
          {/* -------------------------------------------------
              DUSK TRUCK IMAGE

              The image is intentionally positioned to the
              right so the truck never sits behind the copy.
          -------------------------------------------------- */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[67%] lg:block"
          >
            {/* Atmospheric fade around the image */}
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#fdfcf9] via-[#fdfcf9]/25 to-transparent" />

            <div className="absolute inset-y-0 right-0 w-[78%] overflow-hidden rounded-bl-[54px]">
              <Image
                src="/hero-truck-neutral.jpg"
                alt=""
                fill
                priority
                sizes="(min-width: 1280px) 70vw, 80vw"
                className="object-cover object-[68%_center]"
              />

              {/* Dusk colour treatment */}
              <div className="absolute inset-0 bg-[#172243]/15 mix-blend-multiply" />

              {/* Bottom fade into the page */}
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#fdfcf9]/55 via-transparent to-transparent" />

              {/* Left fade keeps text completely clean */}
              <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#fdfcf9] to-transparent" />
            </div>
          </div>

          {/* -------------------------------------------------
              MOBILE IMAGE

              On smaller screens the image moves below the
              primary copy instead of competing with it.
          -------------------------------------------------- */}
          <div className="relative mt-6 h-[250px] overflow-hidden rounded-[28px] lg:hidden">
            <Image
              src="/hero-truck-neutral.jpg"
              alt="Commercial truck travelling on a highway at dusk"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#172243]/15 mix-blend-multiply" />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#172243]/45 to-transparent" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-[#0c1a36]/80 px-3 py-2 text-white backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-[#e8720c]" />

              <span className="text-[11px] font-medium">
                Compliance built around operations.
              </span>
            </div>
          </div>

          {/* -------------------------------------------------
              HERO COPY

              This stays completely independent of the image.
          -------------------------------------------------- */}
          <div className="relative z-20 flex max-w-[650px] flex-col justify-center pb-10 pt-12 sm:pt-16 lg:min-h-[680px] lg:pb-20 lg:pt-20">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#dce2eb] bg-white/85 px-3.5 py-2 shadow-[0_4px_18px_rgba(20,32,59,0.05)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#e8720c]" />

              <span className="text-[10px] font-semibold tracking-[0.04em] text-[#304365] sm:text-[11px]">
                Operational intelligence platform for the United States and
                Canada
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-[620px] text-[52px] font-bold leading-[0.91] tracking-[-0.055em] text-[#16203d] sm:text-[64px] lg:text-[76px] xl:text-[82px]">
              Compliance
              <br />
              Built for
              <br />
              <span className="text-[#ef5608]">Operational</span>
              <br />
              <span className="text-[#ef5608]">Confidence.</span>
            </h1>

            {/* Supporting statement */}
            <p className="mt-8 max-w-[560px] text-[16px] font-semibold leading-7 tracking-[-0.01em] text-[#18233f] sm:text-[17px]">
              Compliance isn't the goal. Operational confidence is.
            </p>

            <p className="mt-3 max-w-[570px] text-[15px] leading-7 text-[#536581] sm:text-[16px] sm:leading-7">
              A compliance platform that combines regulatory expertise with
              AI-powered technology to help trucking companies across the
              United States and Canada understand their compliance position,
              stay ahead of regulatory requirements, and operate with greater
              confidence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/risk-screening"
                className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-[12px] bg-[#ef5608] px-6 text-[14px] font-semibold text-white shadow-[0_10px_26px_rgba(239,86,8,0.18)] transition-all hover:-translate-y-[1px] hover:bg-[#d94d05] hover:shadow-[0_12px_30px_rgba(239,86,8,0.24)]"
              >
                Request a Risk Screening

                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </Link>

              <Link
                href="/platform"
                className="inline-flex h-[52px] items-center justify-center rounded-[12px] border border-[#ccd5e3] bg-white/85 px-6 text-[14px] font-semibold text-[#16203d] shadow-[0_4px_14px_rgba(20,32,59,0.04)] backdrop-blur-sm transition-all hover:-translate-y-[1px] hover:border-[#b8c4d5] hover:bg-white"
              >
                Explore the Platform
              </Link>
            </div>

            {/* Small supporting line */}
            <div className="mt-7 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-[#cbd4df]"
              />

              <span className="text-[11px] leading-5 text-[#64748b]">
                Built for trucking operations across the United States and
                Canada
              </span>
            </div>
          </div>

          {/* -------------------------------------------------
              DESKTOP IMAGE LABEL

              Deliberately placed outside the copy.
          -------------------------------------------------- */}
          <div className="absolute bottom-[105px] right-[8%] z-30 hidden max-w-[245px] rounded-[16px] border border-white/20 bg-[#14203b]/90 px-4 py-3 text-white shadow-[0_12px_35px_rgba(12,26,54,0.18)] backdrop-blur-md lg:block">
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-white/50">
              TruckEase Solutions
            </p>

            <p className="mt-1 text-[12px] font-semibold leading-5">
              Compliance built around operations.
            </p>
          </div>

          {/* Shield badge */}
          <div className="absolute bottom-[68px] right-[31%] z-40 hidden h-[70px] w-[70px] items-center justify-center rounded-[20px] border border-[#e2e7ee] bg-white shadow-[0_14px_35px_rgba(12,26,54,0.14)] lg:flex">
            <ShieldCheck
              className="h-7 w-7 text-[#ef5608]"
              strokeWidth={1.7}
            />
          </div>
        </div>

        {/* -------------------------------------------------
            PROOF STRIP

            Kept compact so it doesn't become another
            oversized section.
        -------------------------------------------------- */}
        <div className="relative z-30 -mt-1 mb-10 overflow-hidden rounded-[20px] border border-[#dbe2ec] bg-white/95 shadow-[0_12px_35px_rgba(20,32,59,0.07)] backdrop-blur-xl lg:-mt-5 lg:mb-14">
          <div className="grid grid-cols-1 divide-y divide-[#e7ebf0] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {proofItems.map((item, index) => (
              <div
                key={item.title}
                className={[
                  'flex min-h-[72px] items-center gap-3 px-4 py-3.5 sm:px-5',
                  index === proofItems.length - 1
                    ? ''
                    : 'lg:border-r lg:border-[#e7ebf0]',
                ].join(' ')}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eef3ff] text-[#405be0]">
                  {index === 0 && (
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.7} />
                  )}

                  {index === 1 && (
                    <span className="text-[13px] font-semibold">▧</span>
                  )}

                  {index === 2 && (
                    <span className="text-[13px] font-semibold">◉</span>
                  )}

                  {index === 3 && (
                    <ShieldCheck className="h-4 w-4" strokeWidth={1.7} />
                  )}

                  {index === 4 && (
                    <span className="text-[13px] font-semibold">◌</span>
                  )}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-[11px] font-semibold text-[#18233f]">
                    {item.title}
                  </p>

                  <p className="mt-0.5 truncate text-[10px] leading-4 text-[#7a879b]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
