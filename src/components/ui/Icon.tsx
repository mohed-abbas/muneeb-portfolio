// src/components/ui/Icon.tsx
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Instagram, 
  ExternalLink, 
  ArrowRight,
  Home,
  User,
  Code,
  Briefcase,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  MapPin,
  Globe,
  Download,
  Send,
  type LucideIcon
} from 'lucide-react'

// Define available icons with better naming
const iconMap: Record<string, LucideIcon> = {
  // Social media
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  mail: Mail,
  twitter: Twitter,
  instagram: Instagram,
  
  // Navigation & UI
  external: ExternalLink,
  arrow: ArrowRight,
  'arrow-right': ArrowRight,
  home: Home,
  user: User,
  about: User,
  code: Code,
  skills: Code,
  briefcase: Briefcase,
  experience: Briefcase,
  projects: Code,
  phone: Phone,
  contact: Phone,
  menu: Menu,
  close: X,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  
  // Content
  star: Star,
  calendar: Calendar,
  location: MapPin,
  'map-pin': MapPin,
  globe: Globe,
  download: Download,
  send: Send,
}

interface IconProps {
  name: string
  size?: number
  className?: string
  strokeWidth?: number
  color?: string
}

export default function Icon({ 
  name, 
  size = 24, 
  className = '', 
  strokeWidth = 2,
  color 
}: IconProps) {
  const IconComponent = iconMap[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found. Available icons:`, Object.keys(iconMap))
    return null
  }

  return (
    <IconComponent 
      size={size} 
      className={className}
      strokeWidth={strokeWidth}
      color={color}
    />
  )
}

// Export individual icons for direct import (better performance)
export {
  Github,
  Linkedin, 
  Mail,
  Twitter,
  Instagram,
  ExternalLink,
  ArrowRight,
  Home,
  User,
  Code,
  Briefcase,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Star,
  Calendar,
  MapPin,
  Globe,
  Download,
  Send
}