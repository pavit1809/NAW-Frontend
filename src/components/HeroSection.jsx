import { Button, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
export default function HeroSection({heading, para, extra, ctaLabel, heroImage, heroImageStyle, background}) {
  return (
    <div style={{...background}}>
      <Container disableGutters sx={{pt: 8}} >
        <Grid container direction='row' height='inherit' justifyContent={'space-between'}>
          <Grid width='40%' item>
            <Grid container direction='column' justifyContent='center' height='100%'>
              <Typography component='h1' variant="h" my={1}>
                {heading}
              </Typography>
              <Typography component='p' my={1}>
                {para}
              </Typography>
              {extra}
              { ctaLabel &&
                <Button variant='contained' fullWidth={false} sx={{width: 'fit-content', my: 1.5}}>
                  {ctaLabel}
                </Button>
              }
            </Grid>
          </Grid>
          <Grid item>
            <img src={heroImage} alt="hero image" style={{...heroImageStyle, width: '100%', height: '100%'}}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

HeroSection.propTypes = {
  heading: PropTypes.string,
  para: PropTypes.string,
  ctaLabel: PropTypes.string,
  heroImage: PropTypes.string,
  extra: PropTypes.object,
  heroImageStyle: PropTypes.object,
  background: PropTypes.object,
}