import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './Resume.css'

// Get Google Drive file ID from environment variables
const DRIVE_FILE_ID = import.meta.env.VITE_DRIVE_FILE_ID

// Google Drive URLs for different actions
const RESUME_URLS = {
  // For embedding/preview in iframe
  preview: `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`,
  // For direct download
  download: `https://drive.google.com/uc?export=download&id=${DRIVE_FILE_ID}`,
  // For opening in new tab
  view: `https://drive.google.com/file/d/${DRIVE_FILE_ID}/view`
}

const NAME = "Utkarsh Rounak"

const Resume = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Check if Drive file ID is loaded from environment
    if (!DRIVE_FILE_ID) {
      console.warn('Google Drive file ID not found in environment variables')
      setHasError(true)
      setIsLoading(false)
    }
  }, [])

  const handleDownload = () => {
    try {
      // Create a temporary link for download
      const link = document.createElement('a')
      link.href = RESUME_URLS.download
      link.download = `${NAME}_Resume.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback to opening in new tab
      window.open(RESUME_URLS.view, '_blank')
    }
  }

  const handleViewFullscreen = () => {
    window.open(RESUME_URLS.view, '_blank')
  }

  const handleIframeLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <section id="resume" className="resume-section" ref={sectionRef}>
      <div className="resume-container">
        <motion.div
          className="resume-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Cosmic Resume Archive</h2>
          <p className="section-subtitle">
            Explore my professional journey, skills, and experience in detail. 
            You can view my resume below or download it for offline review.
          </p>
        </motion.div>

        <motion.div
          className="resume-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            onClick={handleDownload}
            className="resume-btn download-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">📄</span>
            <span className="btn-text">Download PDF</span>
            <div className="btn-glow"></div>
          </motion.button>
          
          <motion.button 
            onClick={handleViewFullscreen}
            className="resume-btn view-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-icon">👁️</span>
            <span className="btn-text">View Fullscreen</span>
            <div className="btn-glow"></div>
          </motion.button>
        </motion.div>

        <motion.div
          className="resume-viewer"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {isLoading && (
            <div className="resume-loading">
              <div className="loading-spinner"></div>
              <p>Loading cosmic resume...</p>
            </div>
          )}

          {hasError && (
            <div className="resume-error">
              <div className="error-icon">⚠️</div>
              <h3>Unable to load resume preview</h3>
              <p>The resume might be loading or there could be a connection issue.</p>
              <button onClick={handleViewFullscreen} className="retry-btn">
                <span>🚀</span>
                Open in Google Drive
              </button>
            </div>
          )}

          {DRIVE_FILE_ID && (
            <iframe
              src={RESUME_URLS.preview}
              className="resume-iframe"
              title={`${NAME} Resume`}
              allow="autoplay"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ display: isLoading || hasError ? 'none' : 'block' }}
            />
          )}
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="floating-resume-elements">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="floating-resume-element"
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Resume
