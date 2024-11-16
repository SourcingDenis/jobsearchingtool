'use client'

import { useState } from 'react'
import { JobSearchHub } from '../components/JobSearchHub'

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  return <JobSearchHub isDark={isDark} />
} 