import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import {
  //Button,
  Card,
  //CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  ThemeProvider,
  Container,
  Paper,
} from '@mui/material';
import theme from './style';

function Skills() {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'skills']{
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
      .then((data) => setSkillData(data))

      .catch(console.error);
  }, []);
  if (!skillData) return 'Loading.....';
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          marginBottom: '80px',
          //backgroundColor: '#fff'
          paddingBottom: '50px',
        }}
      >
        <Typography
          variant="h3"
          color="white"
          gutterBottom
        >
          My skills
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          color="primary"
        >
          These are some of my skills
        </Typography>
        <Grid
          container
          spacing={3}
        >
          {skillData &&
            skillData.map((skill, id) => (
              <Grid
                item
                xs={6}
                sm={3}
                key={skill._id}
              >
                <Paper
                  sx={{
                    // margin: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    margin: 'auto',
                    padding: '10px',

                    '&:hover': {
                      //animation from animista.net
                      //.slide-fwd-center {
                      // -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                      //      animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                      //}
                    },
                  }}
                >
                  <CardMedia
                    image={skill?.image?.asset?.url}
                    alt={skill.title}
                    sx={{
                      height: '40px',
                      width: '40px',
                    }}
                  />
                  <CardContent sx={{}}>
                    <Typography
                      variant="h6"
                      color="#333"
                      sx={{ alignSelf: 'center' }}
                    >
                      {skill?.title}
                    </Typography>
                  </CardContent>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Skills;
