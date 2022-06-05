import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import EventPhoto from "./../../assets/images/EventPhoto.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SubscriptionPanel from "../../components/SubscriptionPanel";
import "../../assets/styles/common.css";
import DisplayMap from "../../components/Map";

const EventDetails = () => {
  const {
    state: { EventId },
  } = useLocation();
  const auth = JSON.parse(localStorage.getItem("auth"));
  // const [eventDetails, setEventDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`event/${EventId}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          // setEventDetails(response.data.data);
          console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const eventDetails = {
    image: EventPhoto,
    date: "November 17, 2021",
    time: "06 PM - 08 PM EST",
    title: "Network After Work Houston",
    action: "Get Tickets",
    price: "Free for members",
    membership: "$39 to attend all events for free",
    category: "In-Person Networking Events",
    tags: "Networking",
    address: "1197 Peachtree St NE, Atlanta, GA",
  };

  return (
    <Container sx={{ my: 15 }}>
      <Grid container justifyContent={"space-evenly"}>
        <Grid item>
          <img src={eventDetails.image} alt="Event banner" />
        </Grid>
        <Grid item>
          <Grid container direction={"column"}>
            <Typography
              sx={{ fontSize: "36px", lineHeight: "60px", fontWeight: "600" }}
            >
              Event Details
            </Typography>
            <Table sx={{ border: "none" }} aria-label="caption table">
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Date:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.date}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Time:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.time}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Ticket Price:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.price}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Membership:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.membership}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Event Category:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.category}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Event Tags:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.tags}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      py: 1,
                      fontWeight: "600",
                      pl: 0,
                    }}
                    component="th"
                    variant="head"
                  >
                    Address:
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", py: 1 }}>
                    {eventDetails.address}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button variant="contained" sx={{ my: 2, width: "100%" }}>
              First Time - Register Here
            </Button>
            <Button variant="contained" sx={{ my: 2, width: "100%" }}>
              First Time - Register Here
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          sx={{ fontSize: "36px", fontWeight: "600", lineHeight: "60px" }}
          color="primary"
          my={2}
        >
          Description
        </Typography>
        <Typography sx={{ fontSize: "24px", lineHeight: "36px" }} p={2}>
          Join us for an exclusive, members-only evening out with other local
          business owners, entrepreneurs, executives, and career-minded
          professionals on Tuesday, January 25th. Experience networking like
          never before! Network After Work, a leader in networking events, has
          changed the art of networking. With access to numerous in-person
          networking events, virtual networking events and live workshops each
          month, the opportunity to connect with the people you need just became
          that much easier. Learn and grow the skills you need through monthly
          workshops. Once in the community, you can even go back to learn from
          past workshops. - When: Tuesday, January 25th | 6-8 - Where:
          Establishment | 1197 Peachtree St NE, Atlanta, GA There’s no reason to
          not be a part of the conversation with local business owners,
          entrepreneurs, executives, and career-minded professionals who can
          take your career to the next level! We encourage you to invite your
          friends and colleagues! All are welcome to attend, whether you’re a
          seasoned pro-networker or are just getting started! Why Should I
          Attend? - Increase your brand’s visibility - Meet Experts and Leaders
          Face to Face - Build relationships with like-minded people - Keep up
          with current trends - Have FUN! What industries can I expect to meet?
          Our events are not limited to one type of industry, you can expect to
          see an array of industries throughout the event including but not
          limited to - Marketing / Advertising - IT - Finance - Hospitality -
          Media - Retail/Consumer Goods AND MORE! Not a Member? Become a part of
          one of the largest networking groups with over 100,00 attendees per
          year that is dedicated to providing high quality connections across
          the country. Whether you are networking to polish your self
          presentation skills, create brand awareness for your business, or help
          you build a strong network of like-minded individuals, Network After
          Work is the place for YOU. By becoming a member for less than $4 a
          month you get exclusive access to: 12+ in-person monthly networking
          events Access to the private online community Complimentary ticket to
          any live chat, summit, webinar, or virtual networking event Access to
          over 75 past workshops Access to free resources and presentations
          Exclusive LIVE Q&A Events with thought leaders Priority customer
          service support Network After Work&apos;s Membership Gives You the
          Opportunity to: Connect with people at all levels Learn and grow your
          current skills Meet new, like-minded business professionals Exchange
          ideas Explore partnerships and business collaborations COVID
          Guidelines: To prepare for a safe and enjoyable experience Network
          After Work has the health and safety of our guests in mind at all
          times and has put the following Covid-19 protocols in place to ensure
          a contactless and safe event We will follow the city of Atlanta&apos;s
          guidelines and recommendations Masks will not be required if
          you&apos;re fully vaccinated; masks are encouraged if you aren&apos;t
          or if you&apos;re more comfortable with one on We will have hand
          sanitizer available for use at the welcome table Note: The following
          is allowed in lieu of handshaking: waving, head nods, elbow bump,
          thumbs up!
        </Typography>
        <Paper className="map-container">
          <DisplayMap />
        </Paper>
      </Grid>
      <SubscriptionPanel />
    </Container>
  );
};

export default EventDetails;
