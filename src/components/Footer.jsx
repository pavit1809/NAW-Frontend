import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import * as React from 'react';
import logo from "./../assets/images/Logo.png"
import FacebookIcon from "@mui/icons-material/FacebookRounded"
import TwitterIcon from "@mui/icons-material/Twitter"
import Instagram from "@mui/icons-material/Instagram"
import Linkedin from "@mui/icons-material/LinkedIn"
import "./Footer.css"

export default function Footer() {
  return (
    <footer style={
        {
          background: '#F4FBFF',
        }
      }>
      <Container maxWidth='xl' sx={
        {
          p: 8
        }
      }>
        <Grid container justifyContent='space-between'>
          <Grid item sx={
            {
              display: 'flex',
              flexDirection: 'column',
              width: '30%',
              mr: 3
            }
          } >
            <Box sx={
              {
                mb: 3
              }
            }>
              <img src={logo} alt="logo" />
            </Box>
            <Typography component='p' sx={
              {
                lineHeight: 2,
                mb: 3
              }
            }>
              Network After Work is a professional community consisting of Entrepreneurs, Professionals, Executives and thought leaders who understand the importance of building meaningful connections
            </Typography>

            <Grid container direction='row'>
              <IconButton aria-label="facebook" size="large">
                <TwitterIcon sx={
                  {
                    height: '1.5em',
                    width: '1.5em'
                  }
                }/>
              </IconButton>
              <IconButton aria-label="facebook" size="large">
                <Instagram sx={
                  {
                    height: '1.5em',
                    width: '1.5em'
                  }
                }/>
              </IconButton>
              <IconButton aria-label="facebook" size="large">
                <FacebookIcon sx={
                  {
                    height: '1.5em',
                    width: '1.5em'
                  }
                }/>
              </IconButton>
              <IconButton aria-label="facebook" size="large">
                <Linkedin sx={
                  {
                    height: '1.5em',
                    width: '1.5em'
                  }
                }/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item sx={
            {
              display: 'flex',
              flexDirection: 'column',
              width: '10%'
            }
          } >
            <Typography component='div' variant='h5' sx={
              {
                mb: 3,
                fontWeight: '600',
                lineHeight: '2'
              }
            } className='underline'>
              Quick Links
            </Typography>
            <Grid container direction='column'>
              <Link href='#'>Courses</Link>
              <Link href='#'>Community</Link>
              <Link href='#'>About</Link>
              <Link href='#'>Network After Work</Link>
              <Link href='#'>Blog</Link>
              <Link href='#'>Advertise</Link>
              <Link href='#'>Privacy Policy</Link>
              <Link href='#'>Do Not Sell My Info</Link>
              <Link href='#'>Terms & Conditions</Link>
            </Grid>
          </Grid>
          <Grid item sx={
            {
              display: 'flex',
              flexDirection: 'column',
              width: '20%'
            }
          } >
            <Typography component='div' variant='h5' sx={
              {
                mb: 3,
                fontWeight: '600',
                lineHeight: '2'
              }
            } className='underline'>
              Our Events
            </Typography>
            <Grid container direction='column'>
              <Link href='#'>Virtual Events</Link>
              <Link href='#'>Connection Request</Link>
              <Link href='#'>Webinars</Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container justifyContent='center' py={5} borderTop='1px solid rgba(159, 159, 159, 0.4)'>
            <Typography component='p'>
              &copy; 2021 Network After Work. All rights reserved.
            </Typography>
      </Grid>
    </footer>
  )
}
