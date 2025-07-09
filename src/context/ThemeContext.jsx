import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved theme, default to 'dark'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cosmic-theme') || 'dark'
    }
    return 'dark'
  })

  const [accentColor, setAccentColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cosmic-accent') || 'cyan'
    }
    return 'cyan'
  })

  const themes = {
    dark: {
      name: 'Cosmic Dark',
      primary: '#00ffff',
      secondary: '#ff00ff', 
      accent: '#00ff88',
      background: '#0a0a0f',
      backgroundSecondary: '#1a1a2e',
      backgroundTertiary: '#16213e',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      textMuted: '#808080'
    },
    light: {
      name: 'Quantum Light',
      primary: '#007acc',
      secondary: '#e91e63',
      accent: '#00c853',
      background: '#ffffff',
      backgroundSecondary: '#f8f9fa',
      backgroundTertiary: '#e9ecef',
      text: '#2c3e50',
      textSecondary: '#5a6c7d',
      textMuted: '#95a5a6'
    },
    neon: {
      name: 'Neon Cosmos',
      primary: '#ff0080',
      secondary: '#00ff80',
      accent: '#8000ff',
      background: '#000000',
      backgroundSecondary: '#1a0033',
      backgroundTertiary: '#330066',
      text: '#ffffff',
      textSecondary: '#cccccc',
      textMuted: '#999999'
    }
  }

  const accentColors = {
    cyan: '#00ffff',
    magenta: '#ff00ff',
    green: '#00ff88',
    orange: '#ff8800',
    purple: '#8800ff',
    blue: '#0088ff'
  }

  useEffect(() => {
    // Apply theme to document root
    const root = document.documentElement
    const currentTheme = themes[theme]
    
    if (currentTheme) {
      Object.entries(currentTheme).forEach(([key, value]) => {
        root.style.setProperty(`--theme-${key}`, value)
      })
      
      root.style.setProperty('--accent-color', accentColors[accentColor])
      root.setAttribute('data-theme', theme)
    }
    
    // Save to localStorage
    localStorage.setItem('cosmic-theme', theme)
    localStorage.setItem('cosmic-accent', accentColor)
  }, [theme, accentColor])

  const toggleTheme = () => {
    const themeKeys = Object.keys(themes)
    const currentIndex = themeKeys.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themeKeys.length
    setTheme(themeKeys[nextIndex])
  }

  const setSpecificTheme = (themeName) => {
    if (themes[themeName]) {
      setTheme(themeName)
    }
  }

  const cycleAccentColor = () => {
    const colorKeys = Object.keys(accentColors)
    const currentIndex = colorKeys.indexOf(accentColor)
    const nextIndex = (currentIndex + 1) % colorKeys.length
    setAccentColor(colorKeys[nextIndex])
  }

  const value = {
    theme,
    accentColor,
    themes,
    accentColors,
    toggleTheme,
    setSpecificTheme,
    cycleAccentColor,
    setAccentColor,
    currentTheme: themes[theme]
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
