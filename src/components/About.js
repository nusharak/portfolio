import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Graduation cap icon
import Skills from './Skills';

const About = () => {
  return (
    <Box id="about" sx={{   padding: 2, 
      width: '100%', 
      boxSizing: 'border-box', 
      border: '2px solid #DDD', 
       
      // borderImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1' ,
      borderRadius: '16px',}}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        About Me
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          // fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
          // textAlign: { xs: 'center', sm: 'left' },
          // lineHeight: { xs: '1.4', sm: '1.6' },
          // maxWidth: { xs: '100%', sm: '100%', md: '45%' }, // Responsive maxWidth
          margin: '0 auto', // Center content horizontally on larger screens
        }}
      >
        I am a dedicated team lead with a strong background in React.js, Node.js, MySQL, and MongoDB.
        I have over 3 years of experience in building and managing web applications.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Education
          </Typography>
          <List>
            <ListItem>
              <SchoolIcon sx={{ marginRight: 1 }} />
              <ListItemText
                primary="Bachelor of Science in Computer Science"
                secondary={
                  <>
                    University of Example, 2014-2018 <br />
                    SGPA: 8.01
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <SchoolIcon sx={{ marginRight: 1 }} />
              <ListItemText
                primary="Master of Science in Software Engineering"
                secondary={
                  <>
                    Example University, 2018-2020 <br />
                    SGPA: 8.22
                  </>
                }
              />
            </ListItem>
          </List>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Key skills
          </Typography>
          <List>
            <ListItem>Agile Practice</ListItem>
            <ListItem>Confident and Hardworking</ListItem>
            <ListItem>Fast learner and good grasping ability</ListItem>
            <ListItem>Reliable and Professional</ListItem>
            <ListItem>Action oriented and result focused</ListItem>
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skills />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
