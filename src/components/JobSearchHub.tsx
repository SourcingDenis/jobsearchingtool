'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface JobSearchHubProps {
  isDark: boolean;
}

export function JobSearchHub({ isDark }: JobSearchHubProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  const handleTypingComplete = () => {
    setIsTypingComplete(true)
  }

  const handleStartSearch = () => {
    const howToSection = document.getElementById('how-to-section')
    if (howToSection) {
      howToSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen">
      <main className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
          <motion.img
            src="https://i.postimg.cc/prSnRk2y/Clean-Shot-2024-11-16-at-21-02-38.gif"
            alt="Google Search Animation"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-[800px] p-5 text-center pb-32">
          <motion.div
            className="perspective-1000 mb-8"
            animate={isReducedMotion ? {} : { rotateY: [0, 720, 1080, 1440, 1620, 1800] }}
            transition={{
              duration: 6,
              times: [0, 0.1, 0.3, 0.7, 0.9, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-[100px] h-[100px] relative">
              <img
                src="https://media.giphy.com/media/Zcc3ZeeZ5ztdw1oNSB/giphy.gif"
                alt="Google Logo"
                className={`w-full h-full object-contain rounded-lg shadow-lg ${
                  isDark ? 'brightness-90' : ''
                }`}
              />
            </div>
          </motion.div>
          <motion.h1
            className="text-[clamp(32px,6vw,48px)] font-bold text-white mb-8 tracking-tight"
            initial={isReducedMotion ? { width: 'auto' } : { width: 0 }}
            animate={isReducedMotion ? {} : { width: '100%' }}
            transition={{ duration: 2, ease: 'linear' }}
            onAnimationComplete={handleTypingComplete}
          >
            Job Search Hub
          </motion.h1>
          <motion.button
            className="group relative px-8 py-4 text-lg font-medium text-white bg-transparent border-2 border-white/30 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onClick={handleStartSearch}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center gap-2">
              Find your dream job ✨
            </span>
          </motion.button>
          <motion.div
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 2, duration: 1 },
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
          >
            <motion.svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="opacity-80"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </motion.svg>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 