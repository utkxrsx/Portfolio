import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Personal Information - UPDATE THESE WITH YOUR DETAILS
  const personalInfo = {
    name: "Utkarsh Rounak",                    // Replace with your name
    welcomeMessage: "Welcome to My Digital Universe",  // Customize your welcome message
    profileImage: "https://ik.imagekit.io/utkxrsx/images/profile-photo.jpg?updatedAt=1752084868612",  // Path to your photo
    resumeFile: "https://drive.google.com/file/d/1bAuQoEjv_MQ_bN-M8hnSYhZ_leP424c5/view?usp=drive_link"         // Path to your resume
  }

  const roles = [
    'Full Stack Developer',
    'Logical problem solver',
    // 'Gen AI Enthusiast',
    'Quantum UI Designer',
  ]



  // Typing animation effect
  useEffect(() => {
    const currentText = roles[currentRole]
    let index = 0
    
    const typingInterval = setInterval(() => {
      if (index <= currentText.length) {
        setDisplayText(currentText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
        
        setTimeout(() => {
          setIsTyping(true)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentRole])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = personalInfo.resumeFile
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Floating Elements */}
        <div className="floating-elements">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + (i % 5) * 20}%`,
                top: `${20 + Math.floor(i / 5) * 30}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Personal Photo Section */}
        <motion.div
          className="personal-photo-section"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="photo-container">
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
                />
              ))}
            </div>
            <div className="photo-frame">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="profile-photo"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
                }}
              />
              <div className="photo-glow"></div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Welcome Message */}
            <div className="welcome-section">
              <motion.h1 
                className="welcome-message"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {personalInfo.welcomeMessage}
              </motion.h1>
              
              <motion.h2 
                className="personal-name"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm <span className="name-highlight">{personalInfo.name}</span>
              </motion.h2>
            </div>
            
            {/* Role Animation */}
            <div className="role-container">
              <span className="role-prefix">A </span>
              <span className="role-text">
                {displayText}
                <span className={`cursor ${isTyping ? 'blink' : ''}`}>|</span>
              </span>
            </div>

            <p className="hero-description">
              Web developer and electronics enthusiast with experience building responsive React interfaces, optimizing user engagement, and deploying scalable features on AWS. Finalist in global tech competitions, I blend strong coding skills with hands-on project leadership to deliver high-impact digital solutions.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="quantum-btn primary"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Universe</span>
              <div className="btn-glow"></div>
            </motion.button>
            
            <motion.button
              className="quantum-btn secondary"
              onClick={downloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📄 Download Resume</span>
              <div className="btn-glow"></div>
            </motion.button>

            <motion.button
              className="quantum-btn tertiary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Initialize Contact</span>
              <div className="btn-glow"></div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          
        </div>

        {/* Data Streams */}
        <div className="data-streams">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="data-stream"
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [-100, window.innerHeight + 100]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: `${15 + i * 20}%`
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => (
                <span key={j} className="data-char">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
