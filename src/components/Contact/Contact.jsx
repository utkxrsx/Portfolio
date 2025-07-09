import emailjs from '@emailjs/browser'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const contactInfo = [
    {
      icon: '📧',
      label: 'Quantum Communication',
      value: 'utkarshrk05@gmail.com',
      link: 'mailto:utkarshrk05@gmail.com'
    },
    {
      icon: '📱',
      label: 'Neural Network',
      value: '+91 8252851022',
      link: 'tel:+918252851022'
    },
    {
      icon: '📍',
      label: 'Cosmic Coordinates',
      value: 'Ranchi, Jharkhand',
      link: '#'
    },
    {
      icon: '🌐',
      label: 'Digital Dimension',
      value: 'Available 24/7',
      link: '#'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/utkxrsx', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/utkarsh-rounak-248811254/', icon: '💼' },
    { name: 'X', url: 'https://x.com/utkxrsx', icon: '🐦' },
    { name: 'Email', url: 'mailto:utkarshrk05@gmail.com.com', icon: '📧' }
  ]

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const [time, setTime] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTime(new Date().toLocaleString());

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );


      toast.success('Quantum message transmitted successfully! 🚀');

      // reset the HTML form
      formRef.current.reset();          // ✅ use this

      // if you still track inputs in state, clear it too (optional)
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Transmission failed. Please try again. ⚡');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Initialize Contact Protocol</h2>
          <p className="section-subtitle">
            Establishing quantum communication channels across the digital cosmos
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="info-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4>{info.label}</h4>
                      <a href={info.link} className="info-value">
                        {info.value}
                      </a>
                    </div>
                    <div className="card-glow"></div>
                  </motion.div>
                ))}
              </div>

              {/* Social Networks Below Info Cards */}
              <motion.div
                className="social-networks"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <h3>Connect Across Dimensions</h3>
                <div className="social-grid">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.3 + index * 0.1 }}
                    >
                      <span className="social-icon">{link.icon}</span>
                      <span className="social-name">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>


          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="form-header">
              <h3>Quantum Message Transmitter</h3>
              <p>Send your thoughts across the digital void</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="quantum-form">
              <div className="form-row">
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label htmlFor="from_name">Commander Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleInputChange}
                    placeholder="Enter your cosmic identity"
                    required
                  />
                  <input type="hidden" name="time" value={time} />
                  <div className="input-glow"></div>
                </motion.div>

                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <label htmlFor="reply_to">Communication Channel</label>
                  <input
                    type="email"
                    id="reply_to"
                    name="reply_to"
                    value={formData.reply_to}
                    onChange={handleInputChange}
                    placeholder="your.email@cosmos.space"
                    required
                  />
                  <div className="input-glow"></div>
                </motion.div>
              </div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label htmlFor="subject">Mission Objective</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Describe your cosmic mission"
                  required
                />
                <div className="input-glow"></div>
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <label htmlFor="message">Quantum Data Transmission</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your vision, ideas, or collaboration proposals..."
                  rows={6}
                  required
                />
                <div className="input-glow"></div>
              </motion.div>

              <motion.button
                type="submit"
                className="quantum-submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                {isSubmitting ? (
                  <span className="btn-loading">
                    <span className="loading-spinner"></span>
                    Transmitting...
                  </span>
                ) : (
                  <span className="btn-content">
                    🚀 Launch Message
                  </span>
                )}
                <div className="btn-glow"></div>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="floating-contact-elements">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="floating-contact-element"
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
                left: `${10 + (i % 3) * 30}%`,
                top: `${20 + Math.floor(i / 3) * 40}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
