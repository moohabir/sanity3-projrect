import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import SinglePost from './components/SinglePost/SinglePost';
import Contacts from './components/Contacts/Contacts';
//import './App.css';
import './style.css';
import './App.css';

import { useContext } from 'react';
//import { DarkModeContext } from './context/DarkModeContext';

import CssBaseline from '@mui/material/CssBaseline';
import { Container, ThemeProvider } from '@mui/material';
import theme from './style';

function App() {
  //const { darkMode } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/post/:slug"
              element={<SinglePost />}
            />
            <Route
              path="/blog"
              element={<Blog />}
            />

            <Route
              path="/skills"
              element={<Skills />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/contact"
              element={<Contacts />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
