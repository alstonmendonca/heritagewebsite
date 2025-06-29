import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';

// Import pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Training from './pages/Training';
import OnlineTraining from './pages/OnlineTraining';
import CoursesCalendar from './pages/CoursesCalendar';
import Consultancy from './pages/Consultancy';
import ApprovalLicences from './pages/ApprovalLicences';
import PhotoGallery from './pages/PhotoGallery';

// Wrapper to use useLocation inside Router
function AppContent() {
  const location = useLocation();

  // Determine if current page is homepage
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          // Add top padding only if NOT homepage to reserve space for Navbar
          pt: isHome ? 0 : '64px', // adjust 64px as per your navbar height
          pb: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/training" element={<Training />} />
          <Route path="/online-training" element={<OnlineTraining />} />
          <Route path="/courses-calendar" element={<CoursesCalendar />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/approval-licences" element={<ApprovalLicences />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
