import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import {CheckCircleOutline, CloseSharp} from '@mui/icons-material'

export default function MembershipCard({planName, price, frequency, features, extraCardCss}) {
  return (
    <Card sx={{...extraCardCss, boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)', borderRadius: '20px'}}>
      <CardContent sx={{p: 4}}>
        <Grid container justifyContent={'center'} direction={'column'} alignContent={'center'} sx={{height: '140px', textAlign: 'center'}}>
          <Grid item sx={{fontWeight: '600', fontSize: '22px', lineHeight: '32px'}}>{planName}</Grid>
          <Grid item sx={{fontWeight: '600', fontSize: '42px', lineHeight: '60px'}}>{price}</Grid>
          <Grid item sx={{fontWeight: '400', fontSize: '14px', lineHeight: '20px'}}>{frequency}</Grid>
        </Grid>
        <Divider sx={{borderColor: (extraCardCss && extraCardCss.color)}} />
        <Grid my={5} mx={3}>
          {features.map((feature, index) =>
          <Grid container key={index} my={4}>
            {feature.available &&
            <CheckCircleOutline color={(extraCardCss && extraCardCss.color) || 'primary'} />
            }
            {feature.available === false &&
            <CloseSharp color='error' />
            }
            <Typography variant='p' ml={1}>
              {feature.label}
            </Typography>
          </Grid>
          )}
        </Grid>
        <Grid textAlign={'center'}>
          <Button variant='outlined' sx={{boxShadow: '0px 10px 50px rgba(1, 13, 130, 0.12)', background: '#fff'}}>
            Get Started
          </Button>
        </Grid>
      </CardContent>
    </Card>
  )
}
MembershipCard.propTypes = {
  image: PropTypes.string,
  planName: PropTypes.string,
  price: PropTypes.string,
  frequency: PropTypes.string,
  features: PropTypes.array,
  extraCardCss: PropTypes.object,
}