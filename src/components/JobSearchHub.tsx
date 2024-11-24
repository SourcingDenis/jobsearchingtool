'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Search, ArrowDown } from 'lucide-react'

interface JobSearchHubProps {
  isDark: boolean;
}

export function JobSearchHub({ isDark }: JobSearchHubProps) {
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    "Major Job Platforms",
    "Remote Opportunities",
    "Tech Industry",
    "Finance & Consulting",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

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
    <div className={`min-h-screen flex justify-center items-center ${
      isDark 
        ? 'bg-gradient-to-br from-[#2d3748] to-[#1a1a2e]' 
        : 'bg-gradient-to-br from-[#667eea] to-[#764ba2]'
    }`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
      </div>
      <main className="flex flex-col items-center justify-center w-full max-w-[800px] p-5 text-center pb-32 relative">
        <motion.div
          className="perspective-1000 mb-8 relative"
          animate={isReducedMotion ? {} : { rotateY: [0, 720, 1080, 1440, 1620, 1800] }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.3, 0.7, 0.9, 1],
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-[100px] h-[100px] relative">
            <div className="absolute inset-0 bg-white/10 rounded-lg blur-xl transform -rotate-12" />
            <img
              src="/google-logo.png"
              alt="Google Logo"
              className={`w-full h-full object-contain rounded-lg relative ${
                isDark ? 'brightness-90' : ''
              }`}
            />
          </div>
        </motion.div>
        
        <div className="relative mb-4">
          <motion.div
            className="absolute -left-12 -top-12 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -right-12 -bottom-12 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-2xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.h1
            className="text-[clamp(32px,8vw,64px)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 mb-4 tracking-tight relative"
            initial={isReducedMotion ? { width: 'auto' } : { width: 0 }}
            animate={isReducedMotion ? {} : { width: '100%' }}
            transition={{ duration: 2, ease: 'linear' }}
            onAnimationComplete={handleTypingComplete}
          >
            Job Search Hub
            <Sparkles className="absolute -right-8 top-0 w-8 h-8 text-yellow-300 animate-pulse" />
          </motion.h1>
        </div>

        <motion.div
          className="text-white/80 text-xl mb-12 h-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: -activeFeature * 32 }}
            transition={{ duration: 0.5 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="h-8 flex items-center justify-center">
                {feature}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          className="group relative px-12 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600/90 to-purple-600/90 rounded-full backdrop-blur-sm transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 shadow-lg hover:shadow-indigo-500/25"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          onClick={handleStartSearch}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative flex items-center gap-2">
            <Search className="w-5 h-5" />
            Start Your Job Search
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
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </main>
    </div>
  )
}