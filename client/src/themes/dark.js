import { createTheme, responsiveFontSizes } from "@mui/material";
import '@fontsource/lato'

const darkBrewTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8F857D'
    },
    secondary: {
      main: '#5C5552'
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
      default: '#5E503F',
      paper: '#5C5552'
    }
  },
  typography: {
    fontFamily: 'Lato',
  },
}))

export default darkBrewTheme