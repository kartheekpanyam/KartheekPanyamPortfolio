'use client'

import { TiltCard } from '../effects/TiltCard'
import { GlassCard } from '../effects/GlassCard'
import { SpotlightCard } from '../effects/SpotlightCard'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Distributed Log Processing System',
    description:
      'A fault-tolerant distributed system processing 1M+ daily log entries with real-time analytics. Implements event-driven architecture using Kafka for message streaming, achieving 3x faster retrieval speeds compared to traditional approaches.',
    technologies: ['Kafka', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Python'],
    highlights: [
      '1M+ entries processed daily',
      '3x faster retrieval speeds',
      'Fault-tolerant architecture',
      'Real-time analytics dashboard',
    ],
    github: 'https://github.com/kartheekpanyam',
    featured: true,
  },
  {
    title: 'IoT Data Aggregation Platform',
    description:
      'High-performance API platform for IoT device data aggregation with real-time WebSocket updates. Utilizes Redis caching for sub-200ms API latency and MongoDB for flexible schema design, achieving 2.5x throughput increase.',
    technologies: ['Node.js', 'Express', 'Redis', 'MongoDB', 'Docker', 'WebSocket'],
    highlights: [
      '<200ms API latency',
      '2.5x throughput increase',
      'Real-time WebSocket updates',
      'Redis caching layer',
    ],
    github: 'https://github.com/kartheekpanyam',
    featured: true,
  },
  {
    title: 'Dark Theme - Developer Mode Extension',
    description:
      'A Chrome extension that transforms any webpage with a sleek developer-themed dark mode. Applies modern, code-editor-inspired aesthetics to all sites with customizable color schemes and instant activation. Enhances browsing experience with eye-friendly dark themes optimized for developers.',
    technologies: ['JavaScript', 'HTML/CSS', 'Chrome Extension API'],
    highlights: [
      'Universal dark mode for any website',
      'Developer-inspired theme aesthetics',
      'One-click instant activation',
      'Custom color scheme options',
    ],
    github: 'https://github.com/kartheekpanyam/DarkTheme.git',
    featured: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 holographic-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building scalable systems that handle millions of requests with exceptional performance
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={index} tiltIntensity={3} glareIntensity={0}>
                <GlassCard intensity="medium" className="h-full">
                  <div
                    className="relative p-8 h-full flex flex-col bg-black/40 hover:bg-gradient-to-br hover:from-cyan-950/20 hover:via-purple-950/20 hover:to-pink-950/20 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2),0_0_30px_rgba(168,85,247,0.15)] transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] animate-[float_6s_ease-in-out_infinite] group/card overflow-hidden before:absolute before:inset-0 before:rounded-xl before:p-[2px] before:bg-gradient-to-r before:from-cyan-400 before:via-purple-400 before:to-pink-400 before:opacity-0 hover:before:opacity-30 before:transition-opacity before:duration-700 before:-z-10 before:blur-sm"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {/* Animated Corner Lines */}
                    {/* Top Left Corner */}
                    <div className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500"></div>
                      <div className="absolute top-0 left-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 to-purple-400 transform origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-500 delay-150"></div>
                    </div>

                    {/* Top Right Corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-purple-400 to-pink-400 transform origin-right scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 delay-100"></div>
                      <div className="absolute top-0 right-0 h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 transform origin-top scale-y-0 group-hover/card:scale-y-100 transition-transform duration-500 delay-250"></div>
                    </div>

                    {/* Bottom Left Corner */}
                    <div className="absolute bottom-0 left-0 w-8 h-8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 delay-200"></div>
                      <div className="absolute bottom-0 left-0 h-full w-0.5 bg-gradient-to-t from-cyan-400 to-blue-400 transform origin-bottom scale-y-0 group-hover/card:scale-y-100 transition-transform duration-500 delay-350"></div>
                    </div>

                    {/* Bottom Right Corner */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-pink-400 to-purple-400 transform origin-right scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 delay-300"></div>
                      <div className="absolute bottom-0 right-0 h-full w-0.5 bg-gradient-to-t from-pink-400 to-purple-400 transform origin-bottom scale-y-0 group-hover/card:scale-y-100 transition-transform duration-500 delay-450"></div>
                    </div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="inline-block mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-full text-xs font-semibold text-cyan-400">
                          FEATURED
                        </span>
                      </div>
                    )}

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-100 mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3">Key Highlights</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-300"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-4 mt-auto pt-6 border-t border-white/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full transition-all duration-300 hover:scale-105 group text-sm text-gray-200"
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="font-medium">View Code</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 border border-primary/40 rounded-full transition-all duration-300 hover:scale-105 group text-sm text-gray-200"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        <span className="font-medium">Learn More</span>
                      </a>
                    </div>

                  </div>
                </GlassCard>
            </TiltCard>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/kartheekpanyam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
