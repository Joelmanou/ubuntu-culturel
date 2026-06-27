'use client'
import { motion } from 'framer-motion'

export function ManifestoStrip() {
  return (
    <section className="bg-primary py-20 px-6">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="font-display italic font-bold text-4xl md:text-5xl text-white leading-snug">
          &ldquo; Un lieu de rencontres, de partage et de vie pour les artistes et le grand public. &rdquo;
        </p>
        <footer className="mt-6 font-body text-white/70 text-sm uppercase tracking-widest">
          Mission du Centre Culturel Ubuntu
        </footer>
      </motion.blockquote>
    </section>
  )
}
