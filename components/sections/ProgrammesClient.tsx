'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { programs } from '@/lib/data/programs'
import { Button } from '@/components/ui/Button'

export function ProgrammesClient() {
  return (
    <div className="pt-20">
      <section className="relative h-72 flex items-end bg-dark">
        <Image src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80" alt="Programmes Ubuntu" fill className="object-cover opacity-40" priority />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">Ce que nous faisons</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white">Nos Programmes</h1>
        </div>
      </section>

      {programs.map((program, i) => (
        <section key={program.id} className={`py-24 ${i % 2 === 0 ? 'bg-bg' : 'bg-surface'}`}>
          <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image src={program.image} alt={program.title} fill className="object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="font-display italic text-6xl text-primary/30 font-bold leading-none">{String(program.id).padStart(2,'0')}</span>
              <h2 className="font-sans font-bold text-4xl text-text-primary mt-2 mb-2">{program.title}</h2>
              <p className="font-body text-primary font-semibold text-sm uppercase tracking-wider mb-4">{program.subtitle}</p>
              <p className="font-body text-text-muted text-lg leading-relaxed mb-8">{program.description}</p>
              <Button href="/contact">Réserver une session →</Button>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
