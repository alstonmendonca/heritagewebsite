import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();

  const palette = [
    '#922b7b', '#4a2971', '#4d5f99',
    '#5bb8b2', '#50aa43', '#96c040',
    '#c03182', '#eb323e'
  ];

  const words = [
    'Heritage Safety Training Centre',
    'Health and Safety Experts',
    'Best in Dubai'
  ];

  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex(i => (i + 1) % words.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, typingSpeed, words]);

  const renderColoredText = () =>
    text.split('').map((char, i) => (
      <span
        key={i}
        style={{
          color: palette[i % palette.length],
          transition: 'color 0.3s ease',
        }}
      >
        {char}
      </span>
    ));

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        m: 0,
        p: 0,
        overflow: 'hidden',
      }}
    >
      {/* Light Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url('/assets/home_background.webp')", // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.65) blur(1.5px)',
          zIndex: 0,
        }}
      />

      {/* Your content on top */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 0,
          color: '#fff',
        }}
      >
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              display: 'inline-block',
              minHeight: '3.5rem',
            }}
          >
            {renderColoredText()}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              style={{ marginLeft: 4 }}
            >
              |
            </motion.span>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <Typography variant="subtitle1" sx={{ maxWidth: 600, mb: 4 }}>
            Providing internationally recognized safety and NEBOSH training programs with expert guidance and
            state-of-the-art learning.
          </Typography>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              component={Link}
              to="/training"
              variant="contained"
              size="large"
              sx={{
                borderRadius: 3,
                px: 4,
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              }}
            >
              Explore Courses
            </Button>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
