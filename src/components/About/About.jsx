import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import theme from './style.js';

import {
  Button,
  //Card,
  //CardActions,
  //CardContent,
  // CardMedia,
  Grid,
  Typography,
  Box,
  ThemeProvider,
  //Stack,
} from '@mui/material';
import { Facebook, GitHub } from '@mui/icons-material';
import { Container } from '@mui/system';

function About() {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'about']{
      title,
      _id,
      image{
        asset->{
            _id,
            url
        }
    }

    }`
    )
      .then((data) => setAboutData(data))

      .catch(console.error);
  }, []);
  if (!aboutData) return 'Loading.....';

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h2"
        gutterBottom
        color="#fff"
      >
        About Me
      </Typography>
      <Container
        sx={{
          marginBottom: '20px',
          backgroundColor: '#00203FFF',
          borderRadius: '10px',
        }}
      >
        <Grid
          container
          spacing={3}
        >
          {aboutData &&
            aboutData.map((about, id) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={about._id}
              >
                <Box
                  flexGrow={1}
                  sx={{
                    flexGrow: 1,

                    alignContent: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="secondary"
                  >
                    {about.title},
                  </Typography>
                  <Box flexGrow={1}>
                    <img
                      src={about.image.asset.url}
                      alt={about.title}
                      style={{
                        height: '40vh',
                        width: '140px',
                        alignItems: 'center',
                        marginLeft: '170px',
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default About;
