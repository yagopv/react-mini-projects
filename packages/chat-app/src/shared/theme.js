import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6d6bb9',
      main: '#3d4089',
      dark: '#011a5b',
      contrastText: '#fcf6f2'
    }
  },
  typography: {
    fontFamily: ['Josefin Sans', 'sans-serif'].join(','),
    h1: { fontFamily: 'Lilita One' },
    h2: { fontFamily: 'Lilita One' },
    h3: { fontFamily: 'Lilita One' },
    h4: { fontFamily: 'Lilita One' },
    h5: { fontFamily: 'Lilita One' },
    h6: { fontFamily: 'Lilita One' }
  }
});
