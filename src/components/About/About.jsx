import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import {
  Button,
  //Card,
  //CardActions,
  //CardContent,
  // CardMedia,
  Grid,
  Typography,
  Box,
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
    <Container sx={{}}>
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
                  variant="h2"
                  gutterBottom
                >
                  About Me
                </Typography>
                <Typography variant="body2">{about.title},</Typography>
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
  );
}

export default About;
