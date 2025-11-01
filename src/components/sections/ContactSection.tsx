'use client'

import { Mail, Github, Instagram, Linkedin, MapPin } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/kartheekpanyam',
    color: 'from-gray-300 to-gray-400',
    position: { top: '20%', left: '30%' },
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com/in/kartheek-panyam',
    color: 'from-blue-300 to-blue-400',
    position: { top: '20%', right: '30%' },
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/kartheek4198/',
    color: 'from-pink-300 to-purple-300',
    position: { bottom: '30%', left: '25%' },
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:karth99k@gmail.com',
    color: 'from-cyan-300 to-purple-300',
    position: { bottom: '30%', right: '25%' },
  },
]

export function ContactSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 holographic-text">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and conversations about distributed systems
          </p>
        </div>

        {/* Orbital Social Links */}
        <div className="relative h-[500px] max-w-3xl mx-auto mb-16">
          {/* Center Send Message Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
            <a
              href="mailto:karth99k@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Send Message</span>
            </a>
            <div className="flex items-center gap-2 justify-center mt-4 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Tempe, Arizona</span>
            </div>
          </div>


          {/* Floating Social Icons */}
          {socialLinks.map((social, index) => {
            const Icon = social.icon
            const isHovered = hoveredLink === social.name

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  ...social.position,
                  transform: isHovered ? 'scale(1.8)' : 'scale(1)',
                  transition: 'all 0.3s ease',
                  zIndex: isHovered ? 20 : 10,
                }}
                onMouseEnter={() => setHoveredLink(social.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block group"
                >
                  {/* Icon Circle */}
                  <div className={`
                    w-16 h-16 rounded-full bg-gradient-to-br ${social.color}
                    flex items-center justify-center shadow-lg
                    transition-all duration-300
                    group-hover:shadow-2xl
                  `}
                    style={{
                      animation: 'float 3s ease-in-out infinite',
                      animationDelay: `${index * 0.2}s`,
                      boxShadow: isHovered ? `0 0 40px ${social.color.includes('cyan') ? '#22d3ee' : social.color.includes('blue') ? '#3b82f6' : social.color.includes('pink') ? '#ec4899' : '#9ca3af'}` : '',
                    }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Tooltip */}
                  {isHovered && (
                    <div
                      className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
                      style={{ animation: 'fadeIn 0.2s ease-out' }}
                    >
                      {social.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                    </div>
                  )}

                  {/* Subtle Glow */}
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  />
                </a>
              </div>
            )
          })}
        </div>

        {/* Quick Info */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Looking for Opportunities</h3>
            <p className="text-gray-200 leading-relaxed">
              I&apos;m interested in full-time software engineering roles focused on distributed systems,
              cloud infrastructure, and backend development. Let&apos;s build something amazing together!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kartheek Panyam. Built with Next.js, TypeScript & Three.js
          </p>
        </div>
      </div>
    </section>
  )
}
