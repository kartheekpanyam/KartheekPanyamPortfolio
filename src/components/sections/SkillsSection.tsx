'use client'

import { useEffect, useRef } from 'react'

// Skill categories with progress bars
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '⚛️',
    color: 'from-blue-400 to-cyan-400',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Three.js / WebGL', level: 80 },
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'from-green-400 to-emerald-400',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / FastAPI', level: 85 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Databases & Storage',
    icon: '🗄️',
    color: 'from-purple-400 to-pink-400',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 90 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'from-orange-400 to-red-400',
    skills: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 80 },
    ],
  },
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    color: 'from-orange-400 to-orange-600',
    icon: 'aws'
  },
  {
    name: 'Microsoft Azure Fundamentals',
    color: 'from-blue-400 to-blue-600',
    icon: 'azure'
  },
  {
    name: 'Google Cloud Associate Engineer',
    color: 'from-red-400 via-yellow-400 to-blue-400',
    icon: 'gcp'
  },
]

// Mini starfield for skills section background
function MiniStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    updateSize()
    window.addEventListener('resize', updateSize)

    // Create small blue stars
    const stars: Array<{ x: number; y: number; radius: number; opacity: number; twinkleSpeed: number; twinklePhase: number }> = []
    const starCount = 80

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }

    // Animation
    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5 + 0.5
        const currentOpacity = star.opacity * twinkle

        // Blue gradient
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius)
        gradient.addColorStop(0, `rgba(100, 200, 255, ${currentOpacity})`)
        gradient.addColorStop(0.5, `rgba(60, 150, 255, ${currentOpacity * 0.5})`)
        gradient.addColorStop(1, `rgba(30, 100, 200, 0)`)

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-screen py-20 px-6">
      {/* Mini starfield background */}
      <MiniStarfield />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 holographic-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, accessible, and impactful solutions
          </p>
        </div>

        {/* Skills Grid with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500"
              style={{
                animationName: 'float',
                animationDuration: '6s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${catIndex * 0.2}s`,
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`text-3xl bg-gradient-to-br ${category.color} p-3 rounded-xl`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationName: 'slideInLeft',
                          animationDuration: '1s',
                          animationDelay: `${catIndex * 0.1 + skillIndex * 0.05}s`,
                          animationFillMode: 'both',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Core Competencies
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Distributed Systems',
              'Microservices Architecture',
              'Event-Driven Design',
              'CI/CD Pipelines',
              'System Design',
              'API Development',
              'Performance Optimization',
              'Cloud Architecture',
            ].map((concept, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-200 transition-all duration-300 hover:scale-105 cursor-default"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-black/30 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                  {cert.icon === 'aws' && (
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.071-.208.071-.08 0-.16-.04-.239-.112-.112-.12-.207-.248-.279-.383-.072-.135-.144-.288-.215-.463-.543.64-1.224.96-2.04.96-.583 0-1.048-.168-1.38-.504-.333-.336-.5-.784-.5-1.344 0-.593.208-1.072.632-1.432.423-.36 1-.544 1.723-.544.24 0 .487.016.743.056.255.04.52.088.791.16v-.528c0-.543-.112-.92-.336-1.136-.224-.215-.6-.32-1.128-.32-.24 0-.487.032-.743.08-.255.048-.503.12-.743.215-.112.048-.192.08-.24.096-.048.016-.08.024-.104.024-.088 0-.136-.063-.136-.193v-.304c0-.096.016-.176.056-.223.04-.048.112-.104.216-.144.24-.12.527-.224.855-.304.336-.08.679-.12 1.032-.12.791 0 1.368.176 1.736.528.375.36.559.903.559 1.632v2.144zM3.447 8.82c.231 0 .471-.04.727-.128.256-.088.48-.24.672-.456.12-.143.207-.296.256-.463.048-.168.08-.36.08-.576v-.288c-.208-.04-.423-.072-.647-.088-.224-.016-.44-.024-.648-.024-.463 0-.8.096-1.024.28-.224.184-.336.448-.336.8 0 .336.08.584.256.752.168.175.432.263.76.263zm4.944.64c-.112 0-.192-.024-.256-.063-.063-.04-.12-.128-.168-.24l-1.864-6.144c-.048-.16-.072-.264-.072-.32 0-.128.063-.2.183-.2h.752c.12 0 .2.024.256.063.064.04.112.128.16.24l1.336 5.263 1.239-5.263c.04-.16.088-.216.152-.24.063-.04.143-.063.263-.063h.615c.12 0 .2.024.263.063.064.04.12.128.152.24l1.255 5.325 1.376-5.325c.048-.16.104-.216.16-.24.064-.04.144-.063.256-.063h.711c.12 0 .191.063.191.2 0 .048-.008.096-.016.144-.008.048-.024.119-.056.215l-1.92 6.144c-.048.16-.104.216-.168.24-.063.04-.143.063-.255.063h-.664c-.12 0-.2-.024-.263-.063-.064-.04-.12-.128-.152-.24l-1.239-5.167-1.223 5.175c-.04.16-.088.216-.152.24-.063.04-.143.063-.263.063h-.664zm8.368.016c-.336 0-.671-.04-.999-.12-.328-.08-.583-.176-.751-.288-.12-.08-.2-.168-.231-.248-.032-.08-.048-.168-.048-.248v-.312c0-.128.048-.2.144-.2.048 0 .096.008.144.024.048.016.12.048.191.08.264.12.536.208.815.264.288.056.567.08.855.08.455 0 .807-.08 1.047-.24.24-.16.36-.384.36-.68 0-.2-.064-.36-.184-.488-.12-.128-.336-.248-.632-.36l-.904-.28c-.455-.144-.791-.36-1-.648-.2-.288-.304-.616-.304-.976 0-.28.06-.528.176-.736.12-.208.272-.392.464-.552.192-.16.416-.28.672-.36.256-.08.528-.12.824-.12.144 0 .296.008.44.032.152.024.288.056.424.088.128.032.248.072.36.12.112.048.2.096.263.144.064.048.112.096.144.144.032.048.048.112.048.184v.296c0 .128-.048.2-.144.2-.056 0-.152-.024-.272-.08-.431-.2-.903-.296-1.415-.296-.416 0-.735.072-.951.216-.216.144-.328.368-.328.672 0 .2.072.368.2.504.128.136.36.264.68.376l.887.28c.448.144.776.344.968.616.192.272.288.584.288.936 0 .288-.064.552-.184.776-.12.224-.28.416-.488.568-.208.152-.448.272-.728.352-.288.072-.584.112-.912.112z"/>
                    </svg>
                  )}
                  {cert.icon === 'azure' && (
                    <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.05 4.24l-7.18 16.1h4.75l1.75-4.47h6.98L13.05 4.24zm4.97 10.13h-4.47l2.24-5.73 2.23 5.73zM5.25 19.5H.5l8.24-15h4.75l-8.24 15z"/>
                    </svg>
                  )}
                  {cert.icon === 'gcp' && (
                    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="url(#gcp-gradient)" stroke="white" strokeWidth="1.5"/>
                      <defs>
                        <linearGradient id="gcp-gradient" x1="3" y1="7" x2="21" y2="17" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#EA4335"/>
                          <stop offset="33%" stopColor="#FBBC04"/>
                          <stop offset="66%" stopColor="#34A853"/>
                          <stop offset="100%" stopColor="#4285F4"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
                <p className="text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-200">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
