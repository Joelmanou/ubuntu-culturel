'use client'
import { useState } from 'react'
import { events } from '@/lib/data/events'
import { EventCard } from '@/components/sections/EventCard'
import { SectionHeader } from '@/components/ui/SectionHeader'
import type { Event } from '@/lib/data/events'

const FILTER_OPTIONS: { value: Event['type'] | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'concert', label: 'Concerts' },
  { value: 'festival', label: 'Festivals' },
  { value: 'conference', label: 'Conférences' },
  { value: 'presentation', label: 'Présentations' },
  { value: 'live', label: 'Live' },
]

export function EvenementsClient() {
  const [filter, setFilter] = useState<Event['type'] | 'all'>('all')

  const upcoming = events.filter(e => !e.past && (filter === 'all' || e.type === filter))
  const past = events.filter(e => e.past && (filter === 'all' || e.type === filter))

  return (
    <div className="pt-20">
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">Programme</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white mb-10">Événements</h1>
          <div className="flex flex-wrap gap-3">
            {FILTER_OPTIONS.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value)}
                className={`px-5 py-2 rounded-sm font-sans font-semibold text-sm transition-all ${filter === opt.value ? 'bg-primary text-white' : 'border border-white/20 text-white/60 hover:border-primary hover:text-primary'}`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {upcoming.length > 0 && (
        <section className="py-24 bg-bg">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="À venir" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
            </div>
          </div>
        </section>
      )}

      {past.length > 0 && (
        <section className="py-24 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader title="Événements passés" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {past.map((e, i) => <EventCard key={e.id} event={e} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
