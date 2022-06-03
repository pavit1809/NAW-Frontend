import { Box, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import Author from "./../assets/images/author.png"
import "./Testimonials.css"

export default function TestimonialsCard() {
  return (
    <Grid container direction={'column'} mt={5}>
      <Paper elevation={2} sx={{borderRadius: '10px', p: 4}} className='testimonials-paper'>
        <Box sx={{textAlign: 'center'}}>
          <Typography component='p' sx={{fontSize: '18px', lineHeight: '28px', fontWeight: '600', mb: 1}}>
            Incredible Experience
          </Typography>
          <Typography component='p' sx={{fontSize: '14px', lineHeight: '24px', fontWeight: '400', color: 'text.secondary'}}>
            We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.
          </Typography>
        </Box>
      </Paper>
      <Grid container justifyContent={'center'} item mt={5}>
        <img src={Author} alt="Author" />
        <Box sx={{mx: 2}}>
          <Typography component='p' sx={{fontSize: '18px', lineHeight: '28px', fontWeight: '600'}}>
            Anya Tailor Joy
          </Typography>
          <Typography component='p' sx={{fontSize: '14px', lineHeight: '24px', fontWeight: '400', color: 'text.secondary'}}>
            CEO, SF Industires
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}