import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { YoutubeIcon, FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons'

export function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-sans font-bold text-white text-lg">Centre Culturel Ubuntu</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Espace de valorisation et de préservation du patrimoine artistique et musical africain à Yaoundé, Cameroun.
          </p>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/@centreculturelubuntu" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-primary transition-colors"><YoutubeIcon size={20} /></a>
            <a href="https://www.facebook.com/CCUbuntu" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors"><FacebookIcon size={20} /></a>
            <a href="https://www.instagram.com/ccu_yaounde" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors"><InstagramIcon size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-sans font-bold text-white mb-4 uppercase text-xs tracking-widest">Liens rapides</h3>
          <ul className="space-y-2 text-sm">
            {[['/', 'Accueil'], ['/evenements', 'Événements'], ['/programmes', 'Programmes'], ['/galerie', 'Galerie'], ['/actualites', 'Actualités'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-primary transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans font-bold text-white mb-4 uppercase text-xs tracking-widest">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={16} className="text-primary mt-0.5 shrink-0" /><span>1044 Route de Ngousso, Yaoundé, Cameroun</span></li>
            <li className="flex gap-3"><Phone size={16} className="text-primary shrink-0" /><a href="tel:+237697259864" className="hover:text-primary transition-colors">+237 697 259 864</a></li>
            <li className="flex gap-3"><Mail size={16} className="text-primary shrink-0" /><a href="mailto:contact@centreculturelubuntu.org" className="hover:text-primary transition-colors">contact@centreculturelubuntu.org</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Centre Culturel Ubuntu · Tous droits réservés</p>
          <p>Yaoundé, Cameroun</p>
        </div>
      </div>
    </footer>
  )
}
