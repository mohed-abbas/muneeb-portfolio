
// src/components/canvas/models/DetailedLMSModel.tsx
'use client'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

interface DetailedLMSModelProps {
  isHovered: boolean
  index: number
}

// Optimized laptop screen content component
const LaptopScreen = React.memo(() => {
  const screenRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (screenRef.current) {
      // Subtle glow animation
      const intensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      screenRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.emissiveIntensity = intensity
        }
      })
    }
  })

  return (
    <group ref={screenRef}>
      {/* Screen bezel */}
      <RoundedBox args={[2.8, 1.8, 0.05]} radius={0.05} smoothness={4} position={[0, 0, 0.025]}>
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>
      
      {/* Screen content area */}
      <RoundedBox args={[2.6, 1.6, 0.02]} radius={0.03} smoothness={4} position={[0, 0, 0.055]}>
        <meshStandardMaterial 
          color="#0f172a"
          emissive="#1e293b"
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* UI Elements */}
      {/* Header bar */}
      <RoundedBox args={[2.4, 0.15, 0.01]} radius={0.02} smoothness={4} position={[0, 0.65, 0.07]}>
        <meshStandardMaterial 
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
        />
      </RoundedBox>

      {/* Navigation cards */}
      {[-0.6, 0, 0.6].map((x, i) => (
        <RoundedBox 
          key={i}
          args={[0.4, 0.3, 0.01]} 
          radius={0.02} 
          smoothness={4} 
          position={[x, 0.1, 0.07]}
        >
          <meshStandardMaterial 
            color="#06b6d4"
            emissive="#06b6d4"
            emissiveIntensity={0.2}
          />
        </RoundedBox>
      ))}

      {/* Progress bars */}
      {[-0.8, -0.2, 0.4].map((x, i) => (
        <RoundedBox 
          key={i}
          args={[0.6, 0.08, 0.01]} 
          radius={0.01} 
          smoothness={4} 
          position={[x, -0.3, 0.07]}
        >
          <meshStandardMaterial 
            color="#10b981"
            emissive="#10b981"
            emissiveIntensity={0.3}
          />
        </RoundedBox>
      ))}

      {/* Chart representation */}
      <RoundedBox args={[1.2, 0.6, 0.01]} radius={0.02} smoothness={4} position={[0, -0.6, 0.07]}>
        <meshStandardMaterial 
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.2}
        />
      </RoundedBox>
    </group>
  )
})

// Optimized laptop base component
const LaptopBase = React.memo(() => {
  return (
    <group>
      {/* Laptop base */}
      <RoundedBox args={[3.2, 0.15, 2.2]} radius={0.08} smoothness={4} position={[0, -0.9, 0.4]}>
        <meshStandardMaterial 
          color="#374151"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Trackpad */}
      <RoundedBox args={[0.8, 0.02, 0.6]} radius={0.03} smoothness={4} position={[0, -0.82, 0.2]}>
        <meshStandardMaterial 
          color="#1f2937"
          metalness={0.9}
          roughness={0.1}
        />
      </RoundedBox>

      {/* Keyboard representation */}
      {Array.from({ length: 4 }, (_, row) => 
        Array.from({ length: 12 }, (_, col) => (
          <RoundedBox 
            key={`${row}-${col}`}
            args={[0.12, 0.02, 0.12]} 
            radius={0.01} 
            smoothness={2}
            position={[
              -1.4 + col * 0.24,
              -0.82,
              0.8 - row * 0.15
            ]}
          >
            <meshStandardMaterial 
              color="#4b5563"
              metalness={0.6}
              roughness={0.4}
            />
          </RoundedBox>
        ))
      )}
    </group>
  )
})

// Floating UI elements around the laptop
const FloatingUIElements = React.memo(({ isHovered }: { isHovered: boolean }) => {
  const elementsRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (elementsRef.current) {
      const time = state.clock.elapsedTime
      const hoverMultiplier = isHovered ? 1.5 : 1
      
      elementsRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Group) {
          child.position.y = Math.sin(time * 2 + index) * 0.1 * hoverMultiplier
          child.rotation.y = time * 0.5 + index
        }
      })
    }
  })

  const uiElements = useMemo(() => [
    { position: [-2.5, 1, 1], color: '#8b5cf6', icon: 'book' },
    { position: [2.5, 0.5, 0.5], color: '#06b6d4', icon: 'users' },
    { position: [-2, -1, -0.5], color: '#10b981', icon: 'chart' },
    { position: [2, 1.5, -1], color: '#f59e0b', icon: 'message' },
  ], [])

  return (
    <group ref={elementsRef}>
      {uiElements.map((element, index) => (
        <Float key={index} speed={2 + index * 0.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <group position={element.position as [number, number, number]}>
            {/* Icon background */}
            <RoundedBox args={[0.3, 0.3, 0.05]} radius={0.05} smoothness={4}>
              <meshStandardMaterial 
                color={element.color}
                emissive={element.color}
                emissiveIntensity={0.3}
                transparent
                opacity={0.8}
              />
            </RoundedBox>
            
            {/* Icon symbol (simplified geometric representation) */}
            <RoundedBox args={[0.15, 0.15, 0.02]} radius={0.02} smoothness={4} position={[0, 0, 0.035]}>
              <meshStandardMaterial 
                color="white"
                emissive="white"
                emissiveIntensity={0.5}
              />
            </RoundedBox>
          </group>
        </Float>
      ))}
    </group>
  )
})

// Main LMS Model component
export default function DetailedLMSModel({ isHovered, index }: DetailedLMSModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime
      const hoverMultiplier = isHovered ? 1.2 : 1
      
      // Smooth rotation with easing
      const targetRotationY = Math.sin(time * 0.5 + index) * 0.2 * hoverMultiplier
      const targetRotationX = Math.cos(time * 0.3 + index) * 0.1 * hoverMultiplier
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      )
      
      // Scale effect on hover
      const targetScale = isHovered ? 1.05 : 1
      groupRef.current.scale.lerp(
        new THREE.Vector3(targetScale, targetScale, targetScale),
        0.1
      )
      
      // Subtle floating motion
      groupRef.current.position.y = Math.sin(time * 2 + index) * 0.05
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Screen (tilted back like a real laptop) */}
        <group rotation={[-0.1, 0, 0]} position={[0, 0, -0.3]}>
          <LaptopScreen />
        </group>
        
        {/* Laptop base */}
        <LaptopBase />
        
        {/* Floating UI elements */}
        <FloatingUIElements isHovered={isHovered} />
        
        {/* Ambient particles */}
        <group>
          {Array.from({ length: 8 }, (_, i) => (
            <Float key={i} speed={3 + i * 0.2} rotationIntensity={0.1} floatIntensity={0.4}>
              <mesh position={[
                (Math.random() - 0.5) * 6,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 4
              ]}>
                <sphereGeometry args={[0.02]} />
                <meshStandardMaterial 
                  color="#8b5cf6"
                  emissive="#8b5cf6"
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.6}
                />
              </mesh>
            </Float>
          ))}
        </group>
      </group>
    </Float>
  )
}