import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'NEBOSH',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7ycLk4exAdZrJOXmpEMr7s32MAb75AHUDLi6ZKYQWc-HngdxddeQzPauuyj7_R9wVps&usqp=CAU',
  },
  {
    name: 'HABC',
    url: 'https://www.ferryspeed.com/wp-content/uploads/2018/10/HABC-in-page.jpg',
  },
  {
    name: 'IOSH',
    url: 'https://ahlansafety.com/wp-content/uploads/2024/12/iosh-01.png',
  },
  {
    name: 'MOHRE',
    url: 'https://wl-img-prd.s3-accelerate.amazonaws.com/2b71c598-15bc-4ae1-be8e-0918d1661aae-h.jpeg',
  },
  {
    name: 'KHDA',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQHAYokzORrEBQ/company-logo_200_200/company-logo_200_200/0/1652864087906?e=2147483647&v=beta&t=hrUHGvdxuUEKUM7kUim4ZhdLhRdRMygIzN8t9HohJnY',
  },
  {
    name: 'Dubai Ambulance',
    url: 'https://media.licdn.com/dms/image/v2/C4D0BAQGzC_0xYAtPxw/company-logo_200_200/company-logo_200_200/0/1656067851934/dubai_corporation_for_ambulance_services_logo?e=2147483647&v=beta&t=lsJQ6OMV3bd2mqw5OvvHyAuTonHqke18k1Xz8-aCVqg',
  },
];

const shapes = [
  { size: 140, top: -50, left: 10, colorAlpha: 0.1, rotate: 15 },
  { size: 100, top: 20, left: 130, colorAlpha: 0.08, rotate: -25 },
  { size: 120, top: 80, left: 250, colorAlpha: 0.12, rotate: 45 },
];

const AccreditationLogos = () => {
  const theme = useTheme();
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        position: 'relative',
        py: 6,
        px: 3,
        maxWidth: 480,
        mx: 'auto',
        userSelect: 'none',
      }}
    >
      {/* Abstract shapes layered behind */}
      {shapes.map(({ size, top, left, colorAlpha, rotate }, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: size,
            height: size,
            top,
            left,
            borderRadius: '50%',
            bgcolor: `rgba(${theme.palette.primary.main.replace('#','') ? 
              hexToRgb(theme.palette.primary.main) : '25, 118, 210'}, ${colorAlpha})`,
            transform: `rotate(${rotate}deg)`,
            filter: 'blur(25px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}

      <Typography
        variant="h6"
        fontWeight={700}
        color={theme.palette.text.primary}
        mb={4}
        sx={{ textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase' }}
      >
        Our Trusted Partners
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          justifyItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {logos.map((logo, idx) => (
        <motion.div
          key={logo.name}
          onHoverStart={() => setHovered(idx)}
          onHoverEnd={() => setHovered(null)}
          initial={{ scale: 1, filter: 'grayscale(60%)', opacity: 0.8 }}
          animate={{
            scale: hovered === idx ? 1.15 : 1,
            filter: hovered === idx ? 'grayscale(0%)' : 'grayscale(60%)',
            opacity: hovered === idx ? 1 : 0.8,
            boxShadow: hovered === idx
              ? `0 8px 18px ${theme.palette.primary.main}88`
              : 'none',
            zIndex: hovered === idx ? 10 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            cursor: 'pointer',
            borderRadius: 12,
            background: hovered === idx ? theme.palette.primary.light + '22' : 'transparent',
            padding: 12,
            width: 100,
            height: 80,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: idx === 1 ? -20 : 0,
            marginLeft: idx === 2 ? -10 : 0,
            transition: 'background-color 0.3s ease',
          }}
        >
          <Box
            component="img"
            src={logo.url}
            alt={logo.name}
            loading="lazy"
            sx={{
              maxWidth: 70,
              maxHeight: 60,
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              userSelect: 'none',
              filter: hovered === idx ? 'none' : 'grayscale(60%)',
              transition: 'filter 0.3s ease',
            }}
          />
        </motion.div>

        ))}
      </Box>
    </Box>
  );
};

// Helper to convert hex to rgb for rgba usage (if needed)
function hexToRgb(hex) {
  // Remove #
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}

export default AccreditationLogos;
