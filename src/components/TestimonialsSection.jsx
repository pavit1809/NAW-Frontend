import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import TestimonialsCard from './TestimonialsCard';
import "./Testimonials.css"


export default function TestimonialsSection() {
  return (
    <div style={{background: '#F4FBFF', padding: "35px 0"}}>
      <Container sx={{my: 7.5}}>
        <Grid container direction={'column'} justifyContent={'center'}>
          <Grid item>
            <Typography component={'h2'} variant='h4' sx={{textAlign: 'center', fontSize: '48px', lineHeight: '64px', fontWeight: '600'}}>
              Clients Testimonial
            </Typography>
          </Grid>
          <Grid container direction={'row'} justifyContent={'space-evenly'} item className='testimonial-cards-wrapper'>
            <Grid item xs={5}>
              <TestimonialsCard />
            </Grid>
            <Grid item xs={5}>
              <TestimonialsCard />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}