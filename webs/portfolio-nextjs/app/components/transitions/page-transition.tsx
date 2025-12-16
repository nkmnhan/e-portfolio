'use client'
import React, { memo } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const prefersReduced = useReducedMotion()

    // If user prefers reduced motion, render children without motion wrappers
    if (prefersReduced) {
      return <div className="page-transition">{children}</div>
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.36, ease: [0.2, 0.8, 0.2, 1] }}
                className="page-transition"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default memo(PageTransition)