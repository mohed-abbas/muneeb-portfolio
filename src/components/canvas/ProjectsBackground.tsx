// src/components/canvas/ProjectsBackground.tsx
'use client'
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, Box, Octahedron, Torus } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingGeometryProps {
  position: [number, number, number]
  geometry: 'sphere' | 'box' | 'octahedron' | 'torus'
  color: string
  speed?: number
  size?: number
}

interface ParticleFieldProps {
  count?: number
}

// Floating geometric shapes for background
function FloatingGeometry({ 
  position, 
  geometry, 
  color, 
  speed = 1, 
  size = 1 
}: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed
      meshRef.current.rotation.x = Math.sin(time) * 0.2
      meshRef.current.rotation.y = Math.cos(time) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.5
      meshRef.current.position.x = position[0] + Math.cos(time * 1.5) * 0.3
    }
  })

  const renderGeometry = () => {
    const materialProps = {
      color,
      emissive: color,
      emissiveIntensity: 0.1,
      transparent: true,
      opacity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
    }

    switch (geometry) {
      case 'sphere':
        return (
          <Sphere ref={meshRef} args={[size * 0.8]} position={position}>
            <meshStandardMaterial {...materialProps} />
          </Sphere>
        )
      case 'box':
        return (
          <Box ref={meshRef} args={[size, size, size]} position={position}>
            <meshStandardMaterial {...materialProps} />
          </Box>
        )
      case 'octahedron':
        return (
          <Octahedron ref={meshRef} args={[size * 0.8]} position={position}>
            <meshStandardMaterial {...materialProps} />
          </Octahedron>
        )
      case 'torus':
        return (
          <Torus ref={meshRef} args={[size * 0.6, size * 0.3, 8, 16]} position={position}>
            <meshStandardMaterial {...materialProps} />
          </Torus>
        )
      default:
        return null
    }
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
      {renderGeometry()}
    </Float>
  )
}

// Particle field for ambient effect
function ParticleField({ count = 150 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    
    return positions
  }, [count])

  const particleColors = useMemo(() => {
    const colors = new Float32Array(count * 3)
    const colorPalette = [
      new THREE.Color('#8b5cf6'), // Purple
      new THREE.Color('#06b6d4'), // Cyan
      new THREE.Color('#ec4899'), // Pink
      new THREE.Color('#10b981'), // Green
      new THREE.Color('#f59e0b'), // Orange
    ]
    
    for (let i = 0; i < count; i++) {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return colors
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlesPosition}
          count={particlesPosition.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particleColors}
          count={particleColors.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Animated grid lines
function GridLines() {
  const gridRef = useRef<THREE.LineSegments>(null)
  
  const gridGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    
    // Create grid lines
    for (let i = -10; i <= 10; i += 2) {
      // Horizontal lines
      vertices.push(-10, 0, i, 10, 0, i)
      // Vertical lines  
      vertices.push(i, 0, -10, i, 0, 10)
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geometry
  }, [])
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y = state.clock.elapsedTime * 0.02
      gridRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })
  
  return (
    <lineSegments ref={gridRef} geometry={gridGeometry} position={[0, -8, 0]}>
      <lineBasicMaterial 
        color="#8b5cf6" 
        transparent 
        opacity={0.1} 
        linewidth={1}
      />
    </lineSegments>
  )
}

// Main background scene
function BackgroundScene() {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      
      {/* Colored point lights */}
      <pointLight position={[8, 8, 8]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[-8, -8, 4]} intensity={0.3} color="#06b6d4" />
      <pointLight position={[6, -8, -4]} intensity={0.4} color="#ec4899" />
      <pointLight position={[-6, 8, -6]} intensity={0.3} color="#10b981" />

      {/* Floating geometric shapes */}
      <FloatingGeometry 
        position={[-12, 4, -8]} 
        geometry="octahedron"
        color="#8b5cf6"
        speed={0.8}
        size={1.2}
      />
      
      <FloatingGeometry 
        position={[12, -3, -6]} 
        geometry="sphere"
        color="#06b6d4"
        speed={1.2}
        size={1.0}
      />
      
      <FloatingGeometry 
        position={[-6, -6, -10]} 
        geometry="box"
        color="#ec4899"
        speed={0.6}
        size={0.8}
      />
      
      <FloatingGeometry 
        position={[10, 6, -12]} 
        geometry="torus"
        color="#10b981"
        speed={1.0}
        size={1.1}
      />

      <FloatingGeometry 
        position={[0, 8, -15]} 
        geometry="octahedron"
        color="#f59e0b"
        speed={0.9}
        size={0.9}
      />

      <FloatingGeometry 
        position={[-10, 0, -5]} 
        geometry="sphere"
        color="#ef4444"
        speed={0.7}
        size={0.7}
      />

      {/* Particle field */}
      <ParticleField count={200} />
      
      {/* Animated grid */}
      <GridLines />
    </>
  )
}

export default function ProjectsBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />
      
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
        style={{ 
          background: 'transparent',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <BackgroundScene />
      </Canvas>
      
      {/* Additional gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-transparent to-gray-900/60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </div>
  )
}