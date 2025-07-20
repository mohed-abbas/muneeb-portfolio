// src/components/sections/about/HighlightCard.tsx
'use client'
import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface HighlightCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
}

export default function HighlightCard({ icon: Icon, title, description, index }: HighlightCardProps) {
  return (
    <motion.div
      className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}