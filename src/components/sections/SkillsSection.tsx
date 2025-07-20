// src/components/sections/SkillsSection.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import subtle 3D elements
const FloatingCodeIcon = dynamic(() => import('../canvas/FloatingCodeIcon'), {
  ssr: false,
  loading: () => <div className="w-12 h-12" />
})

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [150, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-400 to-cyan-400",
      borderColor: "border-blue-400/20",
      bgColor: "bg-blue-400/5",
      skills: [
        { name: "React", level: 90, color: "#61dafb" },
        { name: "Next.js", level: 85, color: "#000000" },
        { name: "TypeScript", level: 80, color: "#3178c6" },
        { name: "Tailwind CSS", level: 95, color: "#06b6d4" },
        { name: "JavaScript", level: 90, color: "#f7df1e" }
      ]
    },
    {
      title: "Backend",
      color: "from-green-400 to-emerald-400",
      borderColor: "border-green-400/20",
      bgColor: "bg-green-400/5",
      skills: [
        { name: "Node.js", level: 85, color: "#68a063" },
        { name: "PHP", level: 90, color: "#787cb5" },
        { name: "Laravel", level: 85, color: "#ff2d20" },
        { name: "Express", level: 80, color: "#000000" },
        { name: "REST APIs", level: 90, color: "#10b981" }
      ]
    },
    {
      title: "Database & Cloud",
      color: "from-purple-400 to-pink-400",
      borderColor: "border-purple-400/20",
      bgColor: "bg-purple-400/5",
      skills: [
        { name: "MongoDB", level: 85, color: "#47a248" },
        { name: "MySQL", level: 90, color: "#4479a1" },
        { name: "PostgreSQL", level: 75, color: "#336791" },
        { name: "Firebase", level: 80, color: "#ffca28" },
        { name: "DigitalOcean", level: 70, color: "#0080ff" }
      ]
    }
  ]

  return (
    <section id="skills" ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:200px_200px]" />
      </div>

      {/* Floating 3D Elements - carefully positioned */}
      <div className="absolute top-32 left-12 opacity-20">
        <FloatingCodeIcon icon="database" />
      </div>
      <div className="absolute top-64 right-20 opacity-25">
        <FloatingCodeIcon icon="api" />
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-20">
        <FloatingCodeIcon icon="code" />
      </div>

      <motion.div 
        className="relative z-10 container mx-auto px-6"
        style={{ y, opacity }}
      >
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Technologies I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Love Working With
            </span>
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-400 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Constantly learning and adapting to new technologies while mastering the fundamentals
          </motion.p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`p-8 rounded-2xl border ${category.borderColor} ${category.bgColor} backdrop-blur-sm`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-8`}>
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed">
            My expertise spans the full development stack, from crafting pixel-perfect user interfaces 
            to architecting scalable backend systems. I'm always eager to learn new technologies and 
            stay current with industry best practices.
          </p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
          >
            {['Git', 'Docker', 'AWS', 'Jest', 'Redux', 'Webpack'].map((tool, index) => (
              <motion.span
                key={tool}
                className="px-4 py-2 rounded-lg bg-slate-800/30 border border-slate-700/30 text-slate-300 text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}