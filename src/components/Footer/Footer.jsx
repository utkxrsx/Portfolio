import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Vite', icon: '⚡' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Framer Motion', icon: '✨' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="cosmic-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <span className="logo-text">Utkarsh</span>
              <span className="logo-accent">Rounak</span>
            </div>
            <div className="cosmic-signature">
              ✨ Built with quantum energy & cosmic inspiration ✨
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Navigation Portal</h4>
            <ul className="link-list">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <div className="footer-tech">
            <h4>Tech Stack</h4>
            <div className="footer-tech-stack">
              {techStack.map(tech => (
                <div className="footer-tech-item" key={tech.name}>
                  <span className="footer-tech-icon">{tech.icon}</span>
                  <span className="footer-tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Cosmic Developer. All rights reserved.
            </p>
            <div className="footer-contact-details">
              <span>📧 utkarshrk05@gmail.com</span>
              <span>📍 Ranchi, Jharkhand</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Particles */}
        <div className="footer-particles">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="footer-particle"
              animate={{
                y: [-10, -25, -10],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + i * 15}%`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
