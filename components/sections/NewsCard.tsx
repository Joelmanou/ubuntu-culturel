'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import type { NewsArticle } from '@/lib/data/news'

const categoryLabels: Record<NewsArticle['category'], string> = {
  culture: 'Culture',
  evenement: 'Événement',
  annonce: 'Annonce',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function NewsCard({ article, index = 0 }: { article: NewsArticle; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-video w-full">
        <Image src={article.image} alt={article.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="news">{categoryLabels[article.category]}</Badge>
          <span className="font-body text-xs text-text-muted">{formatDate(article.date)}</span>
        </div>
        <h3 className="font-sans font-bold text-text-primary text-lg leading-tight mb-2">{article.title}</h3>
        <p className="font-body text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
        <a href="#" className="font-sans font-semibold text-primary text-sm hover:text-primary-dark transition-colors">
          Lire →
        </a>
      </div>
    </motion.article>
  )
}
