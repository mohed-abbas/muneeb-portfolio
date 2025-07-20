// src/components/layout/Footer.tsx
import Link from 'next/link'
import Icon from '../ui/Icon'
import { socialLinks } from '../../content/navigation'
import { footerSections, copyrightText, footerDescription } from '../../content/footer'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950/50 border-t border-slate-800/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-50" />
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Muneeb ur Rehman
              </h2>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {footerDescription}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={`p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600/50 hover:scale-110 ${social.color || 'hover:text-cyan-400'}`}
                  aria-label={social.name}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon name={social.icon} size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              {copyrightText}
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}