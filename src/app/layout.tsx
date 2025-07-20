// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muneeb ur Rehman - Full Stack Developer',
  description: 'Portfolio of Muneeb ur Rehman - Experienced Full Stack Developer specializing in modern web applications, 3D experiences, and scalable solutions.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, PHP, Laravel, Portfolio',
  authors: [{ name: 'Muneeb ur Rehman' }],
  viewport: 'width=device-width, initial-scale=1',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased overflow-x-hidden">
        <div className="relative min-h-screen flex flex-col">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 -z-10" />
          
          {/* Subtle grid pattern */}
          <div 
            className="fixed inset-0 opacity-[0.02] -z-10" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }} 
          />
          
          {/* Content */}
          <main className="flex-1 relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}