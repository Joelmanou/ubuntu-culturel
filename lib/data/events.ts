export interface Event {
  id: string
  title: string
  date: string
  time: string
  type: 'concert' | 'festival' | 'conference' | 'presentation' | 'live'
  image: string
  description: string
  past: boolean
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Jazz Evening Spécial',
    date: '2026-07-29',
    time: '20:00',
    type: 'concert',
    image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80',
    description: 'Une soirée jazz exceptionnelle au cœur du Centre Culturel Ubuntu.',
    past: false,
  },
  {
    id: '2',
    title: 'Festival de Balafons',
    date: '2026-08-13',
    time: '18:00',
    type: 'festival',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    description: 'Célébration du balafon, instrument emblématique de l\'Afrique centrale.',
    past: false,
  },
  {
    id: '3',
    title: 'Live Music Corner — Ruben Binam',
    date: '2026-08-26',
    time: '21:00',
    type: 'live',
    image: 'https://images.unsplash.com/photo-1501386761578-eee6ad27eb2c?w=800&q=80',
    description: 'Performance live du fondateur du centre, Ruben Binam au piano.',
    past: false,
  },
  {
    id: '4',
    title: 'Concert Gospel',
    date: '2024-04-21',
    time: '19:00',
    type: 'concert',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    description: 'Une soirée gospel mémorable avec des artistes locaux.',
    past: true,
  },
  {
    id: '5',
    title: 'Jessy Elsa Palma en Concert',
    date: '2024-04-13',
    time: '20:30',
    type: 'concert',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    description: 'Performance de l\'artiste Jessy Elsa Palma au Centre Ubuntu.',
    past: true,
  },
  {
    id: '6',
    title: 'Conférence Culturelle',
    date: '2024-04-14',
    time: '15:00',
    type: 'conference',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description: 'Rencontre autour des enjeux de la culture en Afrique centrale.',
    past: true,
  },
  {
    id: '7',
    title: 'Musique sous l\'Arbre',
    date: '2024-04-23',
    time: '17:00',
    type: 'presentation',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80',
    description: 'Présentation d\'album en plein air dans l\'espace vert du centre.',
    past: true,
  },
  {
    id: '8',
    title: 'Henri Dikongué — Spectacle',
    date: '2024-03-16',
    time: '20:00',
    type: 'concert',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    description: 'Spectacle exceptionnel d\'Henri Dikongué, légende de la musique camerounaise.',
    past: true,
  },
]
