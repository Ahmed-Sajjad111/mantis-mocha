import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/lato"

const decafTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#EA6F3F',
    },
    secondary: {
      main: '#F7B090',
    },
    background: {
      default: '#B5B9BA',
      paper: '#b59f7d',
    },
    error: {
      main: '#921A05',
    },
    warning: {
      main: '#921A05',
    },
    info: {
      main: '#006B36',
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

export default decafTheme;