// src/components/canvas/HeroCanvas.tsx
'use client'

import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  OrbitControls,
  Float,
  Text,
  Sphere,
  Box,
  Torus,
  Octahedron,
  Ring,
  Cylinder,
} from '@react-three/drei'
import * as THREE from 'three'

/*───────────────────────────────────────────────────────────────────────────
  Code‑Matrix Particle Background
──────────────────────────────────────────────────────────────────────────*/
function CodeMatrix() {
  const pointsRef = useRef<THREE.Points>(null)

  /** Pre‑compute particle positions once */
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

  /** Animate vertical drift and slow rotation */
  useFrame(({ clock }) => {
    if (!pointsRef.current) return

    pointsRef.current.rotation.y = clock.elapsedTime * 0.005

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < pos.length; i += 3) {
      pos[i + 1] -= 0.01 // move Y‑axis downwards
      if (pos[i + 1] < -15) pos[i + 1] = 15 // recycle
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* BufferAttribute now typed correctly via `args` */}
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
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

/*───────────────────────────────────────────────────────────────────────────
  Central Holographic Core
──────────────────────────────────────────────────────────────────────────*/
function CentralHolographicCore() {
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!coreRef.current) return
    coreRef.current.rotation.y = clock.elapsedTime * 0.3
    coreRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.1
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

/*───────────────────────────────────────────────────────────────────────────
  Central Data Rings
──────────────────────────────────────────────────────────────────────────*/
function CentralDataRing() {
  const ringRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    ringRef.current && (ringRef.current.rotation.z = clock.elapsedTime * 0.2)
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

/*───────────────────────────────────────────────────────────────────────────
  Corner Tech Elements (React / Next / TS / Node)
──────────────────────────────────────────────────────────────────────────*/
function CornerTechElements() {
  const cornerPositions = [
    { pos: [6, 4, -3] as const, tech: 'React', type: 'sphere', color: '#61dafb' },
    { pos: [-6, 4, -3] as const, tech: 'Next', type: 'box', color: '#ffffff' },
    { pos: [6, -4, -3] as const, tech: 'TypeScript', type: 'octahedron', color: '#3178c6' },
    { pos: [-6, -4, -3] as const, tech: 'Node', type: 'torus', color: '#68a063' },
  ]

  return (
    <group>
      {cornerPositions.map((item, idx) => (
        <Float key={idx} speed={0.6 + idx * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
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
            <Text position={[0, -2.2, 0]} fontSize={0.4} color={item.color} anchorX="center" anchorY="middle">
              {item.tech}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  )
}

/*───────────────────────────────────────────────────────────────────────────
  Edge Code Snippets (floating keywords)
──────────────────────────────────────────────────────────────────────────*/
function EdgeCodeElements() {
  const edgePositions = [
    { text: 'const', pos: [8, 2, 1] as const },
    { text: 'function', pos: [-8, 1, 2] as const },
    { text: '=>', pos: [7, -2, -2] as const },
    { text: '{ }', pos: [-7, -1, -1] as const },
    { text: 'async', pos: [4, 6, 0] as const },
    { text: 'await', pos: [-4, 6, 1] as const },
    { text: 'return', pos: [3, -6, -1] as const },
    { text: 'import', pos: [-3, -6, 0] as const },
  ]

  return (
    <group>
      {edgePositions.map((item, idx) => (
        <Float key={idx} speed={0.4 + Math.random() * 0.3} rotationIntensity={0.1} floatIntensity={0.2}>
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

/*───────────────────────────────────────────────────────────────────────────
  Corner Data Elements (DB / API / Cache / CDN)
──────────────────────────────────────────────────────────────────────────*/
function CornerDataElements() {
  const dataElements = [
    { pos: [8, 6, -4] as const, type: 'cylinder', color: '#f59e0b', label: 'DB' },
    { pos: [-8, 6, -4] as const, type: 'sphere', color: '#ef4444', label: 'API' },
    { pos: [8, -6, -4] as const, type: 'box', color: '#8b5cf6', label: 'Cache' },
    { pos: [-8, -6, -4] as const, type: 'torus', color: '#06b6d4', label: 'CDN' },
  ]

  return (
    <group>
      {dataElements.map((item, idx) => (
        <Float key={idx} speed={0.3 + idx * 0.1} rotationIntensity={0.15} floatIntensity={0.25}>
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

/*───────────────────────────────────────────────────────────────────────────
  Connection Lines (center ➜ corner tech)
──────────────────────────────────────────────────────────────────────────*/
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    linesRef.current && (linesRef.current.rotation.y = clock.elapsedTime * 0.01)
  })

  const connections = useMemo(() => {
    const result: JSX.Element[] = []
    const points = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(6, 4, -3),
      new THREE.Vector3(-6, 4, -3),
      new THREE.Vector3(6, -4, -3),
      new THREE.Vector3(-6, -4, -3),
    ]

    for (let i = 1; i < points.length; i++) {
      const geom = new THREE.BufferGeometry().setFromPoints([points[0], points[i]])
      result.push(
        <primitive
          key={i}
          object={new THREE.Line(
            geom,
            new THREE.LineBasicMaterial({ color: '#22d3ee', transparent: true, opacity: 0.2 })
          )}
        />
      )
    }
    return result
  }, [])

  return <group ref={linesRef}>{connections}</group>
}

/*───────────────────────────────────────────────────────────────────────────
  Slow orbital camera
──────────────────────────────────────────────────────────────────────────*/
function CameraController() {
  const { camera } = useThree()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    camera.position.x = Math.sin(t * 0.05) * 1.2
    camera.position.y = Math.sin(t * 0.07) * 0.8
    camera.position.z = 12 + Math.sin(t * 0.04) * 2
    camera.lookAt(0, 0, 0)
  })

  return null
}

/*───────────────────────────────────────────────────────────────────────────
  Main canvas export
──────────────────────────────────────────────────────────────────────────*/
export default function HeroCanvas() {
  return (
    <div className="w-full h-full canvas-container-enhanced">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.1} color="#ffffff" />
        <pointLight position={[10, 10, 8]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[-10, -10, -8]} intensity={0.6} color="#a855f7" />
        <pointLight position={[0, 0, 15]} intensity={0.4} color="#ec4899" />
        <pointLight position={[8, 8, 0]} intensity={0.3} color="#10b981" />
        <pointLight position={[-8, -8, 0]} intensity={0.3} color="#f59e0b" />

        {/* Scene elements */}
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
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
