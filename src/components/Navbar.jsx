import React, { useState, useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current page is home
  const isHomePage = location.pathname === '/';

  // Navbar styles based on page and scroll state
  const getNavbarStyles = () => {
    if (!isHomePage) {
      // For all non-home pages - always translucent
      return {
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        color: 'text.primary'
      };
    }
    
    // For home page - depends on scroll state
    return {
      bgcolor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
      color: scrolled ? 'text.primary' : 'common.white'
    };
  };

  const navbarStyles = getNavbarStyles();

  // Text and button colors based on page
  const getTextColor = () => {
    if (!isHomePage) return 'text.primary';
    return scrolled ? 'text.primary' : 'common.white';
  };

  const getButtonVariant = () => {
    if (!isHomePage) return 'contained';
    return scrolled ? 'contained' : 'outlined';
  };

  const getButtonColor = () => {
    if (!isHomePage) return 'primary';
    return scrolled ? 'primary' : 'inherit';
  };

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
        position="fixed"
        elevation={0}
        sx={{
          ...navbarStyles,
          transition: 'all 0.3s ease-out',
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Typography
              component={Link}
              to="/"
              variant="h6"
              noWrap
              sx={{
                color: getTextColor(),
                fontWeight: 800,
                textDecoration: 'none',
                letterSpacing: '-0.5px',
                fontSize: { xs: '1.1rem', sm: '1.5rem' },
                mr: 2,
                transition: 'color 0.3s ease-out',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              Heritage
            </Typography>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  flexGrow: 1,
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      size="medium"
                      sx={{
                        position: 'relative',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        color: location.pathname === item.path
                          ? 'primary.main'
                          : getTextColor(),
                        fontWeight: location.pathname === item.path ? 700 : 500,
                        transition: 'all 0.2s ease-out',
                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: !isHomePage || scrolled 
                            ? 'rgba(25, 118, 210, 0.05)'
                            : 'rgba(255, 255, 255, 0.1)',
                        },
                        ...(location.pathname === item.path && {
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -4,
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
              </Box>
            )}

            {/* Contact Button - Right Aligned */}
            {!isMobile && (
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                sx={{ ml: 'auto' }}
              >
                <Button
                  variant={getButtonVariant()}
                  size="medium"
                  color={getButtonColor()}
                  sx={{
                    fontWeight: 600,
                    borderRadius: 2,
                    px: 3,
                    color: !isHomePage || scrolled ? undefined : 'common.white',
                    borderColor: !isHomePage || scrolled ? undefined : 'rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      borderColor: !isHomePage || scrolled ? undefined : 'common.white',
                      backgroundColor: !isHomePage || scrolled ? undefined : 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Contact
                </Button>
              </motion.div>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                edge="end"
                onClick={() => setDrawerOpen(true)}
                sx={{ 
                  ml: 'auto',
                  color: getTextColor(),
                }}
              >
                <MenuIcon fontSize="medium" />
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
            width: { xs: '100%', sm: 300 },
            bgcolor: 'background.default',
            p: 2,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Heritage
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <MenuIcon />
          </IconButton>
        </Box>
        
        <Divider />
        
        <List sx={{ py: 2 }}>
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ListItem
                  button
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  selected={location.pathname === item.path}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    '&.Mui-selected': {
                      backgroundColor: 'primary.light',
                      color: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.light',
                      },
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.name} 
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </List>
        
        <Box sx={{ px: 2, mt: 'auto' }}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              fontWeight: 600,
              borderRadius: 2,
              py: 1.5,
              mb: 2,
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;