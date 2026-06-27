export interface Program {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  slug: string
}

export const programs: Program[] = [
  {
    id: 1,
    title: 'Sound Art Studio',
    subtitle: 'Production & Enregistrement',
    description: 'Un studio professionnel dédié à la production musicale et à l\'enregistrement d\'artistes africains. Équipé des dernières technologies, il offre un environnement créatif optimal.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    slug: 'sound-art-studio',
  },
  {
    id: 2,
    title: 'Label Alizés Équateur',
    subtitle: 'Discographie Indépendante',
    description: 'Un label discographique indépendant qui accompagne les artistes africains dans la production, la distribution et la promotion de leurs œuvres musicales.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    slug: 'label-alizes-equateur',
  },
  {
    id: 3,
    title: 'Music Coaching',
    subtitle: 'Développement Artistique',
    description: 'Un programme de coaching musical personnalisé pour les artistes en développement. Technique, scène, composition — un accompagnement complet pour révéler votre potentiel.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
    slug: 'music-coaching',
  },
  {
    id: 4,
    title: 'Orchestre de Ruben Binam',
    subtitle: 'Performances Live',
    description: 'L\'Orchestre de Ruben Binam réunit des musiciens talentueux pour des performances live exceptionnelles, mêlant jazz, musiques africaines et compositions originales.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
    slug: 'orchestre-ruben-binam',
  },
  {
    id: 5,
    title: 'Galerie Artistique',
    subtitle: 'Expositions & Créations',
    description: 'Un espace d\'exposition dédié aux arts visuels africains. La galerie accueille des artistes émergents et confirmés pour des expositions temporaires et permanentes.',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
    slug: 'galerie-artistique',
  },
]
