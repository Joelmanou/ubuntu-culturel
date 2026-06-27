'use client'
import { useState } from 'react'
import { news } from '@/lib/data/news'
import { NewsCard } from '@/components/sections/NewsCard'
import type { NewsArticle } from '@/lib/data/news'

const CATS: { value: NewsArticle['category'] | 'all'; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'culture', label: 'Culture' },
  { value: 'evenement', label: 'Événements' },
  { value: 'annonce', label: 'Annonces' },
]

export function ActualitesClient() {
  const [cat, setCat] = useState<NewsArticle['category'] | 'all'>('all')
  const filtered = cat === 'all' ? news : news.filter(a => a.category === cat)

  return (
    <div className="pt-20">
      <section className="bg-dark py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-body uppercase text-xs tracking-[0.3em] text-primary mb-3">Blog</p>
          <h1 className="font-display italic font-bold text-5xl md:text-7xl text-white mb-8">Actualités</h1>
          <div className="flex flex-wrap gap-3">
            {CATS.map(c => (
              <button key={c.value} onClick={() => setCat(c.value)}
                className={`px-5 py-2 rounded-sm font-sans font-semibold text-sm transition-all ${cat === c.value ? 'bg-primary text-white' : 'border border-white/20 text-white/60 hover:border-primary hover:text-primary'}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a, i) => <NewsCard key={a.id} article={a} index={i} />)}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-text-muted py-20 font-body">Aucun article dans cette catégorie.</p>
          )}
        </div>
      </section>
    </div>
  )
}
