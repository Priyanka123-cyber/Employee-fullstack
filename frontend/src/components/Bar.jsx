import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Bar = () => {
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/course')
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{backgroundColor:'#6482AD'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Employee App
        </Typography>
        <Link to={'/'}><Button sx={{ color: 'white', backgroundColor: '#7FA1C3', margin:2 }}>Home</Button></Link>
        <Link to={'/add'}><Button sx={{ color: 'white', backgroundColor: '#7FA1C3' }}>Add</Button></Link>
        <Link to={'/'}><Button onClick={clearUser}>Logout</Button></Link>
      </Toolbar>
    </AppBar>
  </Box>
    </div>
  )
}

export default Bar