import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display italic font-bold text-[200px] text-primary/20 leading-none select-none">404</p>
        <h1 className="font-sans font-bold text-4xl text-white mb-4 -mt-8">Page introuvable</h1>
        <p className="font-body text-white/60 mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
        <Button href="/">Retour à l&apos;accueil</Button>
      </div>
    </div>
  )
}
