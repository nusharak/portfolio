import React, { useState } from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; // Graduation cap icon
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Certificate icon
import Skills from './Skills';
import Image from '../assets/mtech.jpeg';
import ImageBtech from '../assets/btech.jpeg';
const About = () => {
 
  const [openBachelorDialog, setOpenBachelorDialog] = useState(false);
  const [openMasterDialog, setOpenMasterDialog] = useState(false);


  const handleOpenBachelorDialog = () => setOpenBachelorDialog(true);
  const handleOpenMasterDialog = () => setOpenMasterDialog(true);

  
  const handleCloseBachelorDialog = () => setOpenBachelorDialog(false);
  const handleCloseMasterDialog = () => setOpenMasterDialog(false);

  return (
    <Box id="about" sx={{ padding: 2, width: '100%', boxSizing: 'border-box', border: '2px solid #DDD', 
      borderImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1',
      borderRadius: '16px' }}>
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
          margin: '0 auto', 
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
                primary="Bachelor of Technology in Computer Science and Engineering"
                secondary={
                  <>
                    University of Calicut, 2014-2018 <br />
                    SGPA: 8.01
                    <IconButton onClick={handleOpenBachelorDialog} sx={{ marginLeft: 2 }}>
                      <InsertDriveFileIcon sx={{color:'#5f4ed6'}}/>
                    </IconButton>
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <SchoolIcon sx={{ marginRight: 1 }} />
              <ListItemText
                primary="Master of Technology in in Computer Science and Engineering"
                secondary={
                  <>
                    APJ Abdul Kalam Technological University, 2018-2020 <br />
                    SGPA: 8.22
                    <IconButton onClick={handleOpenMasterDialog} sx={{ marginLeft: 2 }}>
                      <InsertDriveFileIcon  sx={{color:'#5f4ed6'}}/>
                    </IconButton>
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
            Key Skills
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

      {/* Bachelor Certificate Dialog */}
      <Dialog open={openBachelorDialog} onClose={handleCloseBachelorDialog}>
        <DialogTitle>Bachelor of Technology in Computer Science and Engineering</DialogTitle>
        <DialogContent>
          <Typography variant="body1">University of Calicut, 2014-2018</Typography>
          <img src={ImageBtech} alt="Bachelor Certificate" style={{ width: '100%', height: 'auto', marginTop: '16px' }} />
        </DialogContent>
      </Dialog>

      {/* Master Certificate Dialog */}
      <Dialog open={openMasterDialog} onClose={handleCloseMasterDialog}>
        <DialogTitle>Master of Technology in in Computer Science and Engineeringg</DialogTitle>
        <DialogContent>
          <Typography variant="body1">APJ Abdulkalam Technological University, 2018-2020</Typography>
          <img src={Image} alt="Master Certificate" style={{ width: '100%', height: 'auto', marginTop: '16px' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default About;
