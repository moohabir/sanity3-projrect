import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import './hero.css';
import theme from './style';
import Resume from '../../images/contact.png';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [heroData, setProjectData] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'hero']{
      title,
      title2,
      _id,
      date,
      description,
      link,
      code,
      tags,
      image{
        asset->{
            _id,
            url
        }
    }

    }`
    )
      .then((data) => setProjectData(data))

      .catch(console.error);
  }, []);
  if (!heroData) return 'Loading.....';
  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          marginBottom: '40px',
          marginTop: '40px',
          backgroundColor: '#00203FFF',
        }}
      >
        <Grid
          container
          spacing={3}
        >
          {heroData &&
            heroData.map((hero, id) => (
              <Grid
                item
                xs={12}
                key={hero._id}
              >
                <div className="hero-container ">
                  <Box
                    sx={{
                      //bgcolor: 'gray',
                      marginLeft: '10px',
                      padding: '10px',
                    }}
                  >
                    <Typography
                      variant="h5"
                      color="secondary"
                    >
                      {hero.title}
                    </Typography>
                    <Typography>{hero.title2}</Typography>
                    <Typography variant="subtitle1">
                      {hero.description}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                    >
                      Tags: {hero.tags}
                    </Typography>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '10px',
                        margin: '10px',
                      }}
                    >
                      <a
                        href={Resume}
                        download
                      >
                        <Button
                          download="true"
                          variant="outlined"
                          sx={{ marginRight: '10px' }}
                        >
                          Download Resume
                        </Button>
                      </a>

                      <Button
                        variant="contained"
                        component={Link}
                        to="/contact"
                      >
                        Hire me
                      </Button>
                    </div>
                  </Box>
                  <Box>
                    <img
                      src={hero.image.asset.url}
                      alt={hero.title}
                      style={{
                        height: '400px',
                        width: '400px',
                      }}
                    />
                  </Box>
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
