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
  Container,
  Box,
  IconButton,
  ThemeProvider,
  //Box,
} from '@mui/material';
import theme from './style';

//import ImageUrlBuilder from '@sanity/image-url';

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
      date,
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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#fff',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Container
          sx={{
            flex: 1,
            //position: 'sticky',
            //top: '20px',
            //height: 'calc(100vh - 70px)',
            overflow: 'scroll',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box>
            <Button>Like</Button>
            <Button>Comments</Button>
            <Button>Save</Button>
            <IconButton>
              <button>MoreIcon</button>
            </IconButton>
          </Box>
        </Container>
        <Container
          sx={{
            flex: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            border: '1px solid gray',
            borderRadius: '10px',
            marginTop: '20px',
            width: '80%',
            marginLeft: '10px',
          }}
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
                  marginTop: '20px',
                  marginRight: '0',
                  marginLeft: '0',
                  paddingLeft: '0',
                  width: '100%',
                }}
              >
                <img
                  src={singlePost?.mainImage?.asset.url}
                  alt="ggg"
                  style={{
                    height: '40vh',
                    width: '100%',
                    border: '1px solid gray',
                    borderRadius: '10px',
                    //alignItems: 'center',
                  }}
                />

                <div
                  sty={{
                    marginLeft: '10px',
                    padding: '10px',
                    marginTop: '20px',
                  }}
                >
                  <img
                    src={singlePost?.authorImage?.asset?._ref}
                    //src={singlePost?.mainImage?.asset.url}
                    alt="h"
                    style={{
                      height: '40px',
                      width: '40px',
                      border: '1px solid gray',
                      borderRadius: '50%',
                      //alignItems: 'center',
                    }}
                  />
                  <span>
                    <span>{singlePost.authorName}</span>
                    Published on :
                    <span style={{ paddingRight: '4px' }}>
                      {new Date(singlePost.date).toLocaleString('en-EN', {
                        month: 'long',
                      })}
                    </span>
                    <span style={{ paddingRight: '4px' }}>
                      {new Date(singlePost.date).getDate()}
                    </span>
                    <span>{new Date(singlePost.date).getFullYear()}</span>
                  </span>
                </div>
              </div>

              <Typography
                variant="h2"
                sx={{}}
              >
                {singlePost.title}
              </Typography>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  margin: 'auto',
                  //maxWidth: 'full',
                  padding: '10px',

                  maxWidth: '100%',
                  flexWrap: 'wrap',
                  lineHeight: 1.6,
                  fontFamily: 'Roboto',
                  backgroundColor: 'red',
                }}
              >
                <BlogContent
                  blocks={singlePost?.body}
                  projectId="process.env.REACT_APP_projectId"
                  dataset="production"
                  style={{ backgroundColor: 'blue' }}
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

        <Container sx={{ flex: 2 }}>
          <div style={{ dispaly: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              <img
                src=""
                alt="userimage"
              />
              <span>Mohamed Abdille</span>
            </div>
            <Button>Follow</Button>
            <Typography>
              Frontend Developer interested in React, Sanity, and Solidity
            </Typography>
            <span>
              LOCATION Ludinghausen, Germany, WORK as FrontEND Developer Amazon
            </span>
            <span>JOINED 27 May 2020</span>
          </div>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default SinglePost;
