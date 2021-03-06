import React from 'react';
import './menu.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Pdf from '../../SoftwareEngineer.pdf'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
  <div className={'menu '+(menuOpen && 'active')}>
      <ul>
         <li onClick={(() =>setMenuOpen(false))}>
             <a href='#intro'>Home</a>
         </li>
         <li onClick={(() =>setMenuOpen(false))}>
             <a href='#mywork'>My Work</a>
         </li>
         <li onClick={(() =>setMenuOpen(false))}>
             <a href='#portfolio'>Technologies</a>
         </li>
         <li onClick={(() =>setMenuOpen(false))}>
             <a href='#aboutme'>About Me</a>
         </li >
         <li onClick={(() =>setMenuOpen(false))}>
      <a href={Pdf} without rel="noopener noreferrer" target='blank'>
       Resume
      </a>
         </li >
         <li onClick={(() =>setMenuOpen(false))}>
      <a href='https://github.com/kellylarrea?tab=repositories' target='blank'>
       <GitHubIcon />
      </a>
      <a href='https://www.linkedin.com/in/kellylarrea/' target='blank'>
    <LinkedInIcon />
      </a>
         </li>
      </ul>
  </div>
  )
}
