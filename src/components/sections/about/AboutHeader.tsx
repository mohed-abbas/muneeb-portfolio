// src/components/sections/about/AboutHeader.tsx
'use client'
import { motion } from 'framer-motion'

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <motion.span 
        className="inline-block px-4 py-2 rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-400 text-sm font-medium mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.span>

      <motion.h2 
        className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Crafting Digital
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Experiences
        </span>
      </motion.h2>
    </motion.div>
  )
}