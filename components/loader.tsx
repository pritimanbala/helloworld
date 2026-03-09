'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

// Typing animation component
const TypingText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
      let currentIndex = 0
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typeInterval)
        }
      }, 15)
      return () => clearInterval(typeInterval)
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay])

  return (
    <span className={className}>
      {displayedText}
      {isTyping && displayedText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loader

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
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
              <TypingText text="INDUJAA RAJKUMAR" delay={600} />
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-accent text-lg"
              style={{ fontFamily: '"Courier New", monospace' }}
            >
              <TypingText text="ASPIRIING CHEMICAL ENGINEERING  DEPARTMENT LEGISLATOR" delay={1200} />
            </motion.p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              className="mt-8 h-1 bg-accent mx-auto max-w-xs"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
