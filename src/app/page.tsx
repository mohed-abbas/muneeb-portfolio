// src/app/page.tsx
import HeroSection from '../components/sections/HeroSection'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'

export default function HomePage() {
  return (
    <>
      {/* Header will only show when scrolled */}
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Placeholder for future sections */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              🎉 Completely Redesigned!
            </h2>
            <p className="text-slate-400 max-w mx-auto mb-8">
              The hero section and navbar have been completely redesigned! 
              Now featuring a suspended glass navbar that appears on scroll, 
              and an impressive 3D canvas with wireframe structures, floating code elements, 
              and holographic tech visualizations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="glass-effect p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">✨ Suspended Glass Navbar</h3>
                <p className="text-slate-300 text-sm">Appears elegantly when you scroll down</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">🚀 Impressive 3D Canvas</h3>
                <p className="text-slate-300 text-sm">Wireframe structures and floating code elements</p>
              </div>
              <div className="glass-effect p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">💫 Enhanced Typography</h3>
                <p className="text-slate-300 text-sm">Better visual hierarchy and modern design</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}