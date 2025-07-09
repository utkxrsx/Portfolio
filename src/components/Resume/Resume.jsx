import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import './Resume.css'

const RESUME_PDF = 'src/assets/documents/resume.pdf'
const NAME = "Utkarsh Rounak" // Update with your name

const Resume = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  useEffect(() => {
    // Optionally, you can add analytics or animation triggers here
  }, [isInView])

  return (
    <section id="resume" className="resume-section" ref={sectionRef}>
      <div className="resume-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          My Resume
        </motion.h2>
        <motion.p
          className="resume-description"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Explore my professional journey, skills, and experience in detail. You can view my resume below or download it for offline review.
        </motion.p>
        <motion.div
          className="resume-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a
            href={RESUME_PDF}
            className="resume-download-btn"
            download={`${NAME.replace(/\s+/g, '_')}_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download PDF
          </a>
          <a
            href={RESUME_PDF}
            className="resume-view-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            👁️ View Fullscreen
          </a>
        </motion.div>
        <motion.div
          className="resume-preview"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <iframe
            src={RESUME_PDF}
            title="Resume PDF"
            className="resume-iframe"
            frameBorder="0"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
