'use client'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { partners } from '@/lib/data/partners'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'

export function PartenairesClient() {
  const institutionnels = partners.filter(p => p.type === 'institutionnel')
  const culturels = partners.filter(p => p.type === 'culturel')

  return (
    <div className="pt-20">
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">Réseau</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white">Partenaires</h1>
        </div>
      </section>

      {[
        { title: 'Partenaires institutionnels', list: institutionnels },
        { title: 'Partenaires culturels', list: culturels },
      ].map(({ title, list }) => (
        <section key={title} className="py-20 bg-bg border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title={title} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {list.map((partner, i) => (
                <motion.a key={partner.id} href={partner.url} target="_blank" rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-surface rounded-lg p-8 border border-border hover:border-primary transition-all group flex flex-col gap-4">
                  <div className="h-16 bg-border/30 rounded flex items-center justify-center">
                    <span className="font-sans font-bold text-xs text-text-muted text-center px-4 group-hover:text-primary transition-colors">{partner.name}</span>
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">{partner.name}</h3>
                    <p className="font-body text-text-muted text-xs uppercase tracking-wider">{partner.type}</p>
                  </div>
                  <ExternalLink size={16} className="text-text-muted group-hover:text-primary transition-colors mt-auto" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-sans font-bold text-3xl text-white mb-4">Devenez partenaire</h2>
          <p className="font-body text-white/80 mb-8 max-w-xl mx-auto">
            Rejoignez notre réseau et soutenez la valorisation de la culture africaine à Yaoundé et au-delà.
          </p>
          <Button href="/contact" className="bg-dark text-white hover:bg-dark-surface">Nous contacter</Button>
        </div>
      </section>
    </div>
  )
}
