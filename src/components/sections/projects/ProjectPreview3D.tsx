// src/components/sections/projects/OptimizedProjectPreview3D.tsx
'use client'
import React, { useRef, Suspense, useMemo, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { Project } from '@/types'
import DetailedLMSModel from '../../canvas/models/DetailedLMSModel'

interface ProjectPreview3DProps {
  modelUrl?: string
  index: number
  isHovered: boolean
  category: Project['category']
  projectId?: string
}

interface FloatingProjectModelProps {
  index: number
  isHovered: boolean
  category: Project['category']
  projectId?: string
}

// Memoized component for better performance
const FloatingProjectModel = React.memo<FloatingProjectModelProps>(({ 
  index, 
  isHovered, 
  category, 
  projectId 
}) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  
  // Optimized animation with requestAnimationFrame timing
  useFrame((state, delta) => {
    if (meshRef.current && groupRef.current) {
      const time = state.clock.elapsedTime
      const hoverMultiplier = isHovered ? 1.3 : 1
      
      // Use delta for frame-independent animation
      const rotationSpeed = delta * hoverMultiplier
      const floatSpeed = delta * 2 * hoverMultiplier
      
      // Smooth rotation with easing
      const targetRotationY = Math.sin(time * 0.4 + index) * 0.3 * hoverMultiplier
      const targetRotationX = Math.cos(time * 0.25 + index) * 0.15 * hoverMultiplier
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        rotationSpeed * 2
      )
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotationX,
        rotationSpeed * 2
      )
      
      // Smooth floating motion
      groupRef.current.position.y = Math.sin(time * 1.5 + index) * 0.08 * hoverMultiplier
      
      // Scale transition on hover
      const targetScale = isHovered ? 1.08 : 1
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        delta * 8
      )
    }
  })

  // Use specific models for featured projects
  if (projectId === 'lms-platform') {
    return <DetailedLMSModel isHovered={isHovered} index={index} />
  }

  // Optimized category configurations
  const categoryConfig = useMemo(() => ({
    web: {
      primary: '#8b5cf6',
      secondary: '#06b6d4',
      accent: '#ec4899',
      geometry: 'laptop'
    },
    mobile: {
      primary: '#10b981',
      secondary: '#3b82f6',
      accent: '#f59e0b',
      geometry: 'phone'
    },
    desktop: {
      primary: '#3b82f6',
      secondary: '#06b6d4',
      accent: '#8b5cf6',
      geometry: 'desktop'
    },
    plugin: {
      primary: '#f59e0b',
      secondary: '#ef4444',
      accent: '#8b5cf6',
      geometry: 'plugin'
    },
    other: {
      primary: '#6b7280',
      secondary: '#9ca3af',
      accent: '#d1d5db',
      geometry: 'cube'
    }
  }), [])

  const config = categoryConfig[category]
  
  // Memoized materials for better performance
  const materials = useMemo(() => ({
    primary: new THREE.MeshStandardMaterial({
      color: config.primary,
      emissive: config.primary,
      emissiveIntensity: 0.12,
      metalness: 0.8,
      roughness: 0.2,
    }),
    secondary: new THREE.MeshStandardMaterial({
      color: config.secondary,
      emissive: config.secondary,
      emissiveIntensity: 0.15,
      metalness: 0.7,
      roughness: 0.3,
    }),
    accent: new THREE.MeshStandardMaterial({
      color: config.accent,
      emissive: config.accent,
      emissiveIntensity: 0.25,
      metalness: 0.9,
      roughness: 0.1,
    })
  }), [config])

  // Optimized geometry rendering
  const renderGeometry = useCallback(() => {
    switch (config.geometry) {
      case 'laptop':
        return (
          <group>
            {/* Laptop base - optimized with fewer segments */}
            <mesh geometry={new THREE.BoxGeometry(1.8, 0.12, 1.2)} material={materials.primary} />
            {/* Laptop screen */}
            <mesh 
              geometry={new THREE.BoxGeometry(1.6, 1.1, 0.06)} 
              material={materials.secondary}
              position={[0, 0.55, -0.5]}
              rotation={[-0.15, 0, 0]}
            />
            {/* Screen content */}
            <mesh 
              geometry={new THREE.BoxGeometry(1.4, 0.9, 0.02)} 
              material={new THREE.MeshStandardMaterial({ 
                color: '#0f172a', 
                emissive: '#1e293b', 
                emissiveIntensity: 0.3 
              })}
              position={[0, 0.55, -0.47]}
              rotation={[-0.15, 0, 0]}
            />
          </group>
        )
      
      case 'phone':
        return (
          <mesh geometry={new THREE.BoxGeometry(0.7, 1.4, 0.12)} material={materials.primary} />
        )
      
      case 'desktop':
        return (
          <group>
            {/* Monitor */}
            <mesh 
              geometry={new THREE.BoxGeometry(1.6, 1.1, 0.12)} 
              material={materials.primary}
              position={[0, 0.4, 0]}
            />
            {/* Stand */}
            <mesh 
              geometry={new THREE.BoxGeometry(0.25, 0.7, 0.25)} 
              material={materials.secondary}
              position={[0, -0.35, 0]}
            />
          </group>
        )
      
      case 'plugin':
        return (
          <mesh 
            geometry={new THREE.TorusGeometry(0.8, 0.35, 8, 16)} 
            material={materials.primary}
          />
        )
      
      default:
        return (
          <mesh 
            geometry={new THREE.OctahedronGeometry(0.9)} 
            material={materials.primary}
          />
        )
    }
  }, [config.geometry, materials])

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.25}>
        <mesh ref={meshRef}>
          {renderGeometry()}
        </mesh>

        {/* Optimized floating accent elements */}
        <mesh position={[-1.2, 0.9, 0.4]}>
          <sphereGeometry args={[0.09, 8, 8]} />
          <primitive object={materials.accent} />
        </mesh>
        
        <mesh position={[1.1, -0.7, 0.3]}>
          <octahedronGeometry args={[0.07]} />
          <primitive object={materials.secondary} />
        </mesh>

        <mesh position={[0.9, 0.9, -0.4]}>
          <boxGeometry args={[0.09, 0.09, 0.09]} />
          <primitive object={materials.accent} />
        </mesh>
      </Float>
    </group>
  )
})

