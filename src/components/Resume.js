// src/components/ResumeModal.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import resumePdf from '../assets/cv.pdf'; // Adjust the path as needed

const ResumeModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md" // Use Material-UI's breakpoint values for responsiveness
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          width: '90vw', // Responsive width
          maxWidth: '90vw', // Max width relative to viewport
          height: '90vh', // Responsive height
          maxHeight: '90vh', // Max height relative to viewport
          margin: 'auto',
          overflow: 'hidden',
          border: '2px solid', 
       
          borderImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1' ,
          borderRadius: '16px'
        }
      }}
    >
      <DialogTitle
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Resume
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers sx={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe
            src={resumePdf}
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Resume"
          />
        </Box>
        <Box sx={{ position: 'relative', padding: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href={resumePdf}
            download="Nushara_K_Resume.pdf"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
          >
            Download Resume
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
