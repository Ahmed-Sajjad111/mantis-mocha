import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/lato"

const steamyTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#C4C4BD',
    },
    secondary: {
      main: '#F0F0EE',
    },
    background: {
      default: '#DB9B81',
      paper: '#E28049',
    },
    error: {
      main: '#a3223b',
    },
    warning: {
      main: '#cd853f',
    },
    info: {
      main: '#EBCA9E',
    },
    success: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
}));

export default steamyTheme;