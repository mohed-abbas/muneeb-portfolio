// src/components/sections/about/AboutContent.tsx
'use client'
import { motion } from 'framer-motion'

export default function AboutContent() {
  return (
    <motion.div 
      className="space-y-6 text-slate-300 leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <p className="text-lg">
        {`I'm a passionate full-stack developer with`} <span className="text-cyan-400 font-semibold">2+ years</span> {` of 
        experience building modern web applications. My journey in tech is driven by curiosity and 
        a constant desire to learn and innovate.`}
      </p>
      
      <p>
        Specializing in <span className="text-purple-400 font-semibold">React ecosystem</span> and
        <span className="text-green-400 font-semibold"> Node.js</span>, I create scalable solutions 
        that bridge the gap between beautiful design and robust functionality. From responsive frontend 
        interfaces to efficient backend architectures, I handle the complete development lifecycle.
      </p>

      <p>
        {`When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
        or sharing knowledge with the developer community. I believe in writing clean, maintainable 
        code that stands the test of time.
      `}</p>
    </motion.div>
  )
}