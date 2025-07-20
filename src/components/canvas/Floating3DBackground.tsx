// src/components/canvas/Floating3DBackground.tsx
'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const FloatingCodeIcon = dynamic(() => import('./FloatingCodeIcon'), {
  ssr: false,
  loading: () => <div className="w-24 h-24 opacity-30 bg-slate-800 rounded-lg animate-pulse" />
})

interface Floating3DBackgroundProps {
  density?: 'low' | 'medium' | 'high'
  opacity?: number
}

export default function Floating3DBackground({ 
  density = 'medium', 
  opacity = 0.6 
}: Floating3DBackgroundProps) {
  const elements = {
    low: [
      { icon: 'react', position: 'top-20 right-20', delay: 0 },
      { icon: 'node', position: 'bottom-32 left-16', delay: 0.5 }
    ],
    medium: [
      { icon: 'react', position: 'top-20 right-20', delay: 0 },
      { icon: 'node', position: 'bottom-32 left-16', delay: 0.5 },
      { icon: 'database', position: 'top-64 left-12', delay: 1 },
      { icon: 'api', position: 'bottom-20 right-32', delay: 1.5 }
    ],
    high: [
      { icon: 'react', position: 'top-20 right-20', delay: 0 },
      { icon: 'node', position: 'bottom-32 left-16', delay: 0.5 },
      { icon: 'database', position: 'top-64 left-12', delay: 1 },
      { icon: 'api', position: 'bottom-20 right-32', delay: 1.5 },
      { icon: 'code', position: 'top-96 right-64', delay: 2 },
      { icon: 'cube', position: 'bottom-64 left-64', delay: 2.5 }
    ]
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements[density].map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.position} z-0`}
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: opacity, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 2, 
            delay: element.delay,
            ease: "easeOut"
          }}
          style={{
            filter: 'blur(0.5px)',
          }}
        >
          <FloatingCodeIcon 
            icon={element.icon as any} 
            size={1.2} 
            opacity={opacity}
          />
        </motion.div>
      ))}
    </div>
  )
}