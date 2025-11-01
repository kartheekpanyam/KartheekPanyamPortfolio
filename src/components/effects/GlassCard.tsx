'use client'

import { ReactNode, useState } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  intensity?: 'light' | 'medium' | 'heavy'
  hoverEffect?: boolean
}

export function GlassCard({
  children,
  className = '',
  intensity = 'medium',
  hoverEffect = true
}: GlassCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const intensityClasses = {
    light: 'bg-white/5 backdrop-blur-sm border-white/10',
    medium: 'bg-white/10 backdrop-blur-md border-white/20',
    heavy: 'bg-white/15 backdrop-blur-lg border-white/30',
  }

  const hoverClasses = hoverEffect
    ? 'hover:bg-white/20 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20'
    : ''

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl border
        ${intensityClasses[intensity]}
        ${hoverClasses}
        transition-all duration-500 ease-out
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glass reflection effect */}
      <div
        className={`
          absolute inset-0 pointer-events-none
          transition-opacity duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          background:
            'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Frosted edge glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            boxShadow:
              'inset 0 0 20px rgba(0, 0, 0, 0.4), inset 0 0 40px rgba(0, 0, 0, 0.2)',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Animated gradient border on hover */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            background:
              'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 3s ease infinite',
          }}
        />
      )}
    </div>
  )
}
