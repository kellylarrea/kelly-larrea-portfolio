import React from 'react';
import './mywork.scss'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Typography from '@mui/material/Typography';



export default function MyWork() {

  const data = [
    {
      id: 1,
      name: "Helping Hand App",
      img: 'assets/helping.png',
      desc: 'A full stack MERN application built with the community in mind',
      link: 'https://helping-hands-sei.herokuapp.com/',
      frontend: 'https://github.com/kellylarrea/Helping-Hand-React',
      backend: 'https://github.com/kellylarrea/Helping-Hand-Express'
    },
    {
      id: 2,
      name: "Primal Recipe Collector",
      img: 'assets/primal.png',
      desc: 'A PEN stack web application built to collect keto and paleo recipes from all over the internet',
      link: 'https://express-auth-reference.herokuapp.com/',
      frontend: 'https://github.com/kellylarrea/primal_recipes',

    },
    {
      id: 3,
      name: "Pawsibly",
      img: 'assets/pawsibly.png',
      desc: ' Implemented the Django REST framework to create a web API to find local pet sitters for the community.',
      link: 'https://pawsibly-demo.herokuapp.com/',
      frontend: 'https://github.com/kellylarrea/pawsibly-react',
      backend: 'https://github.com/kellylarrea/pawsibly-django'
    },

  ]


  return (
    <div className='myWork' id='mywork'>
      <h1>My Work</h1>
      <div className='container'>
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>


            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="project image"
                height="160"
                image={d.img}
              />

              <CardContent>
                <Typography gutterBottom variant="h7" component="div">
                  {d.name}
                </Typography>
                <CardActions>
                <a href={d.frontend} target='blank'>
                  <Button style={{ color: '#eb5949' }} size="small">Frontend</Button>
                </a>
                <a href={d.backend} target='blank'>
                  <Button style={{ color: '#eb5949' }} size="small">Backend</Button>
                </a>
                <a href={d.link} target='blank'>
                  <Button style={{ color: '#eb5949' }} size="small">Demo</Button>
                </a>
              </CardActions>
                <Typography variant="body2" color="text.secondary">
                  {d.desc}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

    </div>
  )
}
