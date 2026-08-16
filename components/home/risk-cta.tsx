'use client'

import Link from 'next/link'

const screeningSteps = [
  'Review requested',
  'Public information reviewed',
  'Potential areas for attention',
  'Next steps discussed',
]

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 9.2L7.7 12L13.2 6.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5H13.5M9.5 4.5L13.5 8.5L9.5 12.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RiskCta() {
  return (
    <section
      id="risk-screening"
      className="risk-cta"
      aria-labelledby="risk-cta-title"
    >
      <div className="risk-cta__inner">
        {/* Left side */}
        <div className="risk-cta__content">
          <div className="risk-cta__eyebrow">
            <span className="risk-cta__eyebrow-line" />
            <span>RISK SCREENING</span>
          </div>

          <h2 id="risk-cta-title" className="risk-cta__title">
            Understand Your Compliance
            <br />
            Position Before Small Issues
            <br />
            Become Bigger Problems.
          </h2>

          <p className="risk-cta__description">
            Our Risk Screening reviews publicly available regulatory
            information to identify potential compliance signals that may
            deserve attention. The review is designed to give you greater
            visibility into your current position and highlight where a
            closer look might be worthwhile.
          </p>

          <p className="risk-cta__statement">
            No obligation. Just a real answer to where you stand.
          </p>

          <Link
            href="/risk-screening"
            className="risk-cta__button"
          >
            <span>Request Your Risk Screening</span>
            <ArrowIcon />
          </Link>
        </div>

        {/* Right side */}
        <div className="risk-cta__panel">
          <div className="risk-cta__panel-title">
            HOW A SCREENING WORKS
          </div>

          <div className="risk-cta__steps">
            {screeningSteps.map((step) => (
              <div className="risk-cta__step" key={step}>
                <span className="risk-cta__check">
                  <CheckIcon />
                </span>

                <span className="risk-cta__step-text">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <div className="risk-cta__divider" />

          <p className="risk-cta__disclaimer">
            A screening reviews available information only. It is not a
            guarantee of compliance or an official government rating.
          </p>
        </div>
      </div>
    </section>
  )
}
