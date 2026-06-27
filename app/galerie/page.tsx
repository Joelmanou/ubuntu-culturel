import type { Metadata } from 'next'
import { GalerieClient } from '@/components/sections/GalerieClient'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Photos et musique du Centre Culturel Ubuntu — concerts, événements et enregistrements à Yaoundé.',
}

export default function GaleriePage() {
  return <GalerieClient />
}
