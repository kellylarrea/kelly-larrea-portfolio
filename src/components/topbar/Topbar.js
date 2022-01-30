import React from 'react';
import'./topbar.scss';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' +(menuOpen && 'active')}>
      <div className='wrapper'>
          <div className='left'>
          <div className='left' onClick={(()=>setMenuOpen(!menuOpen))}>
                      <span className='line1'></span>
                      <span className='line2'></span>
                      <span className='line3'></span>
                      </div>
              <a href='#intro' className='logo'>Kelly Larrea</a>
              <div className='itemContainer'>
              <Button style={{ color: 'white' }} href="tel:+1-347-225-5770">
                <CallIcon className='Icon'/>
               Call
              </Button>
              </div>
              <div className='itemContainer'>
                  <Button style={{ color: 'white' }} href="https://github.com/kellylarrea"  target="blank">
                  <GitHubIcon className='Icon'/>
                  Github
                  </Button>
              </div>
              <div className='itemContainer'>
                  <Button style={{ color: 'white' }} href="mailto:larreakelly@gmail.com?" target="blank">
                  <EmailIcon className='Icon'/>
                  Email
                  </Button>
              </div>
              <div className='itemContainer'>
              <Button style={{ color: 'white' }} href='https://www.linkedin.com/in/kellylarrea/' target='blank'>
             
              <LinkedInIcon />
              LinkedIn
              </Button>
             </div>
              </div>
              <div className='right'>
                 <div className='hamburger' onClick={(()=>setMenuOpen(!menuOpen))}>
                      <span className='line1'></span>
                      <span className='line2'></span>
                      <span className='line3'></span>
                      </div>
              </div>
      </div>
    </div>
  )
  }
// import Portfolio from '../portfolio/Portfolio'
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { red } from '@mui/material/colors';

// const pages = ['Home', 'My Work', 'Technologies', 'About me'];
// const settings = ['', 'Account', 'Dashboard', 'Logout'];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar style={{ background: '#fe9d1a' }} position="static"  >
//       <Container maxWidth="xl" >
//         <Toolbar disableGutters  >
//           <Typography
//             variant="h3"
//             noWrap
//             component="div"
//             sx={{ mr: 35, display: { xs: 'none', md: 'flex', fontFamily: 'Satisfy', fontWeight: 'bold', textDecorationLine: 'underline'  } }}
//           >
//             Kelly Larrea
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none'  },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

