import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/lato"

const coffeeTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7f5234',
    },
    secondary: {
      main: '#e4bc84',
    },
    background: {
      default: '#dacfbf',
      paper: '#b59f7d',
    },
    error: {
      main: '#a3223b',
    },
    warning: {
      main: '#cd853f',
    },
    info: {
      main: '#5e9ea0',
    },
    success: {
      main: '#5baea6',
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

export default coffeeTheme;