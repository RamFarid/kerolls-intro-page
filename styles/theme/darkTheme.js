import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    background: {
      portal: '#1212129e',
    },
    mode: 'dark',
    primary: {
      main: '#de8f41',
      light: '#e29547',
      dark: '#b0561b',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: grey['900'],
          '&:hover': {
            backgroundColor: grey['900'],
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '42px',
        },
      },
    },
  },
  typography: {
    htmlFontSize: 19,
  },
})

export default darkTheme
