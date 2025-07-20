// src/content/navigation.ts

export interface NavigationItem {
  name: string
  href: string
  description?: string
}

export const navigationItems: NavigationItem[] = [
  { 
    name: 'Home', 
    href: '#home',
    description: 'Back to the top'
  },
  { 
    name: 'About', 
    href: '#about',
    description: 'Learn more about me'
  },
  { 
    name: 'Skills', 
    href: '#skills',
    description: 'My technical expertise'
  },
  { 
    name: 'Projects', 
    href: '#projects',
    description: 'Showcase of my work'
  },
  { 
    name: 'Experience', 
    href: '#experience',
    description: 'My professional journey'
  },
  { 
    name: 'Contact', 
    href: '#contact',
    description: 'Get in touch with me'
  },
]

export interface SocialLink {
  name: string
  href: string
  icon: string
  color?: string
}

export const socialLinks: SocialLink[] = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/your-username', // Replace with actual GitHub URL
    icon: 'github',
    color: 'hover:text-gray-400'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/your-profile', // Replace with actual LinkedIn URL
    icon: 'linkedin',
    color: 'hover:text-blue-400'
  },
  { 
    name: 'Email', 
    href: 'mailto:mmunibrehman@gmail.com',
    icon: 'email',
    color: 'hover:text-cyan-400'
  },
]