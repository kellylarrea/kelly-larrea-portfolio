import {useState} from 'react';
import './mywork.scss'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function MyWork() {

const [github, setGithub] = useState('github')
const [link, setLink] = useState('link')

const data = [
  {
    id: 1,
    name: "Helping Hand App",
    img: 'assets/helping.png',
    desc: 'A full stack MERN application built with the community in mind',
    link: 'https://helping-hands-sei.herokuapp.com/', 
    github: ['https://github.com/kellylarrea/Helping-Hand-React', 'https://github.com/kellylarrea/Helping-Hand-Express']
  },
  {
    id: 2,
    name: "Primal Recipe Collector",
    img: 'assets/primal.png',
    desc: 'a PEN stack web application built to collect keto and paleo recipes from all over the internet',
    link: 'https://express-auth-reference.herokuapp.com/',
    github: 'https://github.com/kellylarrea/primal_recipes',

  },
  {
    id: 3,
    name: "Pawsibly",
    img: 'assets/pawsibly.png',
    desc: ' Implemented the Django REST framework to create a web API to find local pet sitters.',
    link: '',
    github: ['https://github.com/kellylarrea/pawsibly-react', 'https://github.com/kellylarrea/pawsibly-django']
  },

]

  // const gitHandleClick = () => {
  //   let locs =['https://github.com/kellylarrea/pawsibly-react', 'https://github.com/kellylarrea/pawsibly-django']
  //   // console.log('data.github', data.github[0])
  //   for (let i = 0; i < locs.length; i++) {
	// 			window.open(locs[i])}
  //   }

  // const appHandleClick = () => {
  //   let appLocs = setLink(data)
  // 	window.open(appLocs)
  //   }
  
  
    

  return (
    <div className='myWork' id='mywork'>
      <h1>My Work</h1>
      <div className='container'>
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={d.name}
              />
              <CardMedia
                component="img"
                height="194"
                image={d.img}
                alt=""
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {d.desc}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              <a href={d.github}>
                <IconButton aria-label="my github link">
                  <GitHubIcon />
                </IconButton>
                </a>
                <a href={d.link}>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                </a>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
