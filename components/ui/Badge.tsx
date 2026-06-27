import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'event' | 'news' | 'program'
  className?: string
}

const variants = {
  event: 'bg-[#F0E8DC] text-[#8B4E15]',
  news: 'bg-[#E8EAF0] text-[#2A3C75]',
  program: 'bg-[#F0EAD6] text-[#6B5A15]',
}

export function Badge({ children, variant = 'event', className }: BadgeProps) {
  return (
    <span className={cn('inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm', variants[variant], className)}>
      {children}
    </span>
  )
}
