'use client'
import { useState, useEffect } from 'react'

export default function ResponsiveContainer({ children, className = '', style = {} }) {
  const [scale, setScale] = useState(1)
  
  // Base reference dimensions
  const BASE_WIDTH = 1920
  const BASE_HEIGHT = 1080

  useEffect(() => {
    const calculateScale = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      // Calculate scale based on viewport dimensions relative to base
      const widthScale = viewportWidth / BASE_WIDTH
      const heightScale = viewportHeight / BASE_HEIGHT
      
      // Use the smaller scale to prevent overflow
      const newScale = Math.min(widthScale, heightScale)
      setScale(newScale)
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  return (
    <div
      className={className}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: '100%',
        minHeight: '100vh',
        ...style
      }}
    >
      {children}
    </div>
  )
}