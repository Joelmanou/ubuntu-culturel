'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/programmes', label: 'Programmes' },
  { href: '/evenements', label: 'Événements' },
  { href: '/actualites', label: 'Actualités' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/partenaires', label: 'Partenaires' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-dark-surface/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
            <span className="font-sans font-bold text-white text-lg tracking-tight">
              Centre Culturel Ubuntu
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  pathname === href ? 'text-primary' : 'text-white/80 hover:text-white'
                )}
              >
                {label}
                <span className={cn(
                  'absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200',
                  pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                )} />
              </Link>
            ))}
            <Button href="/contact" size="sm">Nous rejoindre</Button>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-dark-surface flex flex-col pt-24 px-8 gap-6 lg:hidden"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-lg font-medium border-b border-white/10 pb-4',
                  pathname === href ? 'text-primary' : 'text-white/80'
                )}
              >
                {label}
              </Link>
            ))}
            <Button href="/contact" className="mt-4">Nous rejoindre</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
