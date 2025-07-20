// src/components/sections/about/HighlightsGrid.tsx
'use client'
import { motion } from 'framer-motion'
import { Code2, Zap, Users, Target } from 'lucide-react'
import HighlightCard from './HighlightCard'

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices and modern standards."
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, efficiency, and exceptional user experience."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams, communicating ideas, and mentoring developers."
  },
  {
    icon: Target,
    title: "Problem Solving",
    description: "Analyzing complex challenges and delivering innovative, practical solutions."
  }
]

export default function HighlightsGrid() {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {highlights.map((item, index) => (
        <HighlightCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </motion.div>
  )
}