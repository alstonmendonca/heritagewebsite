import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ImageCard from '../components/ImageCard';

const galleryItems = [
  { id: 1, title: "Al Fahidi Fort Restoration", desc: "2022 Safety Retrofit Project" },
  { id: 2, title: "Desert Archaeology Training", desc: "Field Safety Techniques Workshop" },
  { id: 3, title: "Heritage Site Inspection", desc: "Safety Compliance Check at Heritage Village" },
  { id: 4, title: "Award Ceremony 2023", desc: "Dubai Heritage Safety Excellence Awards" },
  { id: 5, title: "Fire Drill Simulation", desc: "Historical Building Emergency Exercise" },
  { id: 6, title: "Conservation Lab", desc: "Artifact Preservation Safety Protocols" },
];

const PhotoGallery = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Photo Gallery
    </Typography>
    
    <Grid container spacing={2}>
      {galleryItems.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Box sx={{ position: 'relative', height: 300, overflow: 'hidden', borderRadius: 2 }}>
            <img 
              src={`https://via.placeholder.com/600x400?text=${encodeURIComponent(item.title)}`} 
              alt={item.title}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                filter: 'brightness(0.8)'
              }} 
            />
            <Box sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              bgcolor: 'rgba(0,0,0,0.7)', 
              p: 2 
            }}>
              <Typography variant="subtitle1" color="white">{item.title}</Typography>
              <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default PhotoGallery;