// Optimized loading fallback
const LoadingFallback = React.memo(() => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial 
      color="#374151"
      wireframe
      transparent
      opacity={0.3}
    />
  </mesh>
))

// Memoized lighting setup
const LightingSetup = React.memo(() => (
  <>
    <ambientLight intensity={0.35} />
    <pointLight 
      position={[3, 3, 3]} 
      intensity={0.9} 
      color="#8b5cf6" 
      distance={8}
      decay={2}
    />
    <pointLight 
      position={[-3, -2, 3]} 
      intensity={0.7} 
      color="#06b6d4" 
      distance={6}
      decay={2}
    />
    <pointLight 
      position={[0, -3, 2]} 
      intensity={0.5} 
      color="#ec4899" 
      distance={5}
      decay={2}
    />
  </>
))

export default function ProjectPreview3D({ 
  modelUrl, 
  index, 
  isHovered, 
  category,
  projectId
}: ProjectPreview3DProps) {
  // Optimize canvas settings for performance
  const canvasSettings = useMemo(() => ({
    camera: { position: [0, 0, 3.5] as [number, number, number], fov: 45 },
    gl: { 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' as const,
      stencil: false,
      depth: true
    },
    dpr: [1, 2] as [number, number],
    performance: { min: 0.8 },
    frameloop: 'demand' as const
  }), [])

  return (
    <div className="w-full h-full">
      <Canvas 
        {...canvasSettings}
        style={{ background: 'transparent' }}
      >
        <LightingSetup />
        
        <Suspense fallback={<LoadingFallback />}>
          <FloatingProjectModel 
            index={index} 
            isHovered={isHovered} 
            category={category}
            projectId={projectId}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}