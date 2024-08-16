// src/components/Contact.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Email, Phone, WhatsApp, LinkedIn, GitHub } from '@mui/icons-material';
import Sign from '../assets/SIGN.png'
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
    text: '+91 9605539182',
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
    <Box id="contact" sx={{
      padding: 2, border: '2px solid',
      borderImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1',
      borderRadius: '16px'
    }}>
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
          <a href={detail.link} style={{ textDecoration: 'none' }}>
            <Typography variant="body1" sx={{ marginLeft: 1 }}>
              {detail.text}
            </Typography>
          </a>
        </Box>
      ))}
      {/* Acknowledgment Section */}
      <Box sx={{ marginTop: 4, marginBottom: 2 }}>
        
        <Typography variant="body1">
        I hereby declare that the information furnished above is true to the best of my knowledge and belief.
        </Typography>
        
        <Box sx={{
          marginTop: 2, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end',
        }}>
          <Typography variant="body1" sx={{ marginBottom: 1,marginRight:3 }}>
            Nushara K.
          </Typography>
          <img src={Sign} alt="Digital Signature" style={{ width: '150px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
