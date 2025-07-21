// src/components/sections/OptimizedProjectsSection.tsx
'use client'
import React, { useState, useMemo, useCallback, useTransition } from 'react'
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './projects/ProjectCard'
import ProjectsBackground from '../canvas/ProjectsBackground'
import { Project } from '@/types'

interface ProjectsSectionProps {
  projects: Project[]
}

type FilterCategory = Project['category'] | 'all'

const filterOptions: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Apps' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'desktop', label: 'Desktop' },
  { value: 'plugin', label: 'Plugins' },
]

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')
  const [isPending, startTransition] = useTransition()
  const shouldReduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "100px" })

  // Optimized filter change with transition
  const handleFilterChange = useCallback((filter: FilterCategory) => {
    startTransition(() => {
      setActiveFilter(filter)
    })
  }, [])

  // Memoized filtered projects for performance
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects
    }
    return projects.filter(project => project.category === activeFilter)
  }, [projects, activeFilter])

  const featuredProjects = useMemo(() => {
    return filteredProjects.filter(project => project.featured)
  }, [filteredProjects])

  // Optimized animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        staggerDirection: -1,
      },
    },
  }), [shouldReduceMotion])

  const headerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }), [shouldReduceMotion])

  const titleVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }), [shouldReduceMotion])

  const filterVariants = useMemo(() => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  }), [shouldReduceMotion])

  const buttonVariants = useMemo(() => ({
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      y: shouldReduceMotion ? 0 : -2,
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

  const countVariants = useMemo(() => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'backOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  }), [])

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="relative min-h-screen py-20 px-4 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* 3D Background - Only render when in view */}
      {isInView && <ProjectsBackground />}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            variants={titleVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              },
            }}
          >
            A showcase of my latest work in web development, featuring modern technologies 
            and innovative solutions that solve real-world problems.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={filterVariants}
        >
          <div className="flex flex-wrap gap-2 p-1 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl">
            {filterOptions.map((option) => (
              <motion.button
                key={option.value}
                onClick={() => handleFilterChange(option.value)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === option.value
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                } ${isPending ? 'opacity-70 pointer-events-none' : ''}`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isPending}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Count with smooth transition */}
        <div className="text-center mb-8 h-6"> {/* Fixed height to prevent layout shift */}
          <AnimatePresence mode="wait">
            <motion.p 
              key={`${activeFilter}-${filteredProjects.length}`}
              className="text-gray-400"
              variants={countVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {activeFilter !== 'all' && ` in ${filterOptions.find(f => f.value === activeFilter)?.label}`}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Projects Grid with optimized animations */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Loading state overlay */}
          {isPending && (
            <motion.div 
              className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
            </motion.div>
          )}
        </div>

        {/* No Projects Found */}
        <AnimatePresence>
          {filteredProjects.length === 0 && !isPending && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: 'backOut',
                },
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.9,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <motion.div 
                className="text-6xl mb-4"
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                  },
                }}
              >
                🔍
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                No projects found
              </h3>
              <p className="text-gray-400">
                Try selecting a different category or check back later for new projects.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Projects Button */}
        <AnimatePresence>
          {featuredProjects.length > 0 && featuredProjects.length < projects.length && (
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
              exit={{ 
                opacity: 0, 
                y: shouldReduceMotion ? 0 : 30,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-2xl font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">View All Projects ({projects.length})</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}