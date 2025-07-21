// src/content/projects.ts
import { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: 'lms-platform',
    title: 'Advanced Learning Management System',
    description: 'A comprehensive LMS platform built with React and Laravel, featuring real-time messaging, course management, student progress tracking, and interactive quizzes.',
    longDescription: 'This LMS platform revolutionizes online education with its intuitive interface and powerful features. Built using modern web technologies, it supports thousands of concurrent users, real-time collaboration, and advanced analytics for educators.',
    technologies: ['React', 'Laravel', 'MySQL', 'Socket.io', 'TailwindCSS', 'Redis', 'Docker'],
    image: '/projects/lms-platform.jpg',
    demoUrl: 'https://lms-demo.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/lms-platform',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2024,
    modelUrl: '/models/laptop.glb'
  },
  {
    id: 'task-dashboard',
    title: 'Modern Task Management Dashboard',
    description: 'A sleek task management application with drag-and-drop functionality, team collaboration features, real-time updates, and advanced filtering options.',
    longDescription: 'This task management dashboard streamlines project workflows with its intuitive drag-and-drop interface, real-time collaboration tools, and comprehensive reporting features.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Supabase', 'TailwindCSS', 'Zustand'],
    image: '/projects/task-dashboard.jpg',
    demoUrl: 'https://tasks.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/task-dashboard',
    featured: true,
    category: 'web',
    status: 'completed',
    year: 2024
  },
  {
    id: 'ecommerce-api',
    title: 'E-Commerce REST API',
    description: 'A robust RESTful API for e-commerce platforms with payment integration, inventory management, order processing, and comprehensive admin controls.',
    longDescription: 'Built with Laravel and MySQL, this API handles complex e-commerce operations including payment processing, inventory tracking, order management, and user authentication with JWT tokens.',
    technologies: ['Laravel', 'MySQL', 'Stripe API', 'JWT', 'Redis', 'Docker', 'Swagger'],
    image: '/projects/ecommerce-api.jpg',
    githubUrl: 'https://github.com/muneebrehman/ecommerce-api',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023
  },
  {
    id: 'moodle-plugin',
    title: 'Interactive Moodle Plugin Suite',
    description: 'Custom Moodle plugins enhancing the learning experience with interactive elements, gamification features, and advanced reporting capabilities.',
    longDescription: 'A collection of Moodle plugins that transform traditional e-learning with gamification, interactive assessments, and detailed analytics for both students and instructors.',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Moodle API', 'jQuery', 'CSS3'],
    image: '/projects/moodle-plugin.jpg',
    demoUrl: 'https://moodle-demo.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/moodle-plugins',
    featured: true,
    category: 'plugin',
    status: 'completed',
    year: 2023
  },
  {
    id: 'portfolio-website',
    title: 'Interactive Developer Portfolio',
    description: 'A modern, responsive portfolio website featuring 3D animations, smooth transitions, and an engaging user experience built with Next.js and Three.js.',
    longDescription: 'This portfolio showcases modern web development techniques with stunning 3D animations, smooth page transitions, and responsive design that adapts to any device.',
    technologies: ['Next.js', 'TypeScript', 'Three.js', 'Framer Motion', 'TailwindCSS', 'Vercel'],
    image: '/projects/portfolio.jpg',
    demoUrl: 'https://muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/portfolio-2024',
    featured: false,
    category: 'web',
    status: 'in-progress',
    year: 2024
  },
  {
    id: 'inventory-management',
    title: 'Smart Inventory Management System',
    description: 'A comprehensive inventory management solution with barcode scanning, real-time stock tracking, automated reordering, and detailed analytics.',
    longDescription: 'This system streamlines inventory operations for businesses with features like barcode scanning, automated stock alerts, supplier management, and comprehensive reporting.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Chart.js', 'Bootstrap', 'Barcode.js'],
    image: '/projects/inventory-system.jpg',
    demoUrl: 'https://inventory-demo.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/inventory-management',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023
  },
  {
    id: 'react-component-library',
    title: 'Reusable React Component Library',
    description: 'A comprehensive library of reusable React components with TypeScript support, Storybook documentation, and comprehensive testing suite.',
    longDescription: 'A production-ready component library featuring 50+ customizable components, complete TypeScript definitions, accessibility features, and extensive documentation.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Rollup', 'CSS Modules'],
    image: '/projects/component-library.jpg',
    demoUrl: 'https://components.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/react-ui-library',
    featured: false,
    category: 'web',
    status: 'in-progress',
    year: 2024
  },
  {
    id: 'mobile-expense-tracker',
    title: 'Personal Expense Tracker App',
    description: 'A React Native mobile application for tracking personal expenses with category management, budget setting, and detailed financial insights.',
    longDescription: 'This mobile app helps users manage their finances with intuitive expense tracking, budget management, spending analytics, and goal setting features.',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Chart.js', 'AsyncStorage', 'React Navigation'],
    image: '/projects/expense-tracker.jpg',
    githubUrl: 'https://github.com/muneebrehman/expense-tracker-app',
    featured: false,
    category: 'mobile',
    status: 'completed',
    year: 2023
  },
  {
    id: 'cms-dashboard',
    title: 'Custom CMS Dashboard',
    description: 'A flexible content management system with a modern dashboard, role-based permissions, media management, and SEO optimization tools.',
    longDescription: 'This CMS provides content creators with a powerful yet intuitive interface for managing websites, with features like drag-and-drop page building, media libraries, and SEO tools.',
    technologies: ['Laravel', 'React', 'MySQL', 'TinyMCE', 'AWS S3', 'Redis'],
    image: '/projects/cms-dashboard.jpg',
    demoUrl: 'https://cms-demo.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/custom-cms',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023
  },
  {
    id: 'analytics-dashboard',
    title: 'Real-time Analytics Dashboard',
    description: 'A comprehensive analytics platform with real-time data visualization, custom reporting, and interactive charts for business intelligence.',
    longDescription: 'This analytics platform transforms raw data into actionable insights with real-time dashboards, custom report generation, and advanced data visualization capabilities.',
    technologies: ['Next.js', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
    image: '/projects/analytics-dashboard.jpg',
    demoUrl: 'https://analytics-demo.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/analytics-dashboard',
    featured: true,
    category: 'web',
    status: 'in-progress',
    year: 2024
  },
  {
    id: 'social-media-scheduler',
    title: 'Social Media Scheduler Tool',
    description: 'An automation tool for scheduling social media posts across multiple platforms with analytics tracking and content calendar management.',
    longDescription: 'This tool streamlines social media management by allowing users to schedule posts across multiple platforms, track engagement metrics, and manage content calendars.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Twitter API', 'Facebook API', 'Cron Jobs'],
    image: '/projects/social-scheduler.jpg',
    demoUrl: 'https://scheduler-demo.muneebrehman.dev',
    githubUrl: 'https://github.com/muneebrehman/social-media-scheduler',
    featured: false,
    category: 'web',
    status: 'completed',
    year: 2023
  },
  {
    id: 'desktop-file-manager',
    title: 'Advanced File Manager Desktop App',
    description: 'A powerful desktop file management application with advanced search, batch operations, cloud integration, and customizable workflows.',
    longDescription: 'This desktop application enhances file management with features like advanced search algorithms, batch processing, cloud storage integration, and automation workflows.',
    technologies: ['Electron', 'TypeScript', 'Node.js', 'SQLite', 'AWS SDK', 'Sharp'],
    image: '/projects/file-manager.jpg',
    githubUrl: 'https://github.com/muneebrehman/desktop-file-manager',
    featured: false,
    category: 'desktop',
    status: 'planned',
    year: 2024
  }
]

