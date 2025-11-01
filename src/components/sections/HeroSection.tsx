'use client'

import { MagneticCursor } from '../effects/MagneticCursor'
import { Download, Eye } from 'lucide-react'

export function HeroSection() {
  const handleViewResume = () => {
    window.open('/assets/resume.pdf', '_blank')
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/assets/resume.pdf'
    link.download = 'Kartheek_Panyam_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Classic Calligraphy Name */}
        <div className="mb-6">
          <h1
            className="text-6xl md:text-8xl font-bold mb-4 holographic-text font-[family-name:var(--font-allura)] pb-2 leading-tight"
            style={{ lineHeight: '1.2' }}
          >
            Kartheek Panyam
          </h1>
        </div>

        {/* Title with subtle animation */}
        <h2 className="text-2xl md:text-4xl text-gray-100 mb-6 font-light">
          Software Developer
        </h2>

        {/* Location & Status */}
        <p className="text-lg text-gray-200 mb-8">
          Tempe, AZ | MS in Information Technology @ Arizona State University
        </p>

        {/* Bio */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Building scalable, high-performance distributed systems with{' '}
            <span className="text-primary font-semibold">5+ years of experience</span>.
            Passionate about microservices architecture, event-driven systems, and cloud infrastructure.
            Previously at <span className="text-cyan-400 font-semibold">Accenture</span> and{' '}
            <span className="text-cyan-400 font-semibold">Infosys</span>, where I architected solutions
            handling <span className="text-primary font-semibold">100K+ daily API requests</span> with{' '}
            <span className="text-primary font-semibold">99.9% uptime</span>.
          </p>
        </div>

        {/* Resume Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <MagneticCursor strength={0.3} radius={100}>
            <button
              onClick={handleViewResume}
              className="group relative px-4 py-2 bg-gradient-to-r from-primary via-cyan-500 to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/40 flex items-center gap-2 text-sm"
            >
              <Eye className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Resume</span>
            </button>
          </MagneticCursor>

          <MagneticCursor strength={0.3} radius={100}>
            <button
              onClick={handleDownloadResume}
              className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/50 backdrop-blur-sm rounded-full font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 flex items-center gap-2 text-sm"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
              <span>Download Resume</span>
            </button>
          </MagneticCursor>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '99.9%', label: 'Uptime Achieved' },
            { value: '100K+', label: 'Daily API Requests' },
            { value: '3x', label: 'Performance Boost' },
          ].map((stat, index) => (
            <MagneticCursor key={index} strength={0.2} radius={80}>
              <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </MagneticCursor>
          ))}
        </div>

      </div>
    </section>
  )
}
