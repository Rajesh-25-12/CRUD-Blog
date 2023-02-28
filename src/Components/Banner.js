import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Grid from '@mui/material/Grid';
import './Blog.css'
import Createpost from './Createpost';
import Logo from '../assets/Logo1.jpg'
const pages = ['Products', 'Pricing', 'Blog'];
const settings = [];
const Banner = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = useState(false)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const Add=()=>{
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    Location.reload()
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static" style={{backgroundColor:"black"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar     sx={{ width: 56, height: 56 }} alt="Logo" src={Logo} />
          <Grid container justifyContent="flex-end" gap={5}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Button onClick={Add}> 
              ADD
            </Button>
            <br/>
          </Grid>

        </Toolbar>
      </Container>
    </AppBar>
      <div>
      </div>
      <div>
        Welcome
      </div>
      <Createpost open={open} Close={handleClose}/>

    </div>
  )
}

export default Banner
