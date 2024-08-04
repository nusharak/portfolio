// src/components/Contact.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Email, Phone, WhatsApp, LinkedIn, GitHub } from '@mui/icons-material';

const contactDetails = [
  {
    icon: <Phone />,
    text: '+91 7907427924',
    link: 'tel:+917907427924',
  },
  {
    icon: <Email />,
    text: 'nusharak2014@gmail.com',
    link: 'mailto:nusharak2014@gmail.com',
  },
  {
    icon: <WhatsApp />,
    text: '+919605539182',
    link: 'https://wa.me/9605539182',
  },
  {
    icon: <LinkedIn />,
    text: 'linkedin.com/in/nushara-riyas',
    link: 'https://www.linkedin.com/in/nushara-riyas',
  },
  // {
  //   icon: <GitHub />,
  //   text: 'github.com/johndoe',
  //   link: 'https://github.com/johndoe',
  // },
];

const Contact = () => {
  return (
    <Box id="contact" sx={{ padding: 2, border: '2px solid', 
       
      borderImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1' ,
      borderRadius: '16px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact
      </Typography>
      {contactDetails.map((detail, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <IconButton
            color="primary"
            component="a"
            href={detail.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {detail.icon}
          </IconButton>
          <Typography variant="body1" sx={{ marginLeft: 1 }}>
            {detail.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Contact;
