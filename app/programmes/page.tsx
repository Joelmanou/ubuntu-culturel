import type { Metadata } from 'next'
import { ProgrammesClient } from '@/components/sections/ProgrammesClient'

export const metadata: Metadata = {
  title: 'Programmes',
  description: 'Sound Art Studio, Label Alizés Équateur, Music Coaching, Orchestre et Galerie Artistique — les 5 programmes du Centre Culturel Ubuntu.',
}

export default function ProgrammesPage() {
  return <ProgrammesClient />
}
