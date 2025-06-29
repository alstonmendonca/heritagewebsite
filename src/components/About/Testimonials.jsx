import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Box,
  Avatar,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Star, FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    quote:
      "Heritage Safety's NEBOSH IGC course was affordable and well-structured. The trainers made complex topics easy to understand. Highly recommend!",
    author: "Mark D'Souza",
    role: "HSE Manager, NASH Engineering, Dubai",
    rating: 5,
  },
  {
    quote:
      "We partnered with Heritage for custom HAZMAT training for our logistics team. The course was tailored to our needs and delivered exceptional value.",
    author: "Jeferey Arreza",
    role: "Group Health & Safety Manager, REDA Chemicals",
    rating: 5,
  },
  {
    quote:
      "The online First Aid course was perfect for our small team. Flexible, engaging, and UAE-compliant. Thank you, Heritage!",
    author: "Jifrey Patricio",
    role: "EHS Specialist, GE Middle East, UAE",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, x: 50 * (index % 2 === 0 ? 1 : -1), y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        boxShadow: theme.shadows[12],
        zIndex: 1,
      }}
      sx={{
        borderRadius: 5,
        boxShadow: theme.shadows[4],
        border: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        flexDirection: isMdUp ? 'row' : 'column',
        bgcolor: theme.palette.background.paper,
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Left side: Quote text */}
      <Box
        sx={{
          flex: 2,
          p: { xs: 3, md: 6 },
          position: 'relative',
          borderRight: isMdUp ? `1px solid ${theme.palette.divider}` : 'none',
        }}
      >
        <FormatQuote
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            fontSize: 48,
            color: theme.palette.primary.main,
            opacity: 0.15,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
        <Typography
          variant="body1"
          fontStyle="italic"
          color={theme.palette.text.primary}
          sx={{ lineHeight: 1.7, position: 'relative', zIndex: 1 }}
        >
          {testimonial.quote}
        </Typography>
      </Box>

      {/* Right side: Author info */}
      <Box
        sx={{
          flex: 1,
          p: { xs: 3, md: 6 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor:
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.06)'
              : 'rgba(0, 0, 0, 0.04)',
        }}
      >
        <Box mb={2} display="flex" alignItems="center" gap={1}>
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} sx={{ color: '#ffc107', fontSize: 24 }} />
          ))}
          {[...Array(5 - testimonial.rating)].map((_, i) => (
            <Star key={`empty-${i}`} sx={{ color: theme.palette.action.disabled, fontSize: 24 }} />
          ))}
        </Box>

        <Avatar
          sx={{
            bgcolor: theme.palette.primary.main,
            fontWeight: 'bold',
            fontSize: '1.5rem',
            width: 64,
            height: 64,
            mb: 2,
            textTransform: 'uppercase',
            boxShadow: theme.shadows[6],
          }}
          aria-label={`Avatar of ${testimonial.author}`}
        >
          {testimonial.author.charAt(0)}
        </Avatar>

        <Typography
          variant="h6"
          fontWeight={700}
          color={theme.palette.text.primary}
          textAlign="center"
        >
          {testimonial.author}
        </Typography>
        <Typography
          variant="body2"
          color={theme.palette.text.secondary}
          textAlign="center"
        >
          {testimonial.role}
        </Typography>
      </Box>
    </Card>
  );
};

const Testimonials = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      component="section"
      sx={{
        mb: 16,
        px: { xs: 3, md: 0 },
        maxWidth: 1000,
        mx: 'auto',
      }}
    >
      <Typography
        variant={isMdUp ? 'h3' : 'h4'}
        fontWeight={900}
        textAlign="center"
        mb={3}
        color={theme.palette.primary.main}
        sx={{ letterSpacing: '-0.03em' }}
      >
        Success Stories
      </Typography>

      <Divider
        sx={{
          width: 90,
          height: 6,
          bgcolor: theme.palette.primary.main,
          borderRadius: 3,
          mx: 'auto',
          mb: 6,
          boxShadow: `0 6px 18px ${theme.palette.primary.main}70`,
        }}
      />

      <Grid container spacing={5}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} key={index}>
            <TestimonialCard testimonial={testimonial} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
