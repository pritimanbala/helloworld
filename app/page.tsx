'use client'

import { AnimatedSlides } from '@/components/animated-slides'
import { HeroSection } from '@/components/hero-section'
import { useState, useEffect } from 'react'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show content after loader + slides duration (3 seconds + 6 seconds) + transition time (0.5 seconds)
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 9500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatedSlides />
      {showContent && (
        <main>
          <HeroSection />
        </main>
      )}
    </>
  )
}
