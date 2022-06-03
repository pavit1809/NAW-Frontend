import { Box, Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import * as React from 'react';
import { PropTypes } from 'prop-types';
import { ArrowForward } from '@mui/icons-material';

export default function BlogPostCard({image, title, description, action}) {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 'none' }}>
      <CardMedia
        component="img"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" mt={2}>
          {title}
        </Typography>
        <Typography gutterBottom variant="p" component="div" mt={2}>
          {description}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', fontSize: '16px'}}>
          <Link underline='none' sx={{color: '#3874FF !important'}}>
            {action}
          </Link>
          <ArrowForward sx={{color: '#3874FF !important'}}/>
        </Box>
      </CardContent>
    </Card>
  )
}
BlogPostCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  action: PropTypes.string,
}