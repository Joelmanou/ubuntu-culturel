'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Program } from '@/lib/data/programs'

export function ProgramPanel({ program, index }: { program: Program; index: number }) {
  const num = String(program.id).padStart(2, '0')
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer"
    >
      <div className="relative aspect-video w-full">
        <Image src={program.image} alt={program.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
      </div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span className="font-display italic font-bold text-6xl text-primary/40 group-hover:text-primary/60 transition-colors leading-none mb-2">
          {num}
        </span>
        <h3 className="font-sans font-bold text-white text-xl leading-tight">{program.title}</h3>
        <p className="font-body text-white/70 text-sm mt-1">{program.subtitle}</p>
      </div>
    </motion.div>
  )
}
