// src/types/index.ts

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'plugin' | 'other'
  status: 'completed' | 'in-progress' | 'planned'
  year: number
  modelUrl?: string // For 3D model preview
}

export interface Skill {
  id: string
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'cloud' | 'other'
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  years: number
  icon?: string
  color?: string
  description?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string // undefined means current job
  description: string
  achievements: string[]
  technologies: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
  logo?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  achievements?: string[]
  location: string
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  url?: string
  image?: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone?: string
  location: string
  bio: string
  avatar: string
  resume?: string
}

export interface FooterSection {
  title: string
  links: {
    name: string
    href: string
  }[]
}