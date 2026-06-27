'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeader({ title, subtitle, align = 'left', light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12', align === 'center' && 'text-center')}
    >
      <h2 className={cn('font-sans font-bold text-4xl md:text-5xl leading-tight', light ? 'text-white' : 'text-text-primary')}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg', light ? 'text-white/70' : 'text-text-muted')}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
