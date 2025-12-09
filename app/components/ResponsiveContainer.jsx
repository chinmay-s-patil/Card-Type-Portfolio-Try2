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
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
        width: BASE_WIDTH,
        height: BASE_HEIGHT,
        position: 'relative',
        margin: '0 auto'
      }}
    >
      {/* Top Left - Name Container */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          width: '250px',
          height: '80px',
          border: '3px dotted #ff0000',
          borderRadius: '8px'
        }}
      />

      {/* Right Side - Navbar Container */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          width: '200px',
          height: '500px',
          border: '3px dotted #ff0000',
          borderRadius: '8px'
        }}
      />

      {/* Main Center Container */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1400px',
          height: '900px',
          border: '3px dotted #ff0000',
          borderRadius: '8px',
          padding: '60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}
      >
        {/* Kicker - Small green text area */}
        <div
          style={{
            width: '300px',
            height: '40px',
            border: '3px dotted #00ff00',
            borderRadius: '8px'
          }}
        />

        {/* Title - Big bold title area */}
        <div
          style={{
            width: '100%',
            height: '120px',
            border: '3px dotted #ffffff',
            borderRadius: '8px'
          }}
        />

        {/* About Section - 1-2 lines description */}
        <div
          style={{
            width: '100%',
            height: '80px',
            border: '3px dotted #808080',
            borderRadius: '8px'
          }}
        />
      </div>
    </div>
  )
}