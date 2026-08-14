import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]',
            tone === 'light' ? 'text-accent' : 'text-foreground/70',
          )}
        >
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl',
          tone === 'light' ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
            tone === 'light' ? 'text-navy-muted' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
