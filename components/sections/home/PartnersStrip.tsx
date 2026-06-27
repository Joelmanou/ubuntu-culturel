'use client'
import { motion } from 'framer-motion'
import { partners } from '@/lib/data/partners'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function PartnersStrip() {
  return (
    <section className="py-20 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader title="Ils nous font confiance" align="center" />
        <div className="flex flex-wrap justify-center items-center gap-10">
          {partners.map((partner, i) => (
            <motion.a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center gap-2"
              aria-label={partner.name}
            >
              <div className="px-4 py-3 border border-border rounded grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary">
                <span className="font-sans font-semibold text-xs text-text-muted group-hover:text-primary transition-colors text-center block max-w-[120px]">
                  {partner.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
