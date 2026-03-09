'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Slide {
  question: string
  answer: string
  answerColor: string
}

const slides: Slide[] = [
  {
    question: "We don't approach you with fake promises",
    answer: "We fulfill it!",
    answerColor: 'from-red-500 to-red-600'
  },
  {
    question: "Your vision deserves authentic execution",
    answer: "We deliver excellence!",
    answerColor: 'from-blue-500 to-blue-600'
  },
  {
    question: "Transparency over trends",
    answer: "We build trust!",
    answerColor: 'from-emerald-500 to-emerald-600'
  }
]

export function AnimatedSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showSlides, setShowSlides] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    // First show the initial loader
    const loaderTimer = setTimeout(() => {
      setIsLoading(false)
      // Start showing slides after loader
      setCurrentSlide(0)
    }, 3000) // 3 seconds loader

    // Show slides sequentially, each for 2 seconds
    slides.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCurrentSlide(index)
      }, 3000 + index * 2000) // Start after loader + slide timing
      timers.push(timer)
    })

    // Hide slides and unmount component after all slides are done
    const hideTimer = setTimeout(() => {
      setShowSlides(false)
    }, 3000 + slides.length * 2000)

    return () => {
      clearTimeout(loaderTimer)
      clearTimeout(hideTimer)
      timers.forEach(clearTimeout)
    }
  }, [])

  // Return null when component should be unmounted
  if (!showSlides) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-background">
      <AnimatePresence>
        {isLoading ? (
          // Initial Loader
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.2
              }}
              className="text-center"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-24 h-24 mx-auto mb-8 border-4 border-primary border-t-transparent rounded-full"
              />
              
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl font-bold text-primary mb-4"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                INDUJAA RAJKUMAR
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-accent text-lg"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                ASPIRIING CHEMICAL ENGINEERING  DEPARTMENT LEGISLATOR
              </motion.p>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                className="mt-8 h-1 bg-accent mx-auto max-w-xs"
              />
            </motion.div>
          </motion.div>
        ) : (
          // Animated Slides
          <motion.div
            key="slides"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden"
          >
            {/* Slides Container */}
            <div className="relative w-full h-screen flex items-center justify-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 transition-all duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Question Text - White, appears first */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 20
                    }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-center mb-16"
                  >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight">
                      {slide.question}
                    </h2>
                  </motion.div>

                  {/* Answer Text - Colored, animates from below */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      y: index === currentSlide ? 0 : 40
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-center"
                  >
                    <p
                      className={`text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r ${slide.answerColor} bg-clip-text text-transparent`}
                    >
                      {slide.answer}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
