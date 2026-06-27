import { HeroSection } from '@/components/sections/home/HeroSection'
import { ManifestoStrip } from '@/components/sections/home/ManifestoStrip'
import { EventsPreview } from '@/components/sections/home/EventsPreview'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Centre Culturel Ubuntu — Espace de création et de valorisation du patrimoine musical africain à Yaoundé.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoStrip />
      <EventsPreview />
    </>
  )
}
