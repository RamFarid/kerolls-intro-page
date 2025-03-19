import { ThemeContext } from '@/Contexts/ThemeContext'
import { IconButton } from '@mui/material'
import { useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'

function ToggleTheme() {
  const [theme, toggleThemeFn] = useContext(ThemeContext)

  return (
    <IconButton onClick={toggleThemeFn} color='inherit'>
      {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}

export default ToggleTheme
