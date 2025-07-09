import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrolled / maxHeight) * 100
      
      setScrollProgress(progress)
      setIsVisible(scrolled > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="scroll-to-top-container"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="scroll-to-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Return to Cosmic Origin"
          >
            {/* Progress Ring */}
            <svg className="progress-ring" width="60" height="60">
              <circle
                className="progress-ring-background"
                cx="30"
                cy="30"
                r="26"
                fill="transparent"
                stroke="rgba(0, 255, 255, 0.2)"
                strokeWidth="3"
              />
              <motion.circle
                className="progress-ring-progress"
                cx="30"
                cy="30"
                r="26"
                fill="transparent"
                stroke="#00ffff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 26}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 26 }}
                animate={{ 
                  strokeDashoffset: 2 * Math.PI * 26 - (scrollProgress / 100) * 2 * Math.PI * 26 
                }}
                transition={{ duration: 0.1 }}
              />
            </svg>

            {/* Arrow Icon */}
            <motion.div
              className="arrow-container"
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="arrow-icon">🚀</span>
            </motion.div>

            {/* Particle Effects */}
            <div className="btn-particles">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="btn-particle"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${50 + 30 * Math.cos((i * Math.PI * 2) / 8)}%`,
                    top: `${50 + 30 * Math.sin((i * Math.PI * 2) / 8)}%`
                  }}
                />
              ))}
            </div>

            {/* Glow Effect */}
            <div className="btn-glow"></div>
          </motion.button>

          {/* Tooltip */}
          <motion.div
            className="scroll-tooltip"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span>Return to Origin</span>
            <div className="tooltip-progress">
              {Math.round(scrollProgress)}% explored
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
