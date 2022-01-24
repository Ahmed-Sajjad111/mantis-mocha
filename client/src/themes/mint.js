
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/lato"

const mintTheme = responsiveFontSizes(createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#15b097',
        },
        secondary: {
          main: '#71f79f',
        },
        error: {
          main: '#b42034',
        },
        warning: {
          main: '#ffd166',
        },
        info: {
          main: '#3dd6d0',
        },
        success: {
          main: '#166672',
        },
        background: {
          default: '#513c2c',
          paper: '#775840',
        },
      },
      typography: {
        fontFamily: 'Lato',
      },
  }));

export default mintTheme;