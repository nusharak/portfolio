import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Grid, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system';

const SkillChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const Projects = () => {
  const projects = [
    {
      name: 'Signwise solutions',
      description: [
        'Developed a client portal for requesting quotations and detailing signboard specifications.',
        'Admin interface facilitated catalog creation, specifying materials, quantities, and cost estimation.',
        'Implemented task management similar to Jira, with task assignment and team member clock-in/out functionalities.',
        'Automated staff pay out calculations based on pay rate and hours worked.',
        'Integrated Google Maps API for route optimization and minimal distance calculation using Travelling Salesman Problem (TSP) algorithm.',
        'Scheduled installation appointments based on product and location, optimizing transportation routes.'
      ],
      skillsUsed: ['React.js', 'Node.js', 'MySQL', 'Fastify'],
    },
    {
      name: 'Point of Sale(POS) Software:Retail',
      description: ['Developed POS software encompassing Inventory', 'Client Management', 'Staff Management', 'Expense Tracking', 'Purchase Management', 'Report generation'],
      skillsUsed: ['React.js', 'CodeIgniter', 'MySQL'],
    },
    {
      name: 'Point of Sale(POS) Software:Wholesale',
      description: ['Designed POS software with Inventory Management', 'Enquiry', 'Estimation', 'Bill of Quantities (BOQ)', 'Invoicing features'],
      skillsUsed: ['React.js', 'CodeIgniter', 'MySQL'],
    },
    {
      name: 'Point of Sale(POS) Software:Catering',
      description: ['Developed POS software featuring Inventory Management', 'Estimation', 'Expense Tracking', 'Invoicing capabilities'],
      skillsUsed: ['React.js', 'CodeIgniter', 'MySQL'],
    },
    {
      name: 'Restaurant Management System',
      description: ['Developed comprehensive restaurant management system covering Inventory Management', 'Point of Sale (POS)', 'Kitchen Management', 'Client Management', 'Staff Management', 'Expense Tracking', 'Purchase Management', 'Reporting functionalities.'],
      skillsUsed: ['React.js', 'Node.js', 'MySQL'],
    },
    // Add more projects as needed
  ];

  return (
    <Box id="projects" sx={{  padding: { xs: 0, sm: 2 } , border: '2px solid #ddd', 
       
       borderImage: 'linear-gradient( #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1' ,
      borderRadius: '16px' }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, textAlign: 'center' }}
      >
        Projects
      </Typography>
      <List>
        {projects.map((project, index) => (
          <ListItem
            key={index}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: 2,
              padding: { xs: 1, sm: 2 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' } }}
            >
              {project.name}
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' } }}
                >
                  Description:
                </Typography>
                <List>
                  {project.description.map((desc, descIndex) => (
                    <ListItem
                      key={descIndex}
                      sx={{ alignItems: 'flex-start', padding: 0 }}
                    >
                      <ListItemIcon>
                        <StarIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={desc}
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' } }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="center" sx={{ marginTop: 1 }}>
              <Grid item>
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{ fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' } }}
                >
                  Technology Used:
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 1 }}>
              {project.skillsUsed.map((skill, skillIndex) => (
                <SkillChip
                  key={skillIndex}
                  label={skill}
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Projects;
