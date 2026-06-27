'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons'

export function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-24 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white mb-4">
          Restez connectés à la culture ubuntu
        </h2>
        <p className="font-body text-white/80 mb-8">
          Recevez nos actualités et événements directement dans votre boîte mail.
        </p>

        {submitted ? (
          <p className="font-sans font-semibold text-white bg-white/20 rounded-sm py-4 px-8 inline-block">
            Merci ! Vous êtes désormais abonné(e).
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input
              type="email"
              required
              placeholder="Votre adresse email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-sm font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Adresse email pour la newsletter"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-dark text-white px-6 py-3 rounded-sm font-sans font-semibold hover:bg-dark-surface transition-colors"
            >
              <Send size={16} />
              S&apos;abonner
            </button>
          </form>
        )}

        <div className="flex justify-center gap-6">
          <a href="https://www.youtube.com/@centreculturelubuntu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/80 hover:text-white transition-colors">
            <YoutubeIcon size={24} />
          </a>
          <a href="https://www.facebook.com/CCUbuntu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
            <FacebookIcon size={24} />
          </a>
          <a href="https://www.instagram.com/ccu_yaounde" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
            <InstagramIcon size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}
