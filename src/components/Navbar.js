import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <div>
       <AppBar position="static">
        <Toolbar>
          <div style={{color:'red', fontSize:'90px'}}>something</div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bank of DG
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
