import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ImageCard from '../components/ImageCard';

const courses = [
  {
    title: "Heritage Site Safety Management",
    description: "Comprehensive training for site managers and conservation teams",
    image: "https://via.placeholder.com/400x300?text=Site+Safety"
  },
  {
    title: "Historical Building Fire Safety",
    description: "Specialized protocols for fire prevention in heritage structures",
    image: "https://via.placeholder.com/400x300?text=Fire+Safety"
  },
  {
    title: "Archaeological Excavation Safety",
    description: "Safety procedures for archaeological digs and artifact handling",
    image: "https://via.placeholder.com/400x300?text=Excavation+Safety"
  }
];

const Training = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Professional Training Programs
    </Typography>
    
    <Typography variant="body1" paragraph>
      Our hands-on training programs are designed to meet the unique safety challenges of heritage 
      conservation projects. All courses are accredited by Dubai Culture & Arts Authority.
    </Typography>
    
    <Grid container spacing={3}>
      {courses.map((course, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ImageCard 
            title={course.title}
            description={course.description}
            imageUrl={course.image}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Training;