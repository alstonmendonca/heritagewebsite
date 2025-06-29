// theme.js
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FAFBFC', // off-white for warmth
      paper:    '#FFFFFF', // pure white for cards
    },
    primary: {
      main:        '#1A237E',  // deep navy
      light:       '#534BAE',  // soft indigo
      dark:        '#000051',
      contrastText:'#FFFFFF',
    },
    secondary: {
      main:        '#00897B',  // teal
      light:       '#4FB3BF',
      dark:        '#005B4F',
      contrastText:'#FFFFFF',
    },
    error: {
      main:  '#D32F2F', // classic red
      light: '#E57373',
      dark:  '#9A0007',
    },
    warning: {
      main:  '#FFA000', // amber
      light: '#FFB740',
      dark:  '#C67100',
    },
    info: {
      main:  '#0288D1', // sky blue
      light: '#03A9F4',
      dark:  '#026F9E',
    },
    success: {
      main:  '#388E3C', // green
      light: '#66BB6A',
      dark:  '#2E7D32',
    },
    text: {
      primary:   '#212121', // almost-black for readability
      secondary: '#616161', // dark gray
      disabled:  '#9E9E9E',
    },
    divider: '#E0E0E0',
  },

  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.5px',
      color: '#1A237E',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.25px',
      color: '#1A237E',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      color: '#212121',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#212121',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#212121',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
      color: '#616161',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.75rem',
      color: '#9E9E9E',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8, // slightly tighter corners
  },

  shadows: [
    'none',
    '0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)',
    '0px 3px 6px rgba(0,0,0,0.16), 0px 3px 6px rgba(0,0,0,0.23)',
    '0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)',
    // you can add more depth levels if needed...
  ],
});

// make typography responsive
theme = responsiveFontSizes(theme);

export default theme;
