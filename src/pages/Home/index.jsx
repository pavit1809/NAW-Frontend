import { Button, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { makeStyles } from "@mui/styles";
import * as React from 'react';
import HeroSection from "../../components/HeroSection"
import HomeFeatures from '../../components/HomeFeatures';
import SubscriptionPanel from "../../components/SubscriptionPanel"
import TestimonialsSection from '../../components/TestimonialsSection';
import VirtualSummit from '../../components/VirtualSummit';
import UpcomingEventsSection from '../../components/UpcomingEventsSection'
import LatestBlogPosts from '../../components/LatestBlogPosts'
import HeroImageHome from '../../assets/images/hero-img.png'

// eslint-disable-next-line no-unused-vars
const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      border: 'none',
    }
  },
  focused: {},
  notchedOutline: {},
}));
export default function Home() {
  const outlinedInputClasses = useOutlinedInputStyles();
  // const history = useHistory();

  return (
    <>
      <HeroSection
        heading="Welcome To The Network After Work Community"
        para="You have a successful career, but you’re seeking more: A bigger impact. A trusted peer group. A stronger foundation. New wisdom. Inspiration. Network After Work is a network exclusively for you to achieve this."
        ctaLabel="Create a free profile"
        extra={
          <FormControl sx={{ my: 1.5 }}>
            <OutlinedInput
              sx={{
                py: 1,
                borderRadius: "18px",
                boxShadow: "0px 7px 20px rgba(56, 116, 255, 0.25)",
                border: "none",
              }}
              classes={outlinedInputClasses}
              id="outlined-adornment-password"
              placeholder="Enter Your Email Address"
              endAdornment={
                <InputAdornment position="end">
                  <Button variant="contained">Join now</Button>
                </InputAdornment>
              }
            />
          </FormControl>
        }
        heroImage={HeroImageHome}
        background={{
          background:
            "linear-gradient(311.76deg, rgba(30, 112, 161, 0.45) -15.24%, #96BCD3 -15.24%, rgba(150, 188, 211, 0.08) 34.74%, rgba(255, 255, 255, 0.19) 78.85%)",
        }}
      />
      <VirtualSummit />
      <UpcomingEventsSection />
      <HomeFeatures />
      <TestimonialsSection />
      <LatestBlogPosts />
      <SubscriptionPanel />
    </>
  );
}