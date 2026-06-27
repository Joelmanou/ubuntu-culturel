'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons'

const photos = [
  { src: 'https://images.unsplash.com/photo-1501386761578-eee6ad27eb2c?w=800&q=80', alt: 'Concert live au Centre Culturel Ubuntu' },
  { src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', alt: 'Festival de balafons' },
  { src: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80', alt: 'Studio d\'enregistrement Sound Art' },
  { src: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80', alt: 'Orchestre de Ruben Binam' },
  { src: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80', alt: 'Séance de coaching musical' },
  { src: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80', alt: 'Piano au Centre Ubuntu' },
  { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', alt: 'Scène du Centre Culturel Ubuntu' },
  { src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', alt: 'Artiste en concert' },
  { src: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80', alt: 'Galerie artistique' },
]

const tracks = [
  { title: 'Ubuntu Sessions Vol. 1', artist: 'Ruben Binam', duration: '4:32' },
  { title: 'Kemit 7 Collective — Live', artist: 'Kemit 7', duration: '6:15' },
  { title: 'Balafon Dreams', artist: 'Centre Culturel Ubuntu', duration: '3:48' },
  { title: 'Afro Jazz Night', artist: 'Orchestre de Ruben Binam', duration: '7:20' },
]

export function GalerieClient() {
  const [tab, setTab] = useState<'photos' | 'musique'>('photos')
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="pt-20">
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">Médiathèque</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white mb-8">Galerie</h1>
          <div className="flex gap-4">
            {(['photos', 'musique'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-6 py-2 rounded-sm font-sans font-semibold text-sm capitalize transition-all ${tab === t ? 'bg-primary text-white' : 'border border-white/20 text-white/60 hover:border-primary hover:text-primary'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {tab === 'photos' && (
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                onClick={() => setSelected(i)} className="relative overflow-hidden rounded-lg cursor-pointer group break-inside-avoid">
                <Image src={photo.src} alt={photo.alt} width={800} height={600} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {tab === 'musique' && (
        <section className="py-24 bg-bg">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-dark rounded-lg overflow-hidden">
              <div className="p-8 border-b border-white/10">
                <h2 className="font-sans font-bold text-white text-2xl mb-1">Ubuntu Playlist</h2>
                <p className="font-body text-white/50 text-sm">Centre Culturel Ubuntu · Yaoundé</p>
              </div>
              {tracks.map((track, i) => (
                <div key={i} className="flex items-center gap-4 px-8 py-4 border-b border-white/5 hover:bg-white/5 cursor-pointer group transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center text-white/30 group-hover:text-primary transition-colors">
                    <Play size={16} />
                  </div>
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-white text-sm">{track.title}</p>
                    <p className="font-body text-white/40 text-xs">{track.artist}</p>
                  </div>
                  <span className="font-body text-white/30 text-xs">{track.duration}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-body text-text-muted mb-6">Retrouvez tout notre contenu sur :</p>
              <div className="flex justify-center gap-6">
                {[
                  { href: 'https://www.youtube.com/@centreculturelubuntu', Icon: YoutubeIcon, label: 'YouTube' },
                  { href: 'https://www.facebook.com/CCUbuntu', Icon: FacebookIcon, label: 'Facebook' },
                  { href: 'https://www.instagram.com/ccu_yaounde', Icon: InstagramIcon, label: 'Instagram' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors font-body text-sm">
                    <Icon size={20} />{label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <AnimatePresence>
        {selected !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}>
            <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors" aria-label="Fermer la galerie">
              <X size={32} />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()} className="relative max-w-4xl max-h-[80vh] w-full">
              <Image src={photos[selected].src} alt={photos[selected].alt} width={1200} height={900} className="w-full h-full object-contain rounded-lg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
