import React from 'react';
import { Facebook, GitHub } from '@mui/icons-material';

//import home.css from "./components/Home/home.css";

import { Button, Typography } from '@mui/material';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

function Home() {
  return (
    <div>
      <main className="home">
        <div className="left-side">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontSize: 20,
              //background:
              //'-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              webkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hello, I am Mohamed Abdille,
          </Typography>
          <Typography variant="body2">Frontend Web Developer</Typography>
        </div>
        <div className="right-side">
          <img
            src=""
            alt=""
          />
          <a href="https://facebook.com">
            <Button
              variant="text"
              size="large"
            >
              <Facebook />
            </Button>
          </a>
          <a href="https://github.com">
            <GitHub />
          </a>
        </div>
      </main>
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default Home;
