// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', // pure white background
      paper: '#f8f8f8',   // light gray for cards/panels
    },
    primary: {
      main: '#000000',    // black primary
      light: '#4f4f4f',   // dark gray as hover/focus variant
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#444444',    // dark neutral gray
      contrastText: '#ffffff',
    },
    error: {
      main: '#d32f2f',    // standard Material red
    },
    success: {
      main: '#388e3c',    // standard green
    },
    warning: {
      main: '#fbc02d',    // amber
    },
    info: {
      main: '#1976d2',    // standard blue
    },
    text: {
      primary: '#000000', // black text
      secondary: '#555555', // medium gray for secondary text
    },
    divider: '#e0e0e0',   // soft divider line
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#000000',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#222222',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '#000000',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      color: '#444444',
    },
    caption: {
      fontSize: '0.85rem',
      color: '#888888',
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 12,
  },

  shadows: [
    'none',
    '0 2px 6px rgba(0,0,0,0.1)',   // soft black shadows
    '0 6px 12px rgba(0,0,0,0.12)',
    '0 12px 24px rgba(0,0,0,0.16)',
  ],
});

export default theme;
