import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import { AccessTimeFilled, ArrowForward, DateRangeRounded } from '@mui/icons-material';

export default function EventCard({id, image, date, time, title, action, author, handleNext}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Grid container justifyContent={'space-between'}>
          <Grid item sx={{display: 'flex', fontSize: '12px', lineHeight: '26px', color: '#9A9A9A'}}>
            <DateRangeRounded color='primary'/> <span style={{marginLeft: '5px'}}>{date}</span>
          </Grid>
          <Grid item sx={{display: 'flex', fontSize: '12px', lineHeight: '26px', color: '#9A9A9A'}}>
            <AccessTimeFilled color='primary'/> <span style={{marginLeft: '5px'}}>{time}</span>
          </Grid>
        </Grid>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'} mt={2}>
          {title}
        </Typography>
        {author &&
          <Grid container justifyContent={'start'} alignItems={'center'} item my={2}>
            <img src={author.icon} alt="author" width={26} height={26}/>
            <Box sx={{mx: 2}}>
              <Typography component='p' sx={{fontSize: '16px', lineHeight: '14px', fontWeight: '500'}}>
                {author.name}
              </Typography>
            </Box>
          </Grid>
        }
        <Box sx={{display: 'flex', alignItems: 'center', fontSize: '16px'}}>
          <Button component="a" underline='none' sx={{color: '#3874FF !important', pl: '0 !important'}} onClick={() => handleNext(id)}>
            {action}
          </Button>
          <ArrowForward sx={{color: '#3874FF !important'}}/>
        </Box>
      </CardContent>
 
    </Card>
  )
}
EventCard.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
  author: PropTypes.object,
  id: PropTypes.number,
  handleNext: PropTypes.func
}