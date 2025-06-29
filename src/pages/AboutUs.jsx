import React from 'react';
import { Container } from '@mui/material';
import HeroSection from '../components/About/HeroSection';
import AccreditationLogos from '../components/About/AccreditationLogos';
import TabSection from '../components/About/TabSection';
import Testimonials from '../components/About/Testimonials';
import CTASection from '../components/About/CTASection';
import FAQSection from '../components/About/FAQSection';
import ContactSection from '../components/About/ContactSection';

const AboutUs = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    <HeroSection />
    <AccreditationLogos />
    <TabSection />
    <Testimonials />
    <CTASection />
    <FAQSection />
    <ContactSection />
  </Container>
);

export default AboutUs;
