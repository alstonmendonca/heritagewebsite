import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const coursesOptions = [
  { value: '', label: 'Select a course' },
  { value: 'nebosh', label: 'NEBOSH Courses' },
  { value: 'first-aid', label: 'First Aid Training' },
  { value: 'hazmat', label: 'HAZMAT Training' },
  { value: 'custom', label: 'Custom Corporate Training' },
];

const CTASection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        bgcolor: theme.palette.mode === 'dark' ? '#0a1929' : '#e8f0fe',
        borderRadius: 5,
        px: { xs: 3, md: 8 },
        py: { xs: 8, md: 12 },
        mx: 'auto',
        maxWidth: 1200,
        boxShadow: theme.shadows[6],
      }}
    >
      {/* Abstract gradient shape */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: `radial-gradient(circle at center, ${theme.palette.primary.main}80, transparent 70%)`,
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: `radial-gradient(circle at center, ${theme.palette.secondary.main}80, transparent 70%)`,
          filter: 'blur(90px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      <Grid
        container
        spacing={6}
        alignItems="center"
        sx={{ position: 'relative', zIndex: 1 }}
      >
        {/* Left Text & Buttons */}
        <Grid item xs={12} md={6}>
          <Typography
            variant={isMdUp ? 'h3' : 'h4'}
            fontWeight={900}
            gutterBottom
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary.dark,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Ready to Elevate Your Safety Standards?
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.mode === 'dark' ? 'grey.300' : 'text.secondary'}
            sx={{ mb: 4, maxWidth: 480, fontWeight: 500 }}
          >
            Whether you're an individual looking to advance your career or an organization
            needing comprehensive training solutions, we're here to help.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              component={motion.div}
              whileHover={{ scale: 1.06 }}
              variant="contained"
              size="large"
              href="/courses"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.75,
                fontWeight: 700,
                boxShadow: `0 6px 16px ${theme.palette.primary.main}90`,
              }}
            >
              View All Courses
            </Button>
            <Button
              component={motion.div}
              whileHover={{ scale: 1.06 }}
              variant="outlined"
              size="large"
              href="/contact"
              sx={{
                borderRadius: 3,
                px: 5,
                py: 1.75,
                fontWeight: 700,
                borderWidth: 2,
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.dark,
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              Get a Consultation
            </Button>
          </Box>
        </Grid>

        {/* Right Form */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={6}
            sx={{
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              bgcolor: theme.palette.mode === 'dark' ? '#112240' : '#fff',
              boxShadow:
                theme.palette.mode === 'dark'
                  ? '0 8px 30px rgb(0 0 0 / 0.6)'
                  : theme.shadows[10],
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{ color: theme.palette.mode === 'dark' ? '#a0aec0' : 'text.primary' }}
            >
              Request a Callback
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <TextField
                required
                label="Full Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                required
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                required
                label="Phone Number"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                select
                label="Course Interest"
                variant="outlined"
                fullWidth
                SelectProps={{ native: true }}
                InputLabelProps={{ shrink: true }}
                defaultValue=""
              >
                {coursesOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </TextField>

              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  mt: 1,
                  fontWeight: 700,
                  py: 1.75,
                  borderRadius: 3,
                  boxShadow: `0 6px 20px ${theme.palette.primary.main}aa`,
                }}
              >
                Request Information
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CTASection;
