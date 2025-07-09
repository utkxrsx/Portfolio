import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  // Technical skills with your specified technologies
  const skills = [
    { name: 'Python', logo: '🐍', category: 'programming' },
    { name: 'C / C++', logo: '⚡', category: 'programming' },
    { name: 'Java', logo: '☕', category: 'programming' },
    { name: 'JavaScript', logo: '🟨', category: 'programming' },
    { name: 'ReactJS', logo: '⚛️', category: 'frontend' },
    { name: 'API', logo: '🔗', category: 'integration' },
    { name: 'HTML', logo: '📄', category: 'frontend' },
    { name: 'CSS', logo: '🎨', category: 'frontend' },
    { name: 'Arduino IDE', logo: '🤖', category: 'embedded' },
    { name: 'ESP32', logo: '📡', category: 'embedded' },
    { name: 'MATLAB', logo: '📊', category: 'analysis' },
    { name: 'Cadence Virtuoso', logo: '🔬', category: 'design' },
    { name: 'LTSpice', logo: '⚙️', category: 'simulation' },
    { name: 'Verilog HDL', logo: '🔧', category: 'hardware' }
  ]

  // Real professional experiences from your resume
  const experiences = [
    {
      role: 'Technical Team Member',
      company: 'IEEE Computer Society, VIT Chennai',
      period: 'October 2023 - March 2025',
      description: 'Assisted in the development and maintenance of websites and successfully wrapped up various hackathons. Contributed to technical projects and participated in competitive programming events.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'MongoDB','Node.JS']
    },
    {
      role: 'Web Development Intern', 
      company: 'Zidio Developments',
      period: 'July 2024 - October 2024',
      description: 'Collaborated with the web development team to learn best practices and contribute to various projects. Gained hands-on experience in modern web development workflows and team collaboration.',
      technologies: ['Web Development', 'JavaScript', 'ReactJS', 'MongoDB','Node.JS', 'Team Collaboration']
    },
    {
      role: 'Front-End Development Intern',
      company: 'Learntricks Edutech',
      period: 'June 2024',
      description: 'Designed a login/registration page and a landing page using HTML, CSS, JavaScript and ReactJS. Focused on creating responsive and user-friendly interfaces for educational technology platforms.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'UI Design']
    }
  ]

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">ECM student & aspiring web developer</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="about-main-grid">
          
          {/* Top Row - Profile & Skills */}
          <div className="top-section">
            
            {/* Profile Card */}
            <motion.div
              className="profile-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Student Profile</h3>
              <p>
                I'm a passionate ECM (Electronics and Computer Engineering) student at VIT Chennai with hands-on experience 
                in web development and technical team leadership. Through internships and 
                IEEE involvement, I've developed strong skills in modern web technologies 
                and collaborative project development.
              </p>
              
              {/* Compact Stats */}
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">14</span>
                  <span className="stat-label">Technologies</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2</span>
                  <span className="stat-label">Internships</span>
                </div>
              </div>
            </motion.div>

            {/* Skills Arsenal */}
            <motion.div
              className="skills-section"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>Technical Arsenal</h3>
              <div className="skills-logo-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-logo-box ${skill.category}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <div className="skill-logo">{skill.logo}</div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Experience Timeline (Full Width) */}
          <motion.div
            className="timeline-section"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Professional Journey</h3>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.role}</h4>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                    <h5>{exp.company}</h5>
                    <p>{exp.description}</p>
                    <div className="tech-stack">
                      {exp.technologies.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="timeline-marker">
                    <div className="marker-inner"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
