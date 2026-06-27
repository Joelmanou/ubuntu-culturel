'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1501386761578-eee6ad27eb2c?w=1920&q=85"
        alt="Concert au Centre Culturel Ubuntu"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-6"
        >
          Yaoundé, Cameroun
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display italic font-bold text-6xl md:text-8xl lg:text-[110px] leading-none mb-8 max-w-4xl"
        >
          L&apos;art comme<br />patrimoine vivant.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-body text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
        >
          Espace de création, de rencontre et de valorisation du patrimoine musical africain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4"
        >
          <Button href="/a-propos" size="lg">Découvrir</Button>
          <Button href="/evenements" variant="outline" size="lg">Voir les événements</Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs tracking-widest uppercase">Défiler</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
