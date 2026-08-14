import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'dark' | 'light'
}

export function Logo({ className, variant = 'dark' }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <Link
      href="/"
      className={cn('inline-flex items-center shrink-0', className)}
      aria-label="TruckEase Solutions home"
    >
      <Image
        src="/logo.png"
        alt="TruckEase Solutions"
        width={240}
        height={64}
        priority
        className={cn(
          // Increased from h-9 to h-11/h-12 and added scale to fill header area cleanly
          'h-11 sm:h-12 w-auto object-contain transition-all scale-105 origin-left',
          // Converts dark navy text/graphic to crisp white for dark backgrounds
          isLight && 'brightness-0 invert'
        )}
      />
    </Link>
  )
}
