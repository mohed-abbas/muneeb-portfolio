// src/content/personal.ts
import type { PersonalInfo } from '../types'

export const personalInfo: PersonalInfo = {
  name: "Muneeb ur Rehman",
  title: "Full Stack Developer",
  email: "mmunibrehman@gmail.com",
  phone: "+92 XXX XXXXXXX", // Add your actual phone number
  location: "Pakistan",
  bio: `Motivated, proactive, and hands-on developer with 2+ years' experience developing 
        and managing information systems for software development and cloud-based companies. 
        Energetic team leader with strong organizational skills and history of developing 
        beautiful and user-friendly applications.`,
  avatar: "/images/avatar.jpg", // Add your actual avatar image
  resume: "/documents/muneeb-resume.pdf" // Add your actual resume file
}

export const heroContent = {
  greeting: "Available for new opportunities",
  mainHeading: {
    line1: "Hey, I'm",
    name: "Muneeb",
    title: "Full Stack Developer"
  },
  description: `I craft beautiful, scalable web applications using modern technologies. 
                2+ years of turning ideas into digital reality.`,
  highlightedWords: {
    beautiful: "text-cyan-400",
    scalable: "text-purple-400", 
    "2+ years": "text-pink-400"
  },
  techStack: [
    { name: 'React', color: 'text-blue-400' },
    { name: 'Next.js', color: 'text-white' },
    { name: 'TypeScript', color: 'text-blue-500' },
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'PHP', color: 'text-purple-400' },
    { name: 'MongoDB', color: 'text-green-400' }
  ],
  cta: {
    primary: {
      text: "Explore My Work",
      href: "/projects"
    },
    secondary: {
      text: "Download CV",
      href: "/documents/muneeb-resume.pdf"
    }
  },
  socialLinks: [
    { 
      name: "GitHub", 
      href: "https://github.com/your-username", // Update with actual GitHub URL
      icon: "Github" 
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com/in/your-profile", // Update with actual LinkedIn URL
      icon: "Linkedin" 
    },
    { 
      name: "Email", 
      href: "mailto:mmunibrehman@gmail.com", 
      icon: "Mail" 
    }
  ]
}

export const expertise = {
  title: "💡 About Me",
  highlights: [
    "🔥 Expertise: HTML, CSS, JavaScript, PHP, ReactJs, NodeJs, MongoDB, MySQL",
    "⚙️ Specializations: Web application development, plugin creation, complex SQL query writing, and system debugging",
    "🚀 Passion: Building interactive, user-friendly digital experiences and troubleshooting code to ensure robust performance"
  ],
  techStack: {
    title: "🛠️ Tech Stack:",
    frontend: ["React", "Next JS", "JavaScript", "TypeScript", "HTML5", "CSS3", "TailwindCSS", "jQuery"],
    backend: ["PHP", "Laravel", "Symfony", "NodeJS"],
    databases: ["MySQL", "MariaDB", "Postgres", "MongoDB", "Firebase"],
    cloud: ["DigitalOcean", "Heroku", "Vercel"],
    tools: ["Figma", "Canva", "Redux", "React Router"]
  },
  mission: `I design and develop modern web applications and interactive websites with a focus on 
           clean, efficient code and optimized performance. Whether it's enhancing LMS platforms 
           like Moodle or building robust backend solutions, I'm dedicated to delivering 
           high-quality digital experiences.`
}