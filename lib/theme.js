const { createTheme } = require('@mui/material')

const theme = createTheme({
  typography: {
    allVariants: { fontFamily: "'Noto Naskh Arabic', serif" },
  },
  palette: {
    primary: { main: '#de8f41' },
    mode: 'dark',
  },
})

export default theme
