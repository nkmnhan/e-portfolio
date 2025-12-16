'use client'
import React from 'react'
import { motion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export default function Reveal({ children, className = '', threshold = 0.12, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}