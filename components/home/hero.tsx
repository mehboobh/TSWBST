import Link from 'next/link'
import {
  ArrowRight,
  Eye,
  FileCheck2,
  Headphones,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

function NeutralTruckIllustration() {
  return (
    <svg
      viewBox="0 0 760 430"
      role="img"
      aria-label="Illustration of a commercial tractor and trailer"
      className="h-auto w-full"
    >
      <defs>
        <linearGradient
          id="truckBody"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dfe5ec" />
        </linearGradient>

        <linearGradient
          id="truckTrailer"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#dce3eb" />
        </linearGradient>

        <filter id="truckShadow" x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="16"
            floodColor="#0c1a36"
            floodOpacity="0.16"
          />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse
        cx="390"
        cy="368"
        rx="305"
        ry="28"
        fill="#0c1a36"
        opacity="0.08"
      />

      <g filter="url(#truckShadow)">
        {/* Trailer */}
        <rect
          x="310"
          y="112"
          width="350"
          height="185"
          rx="8"
          fill="url(#truckTrailer)"
          stroke="#cbd5df"
          strokeWidth="3"
        />

        {/* Trailer top edge */}
        <path
          d="M310 112 H660"
          stroke="#b8c2ce"
          strokeWidth="4"
        />

        {/* Trailer vertical ribs */}
        {[345, 385, 425, 465, 505, 545, 585, 625].map((x) => (
          <path
            key={x}
            d={`M${x} 118 V291`}
            stroke="#d4dbe3"
            strokeWidth="2"
          />
        ))}

        {/* Trailer lower rail */}
        <path
          d="M312 286 H658"
          stroke="#b9c3ce"
          strokeWidth="5"
        />

        {/* Tractor cab */}
        <path
          d="
            M105 296
            V205
            C105 170 126 140 159 127
            L219 104
            C236 98 255 95 274 95
            H304
            C324 95 340 111 340 131
            V296
            Z
          "
          fill="url(#truckBody)"
          stroke="#bcc6d1"
          strokeWidth="3"
        />

        {/* Cab roof */}
        <path
          d="M157 127 L219 104 C236 98 255 95 274 95 H304"
          fill="none"
          stroke="#aeb9c5"
          strokeWidth="4"
        />

        {/* Windshield */}
        <path
          d="
            M174 139
            L218 121
            C232 116 246 114 261 114
            H272
            V174
            H160
            V158
            C160 150 165 144 174 139
          "
          fill="#26384d"
          opacity="0.95"
        />

        {/* Window divider */}
        <path
          d="M218 121 V174"
          stroke="#d9e0e7"
          strokeWidth="4"
        />

        {/* Door */}
        <rect
          x="226"
          y="188"
          width="91"
          height="99"
          rx="5"
          fill="#f7f9fb"
          stroke="#c6ced8"
          strokeWidth="2"
        />

        {/* Door handle */}
        <rect
          x="288"
          y="207"
          width="16"
          height="5"
          rx="2.5"
          fill="#667487"
        />

        {/* Cab lower body */}
        <path
          d="M105 276 H340 V296 H105 Z"
          fill="#e5eaf0"
        />

        {/* Front grille */}
        <path
          d="
            M105 211
            C91 215 80 227 80 243
            V274
            H105
            Z
          "
          fill="#d7dee6"
          stroke="#b9c4cf"
          strokeWidth="2"
        />

        {/* Headlights */}
        <path
          d="M87 231 L103 226 V241 L88 245 Z"
          fill="#f5f8fb"
          stroke="#aeb9c5"
          strokeWidth="2"
        />

        {/* Front bumper */}
        <path
          d="M72 274 H121 L128 291 H78 Z"
          fill="#c5ced8"
        />

        {/* Fuel tank */}
        <rect
          x="300"
          y="286"
          width="85"
          height="28"
          rx="8"
          fill="#bfc9d4"
        />

        {/* Chassis */}
        <rect
          x="116"
          y="297"
          width="543"
          height="18"
          rx="7"
          fill="#7f8c9b"
        />

        {/* Wheels */}
        {[
          [151, 312],
          [278, 312],
          [535, 312],
          [612, 312],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle
              cx={cx}
              cy={cy}
              r="42"
              fill="#172337"
            />
            <circle
              cx={cx}
              cy={cy}
              r="27"
              fill="#d6dce3"
            />
            <circle
              cx={cx}
              cy={cy}
              r="12"
              fill="#8d99a6"
            />
            <circle
              cx={cx}
              cy={cy}
              r="5"
              fill="#eef2f6"
            />
          </g>
        ))}

        {/* Trailer rear */}
        <path
          d="M660 113 V296"
          stroke="#aeb9c5"
          strokeWidth="5"
        />

        {/* Trailer lights */}
        <circle cx="642" cy="282" r="5" fill="#e8720c" />
        <circle cx="650" cy="282" r="5" fill="#e8720c" />

        {/* Neutral compliance marker */}
        <g transform="translate(430 55)">
          <rect
            width="122"
            height="46"
            rx="23"
            fill="#ffffff"
            stroke="#d8e0e8"
            strokeWidth="2"
          />

          <circle
            cx="24"
            cy="23"
            r="13"
            fill="#0c1a36"
          />

          <path
            d="M18 23 L22 27 L30 18"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <text
            x="45"
            y="28"
            fontSize="14"
            fontFamily="Arial, sans-serif"
            fontWeight="600"
            fill="#0c1a36"
          >
            Compliance
          </text>
        </g>
      </g>
    </svg>
  )
}

