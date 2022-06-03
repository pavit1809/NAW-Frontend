import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import TwoPersonGroup from './../assets/images/TwoPersonGroup.svg'
import ThreePersonGroup from './../assets/images/ThreePersonGroup.svg'
import ListIcon from './../assets/images/ListIcon.svg'
import HomeFeaturesImage from './../assets/images/HomeFeaturesImage.png'

export default function HomeFeatures() {
  const cards = [
    {
      icon: ListIcon,
      heading: '4,000+',
      text: 'Events hosted'
    },
    {
      icon: ThreePersonGroup,
      heading: '600,000+',
      text: 'Attendees'
    },
    {
      icon: TwoPersonGroup,
      heading: '15M+',
      text: 'Connections Made'
    },
  ]
  return (
    <Container sx={{my: 12.5}}>
      <Grid container justifyContent={'space-between'}>
        <Grid width={'50%'} container flexWrap={'wrap-reverse'} justifyContent={'center'} direction={'row-reverse'} alignContent={'flex-start'}>
          {cards.map((card, index) => {
            return (
              <Card variant="outlined" sx={
                {
                  borderColor: 'primary.main',
                  width: 260,
                  maxHeight: 255,
                  my: 2,
                  mx: 'auto',
                  boxShadow: '0px 0px 25px 0px #3874FF33'
                }
              } key={index}>{
                <InlineCard icon={card.icon} heading={card.heading} text={card.text}/>
              }</Card>
            )
          })}
        </Grid>
        <Grid width={'40%'}>
          <img src={HomeFeaturesImage} alt="Home features" />
        </Grid>
      </Grid>
    </Container>
  )
}

const InlineCard = ({icon, heading, text}) => {
  return (
    <React.Fragment>
      <CardContent sx={{textAlign: 'center'}}>
        <img src={icon} alt="icon" />
        <Typography sx={{ fontSize: 40, fontWeight: 600 }} variant='h4'>
          {heading}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 16, fontWeight: 500 }} color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    </React.Fragment>
  )
}
InlineCard.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
}