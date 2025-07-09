import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './styles/animations.css'
import './styles/global.css'

// Quantum initialization
console.log('🌌 Cosmic Portfolio - Quantum initialization sequence started...')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

// Performance monitoring
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    console.log('🚀 Cosmic Portfolio - Quantum state achieved!')
  })
}
