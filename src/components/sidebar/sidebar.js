import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { AccountBox, Article, Brightness3,  Group, Home,  Settings,  Storefront } from '@mui/icons-material';


const Sidebar = () => (
  <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
    <List >
      <ListItem>        
        <ListItemButton component='a' href='#home'>
          <ListItemIcon >
            <Home/>
          </ListItemIcon>
          <ListItemText primary='Homepage'></ListItemText>
        </ListItemButton>        
      </ListItem>
      <ListItem>        
        <ListItemButton component='a' href='#pages'>
          <ListItemIcon >
            <Article/>
          </ListItemIcon>
          <ListItemText primary='Pages'></ListItemText>
        </ListItemButton>        
      </ListItem>
      <ListItem>        
        <ListItemButton component='a' href='#groups'>
          <ListItemIcon >
            <Group/>
          </ListItemIcon>
          <ListItemText primary='Groups'></ListItemText>
        </ListItemButton>        
      </ListItem>
      <ListItem>        
        <ListItemButton component='a' href='#marketplace'>
          <ListItemIcon >
            <Storefront/>
          </ListItemIcon>
          <ListItemText primary='Marketplace'></ListItemText>
        </ListItemButton>        
      </ListItem>
      <ListItem>        
        <ListItemButton component='a' href='#Friends'>
          <ListItemIcon >
            <AccountBox/>
          </ListItemIcon>
          <ListItemText primary='Profile'></ListItemText>
        </ListItemButton>        
      </ListItem>
      <ListItem>        
        <ListItemButton component='a' href='#settings'>
          <ListItemIcon >
            <Settings/>
          </ListItemIcon>
          <ListItemText primary='Settings'></ListItemText>
        </ListItemButton>        
      </ListItem>
      <ListItem>        
        <ListItemButton component='a' href='#profile'>
          <ListItemIcon >
            <Brightness3/>
          </ListItemIcon>
          <Switch/>
        </ListItemButton>        
      </ListItem>
    </List>
  </Box>
);

Sidebar.propTypes = {};

Sidebar.defaultProps = {};

export default Sidebar;
