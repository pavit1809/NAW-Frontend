import { Button, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import virtualSummit from './../assets/images/virtualSummit.png'
import virtualSummitCounter from "./../assets/images/virtualSummitCounter.png"
import ArrowForward from "@mui/icons-material/ArrowForward"

export default function VirtualSummit() {
  return(
    <Container disableGutters sx={{py: 10, display: 'flex', justifyContent: 'space-between'}}>
      <Grid>
        <img src={virtualSummit} alt="virtual summit" />
      </Grid>
      <Grid container direction='column' width='35%' justifyContent='space-evenly' py={8}>
        <Typography component='p' sx={{
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '18px',
          color: '#3670F4'
        }}>
          How To Maximize Social Media Virtual Summit
        </Typography>
        <Typography component='h4' variant='h4' sx={{
          fontWeight: '900',
          fontSize: '40px',
          lineHeight: '48px'
        }}>
          Social Media Virtual Summit
        </Typography>
        <Typography component='p' sx={{
          fontWeight: 'normal',
          fontSize: '16px',
          lineHeight: '28px',
          color: '#656464'
        }}>
          1-Day Online Event Ends In:
        </Typography>
        <img src={virtualSummitCounter} alt="virtual summit counter" />
        <Button variant="contained" size="large">
          Get My Free Pass
          <ArrowForward />
        </Button>
      </Grid>
    </Container>
  );
}