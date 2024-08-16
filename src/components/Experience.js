import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, Dialog, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CloseIcon from '@mui/icons-material/Close';
import certificate from '../assets/experience.pdf'
import certificateReliving from '../assets/reliving.pdf'
const Experience = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [pdfSrc, setPdfSrc] = useState("");

  const handleOpen = (url) => {
    setPdfSrc(url);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setPdfSrc("");
  };

  const experiences = [
    {
      company: "Skyniche Technologies",
      designation: "Team Lead",
      location: "Ottapalam, Kerala",
      duration: "Feb 2022 - Present",
      details: [
        "Led a team of 5 developers in the successful design, development, and deployment of a customer portal using React.js, Node.js, and MySQL.",
        "Played a key role in the migration of legacy systems to a modern tech stack, incorporating React.js for the front end and Node.js for backend APIs.",
        "Collaborated with cross-functional teams to analyze project requirements and provide technical solutions, resulting in the successful completion of multiple projects on time and within budget.",
        "Implemented Agile methodologies, including Scrum, to streamline project workflows and improve team collaboration, leading to a 20% reduction in development time.",
        "Developed and maintained RESTful APIs for internal and external use, ensuring seamless integration with partner systems.",
        "Provided mentorship and training to junior team members, enhancing their skills in React.js and Node.js.",
        "Developed and maintained PHP-based web applications using the CodeIgniter framework, ensuring optimal performance and scalability.",
        "Integrated Google Maps API and implemented Travelling Salesman Problem (TSP) algorithm to plot minimal distance covered between multiple points, enhancing navigation efficiency and user experience."
      ],
      certificateUrl:certificate,
      salarySlipUrl: certificateReliving
    }
    // You can add more experiences here
  ];

  return (
    <Box id="experience" sx={{ padding: 2, border: '2px solid', 
      borderImage: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80) 1' ,
      borderRadius: '16px' }}>
      <Typography variant="h4" component="h2" gutterBottom>Experience</Typography>
      {experiences.map((experience, index) => (
        <Box key={index} sx={{ marginBottom: 4 }}>
          <Typography variant="h6" component="h3">
            {experience.designation} at {experience.company} | {experience.location}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {experience.duration}
          </Typography>
          <List>
            {experience.details.map((detail, idx) => (
              <ListItem key={idx} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <StarIcon sx={{ marginRight: 1, marginTop: '5px' }} />
                <ListItemText primary={detail} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ marginTop: 2 }}>
            {experience.certificateUrl && (
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleOpen(experience.certificateUrl)}
              >
                View Certificate
              </Button>
            )}
            {experience.salarySlipUrl && (
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => handleOpen(experience.salarySlipUrl)}
                sx={{ marginLeft: 2 }}
              >
                View Reliving Certificate
              </Button>
            )}
          </Box>
        </Box>
      ))}

      {/* PDF Modal */}
      <Dialog
        open={openDialog}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
      >
        <Box sx={{ position: 'relative', height: '80vh' }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', top: 10, right: 10 }}
          >
            <CloseIcon />
          </IconButton>
          <iframe
            src={pdfSrc}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="PDF Viewer"
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Experience;
