import { programs } from '@/lib/data/programs'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ProgramPanel } from '@/components/sections/ProgramPanel'

export function ProgramsGrid() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader title="Nos Programmes" subtitle="Cinq axes d'excellence au service de la culture africaine" light />
          <Button href="/programmes" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-dark">
            Voir tout →
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.slice(0, 3).map((p, i) => <ProgramPanel key={p.id} program={p} index={i} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {programs.slice(3).map((p, i) => <ProgramPanel key={p.id} program={p} index={i + 3} />)}
        </div>
      </div>
    </section>
  )
}
