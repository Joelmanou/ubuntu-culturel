import type { Metadata } from 'next'
import { ActualitesClient } from '@/components/sections/ActualitesClient'

export const metadata: Metadata = {
  title: 'Actualités',
  description: 'Actualités culturelles, événements et annonces du Centre Culturel Ubuntu de Yaoundé.',
}

export default function ActualitesPage() {
  return <ActualitesClient />
}
