import { news } from '@/lib/data/news'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { NewsCard } from '@/components/sections/NewsCard'

export function NewsPreview() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <SectionHeader title="Actualités" subtitle="Restez informés de la vie culturelle ubuntu" />
          <Button href="/actualites" variant="ghost">Toutes les actus →</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.slice(0, 3).map((article, i) => <NewsCard key={article.id} article={article} index={i} />)}
        </div>
      </div>
    </section>
  )
}
