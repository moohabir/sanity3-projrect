import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  //CardContent,
  //CardActions,
  Typography,
  Grid,
  //Container,
  //CardMedia,
  CircularProgress,
  Button,
} from '@mui/material';
import SanityClient from '../../client';

export default function Blog() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    SanityClient.fetch(
      `*[_type == "post"]{
                title,
                slug,
               description,
                date,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
               
            }`
    )
      .then((data) => setPosts(data))

      .catch(console.error);
  }, []);
  if (!posts) return <CircularProgress />;

  console.log(posts);
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
      >
        Blog Posts
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {posts &&
          posts.map((post, index) => (
            //<Link to={`/post/:slug`} key={post.slug.current}>
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
            >
              <Card
                sx={{
                  display: 'flex',
                  margin: '10px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 1,
                  textDecoration: 'none',
                }}
              >
                <img
                  src={post?.mainImage?.asset?.url}
                  alt="posttitle"
                  style={{ height: '250px', width: '300px' }}
                />
                <Typography variant="h5">{post?.title}</Typography>
                <Typography variant="h6">{post?.description}</Typography>
                <Typography variant="body2">
                  Published at : {new Date(post?.date).toLocaleDateString()}
                </Typography>

                <Button
                  component={Link}
                  to={`/post/${post?.slug?.current}`}
                  key={post?.slug?.current}
                  variant="contained"
                  sx={{ margin: '10px', backgroundColor: '#282c34' }}
                >
                  Read full Article
                </Button>
              </Card>
            </Grid>
            //</Link>
          ))}
      </Grid>
    </>
  );
}
