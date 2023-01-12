import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, Typography } from '@mui/material';
import image from '../../images/contact.png';
import { useState } from 'react';
import './style.css';

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
    <>
      <Typography variant="h3">Contact me</Typography>
      <Container
        className="contacts"
        sx={{}}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '350px',
            width: '350px',
            border: '3px solid gray',
            //margin: 'auto',
            //backgroundColor: '#00203FFF',
          }}
        >
          <label>Name</label>
          <input
            type="text"
            name="name"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
          />
          <label>Message</label>
          <textarea name="message" />
          <Button type="submit">Submit</Button>
        </form>
        <img
          src={image}
          alt=""
          style={{ width: '350px', height: '350px' }}
        />
        {send && (
          <Typography
            variant="h6"
            color="success"
          >
            You successfully send your message
          </Typography>
        )}
      </Container>
    </>
  );
}
