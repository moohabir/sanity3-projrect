import React, { useContext, useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  Menu,
  IconButton,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Avatar,
  ThemeProvider,
  Tooltip,
  CssBaseline,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
//import { DarkModeContext } from '../context/DarkModeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Link } from 'react-router-dom';

import theme from './style';
import { orange } from '@mui/material/colors';

function Header() {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShow = () => {
    setShow(!show);
  };

  //const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        spacing={3}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '60px',
            //backgroundColor: '#F2AA4CFF',
            backgroundColor: '#282c34',

            gap: '30',
            color: '#fff',
            //color: '#282c34',
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              fontSize: '24px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              //color: '#282c34',
            }}
          >
            Mohamed Abdille
          </Typography>

          <Stack
            sx={{
              display: { sm: 'flex', xs: 'none' },
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: '10px',
              alignItems: 'center',
              position: 'relative',
              color: 'inherit',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingRight: '10px',
                paddingLeft: '20px',
                gap: '30px',

                //color: 'secondary',
              }}
            >
              <Typography
                component={Link}
                color="primary"
                to="/"
                sx={{
                  textDecoration: 'none',
                  display: { sm: 'block', xs: 'none' },
                }}
              >
                Home
              </Typography>
              <Typography
                component={Link}
                to="/about"
                sx={{ textDecoration: 'none' }}
              >
                About
              </Typography>
              <Typography
                component={Link}
                to="skills"
                sx={{ textDecoration: 'none' }}
              >
                Skills
              </Typography>
              <Typography
                component={Link}
                to="projects"
                sx={{ textDecoration: 'none' }}
              >
                Projects
              </Typography>
              <Typography
                component={Link}
                to="blog"
                sx={{ textDecoration: 'none' }}
              >
                Blog
              </Typography>
              <Typography
                component={Link}
                to="contact"
                sx={{ textDecoration: 'none' }}
              >
                Contact
              </Typography>
            </Box>

            {/* for mobile*/}
          </Stack>

          <Box
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                color="primary"
                sx={{ ml: 2, display: { xs: 'block', sm: 'none' } }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                backgroundColor: '#00203FFF',
                color: '#fff',
                position: 'absolute',
                top: 0,
                width: '100%',
                height: '100vh',
                padding: '150px',

                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 10,
                  width: 10,
                  height: 10,

                  transform: 'translateY(-50%) rotate(45deg)',

                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem
              component={Link}
              to="/"
            >
              Home
            </MenuItem>
            <MenuItem
              component={Link}
              to="/about"
            >
              About
            </MenuItem>

            <MenuItem
              component={Link}
              to="/skills"
            >
              Skills
            </MenuItem>
            <MenuItem
              component={Link}
              to="/projects"
            >
              Projects
            </MenuItem>
            <MenuItem
              component={Link}
              to="/blog"
            >
              Blog
            </MenuItem>
            <MenuItem
              component={Link}
              to="/contact"
            >
              Contacts
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
