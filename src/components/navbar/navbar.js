
import React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import './style.css';
import Contact from '../contact/contact';
import Logo from '../logo/logo';




const drawerWidth = 230;
//const navItems = ['Home', 'Mxnifesto', 'Articles', 'Shows', 'Info', 'Network', 'Gift Shop', 'Patreon'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'top',
  justifyContent: 'flex-end',
}));




function Navbar() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ height: '10vh', backgroundColor: "black", color: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
            <Logo />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            backgroundColor: 'black',
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ Color: 'white' }}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon className="icon" /> : <ChevronRightIcon className="icon" />}
          </IconButton>
        </DrawerHeader>
        <Logo style={{fontSize: "10px"}} />
        {/* this is where the menus start */}
        <List className='nav' style={{ backgroundColor: 'black' }}>
            <ListItem>
              <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Mxnifesto</Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/under" style={{ textDecoration: 'none', color: 'white' }}>Articles</Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/homeTwo" style={{ textDecoration: 'none', color: 'white' }}>Shows</Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/homeTwo" style={{ textDecoration: 'none', color: 'white' }}>Info</Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/homeTwo" style={{ textDecoration: 'none', color: 'white' }}>Network</Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/homeTwo" style={{ textDecoration: 'none', color: 'white' }}>Patreon</Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link to="/homeTwo" style={{ textDecoration: 'none', color: 'white' }}>GiftShop</Link>
            </ListItem>
            <Divider />
          <Contact />
        </List>
        {/* above is where the menus end */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}

export default Navbar;


