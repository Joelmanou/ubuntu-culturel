'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react'
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons'
import { Button } from '@/components/ui/Button'

type FormState = { nom: string; prenom: string; email: string; telephone: string; objet: string; message: string }
const EMPTY: FormState = { nom: '', prenom: '', email: '', telephone: '', objet: '', message: '' }

export function ContactClient() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setForm(EMPTY)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const inputClass = "w-full px-4 py-3 border border-border rounded-sm font-body text-text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"

  return (
    <div className="pt-20">
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">Écrivez-nous</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white">Contact</h1>
        </div>
      </section>

      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Infos */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-sans font-bold text-3xl text-text-primary mb-8">Nous trouver</h2>
            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <MapPin size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-1">Adresse</p>
                  <p className="font-body text-text-muted">1044 Route de Ngousso<br />Yaoundé, Cameroun</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-1">Téléphone</p>
                  <a href="tel:+237697259864" className="font-body text-text-muted hover:text-primary transition-colors">+237 697 259 864</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="font-sans font-semibold text-text-primary mb-1">Email</p>
                  <a href="mailto:contact@centreculturelubuntu.org" className="font-body text-text-muted hover:text-primary transition-colors">contact@centreculturelubuntu.org</a>
                </div>
              </li>
            </ul>

            <p className="font-sans font-semibold text-text-primary mb-4">Réseaux sociaux</p>
            <div className="flex gap-4 mb-10">
              {[
                { href: 'https://www.youtube.com/@centreculturelubuntu', Icon: YoutubeIcon, label: 'YouTube' },
                { href: 'https://www.facebook.com/CCUbuntu', Icon: FacebookIcon, label: 'Facebook' },
                { href: 'https://www.instagram.com/ccu_yaounde', Icon: InstagramIcon, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-primary hover:text-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <div className="h-64 rounded-lg overflow-hidden bg-border/30">
              <iframe
                src="https://maps.google.com/maps?q=1044+Route+de+Ngousso,+Yaounde,+Cameroon&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Centre Culturel Ubuntu"
              />
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="font-sans font-bold text-3xl text-text-primary mb-8">Envoyez un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="font-sans font-semibold text-sm text-text-primary mb-2 block">Nom *</label>
                  <input id="nom" required value={form.nom} onChange={set('nom')} className={inputClass} />
                </div>
                <div>
                  <label htmlFor="prenom" className="font-sans font-semibold text-sm text-text-primary mb-2 block">Prénom *</label>
                  <input id="prenom" required value={form.prenom} onChange={set('prenom')} className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="font-sans font-semibold text-sm text-text-primary mb-2 block">Email *</label>
                <input id="email" type="email" required value={form.email} onChange={set('email')} className={inputClass} />
              </div>
              <div>
                <label htmlFor="telephone" className="font-sans font-semibold text-sm text-text-primary mb-2 block">Téléphone</label>
                <input id="telephone" type="tel" value={form.telephone} onChange={set('telephone')} className={inputClass} />
              </div>
              <div>
                <label htmlFor="objet" className="font-sans font-semibold text-sm text-text-primary mb-2 block">Objet *</label>
                <input id="objet" required value={form.objet} onChange={set('objet')} className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="font-sans font-semibold text-sm text-text-primary mb-2 block">Message *</label>
                <textarea id="message" required rows={5} value={form.message} onChange={set('message')} className={`${inputClass} resize-none`} />
              </div>
              <Button type="submit" size="lg" className="w-full justify-center">Envoyer le message</Button>
            </form>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {submitted && (
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            className="fixed bottom-8 right-8 z-50 bg-dark text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3">
            <CheckCircle size={20} className="text-primary" />
            <span className="font-sans font-semibold">Message envoyé avec succès !</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
