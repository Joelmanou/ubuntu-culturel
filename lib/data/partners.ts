export interface Partner {
  id: string
  name: string
  logo: string
  url: string
  type: 'institutionnel' | 'culturel'
}

export const partners: Partner[] = [
  {
    id: 'ifc',
    name: 'Institut Français Cameroun',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://www.facebook.com/IFCameroun',
    type: 'institutionnel',
  },
  {
    id: 'goethe',
    name: 'Goethe Institut Kamerun',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://www.facebook.com/GoetheInstitutKamerun',
    type: 'institutionnel',
  },
  {
    id: 'cerdotola',
    name: 'CERDOTOLA',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://www.cerdotola.org',
    type: 'culturel',
  },
  {
    id: 'usembassy',
    name: 'Ambassade des États-Unis au Cameroun',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://cm.usembassy.gov',
    type: 'institutionnel',
  },
  {
    id: 'ccm',
    name: 'Conseil Camerounais de la Musique',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://www.facebook.com/ConseilCamerounaisMusique',
    type: 'culturel',
  },
  {
    id: 'ccn',
    name: 'Cameroonian Cultural Network',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://www.facebook.com/CameroonianCulturalNetwork',
    type: 'culturel',
  },
  {
    id: 'stwop',
    name: 'STWOP',
    logo: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=200&q=80',
    url: 'https://www.stwop.com',
    type: 'culturel',
  },
]
