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
        color: 'white',
        padding: 2,
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: 5,
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
          margin: 'auto',
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          overflowX: 'auto',
          padding: 0,
          margin: 0,
          '@media (max-width: 1000px)': {
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            padding: 0,
            margin: 0,
            '@media (max-width: 1000px)': {
              display: 'none',
            },
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
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' }, // Show only on small screens
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 1,
            padding: 0,
            margin: 0,
          }}
        >
          <IconButton color="inherit" component="a" href="#about">
            <Info />
          </IconButton>
          <IconButton color="inherit" component="a" href="#projects">
            <Code />
          </IconButton>
          <IconButton color="inherit" component="a" href="#experience">
            <WorkHistory />
          </IconButton>
          <IconButton color="inherit" component="a" href="#contact">
            <Mail />
          </IconButton>
          <IconButton color="inherit" onClick={handleOpenResume}>
            <Work />
          </IconButton>
        </Box>
      </Box>
      <ResumeModal open={openResume} onClose={handleCloseResume} />
    </Box>
  );
};

export default Header;
