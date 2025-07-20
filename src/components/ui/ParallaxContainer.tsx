// src/components/ui/ParallaxContainer.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ParallaxContainerProps {
  children: ReactNode
  speed?: number
  className?: string
  offset?: [string, string]
}

export default function ParallaxContainer({ 
  children, 
  speed = 0.5, 
  className = '',
  offset = ["start end", "end start"]
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  })

  const y = useTransform(scrollYProgress, [0, 1], [300 * speed, -300 * speed])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}