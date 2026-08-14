// components/page-hero.tsx

import React from "react"

interface PageHeroProps {
  title: string
  description?: string
  eyebrow?: string
  breadcrumb?: string
  variant?: "light" | "dark"
  align?: "left" | "center"
}

export function PageHero({
  title,
  description,
  eyebrow,
  breadcrumb,
  variant = "light",
  align = "center",
}: PageHeroProps) {
  const isCentered = align === "center"

  return (
    <section className="border-b border-border bg-background py-16 sm:py-20">
      <div
        className={`mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col ${
          isCentered ? "items-center text-center" : "items-start text-left"
        }`}
      >
        {breadcrumb && (
          <p className="mb-4 text-xs text-muted-foreground">
            Home <span className="mx-1">&gt;</span>{" "}
            <span className="font-medium text-foreground">{breadcrumb}</span>
          </p>
        )}

        {eyebrow && (
          <div className="mb-3 inline-flex items-center text-xs font-bold uppercase tracking-wider text-accent">
            <span className="mr-2 h-0.5 w-4 bg-accent" />
            {eyebrow}
          </div>
        )}

        <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl lg:text-5xl tracking-tight text-balance">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
