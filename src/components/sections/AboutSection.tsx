// src/components/sections/AboutSection.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Zap, Users, Target } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import subtle 3D elements
const FloatingCodeIcon = dynamic(() => import('../canvas/FloatingCodeIcon'), {
  ssr: false,
  loading: () => <div className="w-16 h-16" />
})

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

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

  return (
    <section id="about" ref={sectionRef} className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:150px_150px]" />
      </div>

      {/* Floating 3D Elements - positioned to not overlap content */}
      <div className="absolute top-20 right-10 opacity-30">
        <FloatingCodeIcon icon="react" />
      </div>
      <div className="absolute bottom-32 left-16 opacity-25">
        <FloatingCodeIcon icon="node" />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6"
        style={{ y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main content */}
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

            <motion.div 
              className="space-y-6 text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg">
                I'm a passionate full-stack developer with <span className="text-cyan-400 font-semibold">2+ years</span> of 
                experience building modern web applications. My journey in tech is driven by curiosity and 
                a constant desire to learn and innovate.
              </p>
              
              <p>
                Specializing in <span className="text-purple-400 font-semibold">React ecosystem</span> and 
                <span className="text-green-400 font-semibold"> Node.js</span>, I create scalable solutions 
                that bridge the gap between beautiful design and robust functionality. From responsive frontend 
                interfaces to efficient backend architectures, I handle the complete development lifecycle.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community. I believe in writing clean, maintainable 
                code that stands the test of time.
              </p>
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((trait, index) => (
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
          </motion.div>

          {/* Right side - Highlights grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-3">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-purple-400" />
                  </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    </div>
                  <div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-slate-800/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Years Experience', value: '2+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Happy Clients', value: '10+' }
          ].map((stat, index) => (
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
      </motion.div>
    </section>
  )
}