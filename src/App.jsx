import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import Navbar from './components/Navbar/Navbar'
import ParticleBackground from './components/ParticleBackground/ParticleBackground'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)
  const [clickEffects, setClickEffects] = useState([])

  useEffect(() => {
    // Quantum initialization sequence
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Click effect handler
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newEffect = {
      id: Date.now(),
      x,
      y
    }
    
    setClickEffects(prev => [...prev, newEffect])
    
    // Remove effect after animation
    setTimeout(() => {
      setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id))
    }, 1000)
  }

  return (
    <div className="cosmic-app" onClick={handleClick}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="main-content"
          >
            <ParticleBackground />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Resume />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
            
            {/* Click Effects */}
            {clickEffects.map(effect => (
              <motion.div
                key={effect.id}
                className="click-effect"
                initial={{ 
                  opacity: 1, 
                  scale: 0,
                  x: effect.x,
                  y: effect.y
                }}
                animate={{ 
                  opacity: 0, 
                  scale: 2,
                }}
                transition={{ duration: 1 }}
                style={{
                  position: 'fixed',
                  pointerEvents: 'none',
                  zIndex: 9999,
                  width: '20px',
                  height: '20px',
                  background: 'radial-gradient(circle, #00ffff, transparent)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(26, 26, 46, 0.9)',
            color: '#00ffff',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)'
          }
        }}
      />
    </div>
  )
}

export default App
