export interface Stat {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Années d\'existence' },
  { value: 200, suffix: '+', label: 'Événements organisés' },
  { value: 50, suffix: '+', label: 'Artistes accueillis' },
  { value: 7, suffix: '', label: 'Partenaires institutionnels' },
]
