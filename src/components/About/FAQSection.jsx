import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const faqs = [
  {
    question: "What makes Heritage different from other training providers?",
    answer:
      "We combine global best practices with local UAE compliance requirements, offering the most comprehensive and affordable safety training solutions in the region.",
  },
  {
    question: "Do you offer corporate training packages?",
    answer:
      "Yes, we provide customized training solutions for businesses of all sizes with volume discounts and tailored content to meet your specific industry needs.",
  },
  {
    question: "Are your certificates recognized in the UAE?",
    answer:
      "All our courses are fully accredited and recognized by relevant UAE authorities including OSHAD, DM, and other regulatory bodies.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box
      component="section"
      sx={{
        maxWidth: 900,
        mx: 'auto',
        mb: 12,
        px: { xs: 3, md: 0 },
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Typography
        variant={isMdUp ? 'h3' : 'h4'}
        fontWeight={900}
        color={theme.palette.primary.main}
        gutterBottom
        sx={{ letterSpacing: '-0.03em' }}
      >
        Frequently Asked Questions
      </Typography>

      <Divider
        sx={{
          width: 90,
          height: 5,
          bgcolor: theme.palette.primary.main,
          borderRadius: 3,
          mx: 'auto',
          mb: 6,
          boxShadow: `0 4px 10px ${theme.palette.primary.main}70`,
        }}
      />

      <Box sx={{ textAlign: 'left' }}>
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            expanded={expanded === `panel${i}`}
            onChange={handleChange(`panel${i}`)}
            elevation={3}
            sx={{
              mb: 3,
              borderRadius: 3,
              border: `1px solid ${theme.palette.divider}`,
              boxShadow:
                expanded === `panel${i}` ? theme.shadows[6] : theme.shadows[1],
              transition: 'box-shadow 0.3s ease',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }} />}
              sx={{
                bgcolor:
                  expanded === `panel${i}`
                    ? theme.palette.action.selected
                    : 'transparent',
                borderRadius: 3,
                px: { xs: 2, md: 4 },
                py: { xs: 1.5, md: 2 },
                '&:hover': {
                  bgcolor: theme.palette.action.hover,
                },
                '& .MuiAccordionSummary-content': {
                  margin: 0,
                },
              }}
            >
              <Typography
                variant="subtitle1"
                fontWeight={700}
                color={theme.palette.text.primary}
                sx={{ userSelect: 'none' }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                px: { xs: 3, md: 5 },
                pb: { xs: 3, md: 4 },
                pt: 1,
              }}
            >
              <Typography
                variant="body1"
                color={theme.palette.text.secondary}
                sx={{ lineHeight: 1.6 }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
