import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  FileCheck2,
  Headphones,
  ShieldCheck,
  Eye,
} from 'lucide-react'

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

/*
 * Keep your existing truck photograph.
 *
 * If your current public image has a different filename, change ONLY this
 * value. For example:
 *
 * const HERO_IMAGE = '/truck-hero.jpg'
 *
 * Do not change the layout below just to change the image path.
 */
const HERO_IMAGE = '/hero-truck-neutral.jpg'

/* -------------------------------------------------------------------------- */
/* Hero feature strip                                                         */
/* -------------------------------------------------------------------------- */

const heroFeatures = [
  {
    icon: ShieldCheck,
    title: 'Continuous Monitoring',
    description: 'Stay informed, always',
  },
  {
    icon: FileCheck2,
    title: 'Organized Records',
    description: 'Everything in one place',
  },
  {
    icon: Eye,
    title: 'Operational Visibility',
    description: 'See what matters',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory Expertise',
    description: 'Built for US & Canada',
  },
  {
    icon: Headphones,
    title: 'Practical Human Support',
    description: 'Real people, real help',
  },
]

/* -------------------------------------------------------------------------- */
/* Small checkpoint line                                                      */
/* -------------------------------------------------------------------------- */

function CheckpointLine() {
  return (
    <div
      aria-hidden="true"
      className="mt-8 flex items-center gap-3 sm:mt-9"
    >
      <span className="h-px w-8 bg-[#d7deea]" />

      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="absolute h-2 w-2 rounded-full bg-[#e85d04]" />
        <span className="absolute h-2 w-2 animate-ping rounded-full bg-[#e85d04]/40 [animation-duration:3s]" />
      </span>

      <span className="h-px w-8 bg-[#d7deea]" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#718099]">
        Built for trucking operations across the United States and Canada
      </span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Background atmosphere                                               */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Very subtle cool atmosphere behind the text */}
        <div className="absolute left-[-18%] top-[-22%] h-[520px] w-[520px] rounded-full bg-[#e9eef8]/70 blur-3xl" />

        {/* Warm, extremely restrained glow */}
        <div className="absolute left-[32%] top-[15%] h-[360px] w-[360px] rounded-full bg-[#e85d04]/[0.025] blur-3xl" />
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Hero row — image is scoped to THIS box, not the whole section,      */}
      {/* so it ends exactly where the row's content ends (right after the   */}
      {/* CTAs), instead of stretching down behind the feature strip below.  */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative">

      {/* ------------------------------------------------------------------ */}
      {/* HERO IMAGE                                                          */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-0
          hidden
          w-[62%]
          lg:block
          xl:w-[64%]
        "
      >
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            sizes="64vw"
            className="
              object-cover
              object-[62%_center]
            "
          />

          {/* -------------------------------------------------------------- */}
          {/* White fade into the text area                                  */}
          {/* -------------------------------------------------------------- */}

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0.98)_7%,rgba(255,255,255,0.88)_15%,rgba(255,255,255,0.62)_25%,rgba(255,255,255,0.28)_36%,rgba(255,255,255,0)_49%)]
            "
          />

          {/* -------------------------------------------------------------- */}
          {/* Slight top fade                                                 */}
          {/* -------------------------------------------------------------- */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-24
              bg-gradient-to-b
              from-white/55
              to-transparent
            "
          />

          {/* -------------------------------------------------------------- */}
          {/* Bottom fade — resolves to fully opaque white right at the      */}
          {/* bottom of the row, so nothing lingers behind the feature strip */}
          {/* -------------------------------------------------------------- */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-40
              bg-gradient-to-t
              from-white
              via-white/80
              to-transparent
            "
          />

          {/* -------------------------------------------------------------- */}
          {/* Soft right-side vignette                                       */}
          {/* -------------------------------------------------------------- */}

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[18%]
              bg-gradient-to-l
              from-white/10
              to-transparent
            "
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Main hero content                                                   */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div
          className="
            grid
            min-h-[610px]
            items-center
            lg:grid-cols-[0.92fr_1.08fr]
            xl:min-h-[635px]
          "
        >
          {/* -------------------------------------------------------------- */}
          {/* Left content                                                    */}
          {/* -------------------------------------------------------------- */}

          <div className="relative z-20 max-w-[600px] py-16 sm:py-20 lg:py-20 xl:py-24">
            {/* Eyebrow */}

            <div className="mb-6 flex items-center gap-3 sm:mb-7">
              <span className="h-px w-8 bg-[#e85d04]" />

              <span
                className="
                  rounded-full
                  border
                  border-[#dfe5ef]
                  bg-white/85
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#52627c]
                  shadow-[0_4px_14px_rgba(20,35,66,0.04)]
                  backdrop-blur-sm
                "
              >
                AI-Powered Compliance Platform
              </span>
            </div>

            {/* H1 */}

            <h1
              id="home-hero-title"
              className="
                max-w-[590px]
                text-[48px]
                font-black
                leading-[0.93]
                tracking-[-0.052em]
                text-[#142342]
                sm:text-[58px]
                lg:text-[64px]
                xl:text-[72px]
              "
            >
              Compliance
              <br />
              Built for
              <br />
              <span className="text-[#e85d04]">
                Operational
                <br />
                Confidence.
              </span>
            </h1>

            {/* Thesis */}

            <p
              className="
                mt-6
                text-[13px]
                font-bold
                leading-6
                text-[#142342]
                sm:mt-7
                sm:text-[14px]
              "
            >
              Compliance isn&apos;t the goal. Operational confidence is.
            </p>

            {/* Body */}

            <p
              className="
                mt-3
                max-w-[540px]
                text-[14px]
                leading-7
                text-[#5d6d87]
                sm:text-[15px]
                sm:leading-7
              "
            >
              A compliance platform that combines regulatory expertise with
              AI-powered technology to help trucking companies across the
              United States and Canada understand their compliance position,
              stay ahead of regulatory requirements, and operate with greater
              confidence.
            </p>

            {/* CTAs */}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/risk-screening"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  bg-[#e85d04]
                  px-5
                  text-[13px]
                  font-bold
                  text-white
                  shadow-[0_10px_24px_rgba(232,93,4,0.18)]
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-[#d95200]
                  hover:shadow-[0_14px_30px_rgba(232,93,4,0.22)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#e85d04]/30
                  focus:ring-offset-2
                "
              >
                Request a Risk Screening
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/platform"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-3
                  rounded-xl
                  border
                  border-[#cbd5e4]
                  bg-transparent
                  px-5
                  text-[13px]
                  font-bold
                  text-[#142342]
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#aebbd0]
                  hover:bg-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#142342]/10
                  focus:ring-offset-2
                "
              >
                Explore the Platform
                <ArrowRight className="h-4 w-4 text-[#718099]" />
              </Link>
            </div>

            {/* Checkpoint motif */}

            <CheckpointLine />
          </div>

          {/* -------------------------------------------------------------- */}
          {/* Right image breathing room                                      */}
          {/* -------------------------------------------------------------- */}

          <div
            aria-hidden="true"
            className="hidden lg:block"
          />
        </div>
      </div>

      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Mobile image                                                        */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-10 lg:hidden">
        <div className="relative mx-6 h-[250px] overflow-hidden rounded-[22px] border border-[#dce3ee] sm:mx-8 sm:h-[310px]">
          <Image
            src={HERO_IMAGE}
            alt="Commercial truck operating on a highway at dusk"
            fill
            priority
            sizes="calc(100vw - 3rem)"
            className="object-cover object-[58%_center]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.12),transparent_48%,rgba(20,35,66,0.12))]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#142342]/25 to-transparent"
          />

          <div className="absolute bottom-4 left-4 rounded-xl border border-white/30 bg-[#142342]/80 px-4 py-3 text-white shadow-lg backdrop-blur-md">
            <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/65">
              TruckEase Solutions
            </p>
            <p className="mt-1 text-[12px] font-semibold">
              Compliance built around operations.
            </p>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Feature strip                                                       */}
      {/* ------------------------------------------------------------------ */}

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-5 sm:px-8 lg:px-10 lg:pb-6">
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#d9e1ed]
            bg-white/95
            shadow-[0_16px_40px_rgba(20,35,66,0.08)]
            backdrop-blur-md
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {heroFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className={`
                    flex
                    min-h-[68px]
                    items-center
                    gap-3
                    px-4
                    py-3
                    sm:px-5
                    ${
                      index !== heroFeatures.length - 1
                        ? 'border-b border-[#e6ebf2] lg:border-b-0 lg:border-r'
                        : ''
                    }
                    ${
                      index === 1
                        ? 'sm:border-r sm:border-[#e6ebf2] lg:border-r'
                        : ''
                    }
                    ${
                      index === 3
                        ? 'sm:border-r-0 lg:border-r'
                        : ''
                    }
                  `}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#4353a4]">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate text-[10px] font-bold text-[#263653]">
                      {feature.title}
                    </span>

                    <span className="mt-0.5 block truncate text-[9px] text-[#77859b]">
                      {feature.description}
                    </span>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Bottom transition                                                   */}
      {/* ------------------------------------------------------------------ */}

      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-[#dbe2ed] to-transparent"
      />
    </section>
  )
}
