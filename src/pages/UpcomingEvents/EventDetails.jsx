import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import "../../assets/styles/common.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const UserEventDetails = () => {
  const {
    state: { EventId },
  } = useLocation();
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    axios
      .get(`event/${EventId}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setEventDetails(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // const eventDetails = {
  //   image: EventPhoto,
  //   date: "November 17, 2021",
  //   time: "06 PM - 08 PM EST",
  //   title: "Network After Work Houston",
  //   action: "Get Tickets",
  //   price: "Free for members",
  //   membership: "$39 to attend all events for free",
  //   category: "In-Person Networking Events",
  //   tags: "Networking",
  //   address: "1197 Peachtree St NE, Atlanta, GA",
  // };

  return (
    <Container className="container-xl">
      <Typography variant="h3" className="section-title mt-0">
        Network After Work Virtual Networking
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} xl={7} item>
          <Grid container spacing={0}>
            <Grid xs={12} xl={11} item>
              <img
                src={eventDetails.banner}
                alt="Event banner"
                className="img-block"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={6} xl={5} item>
          <Paper className="icon-list-list">
            <span className="icon">
              <CalendarMonthIcon />
            </span>
            <Typography className="sub-text" variant="p">
              {eventDetails.event_date}
            </Typography>
          </Paper>
          <Paper className="icon-list-list">
            <span className="icon">
              <AccessTimeIcon />
            </span>
            <Typography className="sub-text" variant="p">
              {eventDetails.event_time}
            </Typography>
          </Paper>
          <Typography variant="h5" className="title-lg">
            Network After Work Virtual Networking
          </Typography>
          <Grid container spacing={2} className="list-flex-card">
            <Grid item xs={8}>
              <Paper className="icon-list-list">
                <Paper className="icon-list-list">
                  <span className="icon">
                    <CheckCircleOutlineIcon />
                  </span>
                  <Typography className="sub-text" variant="p">
                    Number of people who are{" "}
                    <b className="text-black">attending</b> the event
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography className="title-md text-black" variant="p">
                5000
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="list-flex-card">
            <Grid item xs={8}>
              <Paper className="icon-list-list">
                <Paper className="icon-list-list">
                  <span className="icon">
                    <CheckCircleOutlineIcon />
                  </span>
                  <Typography className="sub-text" variant="p">
                    Number of people who have{" "}
                    <b className="text-black">viewed</b> the event
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography className="title-md text-black" variant="p">
                15000
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="list-flex-card">
            <Grid item xs={8}>
              <Paper className="icon-list-list">
                <Paper className="icon-list-list">
                  <span className="icon">
                    <CheckCircleOutlineIcon />
                  </span>
                  <Typography className="sub-text" variant="p">
                    Number of people who are{" "}
                    <b className="text-black">not attending </b> the event
                  </Typography>
                </Paper>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Typography className="title-md text-black" variant="p">
                2000
              </Typography>
            </Grid>
          </Grid>

          {/* <Grid container direction={"column"}>
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
                  <TableCell sx={{ borderBottom: "none", py: 1 }}></TableCell>
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
          </Grid> */}
        </Grid>
      </Grid>
      <Grid>
        <Typography
          sx={{ fontSize: "36px", fontWeight: "600", lineHeight: "60px" }}
          my={2}
          className="section-title normal-font"
        >
          Andy and his dream to be Astronaut
        </Typography>
        <Typography className="details-text">
          {eventDetails.description}
        </Typography>
        {/* <Paper className="map-container"></Paper> */}
        <Paper className="center-link">
          <p>Below Is The Link To Log Into The Zoom Anytime</p>
          <Button my={2} variant="text" className="text-link">
            {/* https://us02web.zoom.us/j/84371050221 */}
            {eventDetails.event_link}
          </Button>
        </Paper>
        <Paper className="center-link">
          <p className="text-gray">
            NOTE: Zoom Meeting Details will also be emailed to your registered
            email ID.
          </p>
          <Button
            variant="contained"
            my={2}
            className="shadow-btn"
            onClick={() => navigate("/d/upcoming-events")}
          >
            Back to Event Page
          </Button>
        </Paper>
      </Grid>
    </Container>
  );
};

export default UserEventDetails;
