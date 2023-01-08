import React, { useState, useEffect } from 'react';
import SanityClient from '../../client';
import { useParams, Link } from 'react-router-dom';
import BlogContent from '@sanity/block-content-to-react';
import {
  Button,
  // Card,
  //CardActions,
  //CardContent,
  //CardMedia,
  Grid,
  Typography,
  //Box,
} from '@mui/material';
//import { Facebook, GitHub } from '@mui/icons-material';

//import ImageUrlBuilder from '@sanity/image-url';
import { Container } from '@mui/system';

//const Builder = ImageUrlBuilder(SanityClient);
//function urlFor(source) {
// return Builder.image(source);
//}

function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    SanityClient.fetch(
      `*[slug.current == '${slug}']{
      title,
      body,
      "authorName":author->name,
      "authorImage":author->image,
      mainImage{
        asset->{
          _id,
          url
        }
      }
      
      
     
      
 
    }`
    )
      .then((data) => setSinglePost(data[0]))

      .catch((error) => console.error);
  }, [slug]);

  if (!singlePost) return 'Loading.....';
  console.log(singlePost);
  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={12}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20',
            }}
          >
            <Typography
              variant="h2"
              sx={{ alignSelf: 'center' }}
            >
              {singlePost.title}
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20',
            }}
          >
            {/*<img
              src={singlePost?.authorImage?.asset.ref}
              alt="ggg"
              style={{
                height: '40vh',
                width: '50%',
                //alignItems: 'center',
              }}
            />*/}
            <img
              src={singlePost?.mainImage?.asset.url}
              alt="ggg"
              style={{
                height: '40vh',
                width: '70%',
                border: '1px solid gray',
                borderRadius: '10px',
                //alignItems: 'center',
              }}
            />
            <span>{singlePost.authorName}</span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: 'full',
              padding: '10px',
              margin: '10px',
              width: '100%',
              lineHeight: 1.6,
              fontFamily: 'Roboto',
            }}
          >
            <BlogContent
              blocks={singlePost?.body}
              projectId="process.env.REACT_APP_projectId"
              dataset="production"
              style={{
                display: 'flex',
                padding: '10px',
              }}
            />
          </div>
          <div>
            <Button
              component={Link}
              to="/blog"
            >
              Share
            </Button>
            <Button
              component={Link}
              to="/blog"
            >
              Comment
            </Button>
            <Button
              component={Link}
              to="/blog"
            >
              Like
            </Button>
          </div>
          <Button
            component={Link}
            to="/blog"
          >
            Back
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SinglePost;
