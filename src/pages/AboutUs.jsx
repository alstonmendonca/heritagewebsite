import React from 'react';
import { 
  useTheme, 
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Chip,
  Avatar,
  Paper,
  useMediaQuery
} from '@mui/material';
import {
  CheckCircle,
  PlayCircle,
  Groups,
  School,
  Star,
  EmojiEvents,
  Work,
  Language,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const AccreditationLogos = () => (
  <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap" mt={4}>
    {['nebosh', 'habc', 'iosh'].map((logo, index) => (
      <Paper 
        key={index} 
        elevation={0} 
        sx={{ 
          p: 2, 
          borderRadius: 3, 
          bgcolor: 'rgba(25, 118, 210, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.05)' }
        }}
      >
        <Box 
          component="img" 
          src={`/logos/${logo}.svg`} 
          alt={logo.toUpperCase()} 
          height={40} 
          sx={{ filter: 'grayscale(100%)', opacity: 0.8, transition: 'all 0.3s ease', '&:hover': { filter: 'none', opacity: 1 } }}
        />
      </Paper>
    ))}
  </Box>
);

const AboutUs = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant={isSmScreen ? 'h4' : 'h3'}
            component="h1"
            fontWeight={800}
            gutterBottom
            sx={{
              color: theme.palette.primary.main,
              lineHeight: 1.2,
              mb: 3
            }}
          >
            Empowering Safer Workplaces with World-Class Training
          </Typography>
          <Typography variant="h6" color="text.secondary" mb={3}>
            Affordable, Flexible, and UAE-Compliant Safety Training Since 2014
          </Typography>
          
          <Box display="flex" gap={2} flexWrap="wrap" mb={3}>
            <Chip 
              icon={<Groups />} 
              label="20,000+ Professionals Trained" 
              color="primary" 
              variant="outlined" 
              sx={{ fontWeight: 600 }} 
            />
            <Chip 
              icon={<Star sx={{ color: '#ffc107' }} />} 
              label="4.9/5 Rating" 
              sx={{ fontWeight: 600, bgcolor: 'rgba(255, 193, 7, 0.1)' }} 
            />
          </Box>
          
          <Button 
            variant="contained" 
            size="large"
            href="/courses"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 700,
              boxShadow: '0 4px 14px rgba(25, 118, 210, 0.3)',
              mb: 3
            }}
          >
            Discover Our Courses
          </Button>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image="/images/heritage-training-session.jpg"
              alt="Safety Training Session"
            />
            <Box 
              sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer'
              }}
              component={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <PlayCircle sx={{ fontSize: 80, color: 'white', opacity: 0.9 }} />
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Accreditation */}
      <Box textAlign="center" mb={8}>
        <Typography variant="subtitle1" color="text.secondary" mb={3}>
          Accredited by leading global institutions
        </Typography>
        <AccreditationLogos />
      </Box>

      {/* About Section */}
      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, height: '100%' }}>
            <CardContent>
              <Typography variant="h5" fontWeight={700} gutterBottom color="primary">
                Who We Are?
              </Typography>
              <Typography paragraph>
                Since 2014, Heritage Safety Training Centre has been Dubai's trusted partner in health
                and safety training, delivering high-quality, affordable courses that save lives and ensure
                compliance.
              </Typography>
              <Typography paragraph>
                Based in Dubai main land, we empower individuals and businesses across the UAE
                with the skills and knowledge to create safer workplaces. From globally recognized
                certifications to bespoke solutions, our expert-led training meets the diverse needs of
                industries like construction, oil & gas, hospitality, and logistics.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, height: '100%', bgcolor: 'rgba(25, 118, 210, 0.03)' }}>
            <CardContent>
              <Typography variant="h5" fontWeight={700} gutterBottom color="primary">
                Why Choose Heritage Safety?
              </Typography>
              <List dense>
                {[
                  "Comprehensive Training Portfolio",
                  "Custom-Made Solutions",
                  "Affordable & Accessible",
                  "Online & Hybrid Learning",
                  "UAE-Compliant Expertise",
                  "Proven Track Record"
                ].map((item, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircle color="success" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              
              <Box mt={3}>
                <Typography variant="body2" color="text.secondary">
                  Our mission is simple: to make world-class safety training accessible to everyone. 
                  We prioritize transparency, ethical practices, and compliance with UAE data protection laws.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Testimonials */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" fontWeight={700} textAlign="center" mb={2} color="primary">
          What Our Learners Say
        </Typography>
        <Divider sx={{ width: 80, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 4 }} />
        
        <Grid container spacing={4}>
          {[
            {
              quote: "Heritage Safety's NEBOSH IGC course was affordable and well-structured. The trainers made complex topics easy to understand. Highly recommend!",
              author: "Mark D'Souza",
              role: "HSE Manager, NASH Engineering, Dubai",
              rating: 5
            },
            {
              quote: "We partnered with Heritage for custom HAZMAT training for our logistics team. The course was tailored to our needs and delivered exceptional value.",
              author: "Jeferey Arreza",
              role: "Group Health & Safety Manager, REDA Chemicals",
              rating: 5
            },
            {
              quote: "The online First Aid course was perfect for our small team. Flexible, engaging, and UAE-compliant. Thank you, Heritage!",
              author: "Jifrey Patricio",
              role: "EHS Specialist, GE Middle East, UAE",
              rating: 4
            }
          ].map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                component={motion.div}
                whileHover={{ y: -5 }}
                sx={{ 
                  height: '100%', 
                  borderRadius: 4,
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}
              >
                <CardContent sx={{ height: '100%' }}>
                  <Box display="flex" mb={2}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#ffc107', fontSize: 18 }} />
                    ))}
                  </Box>
                  <Typography variant="body1" fontStyle="italic" mb={3}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box display="flex" alignItems="center" mt="auto">
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      {testimonial.author.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={600}>{testimonial.author}</Typography>
                      <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Card sx={{ mb: 8, borderRadius: 4, bgcolor: '#f5f5f5' }}>
        <CardContent>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight={700} gutterBottom color="text.primary">
                Start Your Safety Training Journey
              </Typography>
              <Typography paragraph color="text.secondary">
                Whether you need NEBOSH, First Aid, technical safety courses, or a custom program,
                we've got you covered.
              </Typography>

              <Box display="flex" gap={2} flexWrap="wrap" mt={3}>
                <Button
                  variant="contained"
                  color="primary"
                  href="/courses"
                  sx={{
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  Browse Courses
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="/contact"
                  sx={{
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                    borderRadius: 2
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={1} sx={{ p: 3, borderRadius: 3, bgcolor: 'background.paper' }}>
                <Typography variant="h6" fontWeight={600} gutterBottom color="text.primary">
                  Request Information
                </Typography>
                <Box
                  component="form"
                  sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
                >
                  <TextField
                    required
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    required
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    required
                    label="Industry"
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    required
                    label="Course Interest"
                    variant="outlined"
                    size="small"
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 1,
                      fontWeight: 600,
                      py: 1
                    }}
                  >
                    Get Personalized Advice
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>


      {/* Contact Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, height: '100%' }}>
            <CardContent>
              <Typography variant="h5" fontWeight={700} gutterBottom color="primary">
                Contact Information
              </Typography>
              
              <List>
                {[
                  { icon: <LocationOn color="primary" />, text: 'Business Bay, Dubai Main Land, UAE' },
                  { icon: <Phone color="primary" />, text: '+971 4 123 4567' },
                  { icon: <Email color="primary" />, text: 'info@heritagesafety.ae' }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
              
              <Box mt={4}>
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<Language />}
                  sx={{ fontWeight: 600, borderRadius: 2 }}
                >
                  العربية (Arabic)
                </Button>
                <Typography variant="body2" color="text.secondary" mt={2}>
                  Our website is WCAG 2.1 compliant for all users.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ borderRadius: 4, overflow: 'hidden', height: '100%' }}>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.123456789!2d55.270782!3d25.204849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4343e6c9939d%3A0xc1d97ee9e21d2a0b!2sHeritage%20Safety%20Training%20Centre!5e0!3m2!1sen!2sae!4v1686543210000!5m2!1sen!2sae"
              sx={{ 
                width: '100%', 
                height: 300, 
                border: 0 
              }}
              loading="lazy"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
