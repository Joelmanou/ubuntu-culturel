import type { Metadata } from 'next'
import { PartenairesClient } from '@/components/sections/PartenairesClient'

export const metadata: Metadata = {
  title: 'Partenaires',
  description: 'Les partenaires institutionnels et culturels du Centre Culturel Ubuntu — Institut Français, Goethe Institut, US Embassy et plus.',
}

export default function PartenairesPage() {
  return <PartenairesClient />
}
