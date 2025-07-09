import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './LoadingScreen.css'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [stage, setStage] = useState('initializing')

  const stages = [
    { key: 'initializing', text: 'Initializing Quantum Consciousness...', duration: 800 },
    { key: 'neural', text: 'Forming Neural Networks...', duration: 1000 },
    { key: 'holographic', text: 'Loading Holographic Interface...', duration: 700 },
    { key: 'complete', text: 'Quantum State Achieved!', duration: 500 }
  ]

  useEffect(() => {
    let currentStage = 0
    let currentProgress = 0
    
    const progressInterval = setInterval(() => {
      currentProgress += 2
      setProgress(currentProgress)
      
      // Stage transitions
      if (currentProgress >= 25 && currentStage === 0) {
        setStage(stages[1].key)
        currentStage = 1
      } else if (currentProgress >= 50 && currentStage === 1) {
        setStage(stages[2].key)
        currentStage = 2
      } else if (currentProgress >= 85 && currentStage === 2) {
        setStage(stages[3].key)
        currentStage = 3
      }
      
      if (currentProgress >= 100) {
        clearInterval(progressInterval)
      }
    }, 30)

    return () => clearInterval(progressInterval)
  }, [])

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8 }}
    >
      <div className="loading-container">
        {/* Neural Network Animation */}
        <div className="neural-network">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="neural-node"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity
              }}
              style={{
                left: `${20 + (i % 5) * 15}%`,
                top: `${30 + Math.floor(i / 5) * 10}%`
              }}
            />
          ))}
        </div>

        {/* Quantum Rings */}
        <div className="quantum-rings">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="quantum-ring"
              animate={{ rotate: 360 }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.div
          className="loading-text"
          key={stage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {stages.find(s => s.key === stage)?.text}
        </motion.div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="progress-text">{progress}%</div>
        </div>

        {/* Particle Effects */}
        <div className="loading-particles">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="loading-particle"
              animate={{
                y: [-10, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
