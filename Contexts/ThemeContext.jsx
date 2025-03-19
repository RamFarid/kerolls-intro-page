import { createTheme, ThemeProvider } from '@mui/material'
import { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  const themeConstructor = createTheme({
    palette: {
      background: {
        portal: '#1212129e',
        // paper: '#ccc',
      },
      mode: theme,
      primary: {
        main: '#de8f41',
        light: '#e29547',
        dark: '#b0561b',
      },
    },
    typography: {
      htmlFontSize: 19,
      fontFamily: 'sans-serif',
    },
  })

  const toggleTheme = (t) => {
    setTheme((pre) => (!t ? t : pre === 'light' ? 'dark' : 'light'))
  }
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      <ThemeProvider theme={themeConstructor}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
