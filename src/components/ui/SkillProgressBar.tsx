// src/components/ui/SkillProgressBar.tsx
'use client'
import { motion } from 'framer-motion'

interface SkillProgressBarProps {
  name: string
  level: number
  color: string
  delay?: number
}

export default function SkillProgressBar({ name, level, color, delay = 0 }: SkillProgressBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-slate-400 text-sm">{level}%</span>
      </div>
      
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full relative overflow-hidden"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay + 0.3,
            ease: "easeOut"
          }}
          viewport={{ once: true }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: delay + 1,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}