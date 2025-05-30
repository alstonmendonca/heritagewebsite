import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box } from '@mui/material';

const OnlineTraining = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Online Training Courses
    </Typography>
    
    <Typography variant="body1" paragraph>
      Access our expert-led safety training from anywhere in the world. Our online courses combine 
      interactive modules, virtual site tours, and live Q&A sessions with industry experts.
    </Typography>
    
    <Box sx={{ bgcolor: 'background.paper', p: 3, borderRadius: 2, my: 3 }}>
      <Typography variant="h6" gutterBottom>
        Featured Courses:
      </Typography>
      <List>
        <ListItem>
          <ListItemText 
            primary="Introduction to Heritage Conservation Safety" 
            secondary="Self-paced | 8 hours | AED 499" 
          />
          <Button variant="contained" size="small">Enroll</Button>
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Advanced Structural Safety for Historical Buildings" 
            secondary="Instructor-led | 20 hours | AED 1,299" 
          />
          <Button variant="contained" size="small">Enroll</Button>
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Digital Documentation for Heritage Safety" 
            secondary="Self-paced | 12 hours | AED 799" 
          />
          <Button variant="contained" size="small">Enroll</Button>
        </ListItem>
      </List>
    </Box>
  </Container>
);

export default OnlineTraining;