// src/components/sections/about/PersonalTraits.tsx
'use client'
import { motion } from 'framer-motion'

const traits = ['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented']

export default function PersonalTraits() {
  return (
    <motion.div 
      className="mt-8 flex flex-wrap gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      {traits.map((trait, index) => (
        <motion.span
          key={trait}
          className="px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          {trait}
        </motion.span>
      ))}
    </motion.div>
  )
}