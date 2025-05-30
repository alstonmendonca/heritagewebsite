import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Tabs,
  Tab,
  Box
} from '@mui/material';

const CoursesCalendar = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const courses = [
    { id: 1, name: 'Heritage Site Safety Management', date: '2023-10-15', duration: '3 days', location: 'Dubai HQ', seats: 12 },
    { id: 2, name: 'Historical Building Fire Safety', date: '2023-10-22', duration: '2 days', location: 'Abu Dhabi Branch', seats: 8 },
    { id: 3, name: 'Archaeological Safety Protocols', date: '2023-11-05', duration: '4 days', location: 'Dubai HQ', seats: 15 },
    { id: 4, name: 'Conservation Lab Safety', date: '2023-11-12', duration: '1 day', location: 'Sharjah Training Center', seats: 10 },
    { id: 5, name: 'Heritage Disaster Management', date: '2023-11-19', duration: '3 days', location: 'Dubai HQ', seats: 18 },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Training Courses Calendar
      </Typography>
      
      <Typography variant="body1" paragraph>
        Browse our upcoming training courses and workshops. All courses are certified by Dubai Civil Defence and the Ministry of Culture.
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
        <Tab label="Upcoming Courses" />
        <Tab label="Special Workshops" />
        <Tab label="Annual Schedule" />
      </Tabs>

      <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
        <TableContainer component={Paper} sx={{ bgcolor: 'background.default' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Course Name</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Date</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Duration</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Location</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Seats Available</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.name}</TableCell>
                  <TableCell>{course.date}</TableCell>
                  <TableCell>{course.duration}</TableCell>
                  <TableCell>{course.location}</TableCell>
                  <TableCell>
                    <Box sx={{ 
                      display: 'inline-block', 
                      px: 1, 
                      borderRadius: 1, 
                      bgcolor: course.seats < 5 ? 'error.dark' : course.seats < 10 ? 'warning.dark' : 'success.dark'
                    }}>
                      {course.seats}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom>
              Registration Information
            </Typography>
            <Typography variant="body2" paragraph>
              • All courses require pre-registration at least 7 days in advance<br />
              • Discounts available for government employees and heritage organizations<br />
              • Group bookings (5+ participants) receive 15% discount<br />
              • Customized on-site training available upon request
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom>
              Certification
            </Typography>
            <Typography variant="body2" paragraph>
              Successful participants receive:<br />
              • Heritage Safety Professional Certificate (HSPC)<br />
              • Dubai Civil Defence approved safety certification<br />
              • Training hours transcript for licensing requirements<br />
              • Digital badge for professional profiles
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoursesCalendar;