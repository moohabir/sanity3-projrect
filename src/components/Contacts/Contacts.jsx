import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import image from '../../images/contact.png';
import { useState } from 'react';
import './style.css';
import theme from './style';

export default function Contacts() {
  const [send, setSend] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uw75wwp',
        'template_b2ozi7e',
        form.current,
        '2ddtG95KQo0tr7mmB'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSend(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        color="secondary"
      >
        Contact me
      </Typography>
      <Typography>Please fill free to get in touch with me</Typography>
      <Container className="contacts">
        <Grid
          container
          spacing={3}
        >
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              '& .MuiTextField-root': {
                m: 1,
                marginTop: '20px',
                width: '25ch',
                backgroundColor: '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '4px',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid
              item
              xs={12}
              sm={6}
            >
              <div style={{}}>
                <TextField
                  id="outlined-multiline-flexible"
                  name="name"
                  label="Write your name"
                  maxRows={4}
                  sx={{}}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  type="email"
                  name="email"
                  label="Wrie email"
                />
                <TextField
                  id="outlined-multiline-static"
                  name="message"
                  label="Write message"
                  multiline
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </Grid>
          </Box>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          <img
            src={image}
            alt=""
            style={{ width: '350px', height: '350px' }}
          />
        </Box>
        {send && (
          <Typography
            variant="h6"
            color="#fff"
          >
            You successfully send your message
          </Typography>
        )}
      </Container>
    </ThemeProvider>
  );
}
