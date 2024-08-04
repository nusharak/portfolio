import React, { useState } from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import { Phone, Email, WhatsApp, LinkedIn } from '@mui/icons-material';
import { Info, Code, Work, Mail, WorkHistory } from '@mui/icons-material';
import ResumeModal from './Resume'; // Ensure this is the correct path
import Image from '../../src/assets/pic.jpg';

const Header = () => {
  const [openResume, setOpenResume] = useState(false);

  const handleOpenResume = () => setOpenResume(true);
  const handleCloseResume = () => setOpenResume(false);

  return (
    <Box
      sx={{
        width: '100%',
        // background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)', // Gradient background
        color: 'white',
        padding: 2,
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop:5,
        '@media (max-width: 600px)': {
          padding: 1,
        },
      }}
    >
      <Avatar
        sx={{
          width: { xs: 60, sm: 80, md: 100 },
          height: { xs: 60, sm: 80, md: 100 },
          mb: 2,
          margin: 'auto', // Add this line
          display: 'block'
        }}
        src={Image}
      />
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        Nushara K
      </Typography>
      <Typography
        variant="subtitle1"
        component="p"
        sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, mb: 2 }}
      >
        Team Lead with 3 Years of Experience in React.js, Node.js, MySQL, and MongoDB
      </Typography>
      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
        <IconButton color="inherit" component="a" href="tel:+91707427924">
          <Phone />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://wa.me/9605539182">
          <WhatsApp />
        </IconButton>
        <IconButton color="inherit" component="a" href="mailto:nusharak2014@gmail.com">
          <Email />
        </IconButton>
        <IconButton color="inherit" component="a" href="https://www.linkedin.com/in/nushara-riyas" target="_blank">
          <LinkedIn />
        </IconButton>
        {/* Uncomment and adjust GitHub link as needed */}
        {/* <IconButton color="inherit" component="a" href="https://github.com/johndoe" target="_blank">
          <GitHub />
        </IconButton> */}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column' }, // Horizontal in mobile view, vertical in desktop view
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          overflowX: { xs: 'auto', md: 'hidden' }, // Horizontal scrolling on mobile
          padding: 0,
          margin: 0,
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for webkit browsers
          },
        }}
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' }, // Row on mobile, column on desktop
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: 0,
            margin: 0,
          }}
        >
          <ListItem button component="a" href="#about">
            <ListItemIcon sx={{ color: 'white' }}>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="#projects">
            <ListItemIcon sx={{ color: 'white' }}>
              <Code />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="#experience">
            <ListItemIcon sx={{ color: 'white' }}>
              <WorkHistory />
            </ListItemIcon>
            <ListItemText primary="Experience" />
          </ListItem>
          <ListItem button component="a" href="#contact">
            <ListItemIcon sx={{ color: 'white' }}>
              <Mail />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={handleOpenResume}>
            <ListItemIcon sx={{ color: 'white' }}>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </List>
      </Box>
      <ResumeModal open={openResume} onClose={handleCloseResume} />
    </Box>
  );
};

export default Header;
