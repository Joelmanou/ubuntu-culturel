import type { Metadata } from 'next'
import { EvenementsClient } from '@/components/sections/EvenementsClient'

export const metadata: Metadata = {
  title: 'Événements',
  description: 'Concerts, festivals, conférences et événements culturels au Centre Culturel Ubuntu de Yaoundé, Cameroun.',
}

export default function EvenementsPage() {
  return <EvenementsClient />
}
