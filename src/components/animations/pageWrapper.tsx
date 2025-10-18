"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const path = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={path}
        
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
