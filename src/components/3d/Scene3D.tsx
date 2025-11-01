'use client';

import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  depth: number; // For parallax effect
  twinkleSpeed: number; // For twinkling animation
  twinkleOffset: number; // Phase offset for varied twinkling
}

// Create a circular texture for round dots
function createCircleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 32);

  return new THREE.CanvasTexture(canvas);
}

// Small blue dots resembling outer space stars with depth
function ParallaxStars() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 400; // Increased for more visible stars
  const particlesData = useRef<Particle[]>([]);
  const scrollY = useRef(0);
  const timeRef = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetMouseX = useRef(0);
  const targetMouseY = useRef(0);

  // Create circular texture for round dots
  const circleTexture = React.useMemo(() => createCircleTexture(), []);

  // Initialize particles
  const { positions, sizes, colors } = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    const szs = new Float32Array(count);
    const cols = new Float32Array(count * 3);

    particlesData.current = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = Math.random() * -50 - 5; // Extended depth for more layers
      const size = 0.08; // Smaller particle size for less clutter
      const depth = Math.abs(z) / 55; // Normalize depth 0-1
      const twinkleSpeed = Math.random() * 0.5 + 0.5; // Random twinkle speed
      const twinkleOffset = Math.random() * Math.PI * 2; // Random phase

      particlesData.current.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size,
        depth,
        twinkleSpeed,
        twinkleOffset,
      });

      const idx = i * 3;
      pos[idx] = x;
      pos[idx + 1] = y;
      pos[idx + 2] = z;

      szs[i] = size;

      // Blue tones with variation - all brighter for visibility
      const colorIdx = i * 3;
      if (depth < 0.3) {
        // Close stars - very bright cyan
        cols[colorIdx] = 0.6 + Math.random() * 0.4; // R
        cols[colorIdx + 1] = 0.9 + Math.random() * 0.1; // G
        cols[colorIdx + 2] = 1.0; // B
      } else if (depth < 0.6) {
        // Mid-distance stars - bright blue
        cols[colorIdx] = 0.5 + Math.random() * 0.3; // R
        cols[colorIdx + 1] = 0.7 + Math.random() * 0.2; // G
        cols[colorIdx + 2] = 1.0; // B
      } else {
        // Distant stars - medium blue (brighter than before)
        cols[colorIdx] = 0.4 + Math.random() * 0.2; // R
        cols[colorIdx + 1] = 0.6 + Math.random() * 0.2; // G
        cols[colorIdx + 2] = 0.9 + Math.random() * 0.1; // B
      }
    }

    return { positions: pos, sizes: szs, colors: cols };
  }, [count]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -1 to 1
      targetMouseX.current = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouseY.current = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles with scroll-based parallax, mouse parallax, and twinkling
  useFrame((state) => {
    if (particlesRef.current && particlesRef.current.geometry.attributes.position) {
      timeRef.current += 0.01;

      // Smooth mouse movement with easing
      mouseX.current += (targetMouseX.current - mouseX.current) * 0.05;
      mouseY.current += (targetMouseY.current - mouseY.current) * 0.05;

      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      const sizes = particlesRef.current.geometry.attributes.size.array as Float32Array;

      for (let i = 0; i < particlesData.current.length; i++) {
        const particle = particlesData.current[i];
        const idx = i * 3;

        // Parallax effect based on scroll and depth
        // Closer stars (smaller depth value) move faster, distant stars move slower
        const scrollOffset = (scrollY.current * 0.001) * (1 - particle.depth);

        // Mouse parallax effect - particles move opposite to mouse (reverse direction)
        // Closer particles move more, distant particles move less
        const mouseInfluence = (1 - particle.depth) * 2; // Strength based on depth
        const mouseOffsetX = -mouseX.current * mouseInfluence;
        const mouseOffsetY = -mouseY.current * mouseInfluence;

        // Update position with combined parallax effects
        positions[idx] = particle.baseX + mouseOffsetX;
        positions[idx + 1] = particle.baseY + scrollOffset + mouseOffsetY;
        positions[idx + 2] = particle.baseZ;

        // Twinkling effect - vary size with sine wave (reduced intensity)
        const twinkle = Math.sin(timeRef.current * particle.twinkleSpeed + particle.twinkleOffset) * 0.5 + 0.5;
        sizes[i] = particle.size * (0.7 + twinkle * 0.3);
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.geometry.attributes.size.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} count={count} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}
        vertexColors
        size={0.15}
        sizeAttenuation
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Optional: Nebula background for deeper space atmosphere
function NebulaBackground() {
  return (
    <mesh position={[0, 0, -30]}>
      <planeGeometry args={[100, 100]} />
      <meshBasicMaterial
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      >
        <primitive
          attach="map"
          object={(() => {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            const ctx = canvas.getContext('2d')!;

            // Create nebula gradient
            const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
            gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
            gradient.addColorStop(0.5, 'rgba(34, 211, 238, 0.15)');
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 512, 512);

            return new THREE.CanvasTexture(canvas);
          })()}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          {/* Nebula atmosphere */}
          <NebulaBackground />
          {/* Small blue twinkling stars */}
          <ParallaxStars />
        </Suspense>
      </Canvas>
    </div>
  );
}
