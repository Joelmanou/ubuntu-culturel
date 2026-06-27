import { events } from '@/lib/data/events'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { EventCard } from '@/components/sections/EventCard'

export function EventsPreview() {
  const upcoming = events.filter(e => !e.past).slice(0, 3)

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader title="Événements à venir" subtitle="Ne manquez pas nos prochaines manifestations culturelles" />
          <Button href="/evenements" variant="ghost">Voir tous →</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcoming.map((event, i) => <EventCard key={event.id} event={event} index={i} />)}
        </div>
      </div>
    </section>
  )
}
