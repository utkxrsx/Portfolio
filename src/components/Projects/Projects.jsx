import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const categories = [
    { id: 'all', label: 'All Dimensions', icon: '🌌' },
    { id: 'iot', label: 'IoT & Embedded', icon: '🤖' },
    { id: 'web', label: 'Web Development', icon: '🌐' },
    { id: 'algorithms', label: 'Algorithms & AI', icon: '🧠' },
    { id: 'electronics', label: 'Electronics', icon: '⚡' }
  ]

  const projects = [
    {
      id: 1,
      title: 'S-Rover (सरोवर)',
      description: 'IEEE YESIST\'12 World Finalist - Autonomous rover for subterranean navigation and real-time terrain mapping with 95% accuracy.',
      longDescription: 'Developed an autonomous rover capable of navigating unknown terrains by capturing sequential images and stitching them into real-time mapping. The project achieved 95% terrain navigation accuracy and can stitch 200+ images per minute using an OpenCV pipeline. Represented the team in the top 8 of 30 global IoT finalists at IEEE YESIST\'12.',
      image: "https://ik.imagekit.io/utkxrsx/images/srover.jpg?updatedAt=1752084868910",
      category: 'iot',
      technologies: ['Arduino', 'OpenCV', 'Python', 'Computer Vision', 'IoT'],
      features: ['95% Navigation Accuracy', 'Real-time Image Stitching', '200+ Images/Min Processing', 'Autonomous Terrain Mapping'],
      github: 'https://github.com/utkxrsx/S-Rover',
      demo: 'https://s-rover.vercel.app/',
      status: 'completed',
      year: '2024',
      achievement: 'IEEE YESIST\'12 World Finalist'
    },
    {
      id: 2,
      title: 'ANK.DATA',
      description: 'DevHouse\'24 Top 4 - Smart city IoT dashboard analyzing 1000+ sensor readings per hour with 99.5% accuracy.',
      longDescription: 'Built a comprehensive smart-city IoT dashboard that analyzes over 1000 sensor readings per hour. The system reduced decision-making time by 50% through advanced analytics visualization and achieved a 99.5% data accuracy score. Ranked top 4 out of 120+ projects at DevHouse\'24.',
      image: "https://ik.imagekit.io/utkxrsx/images/ank.data.jpg?updatedAt=1752084869747",
      category: 'iot',
      technologies: ['Python', 'IoT', 'Data Analytics', 'Jupyter Notebook', 'Dashboard'],
      features: ['1000+ Readings/Hour', '99.5% Data Accuracy', '50% Faster Decisions', 'Real-time Analytics'],
      github: 'https://github.com/utkxrsx/ANK.data',
      // demo: '#',
      status: 'completed',
      year: '2024',
      achievement: 'DevHouse\'24 Top 4'
    },
    {
      id: 3,
      title: 'JPEG Compression Algorithm',
      description: 'Advanced image processing system using DFT/IDFT achieving 99% size reduction with optimized performance.',
      longDescription: 'Implemented a sophisticated JPEG compression algorithm using Discrete Fourier Transform (DFT) and Inverse DFT techniques. The system achieves 99% size reduction while maintaining image quality. The Python implementation runs 25% faster than the equivalent MATLAB code.',
      image: "https://ik.imagekit.io/utkxrsx/images/jpeg.png?updatedAt=1752084868352",
      category: 'algorithms',
      technologies: ['Python', 'MATLAB', 'DFT/IDFT', 'Image Processing', 'Algorithms'],
      features: ['99% Size Reduction', '25% Performance Improvement', 'DFT/IDFT Implementation', 'Quality Preservation'],
      github: 'https://github.com/utkxrsx/jpeg-compresssion',
      //demo: '#',
      status: 'completed',
      year: '2024',
      achievement: 'Performance Optimized'
    },
    {
      id: 4,
      title: 'Signal Jammer Circuit',
      description: 'Analog electronics project featuring BJT-based jammer circuit with 555 timer and precise frequency tuning.',
      longDescription: 'Designed and implemented a signal jammer circuit using BJTs and 555 timer configuration. The circuit demonstrates stable frequency tuning within ±2% accuracy over a 10-60 meter range. Successfully tested in 20 trials with consistent performance.',
      image: "https://ik.imagekit.io/utkxrsx/images/signal.png?updatedAt=1752084869265",
      category: 'electronics',
      technologies: ['BJT', '555 Timer', 'Analog Circuits', 'PCB Design', 'Frequency Control'],
      features: ['±2% Frequency Stability', '10-60m Range', '20 Successful Tests', 'BJT-based Design'],
      github: '#',
      //demo: '#',
      status: 'completed',
      year: '2024',
      achievement: 'High Precision Design'
    },
    {
      id: 5,
      title: 'MailSutra',
      description: 'Automated bulk email delivery system leveraging AWS Lambda, S3, and SES for scalable communication.',
      longDescription: 'MailSutra is a Python-based, serverless solution for sending personalized bulk emails using AWS Lambda, Amazon S3, and SES SMTP. Designed for applications like healthcare reminders and corporate campaigns, it features secure SMTP integration, robust error handling, and scalable delivery to thousands of recipients. Scheduling and automation are supported via AWS EventBridge.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      category: 'automation',
      technologies: ['Python', 'AWS Lambda', 'Amazon S3', 'SES SMTP', 'Serverless', 'Automation'],
      features: [
        'AWS Integration',
        'Secure SMTP Configuration',
        'Scalable Design',
        'Scheduled Automation'
      ],
      github: 'https://github.com/utkxrsx/MailSutra',
      //demo: '#',
      status: 'completed',
      year: '2024',
      achievement: 'Reliable mass communication for daily reminders'
    },
    {
      id: 6,
      title: 'Login-Registration System',
      description: 'Responsive authentication interface with modern UI/UX design and secure user management features.',
      longDescription: 'Developed a comprehensive login and registration system with responsive design and modern UI/UX principles. Features secure authentication, user-friendly interface, and optimized performance for web applications.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Authentication'],
      features: ['Responsive Design', 'Secure Authentication', 'Modern UI/UX', 'Cross-browser Compatible'],
      github: 'https://github.com/utkxrsx/Login-Registration-Page',
      //demo: '#',
      status: 'completed',
      year: '2024',
      achievement: 'User Experience Focus'
    },
    // {
    //   id: 7,
    //   title: 'Interactive Landing Page',
    //   description: 'Modern, responsive landing page with CSS animations and optimized user engagement features.',
    //   longDescription: 'Created an interactive and visually appealing landing page using modern CSS techniques. Features smooth animations, responsive design, and optimized user engagement elements. Demonstrates advanced front-end development skills and attention to design details.',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    //   category: 'web',
    //   technologies: ['CSS', 'HTML', 'Animations', 'Responsive Design', 'UI/UX'],
    //   features: ['CSS Animations', 'Responsive Layout', 'Modern Design', 'Performance Optimized'],
    //   github: 'https://github.com/utkxrsx/Landing-Page',
    //   demo: '#',
    //   status: 'completed',
    //   year: '2024',
    //   achievement: 'Design Excellence'
    // }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Cosmic Project Gallery</h2>
          <p className="section-subtitle">
            Exploring the quantum dimensions of engineering innovation
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="filter-tabs"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`filter-tab ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-label">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-status">
                    <span className="status-icon">
                      {project.status === 'completed' ? '✓' : '⚡'}
                    </span>
                    <span className="status-year">{project.year}</span>
                  </div>
                  {project.achievement && (
                    <div className="achievement-badge">
                      🏆 {project.achievement}
                    </div>
                  )}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-more">+{project.technologies.length - 3}</span>
                  )}
                </div>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-actions">
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
                      🚀 Launch Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                    💻 View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            className="project-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="modal-title-section">
                  <h2>{selectedProject.title}</h2>
                  {selectedProject.achievement && (
                    <div className="modal-achievement">
                      🏆 {selectedProject.achievement}
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-body">
                <p className="modal-description">{selectedProject.longDescription}</p>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="modal-tech">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="modal-features">
                    {selectedProject.features.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  {selectedProject.demo && selectedProject.demo !== '#' && (
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
                      🚀 Live Demo
                    </a>
                  )}
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
                    💻 Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Projects
