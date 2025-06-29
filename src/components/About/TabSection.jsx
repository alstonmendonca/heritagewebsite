import React, { useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Stack,
  Icon,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CorporateFare,
  Shield,
  CheckCircle,
} from '@mui/icons-material';

const steps = [
  {
    title: 'About Us',
    icon: <CorporateFare fontSize="small" />,
    description:
      'Founded in 2014, Heritage Safety Training Centre has grown from a small provider to Dubai’s trusted name. We’ve trained over 20,000 professionals across industries, committed to safety culture.',
  },
  {
    title: 'Our Approach',
    icon: <Shield fontSize="small" />,
    description:
      'Our blend of theory and hands-on methods, scenario-based learning, and post-training support ensures practical, real-world readiness for every learner.',
  },
  {
    title: 'Why Choose Us',
    icon: <CheckCircle fontSize="small" />,
    description:
      'Affordable pricing, UAE-specific compliance content, and expert trainers with over 10 years of industry experience make Heritage your ideal training partner.',
  },
];

const StepNavigator = () => {
  const [active, setActive] = useState(0);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: 1100,
        mx: 'auto',
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 5 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 6,
        borderRadius: 5,
        bgcolor: theme.palette.mode === 'dark' ? '#0a1929' : '#f9fbff',
        boxShadow: theme.shadows[6],
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <Box
        sx={{
          position: 'absolute',
          width: 240,
          height: 240,
          top: -60,
          left: -60,
          bgcolor: `${theme.palette.primary.main}22`,
          borderRadius: '50%',
          filter: 'blur(70px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 200,
          height: 200,
          bottom: -40,
          right: -40,
          bgcolor: `${theme.palette.secondary.main}22`,
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      {/* Step List */}
      <Box
        sx={{
          minWidth: { md: 180 },
          zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' },
          gap: { xs: 2, md: 4 },
          overflowX: { xs: 'auto', md: 'visible' },
        }}
      >
        {steps.map((step, i) => {
          const isActive = i === active;
          const isPast = i < active;

          return (
            <Box
              key={i}
              onClick={() => setActive(i)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.7,
                transition: 'all 0.3s ease',
                flexDirection: { xs: 'column', md: 'row' },
                position: 'relative',
              }}
            >
              {/* Circle + progress */}
              <Box sx={{ position: 'relative' }}>
                <motion.div
                  initial={false}
                  animate={{
                    backgroundColor: isActive
                      ? theme.palette.primary.main
                      : isPast
                      ? theme.palette.primary.light
                      : theme.palette.grey[300],
                    scale: isActive ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: 18,
                    boxShadow: isActive ? theme.shadows[4] : 'none',
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Vertical line for md+ */}
                {isMdUp && i < steps.length - 1 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      width: 4,
                      height: 40,
                      bgcolor: isPast
                        ? theme.palette.primary.light
                        : theme.palette.grey[300],
                      transform: 'translateX(-50%)',
                      borderRadius: 2,
                      zIndex: -1,
                    }}
                  />
                )}
              </Box>

              {/* Title */}
              <Typography
                variant="body1"
                fontWeight={isActive ? 800 : 600}
                sx={{
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  color: isActive
                    ? 'primary.main'
                    : theme.palette.text.primary,
                }}
              >
                {step.title}
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* Content Display */}
      <Box
        sx={{
          flex: 1,
          zIndex: 1,
          bgcolor: 'background.paper',
          borderRadius: 4,
          p: { xs: 3, md: 5 },
          boxShadow: theme.shadows[4],
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h4" fontWeight={800} mb={2} color="primary.main">
              {steps[active].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}
              color="text.secondary"
            >
              {steps[active].description}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <Stack direction="row" justifyContent="flex-end" mt={4}>
          <Button
            variant="contained"
            onClick={() => setActive((prev) => (prev + 1) % steps.length)}
            disabled={active === steps.length - 1}
            sx={{
              borderRadius: 3,
              px: 5,
              py: 1.5,
              fontWeight: 700,
              boxShadow: theme.shadows[6],
              transition: 'all 0.3s ease',
            }}
          >
            {active === steps.length - 1 ? 'Done' : 'Next'}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default StepNavigator;
