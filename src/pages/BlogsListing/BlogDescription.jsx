import * as React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import BlogBanner from "./../../assets/images/BlogBanner.png";
import AuthorIcon from './../../assets/images/author.png'
import { AccessTimeFilled, DateRangeRounded } from '@mui/icons-material';

export default function BlogDescription({blogID}) {
  const [blogPost] = React.useState(
    {
      id: blogID,
      image: BlogBanner,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'HAVING A SUCCESSFUL PRODUCT LAUNCH',
      description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim ultricies ac sapien. Eu bibendum id et facilisis felis, ultricies iaculis nulla senectus. Nisl neque, sem in erat varius commodo. Enim amet ullamcorper ac enim ante justo a justo. Ut elit in nec vulputate.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur donec eget sed suspendisse ut maecenas facilisi sollicitudin. Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat. Sit diam gravida diam sit arcu. Congue auctor felis aliquet nulla enim</p>',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    }
  );
  React.useEffect(() => {
    // axios.get('/').then(
    //   (response) => {
    //     console.log(response);
    //     setBlogPost(response);
    //   }
    // ).catch(
    //   (error) => {
    //     console.log(error);
    //   }
    // )
  })
  return (
    <>
      {blogPost &&
        <Container sx={{my:8}}>
          <img src={blogPost.image} alt="Blog banner" />
          <Grid container justifyContent={'space-between'} my={2}>
            <Grid item sx={{display: 'flex', fontSize: '12px', lineHeight: '26px', color: '#9A9A9A'}}>
              <DateRangeRounded color='primary'/> <span style={{marginLeft: '5px'}}>{blogPost.date}</span>
            </Grid>
            <Grid item sx={{display: 'flex', fontSize: '12px', lineHeight: '26px', color: '#9A9A9A'}}>
              <AccessTimeFilled color='primary'/> <span style={{marginLeft: '5px'}}>{blogPost.time}</span>
            </Grid>
            <Grid item>
              <Grid  container justifyContent={'start'} alignItems={'center'}>
                <img src={blogPost.author.icon} alt="author" width={26} height={26}/>
                <Box sx={{mx: 2}}>
                  <Typography component='p' sx={{fontSize: '16px', lineHeight: '14px', fontWeight: '500'}}>
                    {blogPost.author.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid my={10}>
            <Typography gutterBottom variant="h1" sx={{fontSize: '46px', lineHeight: '14px', fontWeight: '600'}}>
              {blogPost.title}
            </Typography>
          </Grid>
          <Grid my={10}>
            <Typography gutterBottom variant="p" sx={{fontSize: '24px', lineHeight: '36px', fontWeight: '400'}} dangerouslySetInnerHTML={{ __html: blogPost.description }} />
          </Grid>
        </Container>
      }
    </>
  )
}
BlogDescription.propTypes = {
  blogID: PropTypes.string
}