import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Language,
} from '@mui/icons-material';

const contactDetails = [
  { icon: <LocationOn color="primary" />, text: 'Business Bay, Dubai Main Land, UAE' },
  { icon: <Phone color="primary" />, text: '+971 4 123 4567' },
  { icon: <Email color="primary" />, text: 'info@heritagesafety.ae' },
  { icon: <AccessTime color="primary" />, text: 'Sunday - Thursday: 8:00 AM - 6:00 PM' },
];

const ContactSection = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Grid
      container
      spacing={6}
      sx={{
        mb: 12,
        maxWidth: 1100,
        mx: 'auto',
        px: { xs: 3, md: 0 },
      }}
    >
      {/* Contact Info */}
      <Grid item xs={12} md={6}>
        <Card
          elevation={8}
          sx={{
            borderRadius: 5,
            height: '100%',
            background: theme.palette.mode === 'dark'
              ? 'rgba(32, 42, 66, 0.9)'
              : 'linear-gradient(135deg, rgba(25,118,210,0.1) 0%, rgba(255,255,255,1) 100%)',
            border: theme.palette.mode === 'dark'
              ? '1px solid rgba(255, 255, 255, 0.12)'
              : '1px solid rgba(25, 118, 210, 0.15)',
            boxShadow: theme.shadows[10],
            px: { xs: 4, md: 6 },
            py: { xs: 5, md: 7 },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant={isMdUp ? 'h4' : 'h5'}
            fontWeight={900}
            color={theme.palette.primary.main}
            gutterBottom
            sx={{ mb: 4 }}
          >
            Get In Touch
          </Typography>

          <List sx={{ flexGrow: 1 }}>
            {contactDetails.map((item, i) => (
              <ListItem
                key={i}
                disableGutters
                sx={{
                  py: 1.8,
                  borderBottom:
                    i !== contactDetails.length - 1
                      ? `1px solid ${theme.palette.divider}`
                      : 'none',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color: theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: theme.palette.text.primary,
                  }}
                />
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 5 }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Language />}
              sx={{
                fontWeight: 700,
                borderRadius: 3,
                borderWidth: 2,
                px: 3,
                py: 1.5,
                fontSize: '0.95rem',
                '&:hover': { borderWidth: 2, backgroundColor: theme.palette.primary.light, color: theme.palette.primary.contrastText },
                transition: 'all 0.3s ease',
              }}
            >
              العربية (Arabic)
            </Button>
          </Box>
        </Card>
      </Grid>

      {/* Google Map */}
      <Grid item xs={12} md={6}>
        <Card
          elevation={8}
          sx={{
            borderRadius: 5,
            overflow: 'hidden',
            height: '100%',
            boxShadow: theme.shadows[10],
          }}
        >
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4022478438583!2d55.29297681160333!3d25.257050629179467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4287f20e86c7%3A0x7a2129ccff29533f!2sHeritage%20Safety%20Centre!5e0!3m2!1sen!2sae!4v1751198724775!5m2!1sen!2sae"
            sx={{
              width: '100%',
              height: { xs: 300, md: 440 },
              border: 0,
              filter: theme.palette.mode === 'dark' ? 'brightness(0.85)' : 'none',
            }}
            loading="lazy"
            title="Heritage Safety Centre Location"
            allowFullScreen
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default ContactSection;
