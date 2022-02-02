import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/lato"

const MantisTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#A6FFA1',
    },
    secondary: {
      main: '#FF9390',
    },
    background: {
      default: '#A6FFA1',
      paper: '#FFFFE6',
    },
    error: {
      main: '#bfd7ea',
    },
    warning: {
      main: '#50723c',
    },
    info: {
      main: '#FFFFE6',
    },
    success: {
      main: '#FFFFE6',
    },
  },
  typography: {
    fontFamily: ['Times, Times New Roman, serif'],
    fontStyle: 'italic',
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
}));

export default MantisTheme;