import type { Metadata } from 'next'
import { ContactClient } from '@/components/sections/ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactez le Centre Culturel Ubuntu — 1044 Route de Ngousso, Yaoundé, Cameroun. Tél : +237 697 259 864.',
}

export default function ContactPage() {
  return <ContactClient />
}