const trustItems = [
  {
    icon: ShieldCheck,
    label: 'Continuous Monitoring',
  },
  {
    icon: FileCheck2,
    label: 'Operational Records',
  },
  {
    icon: Eye,
    label: 'Operational Visibility',
  },
  {
    icon: ShieldCheck,
    label: 'Regulatory Expertise',
  },
  {
    icon: Headphones,
    label: 'Practical Human Support',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* Very subtle background structure */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-50/80 blur-3xl"
        />

        <div
          className="absolute -left-40 top-[28rem] h-[24rem] w-[24rem] rounded-full bg-orange-50/70 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
        {/* Hero content */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600">
              <Sparkles className="size-3.5 text-orange-600" />
              AI-Powered Compliance Platform
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-[-0.04em] text-[#0c1a36] sm:text-6xl lg:text-[4.65rem] lg:leading-[0.98]">
              Compliance Built for{' '}
              <span className="text-blue-700">
                Operational Confidence.
              </span>
            </h1>

            <p className="mt-6 text-lg font-semibold leading-relaxed text-[#0c1a36]">
              Compliance isn&apos;t the goal. Operational confidence is.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              A compliance platform that combines regulatory expertise with
              AI-powered technology to help trucking companies across the
              United States and Canada understand their compliance position,
              stay ahead of regulatory requirements, and operate with greater
              confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-orange-600 px-6 font-semibold text-white shadow-[0_10px_25px_rgba(232,114,12,0.18)] hover:bg-orange-700"
              >
                <Link href="/risk-screening">
                  Request a Risk Screening
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-slate-300 bg-white px-6 font-semibold text-[#0c1a36] hover:bg-slate-50"
              >
                <Link href="/platform">
                  Explore the Platform
                </Link>
              </Button>
            </div>
          </div>

          {/* Neutral truck visual */}
          <div className="relative">
            <div className="absolute inset-x-10 top-10 h-64 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-blue-50/70 p-5 shadow-[0_30px_80px_rgba(12,26,54,0.10)] sm:p-8">
              <div className="absolute right-6 top-6 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500 shadow-sm">
                Built for trucking compliance
              </div>

              <div className="pt-10">
                <NeutralTruckIllustration />
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-xs font-medium text-slate-500">
                  United States &amp; Canada
                </span>

                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Operational visibility
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 border-y border-slate-200 py-5 lg:mt-16">
          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
            {trustItems.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className={[
                    'flex items-center justify-center gap-2.5 text-xs font-semibold text-slate-600',
                    index > 0 ? 'lg:border-l lg:border-slate-200' : '',
                  ].join(' ')}
                >
                  <Icon className="size-4 text-blue-700" />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
