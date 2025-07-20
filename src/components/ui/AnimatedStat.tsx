// src/components/ui/AnimatedStat.tsx
'use client'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedStatProps {
  value: string
  label: string
  delay?: number
}

export default function AnimatedStat({ value, label, delay = 0 }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  
  // Extract number from value for animation
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const displayValue = useTransform(springValue, (latest) => {
    return value.replace(/\d+/, Math.round(latest).toString())
  })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(numericValue)
      }, delay * 1000)
    }
  }, [isInView, numericValue, delay, motionValue])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
        {displayValue}
      </motion.div>
      <div className="text-slate-400 text-sm font-medium">
        {label}
      </div>
    </motion.div>
  )
}