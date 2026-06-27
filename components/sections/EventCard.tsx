'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import type { Event } from '@/lib/data/events'

const typeLabels: Record<Event['type'], string> = {
  concert: 'Concert',
  festival: 'Festival',
  conference: 'Conférence',
  presentation: 'Présentation',
  live: 'Live',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export function EventCard({ event, index = 0 }: { event: Event; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
        <div className="absolute top-3 left-3">
          <Badge variant="event">{typeLabels[event.type]}</Badge>
        </div>
      </div>
      <div className="p-6">
        <p className="font-sans font-bold text-primary text-sm uppercase tracking-wider mb-2">
          {formatDate(event.date)}
        </p>
        <h3 className="font-sans font-bold text-text-primary text-xl mb-3 leading-tight">{event.title}</h3>
        <p className="font-body text-text-muted text-sm mb-4 line-clamp-2">{event.description}</p>
        <div className="flex flex-wrap gap-3 text-xs text-text-muted mb-4">
          <span className="flex items-center gap-1"><Clock size={12} />{event.time}</span>
          <span className="flex items-center gap-1"><MapPin size={12} />Centre Culturel Ubuntu</span>
        </div>
        <Button href="/evenements" variant="outline" size="sm">Info →</Button>
      </div>
    </motion.article>
  )
}
