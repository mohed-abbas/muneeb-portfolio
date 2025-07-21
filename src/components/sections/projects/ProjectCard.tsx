// src/components/sections/projects/OptimizedProjectCard.tsx
'use client'
import React, { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { backOut } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import ProjectPreview3D from './ProjectPreview3D'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const statusColors = {
  completed: 'bg-green-500/20 text-green-400 border-green-500/30',
  'in-progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  planned: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
} as const

const categoryColors = {
  web: 'from-purple-500 to-pink-500',
  mobile: 'from-green-500 to-teal-500',
  desktop: 'from-blue-500 to-cyan-500',
  plugin: 'from-orange-500 to-red-500',
  other: 'from-gray-500 to-slate-500',
} as const

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Optimized event handlers
  const handleMouseEnter = useCallback(() => setIsHovered(true), [])
  const handleMouseLeave = useCallback(() => setIsHovered(false), [])
  const handleImageError = useCallback(() => setImageError(true), [])
  const handleImageLoad = useCallback(() => setImageLoaded(true), [])

  // Memoized animation variants for performance
  const cardVariants = useMemo(() => ({
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: shouldReduceMotion ? 0 : -8,
      scale: shouldReduceMotion ? 1 : 1.02,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  }), [index, shouldReduceMotion])
  const badgeVariants = useMemo(() => ({
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.3,
        ease: backOut,
      },
    },
  }), [index])

  const contentVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }), [index])

  const buttonVariants = useMemo(() => ({
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
        ease: 'easeOut',
      },
    },
  }), [shouldReduceMotion])

  const overlayVariants = useMemo(() => ({
    initial: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  }), [])

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 will-change-transform"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      layout="position"
    >
      {/* Featured Badge */}
      <AnimatePresence>
        {project.featured && (
          <motion.div
            className="absolute top-4 left-4 z-20 flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-medium text-white"
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            exit="initial"
          >
            <Star className="w-3 h-3" />
            Featured
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Badge */}
      <motion.div
        className={`absolute top-4 right-4 z-20 px-2 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
        variants={badgeVariants}
        initial="initial"
        animate="animate"
      >
        {project.status.replace('-', ' ')}
      </motion.div>

      {/* Project Preview */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {/* 3D Model or Image */}
        
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <motion.div 
              className={`w-20 h-20 rounded-lg bg-gradient-to-br ${categoryColors[project.category]} opacity-50`}
              animate={{
                rotate: isHovered ? 180 : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </div>
        

        {/* Category Badge */}
        <motion.div 
          className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white capitalize"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: {
              duration: 0.4,
              delay: index * 0.1 + 0.5,
              ease: 'easeOut',
            },
          }}
        >
          {project.category}
        </motion.div>
      </div>

      {/* Project Content */}
      <motion.div 
        className="p-6 space-y-4"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
        {/* Title and Year */}
        <div className="flex items-start justify-between gap-2">
          <motion.h3 
            className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2"
            whileHover={{
              scale: shouldReduceMotion ? 1 : 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {project.title}
          </motion.h3>
          <motion.div 
            className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: {
                duration: 0.3,
                delay: index * 0.1 + 0.6,
              },
            }}
          >
            <Calendar className="w-3 h-3" />
            {project.year}
          </motion.div>
        </div>

        {/* Description */}
        <motion.p 
          className="text-gray-300 text-sm leading-relaxed line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: index * 0.1 + 0.7,
            },
          }}
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div 
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.4,
              delay: index * 0.1 + 0.8,
              ease: 'easeOut',
            },
          }}
        >
          <AnimatePresence>
            {project.technologies.slice(0, 4).map((tech, i) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-gray-800/60 border border-gray-600/30 rounded-md text-xs text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-200 cursor-default"
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    delay: index * 0.1 + 0.9 + i * 0.05,
                    ease: 'backOut',
                  },
                }}
                whileHover={{
                  scale: shouldReduceMotion ? 1 : 1.05,
                  y: shouldReduceMotion ? 0 : -2,
                  transition: { duration: 0.2 }
                }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
              >
                {tech}
              </motion.span>
            ))}
          </AnimatePresence>
          
          {project.technologies.length > 4 && (
            <motion.span 
              className="px-2 py-1 bg-gray-800/60 border border-gray-600/30 rounded-md text-xs text-gray-400 cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.3,
                  delay: index * 0.1 + 1.1,
                  ease: 'backOut',
                },
              }}
            >
              +{project.technologies.length - 4} more
            </motion.span>
          )}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex gap-3 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.5,
              delay: index * 0.1 + 1.0,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
        >
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 px-4 py-2 rounded-lg text-sm font-medium text-white text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600/50 hover:border-gray-500/50 px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white text-center transition-all duration-300 flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </motion.div>
      </motion.div>

      {/* Hover Effect Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none rounded-2xl"
        variants={overlayVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      />

      {/* Performance optimization: Preload critical resources */}
      {index < 3 && project.image && (
        <link rel="preload" as="image" href={project.image} />
      )}
    </motion.div>
  )
}