// Filter functions for easy data access
export const getFeaturedProjects = (): Project[] => {
  return projectsData.filter(project => project.featured)
}

export const getProjectsByCategory = (category: Project['category']): Project[] => {
  return projectsData.filter(project => project.category === category)
}

export const getProjectsByStatus = (status: Project['status']): Project[] => {
  return projectsData.filter(project => project.status === status)
}

export const getProjectsByYear = (year: number): Project[] => {
  return projectsData.filter(project => project.year === year)
}

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id)
}

// Statistics
export const getProjectStats = () => {
  const total = projectsData.length
  const completed = projectsData.filter(p => p.status === 'completed').length
  const inProgress = projectsData.filter(p => p.status === 'in-progress').length
  const planned = projectsData.filter(p => p.status === 'planned').length
  const featured = projectsData.filter(p => p.featured).length

  const categories = projectsData.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1
    return acc
  }, {} as Record<Project['category'], number>)

  const technologies = projectsData
    .flatMap(project => project.technologies)
    .reduce((acc, tech) => {
      acc[tech] = (acc[tech] || 0) + 1
      return acc
    }, {} as Record<string, number>)

  return {
    total,
    completed,
    inProgress,
    planned,
    featured,
    categories,
    technologies: Object.entries(technologies)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .reduce((acc, [tech, count]) => ({ ...acc, [tech]: count }), {})
  }
}