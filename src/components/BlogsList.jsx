import { Button, Container, Grid } from '@mui/material';
import * as React from 'react';
import EventPhoto from "./../assets/images/EventPhoto.png";
import EventCard from './EventCard';
import AuthorIcon from '../assets/images/author.png'
import { useNavigate } from 'react-router-dom';

export default function BlogsList() {
  const navigate = useNavigate();
  const showBlogDetails = (blogID) => {
    navigate(`/blogs/${blogID}`);
  }
  const blogs = [
    {
      id: 1,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 2,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 3,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 4,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 5,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 6,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 7,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 8,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 9,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 10,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 11,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
    {
      id: 12,
      image: EventPhoto,
      date: 'November 17, 2021',
      time: '06 PM - 08 PM EST',
      title: 'Network After Work Houston',
      actionLabel: 'Read More',
      author: {icon: AuthorIcon, name: 'Robert Maldonado'}
    },
  ]
  return (
    <Container disableGutters sx={{my: 9}} >
      <Grid container justifyContent={'space-between'}>
        {blogs.map((post, index) => {
          return (
            <Grid key={index} sx={{my: 2}}>
              <EventCard id={post.id} image={EventPhoto} date={post.date} time={post.time} title={post.title} action={post.actionLabel} author={post.author} handleNext={showBlogDetails}/>
            </Grid>
          )
        })}
      </Grid>
      <Grid container justifyContent={'center'} my={3}>
        <Button variant='contained'>
          Load More
        </Button>
      </Grid>
    </Container>
  )
}