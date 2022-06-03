import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import BlogPostCard from './BlogPostCard';
import BlogPost from "./../assets/images/BlogPost.png";


export default function LatestBlogPosts() {
  const blogPosts = [
    {
      image: BlogPost,
      title: 'Business strategy',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
      action: 'Learn More',
    },
    {
      image: BlogPost,
      title: 'Business strategy',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
      action: 'Learn More',
    },
    {
      image: BlogPost,
      title: 'Business strategy',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et,",
      action: 'Learn More',
    }
  ]
  return (
    <div style={{padding: "35px 0"}}>
      <Container sx={{my: 7.5}}>
        <Grid container direction={'column'} justifyContent={'center'}>
          <Grid item>
            <Typography component={'h2'} variant='h4' sx={{textAlign: 'center', fontSize: '48px', lineHeight: '64px', fontWeight: '600'}}>
              Our Latest Blog Post
            </Typography>
          </Grid>
          <Grid container direction={'row'} justifyContent={'space-evenly'} item sx={{mt: 8}}>
            {blogPosts.map((post, index) => <BlogPostCard key={index} image={post.image} title={post.title} description={post.description} action={post.action} />)}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}