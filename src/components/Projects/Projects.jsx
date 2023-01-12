import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from './style';

function Projects() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == 'project']{
      title,
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
  if (!projectData) return 'Loading.....';
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        gutterBottom
        color="primary"
        sx={{ marginBottom: '30px' }}
      >
        My Projects
      </Typography>
      <Container sx={{ marginBottom: '50px', backgroundColor: '#00203FFF' }}>
        <Grid
          container
          spacing={3}
        >
          {projectData &&
            projectData.map((project, id) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={project._id}
              >
                <Card sx={{ bgcolor: 'gray', margin: '10px', padding: '40px' }}>
                  <CardMedia
                    image={project.image.asset.url}
                    alt={project.title}
                    sx={{
                      height: '170px',
                      width: '50%',
                      alignItems: 'center',
                      marginLeft: '170px',
                    }}
                  />
                  <CardContent>
                    <h1>{project.title}</h1>
                    <Typography
                      variant="h6"
                      gutterBottom
                    >
                      Published on:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                    >
                      Tags: {project.tags}
                    </Typography>
                    <Typography variant="subtitle1">
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <a href={project.code}>
                        <Button
                          variant="contained"
                          size="small"
                          color="primary"
                          sx={{ marginRight: '10px' }}
                        >
                          Code
                        </Button>
                      </a>
                      <a href={project.link}>
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                        >
                          Live Demo
                        </Button>
                      </a>
                      <br />
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default Projects;
