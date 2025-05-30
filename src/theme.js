import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#922b7b',    // Magenta
      dark: '#4a2971',    // Royal Purple
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4d5f99',    // Soft Navy
      light: '#5bb8b2',   // Teal
      contrastText: '#ffffff',
    },
    success: {
      main: '#50aa43',    // Fresh Green
    },
    warning: {
      main: '#96c040',    // Lime
    },
    error: {
      main: '#eb323e',    // Vivid Red
    },
    info: {
      main: '#c03182',    // Fuchsia
    },
    background: {
      default: '#f9fafe', // Clean white-ish
      paper: '#ffffff',
    },
    text: {
      primary: '#1e1e1e',
      secondary: '#5f6368',
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      marginBottom: '1rem',
    },
    h5: {
      fontWeight: 600,
      color: '#922b7b',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f9fafe',
          minHeight: '100vh',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
