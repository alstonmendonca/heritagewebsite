import React, { useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const courseData = [
  {
    title: 'HABC Level 3 International Award in Emergency First Aid at Work',
    duration: '1 Day',
    dates: [
      '2025-01-24', '2025-01-28', '2025-01-29', '2025-01-30', '2025-02-07', '2025-02-12',
      '2025-02-18', '2025-02-24', '2025-03-12', '2025-03-18', '2025-03-24', '2025-03-25',
      '2025-04-16', '2025-04-18', '2025-04-27', '2025-04-28', '2025-05-18', '2025-05-22',
      '2025-05-23', '2025-05-28', '2025-06-12', '2025-06-18', '2025-06-22', '2025-06-23'
    ]
  },
  {
    title: 'HABC Level 3 International Award in First Aid at Work',
    duration: '1 Day',
    dates: [
      '2025-01-18', '2025-01-19', '2025-01-26', '2025-01-29', '2025-02-17', '2025-02-19',
      '2025-02-29', '2025-03-12', '2025-03-14', '2025-03-21', '2025-03-27', '2025-04-10',
      '2025-04-13', '2025-04-21', '2025-04-28', '2025-05-17', '2025-05-18', '2025-05-21',
      '2025-05-28', '2025-06-19', '2025-06-24', '2025-06-26', '2025-06-28'
    ]
  },
  {
    title: 'HABC Level 3 International Award in First Aid at Work & Safe use of AED',
    duration: '1 Day',
    dates: [
      '2025-01-22', '2025-01-24', '2025-01-27', '2025-01-28', '2025-02-17', '2025-02-18',
      '2025-02-28', '2025-02-29', '2025-03-22', '2025-03-23', '2025-03-26', '2025-03-28',
      '2025-04-18', '2025-04-19', '2025-04-22', '2025-04-23', '2025-05-17', '2025-05-18',
      '2025-05-25', '2025-05-29', '2025-06-13', '2025-06-18', '2025-06-23', '2025-06-25'
    ]
  },
  {
    title: 'Hazardous Material Handling (HAZMAT) training',
    duration: '1 Day',
    dates: [
      '2025-01-21', '2025-01-26', '2025-01-28', '2025-01-29', '2025-02-07', '2025-02-10',
      '2025-02-17', '2025-02-18', '2025-03-18', '2025-03-19', '2025-03-22', '2025-03-23',
      '2025-04-17', '2025-04-18', '2025-04-22', '2025-04-28', '2025-05-16', '2025-05-22',
      '2025-05-24', '2025-05-29', '2025-06-18', '2025-06-19', '2025-06-22', '2025-06-28'
    ]
  },
  {
    title: 'HABC level 2 Award in Health & Safety',
    duration: '1 Day',
    dates: [
      '2025-01-22', '2025-01-24', '2025-01-27', '2025-01-28', '2025-02-17', '2025-02-18',
      '2025-02-28', '2025-02-29', '2025-03-22', '2025-03-23', '2025-03-26', '2025-03-28',
      '2025-04-18', '2025-04-19', '2025-04-22', '2025-04-23', '2025-05-17', '2025-05-18',
      '2025-05-25', '2025-05-29', '2025-06-13', '2025-06-18', '2025-06-23', '2025-06-25'
    ]
  },
  {
    title: 'HABC Level 3 International Award in Emergency Pediatric First Aid',
    duration: '1 Day',
    dates: [
      '2025-01-27', '2025-01-28', '2025-01-29', '2025-01-30', '2025-02-17', '2025-02-18', '2025-02-19',
      '2025-02-28', '2025-03-13', '2025-03-19', '2025-03-21', '2025-03-23', '2025-04-14', '2025-04-17',
      '2025-04-22', '2025-04-28', '2025-05-16', '2025-05-22', '2025-05-24', '2025-05-26', '2025-06-16',
      '2025-06-19', '2025-06-25', '2025-06-28'
    ]
  },
  {
    title: 'HABC level 3 Award in Health & Safety',
    duration: '3 Days',
    dates: [
      '2025-01-21', '2025-01-26', '2025-01-27', '2025-01-30', '2025-02-17', '2025-02-18',
      '2025-02-22', '2025-02-24', '2025-03-14', '2025-03-18', '2025-03-21', '2025-03-23',
      '2025-04-16', '2025-04-19', '2025-04-22', '2025-04-28', '2025-05-17', '2025-05-19',
      '2025-05-22', '2025-05-24', '2025-06-12', '2025-06-18', '2025-06-22', '2025-06-23'
    ]
  },
  {
    title: 'IOSH Managing Safely (evening)',
    duration: '4 Days',
    dates: [
      '2025-01-21', '2025-01-22', '2025-01-23', '2025-01-24', '2025-02-04', '2025-02-05',
      '2025-02-06', '2025-02-07', '2025-03-12', '2025-03-13', '2025-03-14', '2025-03-15',
      '2025-04-15', '2025-04-16', '2025-04-17', '2025-04-18', '2025-05-18', '2025-05-19',
      '2025-05-20', '2025-05-21', '2025-06-10', '2025-06-11', '2025-06-12', '2025-06-13'
    ]
  },
  {
    title: 'IOSH Managing Safely (weekends)',
    duration: '4 Days',
    dates: [
      '2025-02-01', '2025-02-02', '2025-02-08', '2025-02-09', '2025-02-15', '2025-02-16',
      '2025-02-22', '2025-02-23', '2025-03-08', '2025-03-09', '2025-03-15', '2025-03-16',
      '2025-04-05', '2025-04-06', '2025-04-12', '2025-04-13', '2025-05-10', '2025-05-11',
      '2025-05-17', '2025-05-18', '2025-06-07', '2025-06-08', '2025-06-14', '2025-06-15'
    ]
  },
  {
    title: 'HABC level 2 Award in COSHH',
    duration: '1 Day',
    dates: [
      '2025-01-21', '2025-01-28', '2025-01-29', '2025-01-30', '2025-02-06', '2025-02-11',
      '2025-02-19', '2025-02-22', '2025-03-13', '2025-03-18', '2025-03-22', '2025-03-27',
      '2025-04-12', '2025-04-14', '2025-04-22', '2025-04-28', '2025-05-19', '2025-05-21',
      '2025-05-23', '2025-05-27', '2025-06-17', '2025-06-18', '2025-06-24', '2025-06-25'
    ]
  },
  {
    title: 'Working At Height Safety Awareness',
    duration: '1 Day',
    dates: [
      '2025-01-22', '2025-01-23', '2025-01-27', '2025-01-29', '2025-02-17', '2025-02-19',
      '2025-02-20', '2025-02-21', '2025-03-14', '2025-03-19', '2025-03-20', '2025-03-22',
      '2025-04-18', '2025-04-19', '2025-04-21', '2025-04-27', '2025-05-17', '2025-05-23',
      '2025-05-24', '2025-05-27', '2025-06-19', '2025-06-20', '2025-06-22', '2025-06-26'
    ]
  },
  {
    title: 'Confined Space Entry & Gas Testing trainings',
    duration: '1 Day',
    dates: [
      '2025-01-27', '2025-01-28', '2025-01-29', '2025-01-30', '2025-02-17', '2025-02-18',
      '2025-02-19', '2025-02-28', '2025-03-13', '2025-03-19', '2025-03-21', '2025-03-23',
      '2025-04-14', '2025-04-17', '2025-04-22', '2025-04-28', '2025-05-16', '2025-05-22',
      '2025-05-24', '2025-05-26', '2025-06-16', '2025-06-19', '2025-06-25', '2025-06-28'
    ]
  }
];


const CoursesCalendar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedCourse, setSelectedCourse] = useState('');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    if (isMobile) setFilterDrawerOpen(false);
  };

  const toggleFilterDrawer = () => {
    setFilterDrawerOpen(!filterDrawerOpen);
  };

  const resetFilter = () => {
    setSelectedCourse('');
    if (isMobile) setFilterDrawerOpen(false);
  };

  const durationColors = {
    '1 Day': theme.palette.primary.main,
    '3 Days': theme.palette.secondary.main,
    '4 Days': theme.palette.success.main
  };

  const events = courseData
    .filter(course => selectedCourse === '' || course.title === selectedCourse)
    .flatMap(course =>
      course.dates.map(date => ({
        title: course.title,
        date,
        duration: course.duration,
        backgroundColor: durationColors[course.duration],
        borderColor: durationColors[course.duration],
        textColor: '#ffffff'
      }))
    );

  // Format dates as DD/MM/YYYY strings joined by commas
  const formatDates = (dates) => {
    return dates
      .map(d => {
        const date = new Date(d);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      })
      .join(', ');
  };

  // Filtered courses for the table (same filter as calendar)
  const filteredCourses = courseData.filter(course =>
    selectedCourse === '' || course.title === selectedCourse
  );


  // Custom calendar styles
  const calendarStyles = `
    .fc .fc-toolbar-title {
      font-size: ${isMobile ? '1.1rem' : '1.5rem'};
      font-weight: 600;
      color: ${theme.palette.text.primary};
    }
    
    .fc .fc-button {
      background-color: transparent;
      border: 1px solid ${theme.palette.divider};
      color: ${theme.palette.text.primary};
      text-transform: capitalize;
      box-shadow: none;
      transition: all 0.2s;
      font-size: ${isMobile ? '0.8rem' : '0.9rem'};
      padding: ${isMobile ? '3px 6px' : '5px 10px'};
    }
    
    .fc .fc-button:hover {
      background-color: ${theme.palette.action.hover};
    }
    
    .fc .fc-button-primary:not(:disabled).fc-button-active {
      background-color: ${theme.palette.primary.main};
      color: white;
      border-color: ${theme.palette.primary.main};
    }
    
    .fc .fc-daygrid-day.fc-day-today {
      background-color: ${theme.palette.primary.light}20;
    }
    
    .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
      font-weight: 700;
      color: ${theme.palette.primary.main};
    }
    
    .fc .fc-event {
      border-radius: 4px;
      font-size: ${isMobile ? '0.7rem' : '0.85rem'};
      padding: 2px 4px;
      margin-bottom: 2px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    
    .fc .fc-event:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .fc .fc-daygrid-day-number {
      color: ${theme.palette.text.primary};
      font-weight: 500;
      padding: ${isMobile ? '2px' : '4px'};
    }
    
    .fc .fc-col-header-cell {
      padding: ${isMobile ? '4px 0' : '8px 0'};
    }
    
    .fc .fc-col-header-cell-cushion {
      padding: ${isMobile ? '2px' : '4px'};
      font-size: ${isMobile ? '0.75rem' : '0.9rem'};
      font-weight: 600;
    }
    
    .fc .fc-daygrid-event-harness {
      margin-bottom: 2px;
    }
  `;

  return (
    <Container sx={{ py: 4, px: isMobile ? 1 : 3 }}>
      <style>{calendarStyles}</style>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        mb: 3,
        flexDirection: isMobile ? 'column' : 'row',
        gap: 2
      }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 700 }}>
          Training Calendar <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>(Jan–Jun 2025)</Box>
        </Typography>
        
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FormControl sx={{ minWidth: 240 }}>
              <InputLabel>Filter by Course</InputLabel>
              <Select
                value={selectedCourse}
                label="Filter by Course"
                onChange={handleCourseChange}
                size="small"
              >
                <MenuItem value="">All Courses</MenuItem>
                {courseData.map((course, idx) => (
                  <MenuItem key={idx} value={course.title}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{
                        width: 10,
                        height: 10,
                        bgcolor: durationColors[course.duration],
                        mr: 1.5,
                        borderRadius: '50%'
                      }} />
                      {course.title}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
            {selectedCourse && (
              <Chip 
                label="Clear Filter" 
                onClick={resetFilter} 
                onDelete={resetFilter}
                deleteIcon={<CloseIcon fontSize="small" />}
                variant="outlined"
                size="small"
              />
            )}
          </Box>
        )}
        
        {isMobile && (
          <IconButton 
            onClick={toggleFilterDrawer}
            sx={{ 
              alignSelf: 'flex-end',
              bgcolor: selectedCourse ? theme.palette.primary.main : 'inherit',
              color: selectedCourse ? 'white' : 'inherit',
              '&:hover': {
                bgcolor: selectedCourse ? theme.palette.primary.dark : 'action.hover'
              }
            }}
          >
            <FilterListIcon />
          </IconButton>
        )}
      </Box>
      
      {/* Mobile filter drawer */}
      <Drawer
        anchor="bottom"
        open={filterDrawerOpen}
        onClose={toggleFilterDrawer}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            px: 2,
            py: 3,
            maxHeight: '70vh'
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Filter Courses</Typography>
          <IconButton onClick={toggleFilterDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Select a Course</InputLabel>
          <Select
            value={selectedCourse}
            label="Select a Course"
            onChange={handleCourseChange}
          >
            <MenuItem value="">All Courses</MenuItem>
            {courseData.map((course, idx) => (
              <MenuItem key={idx} value={course.title}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{
                    width: 10,
                    height: 10,
                    bgcolor: durationColors[course.duration],
                    mr: 1.5,
                    borderRadius: '50%'
                  }} />
                  {course.title}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
        <Button 
          variant="contained" 
          fullWidth 
          onClick={toggleFilterDrawer}
          sx={{ mt: 1 }}
        >
          Apply Filter
        </Button>
      </Drawer>
      
      {/* Duration Legend */}
      <Box sx={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: 1, 
        mb: 2,
        justifyContent: 'center'
      }}>
        {Object.entries(durationColors).map(([duration, color]) => (
          <Chip
            key={duration}
            label={duration}
            size="small"
            sx={{
              bgcolor: color,
              color: '#fff',
              fontSize: '0.75rem',
              height: 24
            }}
          />
        ))}
      </Box>
      
      {/* Calendar */}
      <Box sx={{ 
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
      }}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
          headerToolbar={{
            left: 'prev,next',
            center: 'title',
            right: isMobile ? '' : 'dayGridMonth,dayGridWeek'
          }}
          eventTimeFormat={{
            hour: '2-digit',
            minute: '2-digit',
            meridiem: false,
            hour12: false
          }}
          dayMaxEvents={isMobile ? 2 : 4}
          views={{
            dayGridMonth: {
              dayMaxEventRows: isMobile ? 2 : 4,
            }
          }}
        />
      </Box>
      
      {/* Selected course indicator for mobile */}
      {isMobile && selectedCourse && (
        <Box sx={{ 
          mt: 2, 
          p: 1.5, 
          bgcolor: 'primary.light', 
          borderRadius: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="body2" noWrap sx={{ maxWidth: '70%' }}>
            Showing: {selectedCourse}
          </Typography>
          <Button 
            size="small" 
            onClick={resetFilter}
            endIcon={<CloseIcon fontSize="small" />}
          >
            Clear
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default CoursesCalendar;