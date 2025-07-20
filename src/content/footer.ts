// src/content/footer.ts
import type { FooterSection } from '../types'

export const footerSections: FooterSection[] = [
  {
    title: 'Navigation',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Skills', href: '/skills' },
      { name: 'Projects', href: '/projects' },
      { name: 'Experience', href: '/experience' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Backend Solutions', href: '/services/backend' },
      { name: 'Plugin Creation', href: '/services/plugins' },
      { name: 'System Debugging', href: '/services/debugging' },
      { name: 'Consulting', href: '/services/consulting' },
    ]
  },
  {
    title: 'Technologies',
    links: [
      { name: 'React & Next.js', href: '/tech/react' },
      { name: 'PHP & Laravel', href: '/tech/php' },
      { name: 'Node.js', href: '/tech/nodejs' },
      { name: 'MongoDB & MySQL', href: '/tech/databases' },
    ]
  }
]

export const currentYear = new Date().getFullYear()

export const copyrightText = `© ${currentYear} Muneeb ur Rehman. All rights reserved.`

export const footerDescription = `Full Stack Developer specializing in modern web applications, 
scalable backend solutions, and interactive user experiences. Based in Pakistan, 
working with clients worldwide.`