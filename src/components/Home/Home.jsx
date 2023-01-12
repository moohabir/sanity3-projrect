import React from 'react';
import { Facebook, GitHub, LinkedIn } from '@mui/icons-material';
import theme from './style.js';
//import home.css from "./components/Home/home.css";

import { Button, Typography, ThemeProvider, Container } from '@mui/material';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import Hero from '../Hero/Hero';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default Home;
