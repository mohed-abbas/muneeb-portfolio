// src/components/canvas/FloatingCodeIcon.tsx
'use client'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Box, Sphere, Torus, Octahedron } from '@react-three/drei'
import * as THREE from 'three'

interface FloatingCodeIconProps {
  icon: 'react' | 'node' | 'database' | 'api' | 'code' | 'cube'
  size?: number
  opacity?: number
}

function IconShape({ icon, size = 1 }: { icon: string; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2
    }
  })

  const shapes = {
    react: (
      <Sphere ref={meshRef} args={[size]}>
        <meshStandardMaterial 
          color="#61dafb" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#61dafb"
          emissiveIntensity={0.3}
        />
      </Sphere>
    ),
    node: (
      <Octahedron ref={meshRef} args={[size]}>
        <meshStandardMaterial 
          color="#68a063" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#68a063"
          emissiveIntensity={0.3}
        />
      </Octahedron>
    ),
    database: (
      <Box ref={meshRef} args={[size, size * 0.7, size]}>
        <meshStandardMaterial 
          color="#f59e0b" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#f59e0b"
          emissiveIntensity={0.3}
        />
      </Box>
    ),
    api: (
      <Torus ref={meshRef} args={[size, size * 0.4, 12, 24]}>
        <meshStandardMaterial 
          color="#10b981" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </Torus>
    ),
    code: (
      <Box ref={meshRef} args={[size, size, size]}>
        <meshStandardMaterial 
          color="#a855f7" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#a855f7"
          emissiveIntensity={0.3}
        />
      </Box>
    ),
    cube: (
      <Box ref={meshRef} args={[size, size, size]}>
        <meshStandardMaterial 
          color="#22d3ee" 
          wireframe 
          transparent 
          opacity={0.8}
          emissive="#22d3ee"
          emissiveIntensity={0.3}
        />
      </Box>
    )
  }

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      {shapes[icon as keyof typeof shapes]}
    </Float>
  )
}

export default function FloatingCodeIcon({ icon, size = 1, opacity = 1 }: FloatingCodeIconProps) {
  return (
    <div className="w-24 h-24" style={{ opacity }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={1} color="#22d3ee" />
        <pointLight position={[-3, -3, -3]} intensity={0.5} color="#a855f7" />
        
        <Suspense fallback={null}>
          <IconShape icon={icon} size={size} />
        </Suspense>
      </Canvas>
    </div>
  )
}