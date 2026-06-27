export interface NewsArticle {
  id: string
  title: string
  date: string
  category: 'culture' | 'evenement' | 'annonce'
  image: string
  excerpt: string
  slug: string
}

export const news: NewsArticle[] = [
  {
    id: '1',
    title: 'La culture comme priorité présidentielle au Cameroun',
    date: '2025-09-12',
    category: 'culture',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    excerpt: 'Le gouvernement camerounais annonce une nouvelle politique culturelle ambitieuse visant à valoriser le patrimoine artistique national.',
    slug: 'culture-priorite-presidentielle',
  },
  {
    id: '2',
    title: 'Pacte culturel camerounais : un engagement collectif',
    date: '2025-09-08',
    category: 'annonce',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80',
    excerpt: 'Les acteurs culturels camerounais signent un pacte historique pour la promotion et la préservation des arts traditionnels.',
    slug: 'pacte-culturel-camerounais',
  },
  {
    id: '3',
    title: 'Calendrier culturel de Yaoundé — Saison 2025/2026',
    date: '2025-09-01',
    category: 'evenement',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    excerpt: 'Découvrez le programme complet des événements culturels prévus à Yaoundé pour la saison artistique 2025/2026.',
    slug: 'calendrier-culturel-yaounde-2025-2026',
  },
]
