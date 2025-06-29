import React from 'react';
import {
  Box,
  Typography,
  Button,
  Stack,
  Grid,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper
} from '@mui/material';
import { Groups, School, Star, EmojiEvents } from '@mui/icons-material';
import { motion } from 'framer-motion';

const stats = [
  { value: '20,000+', label: 'Professionals Trained', icon: <Groups /> },
  { value: '98%', label: 'Pass Rate', icon: <School /> },
  { value: '4.9/5', label: 'Satisfaction Rating', icon: <Star /> },
  { value: '50+', label: 'Courses Offered', icon: <EmojiEvents /> },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box component="section" sx={{ px: { xs: 2, md: 8 }, py: { xs: 8, md: 14 }, maxWidth: 1440, mx: 'auto' }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={7}>
          <Stack spacing={4} component={motion.div} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h2" fontWeight={900} sx={{
              lineHeight: 1.1,
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Leading Safety Training in UAE
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth={600}>
              Since 2014, we’ve empowered over 20,000 professionals with world-class safety training across all industries. Trusted by corporates and individuals alike.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained" size="large" href="/courses" sx={{ px: 5, py: 1.75, fontWeight: 700, borderRadius: 3 }}>Explore Courses</Button>
              <Button variant="outlined" size="large" href="/contact" sx={{ px: 5, py: 1.75, fontWeight: 700, borderRadius: 3 }}>Contact Us</Button>
            </Stack>
          </Stack>

          {/* Stats Section */}
          <Grid container spacing={3} mt={5}>
            {stats.map(({ value, label, icon }, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <Paper elevation={3} sx={{ p: 2, borderRadius: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-6px)', boxShadow: theme.shadows[6] } }}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, mb: 1 }}>{icon}</Avatar>
                  <Typography variant="h6" fontWeight={700}>{value}</Typography>
                  <Typography variant="caption" color="text.secondary">{label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Section: Video Embed */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/PtCEkGS2JaQ"
              title="Heritage Safety Training Centre Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ borderRadius: '12px', boxShadow: theme.shadows[10], minHeight: '400px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;