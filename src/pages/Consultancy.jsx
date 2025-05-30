import React from 'react';
import { 
    Paper,
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader, 
  Avatar, 
  List, 
  ListItem, 
  ListItemText,
  Divider,
  Button,
  Box
} from '@mui/material';
import { 
  Engineering as EngineeringIcon,
  Architecture as ArchitectureIcon,
  SafetyCheck as SafetyCheckIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

const Consultancy = () => {
  const services = [
    {
      icon: <EngineeringIcon fontSize="large" />,
      title: "Structural Safety Assessment",
      description: "Comprehensive evaluation of historical buildings and structures"
    },
    {
      icon: <ArchitectureIcon fontSize="large" />,
      title: "Conservation Planning",
      description: "Integrating safety measures into heritage conservation projects"
    },
    {
      icon: <SafetyCheckIcon fontSize="large" />,
      title: "Compliance Audits",
      description: "Ensuring adherence to Dubai heritage safety regulations"
    },
    {
      icon: <AssessmentIcon fontSize="large" />,
      title: "Risk Management",
      description: "Developing customized safety protocols for heritage sites"
    }
  ];

  const processSteps = [
    "Initial consultation and site visit",
    "Detailed safety assessment report",
    "Customized solution development",
    "Implementation planning",
    "Staff training and certification",
    "Ongoing support and compliance monitoring"
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Professional Consultancy Services
      </Typography>
      
      <Typography variant="body1" paragraph>
        Our expert consultants provide specialized safety solutions for heritage sites, historical buildings, 
        and archaeological projects throughout the UAE.
      </Typography>

      <Grid container spacing={3} sx={{ my: 3 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {service.icon}
                  </Avatar>
                }
                title={service.title}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Our Consultancy Process
          </Typography>
          <List>
            {processSteps.map((step, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={`${index + 1}. ${step}`} />
                </ListItem>
                {index < processSteps.length - 1 && <Divider component="li" />}
              </React.Fragment>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, bgcolor: 'background.paper', height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Request a Consultation
            </Typography>
            <Typography variant="body1" paragraph>
              Contact our consultancy team to discuss your heritage safety requirements.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ mr: 2 }}
              >
                Book Site Assessment
              </Button>
              <Button variant="outlined" size="large">
                Download Brochure
              </Button>
            </Box>
            <Box sx={{ mt: 3, bgcolor: 'background.default', p: 2, borderRadius: 1 }}>
              <Typography variant="body2">
                <strong>Consultancy Hours:</strong> Sunday-Thursday, 8:00 AM - 6:00 PM<br />
                <strong>Emergency Contact:</strong> +971 50 123 4567 (24/7)<br />
                <strong>Email:</strong> consultancy@heritagesafety.ae
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Consultancy;