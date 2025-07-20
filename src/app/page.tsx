// src/app/page.tsx
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import SkillsSection from '../components/sections/SkillsSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

export default function HomePage() {
  return (
    <>
      {/* Header will only show when scrolled */}
      <Header />
      
      {/* Single page application with smooth scrolling sections */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section with parallax */}
        <AboutSection />
        
        {/* Skills Section with parallax */}
        <SkillsSection />
        
        {/* Placeholder for future sections */}
        <section className="py-20 bg-slate-900/50 relative overflow-hidden">
          {/* Subtle 3D element */}
          <div className="absolute top-10 right-10 opacity-20">
            <div className="w-12 h-12 border border-cyan-400/30 rounded-lg animate-pulse" />
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Single Page Portfolio with Parallax Effects
            </h2>
            <p className="text-slate-400 max-w mx-auto mb-8">
              Beautiful single-page application with smooth parallax scrolling, subtle 3D elements, 
              and professional sections. Next will come Projects, Experience, and Contact sections 
              with the same cohesive design approach.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-effect p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">✨ Parallax Effects</h3>
                <p className="text-slate-300 text-sm">Smooth scrolling animations and transforms</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🎯 Strategic 3D Elements</h3>
                <p className="text-slate-300 text-sm">Subtle floating objects that don't interfere</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">📱 Single Page App</h3>
                <p className="text-slate-300 text-sm">Cohesive experience with smooth navigation</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
