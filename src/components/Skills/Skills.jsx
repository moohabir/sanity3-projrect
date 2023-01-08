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
} from '@mui/material';

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
    <>
      <Typography
        variant="h3"
        gutterBottom
      >
        My skills
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {skillData &&
          skillData.map((skill, id) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={skill._id}
            >
              <Card
                sx={{
                  // margin: '20px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  //margin: 'auto',
                  padding: '10px',
                  bgcolor: 'transparent',
                  '&:hover': {
                    //animation from animista.net
                    //.slide-fwd-center {
                    // -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    //      animation: slide-fwd-center 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
                    //}
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ alignSelf: 'center' }}
                  >
                    {skill?.title}
                  </Typography>
                </CardContent>
                <CardMedia
                  image={skill?.image?.asset?.url}
                  alt={skill.title}
                  sx={{
                    height: '40vh',
                    width: '50%',

                    marginLeft: '100px',
                  }}
                />
              </Card>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default Skills;
