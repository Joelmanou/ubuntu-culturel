import type { Metadata } from 'next'
import { AProposClient } from '@/components/sections/AProposClient'

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Histoire, mission et valeurs du Centre Culturel Ubuntu fondé par Ruben Binam à Yaoundé, Cameroun.',
}

export default function AProposPage() {
  return <AProposClient />
}
