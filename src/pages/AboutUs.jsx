import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ImageCard from '../components/ImageCard';

const AboutUs = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      About Heritage Safety Centre Dubai
    </Typography>
    
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant="body1" paragraph>
          Established in 2010, Heritage Safety Centre Dubai is the UAE's leading authority on heritage 
          conservation and safety management. We specialize in preserving Dubai's rich cultural legacy 
          while implementing modern safety standards.
        </Typography>
        <Typography variant="body1" paragraph>
          Our team of certified experts includes archaeologists, conservation architects, and safety 
          professionals with decades of experience in protecting historical sites across the Gulf region.
        </Typography>
        <Typography variant="body1" paragraph>
          We work closely with government entities, private developers, and cultural organizations to 
          ensure that heritage preservation and public safety go hand in hand.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <ImageCard 
          title="Our Heritage Mission"
          description="Preserving Dubai's cultural identity for future generations"
          imageUrl="https://via.placeholder.com/600x400?text=Heritage+Preservation"
        />
      </Grid>
    </Grid>
  </Container>
);

export default AboutUs;