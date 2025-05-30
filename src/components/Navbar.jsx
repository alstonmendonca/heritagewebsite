import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Training', path: '/training' },
    { name: 'Online Training', path: '/online-training' },
    { name: 'Courses', path: '/courses-calendar' },
    { name: 'Consultancy', path: '/consultancy' },
    { name: 'Licences', path: '/approval-licences' },
    { name: 'Gallery', path: '/photo-gallery' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              py: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{
                color: 'primary.main',
                fontWeight: 800,
                textDecoration: 'none',
                letterSpacing: '-0.5px',
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                ml: 2,
                '&:hover': {
                  color: 'primary.dark',
                },
              }}
            >
              Heritage Safety
            </Typography>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      size="small"
                      sx={{
                        position: 'relative',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        color:
                          location.pathname === item.path
                            ? 'primary.main'
                            : 'text.secondary',
                        fontWeight: location.pathname === item.path ? 650 : 500,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor:
                            theme.palette.mode === 'light'
                              ? 'rgba(25, 118, 210, 0.05)'
                              : 'rgba(100, 181, 246, 0.1)',
                        },
                        ...(location.pathname === item.path && {
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -2,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '60%',
                            height: 2,
                            backgroundColor: 'primary.main',
                            borderRadius: 1,
                          },
                        }),
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      ml: 2,
                      fontWeight: 600,
                      borderRadius: 2,
                      boxShadow: 'none',
                      '&:hover': {
                        boxShadow: '0 4px 10px rgba(25, 118, 210, 0.2)',
                      },
                    }}
                  >
                    Contact
                  </Button>
                </motion.div>
              </Box>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                edge="end"
                onClick={() => setDrawerOpen(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: 'background.default',
            p: 2,
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          Heritage Safety
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem
              button
              key={item.name}
              component={Link}
              to={item.path}
              onClick={() => setDrawerOpen(false)}
              selected={location.pathname === item.path}
              sx={{
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            fontWeight: 600,
            borderRadius: 2,
          }}
        >
          Contact
        </Button>
      </Drawer>
    </>
  );
};

export default Navbar;
