// src/components/sections/HeroSection.tsx
'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import 3D component to avoid SSR issues
const HeroCanvas = dynamic(() => import('../canvas/HeroCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin" />
        <div className="absolute inset-0 w-16 h-16 border-2 border-transparent border-r-purple-400 rounded-full animate-spin" 
             style={{ animationDelay: '0.1s', animationDirection: 'reverse' }} />
      </div>
    </div>
  )
})

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 overflow-hidden opacity-80">
        <HeroCanvas />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* Simplified main heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block text-white mb-2">Hey, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Muneeb
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-slate-300 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* Concise description */}
          <motion.p 
            className="text-lg md:text-xl text-slate-400 max-w mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            I craft{' '}
            <span className="text-cyan-400 font-medium">scalable web applications</span>{' '}
            using modern technologies.{' '}
            <span className="text-purple-400 font-medium">2+ years</span>{' '}
            of turning ideas into reality.
          </motion.p>

          {/* Streamlined action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              className="group px-8 py-4 rounded-2xl border-2 border-slate-600 text-white font-semibold text-lg hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm bg-slate-800/10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-3">
                <Download size={20} className="group-hover:translate-y-1 transition-transform duration-200" />
                Resume
              </span>
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:mmunibrehman@gmail.com", label: "Email" }
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="p-4 rounded-xl border border-slate-700/50 bg-slate-800/10 backdrop-blur-sm text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <Icon size={22} />
                <span className="sr-only">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Simplified tech stack */}
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <p className="text-slate-500 text-xs font-medium mb-4 uppercase tracking-wider">
              Technologies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'PHP', 'MongoDB'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-lg border border-slate-700/30 bg-slate-800/10 backdrop-blur-sm text-slate-300 text-sm hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center text-slate-500 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 border border-slate-600 rounded-full flex justify-center group-hover:border-cyan-400/50 transition-colors">
            <motion.div
              className="w-0.5 h-2 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}