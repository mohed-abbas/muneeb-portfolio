// src/components/sections/about/StatsSection.tsx
'use client'
import { motion } from 'framer-motion'

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Happy Clients', value: '10+' }
]

export default function StatsSection() {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      viewport={{ once: true }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
            {stat.value}
          </div>
          <div className="text-slate-400 text-sm font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}