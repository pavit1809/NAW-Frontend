import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import EventCard from './EventCard';
import EventPhoto from "./../assets/images/EventPhoto.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SlickPrevArrow, SlickNextArrow} from './SlickPrevArrow';
import { PropTypes } from 'prop-types';

UpcomingEventsSection.propTypes = {
  showPrevArrow: PropTypes.bool
};

export default function UpcomingEventsSection({showPrevArrow = true}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: '100px',
    prevArrow: showPrevArrow ? <SlickPrevArrow /> : '',
    nextArrow: <SlickNextArrow />,
  };
  const events = [
    {
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      action: 'Get Tickets',
    },
    {
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      action: 'Get Tickets',
    },
    {
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      action: 'Get Tickets',
    },
    {
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      action: 'Get Tickets',
    },
  ]
  return (
    <div style={{background: '#F4FBFF', padding: "35px 0"}}>
      <Container sx={{my: 7.5}}>
        <Grid container direction={'column'} justifyContent={'center'}>
          <Grid item>
            <Typography component={'h2'} variant='h4' sx={{textAlign: 'center', fontSize: '48px', lineHeight: '64px', fontWeight: '600'}}>
              Upcoming Events
            </Typography>
          </Grid>
          <Grid width={'100%'}>
             <Slider {...settings}>
                {events.map((event, index) => {
                  return (
                    <Grid key={index} sx={{mt: 8, mb: 2, mx: 1}}>
                      <EventCard  image={EventPhoto} date={'November 17, 2021'} time={'06 PM - 08 PM EST'} title={'Network After Work Houston'} action={'Get Tickets'}/>
                    </Grid>
                  )
                })}
              </Slider>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}