# How to make a theme
Highly recommend using [MUI Theme Creator](https://bareynol.github.io/mui-theme-creator/) for a live preview of your color scheme on the elements.

## Template
```
-- brings in the themes and makes font sizes responsive
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
-- lets you import a specific google font if you selected one in MUI Theme creator.  Will need to npm i @fontsource/<fontname>
import "@fontsource/lato"

-- ignore typescript output in MUI Theme creator output, rename the const to your short theme name
const coffeeTheme = responsiveFontSizes(createTheme({
-- copy the output from MUI theme creator here, line 3 till EOF - make sure to update exports at the end
  palette: {
    type: 'light',
    primary: {
      main: '#7f5234',
    },
    secondary: {
      main: '#861657',
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
```

### App JS changes
import your theme file as such:   
`import <theme name>Theme from "./themes/<filename>";`

Add a Menu Item to the Select Box:
```
<MenuItem label={"<Descriptive Name>"} value={<imported variable}>
    <Descriptive Name>
</MenuItem>
```

and that's it!


