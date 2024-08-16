import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Grid, Stack } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  skillContainer: {
    marginBottom: theme.spacing(2),
  },
  skillName: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
}));

const SkillsSection = () => {
  const classes = useStyles();

  // Define your skills with progress percentages
  const skills = [
    
    { name: 'Node.js', level: 90 },
    { name: 'React.js', level: 80 },
    { name: 'PHP (CodeIgniter)', level: 90 },
    { name: 'MySQL', level: 95 },
    { name: 'Wordpress', level: 75 },
    // { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'RESTful APIs', level: 85 },
    // { name: 'Git, GitHub', level: 85 },
    { name: 'cPanel', level: 80 },
    // { name: 'Google Map Integration', level: 75 },
    // { name: 'AWS Map Integration', level: 70 },
    { name: 'Mongoose', level: 60 },
  ];

  return (
    <Grid>
      <h2>Technical Skills</h2>
      {skills.map((skill, index) => (
        <Stack key={index} className={classes.skillContainer}>
          <div className={classes.skillName}>{skill.name}</div>
          <Box sx={{
            border: '2px solid #624cd3',
            borderRadius: '4px',  // Optional: add rounded corners
            overflow: 'hidden',   // Ensure border doesn't overflow
          }}>
            <LinearProgress
              variant="determinate"
              sx={{ height: 10 }} // Adjust the height if needed
              value={skill.level}
            />
          </Box>
        </Stack>
      ))}
    </Grid>
  );
};

export default SkillsSection;
