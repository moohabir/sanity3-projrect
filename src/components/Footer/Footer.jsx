import React from 'react';
import { Link } from 'react-router-dom';
import { MdFacebook } from 'react-icons/md';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import {
  Box,
  Container,
  Divider,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from './style';

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      {/*<Divider sx={{ width: '100%' }} /> */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',

          position: 'fixed',
          left: 0,
          bottom: 0,
          minWidth: '100%',
          backgroundColor: '#00203fff',

          //backgroundColor: '#282c34',
          color: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '60px',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              to="/"
              className="footer-link"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="footer-link"
            >
              About
            </Link>
            <Link
              to="skills"
              className="footer-link"
            >
              Skills
            </Link>
            <Link
              to="projects"
              className="footer-link"
            >
              Projects
            </Link>
            <Link
              to="blog"
              className="footer-link"
            >
              Blog
            </Link>
            <Link
              to="contact"
              className="footer-link"
            >
              Contact
            </Link>
          </Box>

          <div className="social-icons">
            <h1>Follow Me</h1>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer noopener"
              className="icons"
            >
              <MdFacebook />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer noopener"
              className="icons"
            >
              <IoLogoYoutube />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noreferrer noopener"
              className="icons"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
              className="icons"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="icons"
            >
              <FiTwitter />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer noopener"
              className="icons"
            >
              <AiFillGithub />
            </a>
          </div>
        </Box>
        <Box sx={{}}>
          <Typography
            variant="body2"
            sx={{}}
          >
            &copy; 2022 Mohamed Abdille
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Footer;
