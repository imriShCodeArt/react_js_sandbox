import { orange } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export default () => {
  return createTheme({
    palette: {
      primary: { main: orange['A700'], contrastText:'#FFF' },
      secondary: { main: '#FFF', contrastText:orange['A700'] },
    },
    typography: {
      fontWeightBold: 900,
      fontWeightMedium: 500,
      fontWeightLight: 100,
      fontWeightRegular: 500,
      fontFamily: ['"Montserrat"'].join(','),
      h1: {
        fontSize: '4.25rem',
        fontWeight: 300,
      },
      h2: {
        fontSize: '2.75rem',
        fontWeight: 300,
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 300,
        letterSpacing: 3,
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          sx: {
            textDecoration: 'none',
            fontWeight: '500',
          },
        },
      },
    },
  })
}
