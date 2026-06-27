'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function AboutSnapshot() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] rounded-lg overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80"
            alt="Ruben Binam, fondateur du Centre Culturel Ubuntu"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-4">Notre Histoire</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-6">
            Un pianiste,<br />un rêve, un centre.
          </h2>
          <p className="font-body text-text-muted text-lg leading-relaxed mb-6">
            Ruben Binam, pianiste et chef d&apos;orchestre, a parcouru le monde avant de décider de créer son propre environnement artistique. De cette vision est né le Centre Culturel Ubuntu — un espace unique à Yaoundé dédié à la valorisation du patrimoine musical africain.
          </p>
          <blockquote className="border-l-4 border-primary pl-6 mb-8">
            <p className="font-display italic text-2xl text-text-primary">
              &ldquo; Et si je créais moi-même mon environnement de travail ? &rdquo;
            </p>
            <footer className="font-body text-sm text-text-muted mt-2">— Ruben Binam, fondateur</footer>
          </blockquote>
          <Button href="/a-propos">Notre histoire complète →</Button>
        </motion.div>
      </div>
    </section>
  )
}
