import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="xl" sx={{ py: 4 }}>
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
      </Router>
    </ThemeProvider>
  );
}

export default App;