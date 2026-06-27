'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Shield, Star } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { programs } from '@/lib/data/programs'

const values = [
  { icon: Heart, title: 'Partage', desc: 'Un espace ouvert à tous, artistes et grand public, pour échanger et créer ensemble.' },
  { icon: Shield, title: 'Patrimoine', desc: 'Préservation et transmission du patrimoine musical et culturel africain aux générations futures.' },
  { icon: Star, title: 'Excellence', desc: 'Accompagner les artistes vers la meilleure version de leur art, sans compromis sur la qualité.' },
]

export function AProposClient() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=80"
          alt="Centre Culturel Ubuntu — scène musicale"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">À propos</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white">Notre Histoire</h1>
        </div>
      </section>

      {/* Narration */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-4">Le fondateur</p>
            <h2 className="font-sans font-bold text-4xl text-text-primary mb-6">Ruben Binam</h2>
            <p className="font-body text-text-muted text-lg leading-relaxed mb-6">
              Pianiste et chef d&apos;orchestre, Ruben Binam a parcouru le monde en accompagnant des artistes reconnus. Confronté aux obstacles humains et administratifs du milieu artistique africain, il a choisi de créer son propre environnement de travail.
            </p>
            <p className="font-body text-text-muted text-lg leading-relaxed mb-8">
              En s&apos;isolant plusieurs mois, il a progressivement développé plusieurs structures : Sound Art Studio, le Label Alizés Équateur, Music Coaching, et l&apos;Orchestre de Ruben Binam. Le Centre Culturel Ubuntu est la synthèse de cette vision.
            </p>
            <blockquote className="border-l-4 border-primary pl-6">
              <p className="font-display italic text-2xl text-text-primary">
                &ldquo; Et si je créais moi-même mon environnement de travail ? &rdquo;
              </p>
            </blockquote>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative aspect-square rounded-lg overflow-hidden">
            <Image src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80" alt="Ruben Binam au piano" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { title: 'Mission', text: 'Un espace pour la valorisation et la préservation du patrimoine artistique et musical africain, ouvert à tous les artistes, promoteurs et au grand public.' },
            { title: 'Vision', text: 'Faire du Centre Culturel Ubuntu une référence incontournable de la vie culturelle en Afrique centrale, et un pont entre les cultures africaines et le monde.' },
          ].map(({ title, text }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <h3 className="font-display italic font-bold text-4xl text-primary mb-4">{title}</h3>
              <p className="font-body text-white/70 text-lg leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Nos Valeurs" subtitle="Les principes qui guident chacune de nos actions" align="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-surface rounded-lg p-8 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-sans font-bold text-xl text-text-primary mb-3">{title}</h3>
                <p className="font-body text-text-muted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Structures */}
      <section className="py-24 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title="Nos Structures" subtitle="Cinq entités complémentaires au service de l'art" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {programs.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <span className="font-display italic text-3xl text-primary/40 font-bold">{String(p.id).padStart(2,'0')}</span>
                <h3 className="font-sans font-bold text-lg text-text-primary mt-2 mb-1">{p.title}</h3>
                <p className="font-body text-text-muted text-sm">{p.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-sans font-bold text-3xl text-white">Envie d&apos;en savoir plus ?</h2>
          <div className="flex gap-4 flex-wrap">
            <Button href="/programmes" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Nos programmes</Button>
            <Button href="/contact" className="bg-dark text-white hover:bg-dark-surface">Nous contacter</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
