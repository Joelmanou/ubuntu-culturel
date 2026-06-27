'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
}

const base = 'inline-flex items-center gap-2 font-sans font-semibold transition-all duration-200 ease-out rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary underline-offset-4 hover:underline',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({ variant = 'primary', size = 'md', href, onClick, children, className, type = 'button' }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)
  if (href) return <Link href={href} className={classes}>{children}</Link>
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}
