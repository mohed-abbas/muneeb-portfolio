// src/components/ui/Loading.tsx
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}

export default function Loading({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}: LoadingProps) {
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Animated loader */}
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-2 border-slate-700 border-t-cyan-400 rounded-full animate-spin`} />
        
        {/* Inner ring */}
        <div 
          className={`absolute inset-0 ${sizeClasses[size]} border-2 border-transparent border-r-purple-400 rounded-full animate-spin`}
          style={{ 
            animationDelay: '0.1s', 
            animationDuration: '0.8s',
            animationDirection: 'reverse'
          }}
        />
        
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Loading text */}
      {text && (
        <p className="text-slate-400 text-sm animate-pulse">
          {text}
        </p>
      )}
    </div>
  )
}

// Skeleton loader for content
interface SkeletonProps {
  lines?: number
  className?: string
}

export function Skeleton({ lines = 3, className = '' }: SkeletonProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`skeleton h-4 rounded ${
            index === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

// Card skeleton
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`glass-effect rounded-xl p-6 ${className}`}>
      <div className="skeleton h-48 rounded-lg mb-4" />
      <div className="skeleton h-6 rounded mb-2" />
      <div className="skeleton h-4 rounded w-3/4 mb-4" />
      <div className="flex space-x-2">
        <div className="skeleton h-8 w-16 rounded" />
        <div className="skeleton h-8 w-16 rounded" />
        <div className="skeleton h-8 w-16 rounded" />
      </div>
    </div>
  )
}