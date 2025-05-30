import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = ({ title, description, imageUrl }) => (
  <Card sx={{ maxWidth: 345, m: 2, bgcolor: 'background.paper' }}>
    <CardMedia
      component="img"
      height="200"
      image={imageUrl}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

export default ImageCard;