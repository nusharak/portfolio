// src/components/MainLayout.js
import React from 'react';
import Header from './Header';
import About from './About';
// import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';
import { Box, CssBaseline } from '@mui/material';
import ResumeModal from './Resume'; // Ensure this is the correct path

const MainLayout = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '30% 70%' }, // Full width on xs and md sizes and above with 30% and 70% columns
          gridTemplateRows: { xs: 'auto auto', md: '100%' }, // Stacking layout for xs screens
          height: '100vh',
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)', // Gradient background
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // padding: 2,
            height: { 
              xs: 300, // Fixed height for mobile (xs)
              sm: 300, // Fixed height for tablet (sm)
              md: '100vh' // Full screen height for desktop (md and up)
            },
            // overflowY: 'auto',
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            padding: { xs: 0, sm: 2 },
            overflowY: 'auto',
            gridColumn: { xs: '1 / -1', md: 'auto' }, 
          //  background:"linear-gradient( #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)"
          }}
        >
          <section id="about"><About /></section>
          {/* <section id="skills"><Skills /></section> */}
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
        </Box>
        <ResumeModal open={false} onClose={() => {}} /> {/* Update this as necessary for modal state */}
      </Box>
    </>
  );
};

export default MainLayout;
