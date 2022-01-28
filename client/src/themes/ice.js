import { createTheme, responsiveFontSizes } from "@mui/material";
import '@fontsource/lato'

const iceTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#48CAE4'
    },
    secondary: {
      main: '#023E8A'
    },
    error: {
      main: '#b42034'
    },
    warning: {
      main: '#ffd166',
    },
    info: {
      main: '#000000',
    },
    success: {
      main: '#ffffff',
    },
    background: {
      default: '#ADE8F4',
      paper: '#90E0EF'
    }
  },
  typography: {
    fontFamily: 'Lato',
  },
}))

export default iceTheme