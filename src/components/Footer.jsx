import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ py: 3, mt: 'auto', bgcolor: 'background.paper' }}>
    <Divider sx={{ mb: 2 }} />
    <Typography variant="body2" color="text.secondary" align="center">
      © {new Date().getFullYear()} Heritage Safety Centre Dubai
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      P.O. Box 12345, Dubai, UAE | Phone: +971 4 123 4567 | Email: info@heritagesafety.ae
    </Typography>
  </Box>
);

export default Footer;