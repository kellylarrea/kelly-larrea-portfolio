
import './aboutme.scss'
import Container from '@mui/material/Container';
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme();

theme.typography.h1 = {

  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',

  },
};

export default function AboutMe() {
  return (

  <div className='aboutme' id='aboutme'>
    <Container maxwidth='small'>
      <ThemeProvider theme={theme}>
          <Typography>
          <h1>About Me</h1>
          <br></br>
     <hr></hr>
          <div>
            <br></br>
          <h3>I am a full-stack Software Engineer with a passion for developing scalable web applications. Based in Weehawken, NJ I have strong skills working as both a team 
            leader and a team member in a front-end and back-end development environment. With vast experience across a variety of 
            organizations and fields, I have developed effective leadership and 
            communication strategies with a client-centered approach.</h3>
            </div>
            </Typography>
            </ThemeProvider>
           <br></br>
            <div>
      
      <Button sx={{ color: red[500] }} variant="outlined" href='assets/software.pdf' target='blank'>
       Check out my Resume
      </Button>
      </div>
            </Container>


      </div>
  )
}
