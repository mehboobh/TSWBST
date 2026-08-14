'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Comp = as

  return (
    <Comp
      ref={ref as never}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Comp>
  )
}
