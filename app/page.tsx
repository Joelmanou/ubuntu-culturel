import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/home/HeroSection'
import { ManifestoStrip } from '@/components/sections/home/ManifestoStrip'
import { EventsPreview } from '@/components/sections/home/EventsPreview'
import { ProgramsGrid } from '@/components/sections/home/ProgramsGrid'
import { AboutSnapshot } from '@/components/sections/home/AboutSnapshot'
import { StatsSection } from '@/components/sections/home/StatsSection'
import { NewsPreview } from '@/components/sections/home/NewsPreview'
import { PartnersStrip } from '@/components/sections/home/PartnersStrip'
import { NewsletterCTA } from '@/components/sections/home/NewsletterCTA'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Centre Culturel Ubuntu — Espace de création et de valorisation du patrimoine musical africain à Yaoundé, Cameroun.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoStrip />
      <EventsPreview />
      <ProgramsGrid />
      <AboutSnapshot />
      <StatsSection />
      <NewsPreview />
      <PartnersStrip />
      <NewsletterCTA />
    </>
  )
}
