import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  List, 
  ListItem, 
  ListItemText,
  Button,
  Tab,
  Tabs,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ApprovalLicences = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const licenseTypes = [
    {
      title: "Heritage Safety Manager License",
      description: "For professionals overseeing safety at heritage sites",
      requirements: [
        "Minimum 5 years experience in heritage conservation",
        "Relevant educational qualification (engineering/architecture)",
        "Completion of HSC certification courses",
        "Pass written and practical examinations"
      ]
    },
    {
      title: "Historical Building Inspector License",
      description: "For specialists conducting safety inspections",
      requirements: [
        "3 years experience in building inspection",
        "HSC-approved training program completion",
        "Valid Dubai Civil Defence certification",
        "Pass practical assessment"
      ]
    },
    {
      title: "Archaeological Site Safety Certification",
      description: "For excavation and archaeological site safety officers",
      requirements: [
        "Degree in archaeology or related field",
        "Field experience certification",
        "HSC specialized training completion",
        "First aid certification"
      ]
    }
  ];

  const approvalProcess = [
    "Submit application through Dubai Municipality portal",
    "Initial documentation review (7-10 business days)",
    "Technical assessment by HSC committee",
    "On-site evaluation (if applicable)",
    "Final approval decision",
    "License issuance and registration"
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Approvals & Licenses
      </Typography>
      
      <Typography variant="body1" paragraph>
        Official certifications and licenses required for heritage conservation projects and safety professionals in Dubai.
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Professional Licenses" />
        <Tab label="Project Approvals" />
        <Tab label="Renewals" />
      </Tabs>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Heritage Safety Professional Licenses
        </Typography>
        
        <Grid container spacing={3}>
          {licenseTypes.map((license, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: 'background.paper' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {license.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {license.description}
                  </Typography>
                  <Accordion sx={{ bgcolor: 'background.default' }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="body2">Requirements</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List dense>
                        {license.requirements.map((req, i) => (
                          <ListItem key={i}>
                            <ListItemText primary={`• ${req}`} />
                          </ListItem>
                        ))}
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: 'background.paper' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Project Approval Process
              </Typography>
              <List>
                {approvalProcess.map((step, index) => (
                  <ListItem key={index}>
                    <Box sx={{ 
                      display: 'inline-flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      width: 24, 
                      height: 24, 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      borderRadius: '50%',
                      mr: 2
                    }}>
                      {index + 1}
                    </Box>
                    <ListItemText primary={step} />
                  </ListItem>
                ))}
              </List>
              <Button 
                variant="contained" 
                sx={{ mt: 2 }}
                fullWidth
              >
                Start Application Process
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: 'background.paper', height: '100%' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Important Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2">
                  Processing Time
                </Typography>
                <Typography variant="body2" paragraph>
                  Standard processing: 15-20 business days<br />
                  Expedited processing (additional fee): 7 business days
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2">
                  License Validity
                </Typography>
                <Typography variant="body2" paragraph>
                  Professional Licenses: 2 years<br />
                  Project Approvals: Duration of project<br />
                  Renewal applications must be submitted 30 days before expiration
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">
                  Fees
                </Typography>
                <Typography variant="body2" paragraph>
                  Initial License: AED 1,500<br />
                  Renewal: AED 900<br />
                  Project Approval: AED 2,500 + 5% of project value<br />
                  Late Renewal Penalty: AED 500/month
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ApprovalLicences;