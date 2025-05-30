import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();

  const palette = ['#922b7b', '#4a2971', '#4d5f99', '#5bb8b2', '#50aa43', '#96c040', '#c03182', '#eb323e'];

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
    const currentWord = words[wordIndex];
    let timeout;

    // 1. Typing: add one character at a time
    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        setTypingSpeed(80);
      }, typingSpeed);
    }
    // 2. Pause at full word, then start deleting
    else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    }
    // 3. Deleting: remove one character at a time
    else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        setTypingSpeed(40);
      }, typingSpeed);
    }
    // 4. Pause at empty, then move to next word
    else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, typingSpeed, words]);

  const renderColoredText = () => {
    return text.split('').map((char, idx) => (
      <span
        key={idx}
        style={{
          color: palette[idx % palette.length],
          transition: 'color 0.3s ease',
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.main,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 2,
            display: 'inline-block',
            minHeight: '3.5rem',
          }}
        >
          {renderColoredText()}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1,
              ease: "easeInOut"
            }}
            style={{ 
              color: theme.palette.text.primary,
              marginLeft: 2 
            }}
          >
            |
          </motion.span>
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Typography variant="subtitle1" sx={{ maxWidth: 600, mb: 4 }}>
          Providing internationally recognized safety and NEBOSH training
          programs with expert guidance and state-of-the-art learning.
        </Typography>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
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
              boxShadow: '0 4px 10px rgba(25, 118, 210, 0.2)',
              '&:hover': {
                boxShadow: '0 6px 15px rgba(25, 118, 210, 0.3)',
              }
            }}
          >
            Explore Courses
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Home;