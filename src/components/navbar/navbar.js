import React, { useState } from 'react';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import MailIcon from '@mui/icons-material/Mail';
import NotificationIcon from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  borderRadius: theme.shape.borderRadius,
  padding:"0 10px",
  backgroundColor: 'white'
}));

const Icons = styled("div")(({theme}) => ({
  display:'none',
  alignItems: 'center',
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled("div")(({theme}) =>({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }  
}));

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return(
  <AppBar position='sticky'>
    <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:"none", sm:'block'}}}>Regular</Typography>
      <CatchingPokemonIcon sx={{display:{xs:'block', sm:'none'}}}/>
      <Search><InputBase placeholder='Search...'></InputBase> Search</Search>
      <Icons>
        <Badge badgeContent={4} color="error">
          <MailIcon/>
        </Badge>
        <Badge color="error" badgeContent={2}>
          <NotificationIcon />
        </Badge>
        <Avatar sx={{width:30, height:30}} src='' onClick={e=> setOpen(true)}/>
      </Icons>
      <UserBox onClick={e=> setOpen(true)}>
        <Avatar sx={{width:30, height:30}} src=''/>        
      </UserBox>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"        
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </StyledToolbar>
  </AppBar>
  )  
};

export default Navbar;
