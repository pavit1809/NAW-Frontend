import { LocationOn } from '@mui/icons-material';
import { Button, Container, Grid, IconButton, InputBase, Pagination, Paper} from '@mui/material';
import * as React from 'react';
import EventPhoto from "./../assets/images/EventPhoto.png";
import EventCard from './EventCard';

export default function EventsList() {
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
    <Container disableGutters>
      <Grid container justifyContent={'space-between'} mb={3}>
        <Paper
          component="form"
          elevation={1}
          sx={{ p: '8px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '10px' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <LocationOn />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by City and State"
            inputProps={{ 'aria-label': 'Search by City and State' }}
          />
        </Paper>
        <Paper
          component="form"
          elevation={1}
          sx={{ p: '8px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '10px' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <LocationOn />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by City and State"
            inputProps={{ 'aria-label': 'Search by City and State' }}
          />
        </Paper>
        <Button variant="contained">
          Search
        </Button>
        <Button variant="outlined">
          Reset
        </Button>
      </Grid>
      <Grid container justifyContent={'space-between'}>
        {events.map((event, index) => {
          return (
            <Grid key={index} sx={{my: 2}}>
              <EventCard  image={EventPhoto} date={event.date} time={event.time} title={event.title} action={event.action} handleNext={(id) => id}/>
            </Grid>
          )
        })}
      </Grid>
      <Grid container justifyContent={'center'} my={3}>
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          size={'large'}
        />
      </Grid>
    </Container>
  )
}