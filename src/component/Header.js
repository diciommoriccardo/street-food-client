import React, {useContext, useEffect, useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
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
import { NavLink } from 'react-router-dom';
import "../styles/header.css";
import authServices from '../helpers/auth.js';
import { useNavigate } from 'react-router-dom';
import CartContext from '../contexts/CartContext';

const logout = () => {
  authServices.logout()
  .then(data => console.log(data))
  .then(err => console.log(err))
}

const pages = [{
    Label: 'Menu',
    Path: '/menu'
},{
    Label: 'Ordini',
    Path: '/orders'
}];
const settings = [{
  label: 'Logout',
  cb: logout
}];



function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [cartItems, setCartItems] = useState(0)
  const navigate = useNavigate();
  
  const { count, setCount}  = useContext(CartContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCartButton = () => {
      navigate("./cart", {replace:true})
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl"
      component ="div" id="container">
        <Toolbar disableGutters>
          <Box component="img" sx={{ display: {height: 80, width: 80, xs: 'none', md: 'flex' }, mr: 1 }}
          src = "../img/logo_header.png" />
          <Typography 
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'blu',
              textDecoration: 'none',
            }}
          >
        
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page.Path}>
                    <MenuItem key={page.Label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.Label}</Typography>
                </MenuItem>
                </NavLink>
                    
                
              ))}
            </Menu>
          </Box>
          <Box component="img" sx={{ display: {height: 80, width: 80, xs: 'flex', md: 'none' }, mr: 1 }}
          src = "../img/logo_header.png" />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <NavLink to={page.Path}>
                <Button
                key={page.Label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.Label}
              </Button>
            </NavLink>
              
            ))}
          </Box>

          <Box>
          <Tooltip title="Vai al carrello">
              <IconButton onClick={handleCartButton} sx={{ p: 0 }}>
                <Badge badgeContent={count}><ShoppingCartIcon /></Badge>
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="L" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={settings.cb}>
                  <Typography textAlign="center">{setting.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;