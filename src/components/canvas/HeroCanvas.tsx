// src/components/canvas/HeroCanvas.tsx
'use client'
import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Float, Text, Sphere, Box, Torus, Octahedron, Ring, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// Background Code Matrix
function CodeMatrix() {
  const pointsRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 300
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = 15 + Math.random() * 25
      positions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30
      positions[i * 3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.01
        if (positions[i + 1] < -15) {
          positions[i + 1] = 15
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.01} 
        color="#22d3ee" 
        transparent 
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Central Holographic Core
function CentralHolographicCore() {
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.3
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.15}>
      <group position={[0, 0, 0]}>
        <Octahedron ref={coreRef} args={[1]}>
          <meshStandardMaterial 
            color="#a855f7" 
            transparent 
            opacity={0.8}
            emissive="#a855f7"
            emissiveIntensity={0.3}
            wireframe
          />
        </Octahedron>
      </group>
    </Float>
  )
}

// Central Data Ring
function CentralDataRing() {
  const ringRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={ringRef} position={[0, 0, 0]}>
      <Ring args={[2, 2.2, 32]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial 
          color="#22d3ee" 
          transparent 
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>
      <Ring args={[2.5, 2.7, 32]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <meshBasicMaterial 
          color="#10b981" 
          transparent 
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </Ring>
    </group>
  )
}

// Corner Tech Elements
function CornerTechElements() {
  const cornerPositions = [
    { pos: [6, 4, -3], tech: 'React', type: 'sphere', color: '#61dafb' },
    { pos: [-6, 4, -3], tech: 'Next', type: 'box', color: '#ffffff' },
    { pos: [6, -4, -3], tech: 'TypeScript', type: 'octahedron', color: '#3178c6' },
    { pos: [-6, -4, -3], tech: 'Node', type: 'torus', color: '#68a063' }
  ]

  return (
    <group>
      {cornerPositions.map((item, index) => (
        <Float key={index} speed={0.6 + index * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
          <group position={item.pos}>
            {item.type === 'sphere' && (
              <Sphere args={[1.4]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.7}
                  emissive={item.color}
                  emissiveIntensity={0.2}
                />
              </Sphere>
            )}
            
            {item.type === 'box' && (
              <Box args={[2, 2, 2]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.7}
                  emissive={item.color}
                  emissiveIntensity={0.15}
                />
              </Box>
            )}
            
            {item.type === 'octahedron' && (
              <Octahedron args={[1.6]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.7}
                  emissive={item.color}
                  emissiveIntensity={0.2}
                />
              </Octahedron>
            )}
            
            {item.type === 'torus' && (
              <Torus args={[1.4, 0.5, 12, 48]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.7}
                  emissive={item.color}
                  emissiveIntensity={0.2}
                />
              </Torus>
            )}
            
            <Text
              position={[0, -2.2, 0]}
              fontSize={0.4}
              color={item.color}
              anchorX="center"
              anchorY="middle"
            >
              {item.tech}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  )
}

// Edge Code Elements
function EdgeCodeElements() {
  const edgePositions = [
    { text: 'const', pos: [8, 2, 1] },
    { text: 'function', pos: [-8, 1, 2] },
    { text: '=>', pos: [7, -2, -2] },
    { text: '{ }', pos: [-7, -1, -1] },
    { text: 'async', pos: [4, 6, 0] },
    { text: 'await', pos: [-4, 6, 1] },
    { text: 'return', pos: [3, -6, -1] },
    { text: 'import', pos: [-3, -6, 0] }
  ]

  return (
    <group>
      {edgePositions.map((item, index) => (
        <Float 
          key={index} 
          speed={0.4 + Math.random() * 0.3} 
          rotationIntensity={0.1} 
          floatIntensity={0.2}
        >
          <Text
            position={item.pos}
            rotation={[0, Math.random() * Math.PI, 0]}
            fontSize={0.35}
            color="#10b981"
            anchorX="center"
            anchorY="middle"
          >
            {item.text}
          </Text>
        </Float>
      ))}
    </group>
  )
}

// Corner Data Elements
function CornerDataElements() {
  const dataElements = [
    { pos: [8, 6, -4], type: 'cylinder', color: '#f59e0b', label: 'DB' },
    { pos: [-8, 6, -4], type: 'sphere', color: '#ef4444', label: 'API' },
    { pos: [8, -6, -4], type: 'box', color: '#8b5cf6', label: 'Cache' },
    { pos: [-8, -6, -4], type: 'torus', color: '#06b6d4', label: 'CDN' }
  ]

  return (
    <group>
      {dataElements.map((item, index) => (
        <Float key={index} speed={0.3 + index * 0.1} rotationIntensity={0.15} floatIntensity={0.25}>
          <group position={item.pos}>
            {item.type === 'cylinder' && (
              <Cylinder args={[0.6, 0.6, 1.4, 8]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.6}
                  emissive={item.color}
                  emissiveIntensity={0.1}
                />
              </Cylinder>
            )}
            
            {item.type === 'sphere' && (
              <Sphere args={[0.8]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.6}
                  emissive={item.color}
                  emissiveIntensity={0.1}
                />
              </Sphere>
            )}
            
            {item.type === 'box' && (
              <Box args={[1.2, 1.2, 1.2]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.6}
                  emissive={item.color}
                  emissiveIntensity={0.1}
                />
              </Box>
            )}
            
            {item.type === 'torus' && (
              <Torus args={[0.8, 0.3, 8, 16]}>
                <meshStandardMaterial 
                  color={item.color} 
                  wireframe 
                  transparent 
                  opacity={0.6}
                  emissive={item.color}
                  emissiveIntensity={0.1}
                />
              </Torus>
            )}
            
            <Text
              position={[0, -1.4, 0]}
              fontSize={0.3}
              color={item.color}
              anchorX="center"
              anchorY="middle"
            >
              {item.label}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  )
}

// Connection Lines
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  const connections = useMemo(() => {
    const lines = []
    const centerPoints = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(6, 4, -3),
      new THREE.Vector3(-6, 4, -3),
      new THREE.Vector3(6, -4, -3),
      new THREE.Vector3(-6, -4, -3)
    ]
    
    for (let i = 1; i < centerPoints.length; i++) {
      const points = [centerPoints[0], centerPoints[i]]
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      
      lines.push(
        <line key={i} geometry={geometry}>
          <lineBasicMaterial 
            color="#22d3ee" 
            transparent 
            opacity={0.2} 
          />
        </line>
      )
    }
    
    return lines
  }, [])

  return <group ref={linesRef}>{connections}</group>
}

// Camera Controller
function CameraController() {
  const { camera } = useThree()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    camera.position.x = Math.sin(time * 0.05) * 1.2
    camera.position.y = Math.sin(time * 0.07) * 0.8
    camera.position.z = 12 + Math.sin(time * 0.04) * 2
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Main Canvas Component
export default function HeroCanvas() {
  return (
    <div className="w-full h-full canvas-container-enhanced">
      <Canvas
        camera={{ 
          position: [0, 0, 12], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.1} color="#ffffff" />
        
        <pointLight position={[10, 10, 8]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-10, -10, -8]} intensity={0.6} color="#a855f7" />
        <pointLight position={[0, 0, 15]} intensity={0.4} color="#ec4899" />
        
        <pointLight position={[8, 8, 0]} intensity={0.3} color="#10b981" />
        <pointLight position={[-8, -8, 0]} intensity={0.3} color="#f59e0b" />

        <Suspense fallback={null}>
          <CodeMatrix />
          <ConnectionLines />
          
          <CentralHolographicCore />
          <CentralDataRing />
          
          <CornerTechElements />
          <EdgeCodeElements />
          <CornerDataElements />
        </Suspense>

        <CameraController />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}
