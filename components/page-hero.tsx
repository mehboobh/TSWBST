import React from 'react'
import { cn } from '@/lib/utils'

interface PageHeroProps {
  title: React.ReactNode
  description?: React.ReactNode
  eyebrow?: string
  breadcrumb?: string
  variant?: 'light' | 'dark'
  align?: 'left' | 'center'
  children?: React.ReactNode
}

export function PageHero({
  title,
  description,
  eyebrow,
  breadcrumb,
  variant = 'light',
  align = 'center',
  children,
}: PageHeroProps) {
  const isCentered = align === 'center'

  return (
    <section
      className={cn(
        'border-b border-border section-padding-md',
        variant === 'dark' ? 'bg-navy text-navy-foreground' : 'bg-muted/40',
      )}
    >
      <div
        className={cn(
          'container-site flex flex-col',
          isCentered ? 'items-center text-center' : 'items-start text-left',
        )}
      >
        {breadcrumb && (
          <p className="mb-4 text-xs text-muted-foreground">
            Home <span className="mx-1">&gt;</span>{' '}
            <span className="font-medium text-foreground">{breadcrumb}</span>
          </p>
        )}

        {eyebrow && (
          <span className="mb-4 inline-flex items-center gap-2 text-eyebrow text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {eyebrow}
          </span>
        )}

        <h1 className="text-display text-balance text-foreground">{title}</h1>

        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}

        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  )
}
