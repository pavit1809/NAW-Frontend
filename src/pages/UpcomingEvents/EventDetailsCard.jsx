import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import EventPhoto from "./../../assets/images/Frame.png";
import "../../assets/styles/common.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const UserEventCardDetails = () => {
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
    <Container className="container-xl">
      <Typography variant="h3" className="section-title mt-0">
        Network After Work Virtual Networking
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} md={6} xl={7} item>
          <Grid container spacing={0}>
            <Grid xs={12} xl={11} item>
              <img
                src={eventDetails.image}
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
              {eventDetails.date}
            </Typography>
          </Paper>
          <Paper className="icon-list-list">
            <span className="icon">
              <AccessTimeIcon />
            </span>
            <Typography className="sub-text" variant="p">
              {eventDetails.time}
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
        </Grid>
      </Grid>
      <Grid>
        <Grid container spacing={3} my={5}>
          <Grid xs={12} md={6} xl={5} className="pt-0" item>
            <Typography className="label-md text-black" variant="p">
              Prompt code
            </Typography>
            <Box className="coupon-box" my={2}>
              <FormControl variant="standard">
                <TextField
                  id="outlined-basic"
                  placeholder="Enter prompt code"
                  variant="outlined"
                />
              </FormControl>
              <Button variant="contained">Enter</Button>
            </Box>
          </Grid>
        </Grid>
        <Card className="ticket-card">
          <CardContent>
            <Grid container spacing={2} p={0}>
              <Grid xs={12} md={8} xl={9} className="pt-0" item>
                <Typography className="title-md text-black" variant="p">
                  Free First Time Admission
                </Typography>
                <Typography className="section-title text-primary" variant="p">
                  Free
                </Typography>
              </Grid>
              <Grid xs={12} md={4} xl={3} className="pt-0" item>
                <Typography className="label-md text-black" variant="p">
                  Quantity of the tickets
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">0</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography className="title-lg card-sub-title" variant="p">
              Sale ends on Feb 22, 2022
            </Typography>
            <Grid container spacing={0}>
              <Grid xs={12} md={9} xl={9} className="pt-0">
                <Typography className="title-md overflow-text" variant="p">
                  By becoming a member for less than $4 a month you get
                  exclusive access to: 12+ in-person monthly networking
                  events.Access to private online community.
                </Typography>
              </Grid>
              <Grid xs={12} md={3} xl={3}>
                <Button variant="contained" className="btn-sm ml-auto">
                  Select
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className="ticket-card">
          <CardContent>
            <Grid container spacing={2} p={0}>
              <Grid xs={12} md={8} xl={9} className="pt-0" item>
                <Typography className="title-md text-black" variant="p">
                  Admission+1 yearly Membership
                </Typography>
                <Typography className="section-title text-primary" variant="p">
                  $39
                  <span className="label-md">+$2.18 Fee/ +$3.40 Sales Tax</span>
                </Typography>
              </Grid>
              <Grid xs={12} md={4} xl={3} className="pt-0" item>
                <Typography className="label-md text-black" variant="p">
                  Quantity of the tickets
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">0</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography className="title-lg card-sub-title" variant="p">
              Sale ends on Feb 22, 2022
            </Typography>
            <Grid container spacing={0}>
              <Grid xs={12} md={9} xl={9} className="pt-0">
                <Typography className="title-md overflow-text" variant="p">
                  By becoming a member for less than $4 a month you get
                  exclusive access to: 12+ in-person monthly networking
                  events.Access to private online community.
                </Typography>
                <Button
                  my={2}
                  variant="text"
                  className="text-link noline-text-link"
                >
                  See more
                </Button>
              </Grid>
              <Grid xs={12} md={3} xl={3}>
                <Button variant="contained" className="btn-sm ml-auto">
                  Select
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className="ticket-card">
          <CardContent>
            <Grid container spacing={2} p={0}>
              <Grid xs={12} md={8} xl={9} className="pt-0" item>
                <Typography className="title-md text-black" variant="p">
                  Free First Time Admission
                </Typography>
                <Typography className="section-title text-primary" variant="p">
                  $299
                  <span className="label-md">+$8.68 Fee</span>
                </Typography>
              </Grid>
              <Grid xs={12} md={4} xl={3} className="pt-0" item>
                <Typography className="label-md text-black" variant="p">
                  Quantity of the tickets
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">0</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography className="title-lg card-sub-title" variant="p">
              Sales end in a day
            </Typography>
            <Grid container spacing={0}>
              <Grid xs={12} md={9} xl={9} className="pt-0">
                <Typography className="title-md overflow-text" variant="p">
                  Dedicated E-Blast to 24k New York City email list for your
                  company. (Must attend to receive the list. List is sent the
                  day after the event.)
                </Typography>
              </Grid>
              <Grid xs={12} md={3} xl={3}>
                <Button variant="contained" className="btn-sm ml-auto">
                  Select
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card className="ticket-card">
          <CardContent>
            <Grid container spacing={2} p={0}>
              <Grid xs={12} md={8} xl={9} className="pt-0" item>
                <Typography className="title-md text-black" variant="p">
                  LinkedIn Messaging
                </Typography>
                <Typography className="section-title text-primary" variant="p">
                  $399
                  <span className="label-md">+$11.18 Fee</span>
                </Typography>
              </Grid>
              <Grid xs={12} md={4} xl={3} className="pt-0" item>
                <Typography className="label-md text-black" variant="p">
                  Quantity of the tickets
                </Typography>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">0</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Typography className="title-lg card-sub-title" variant="p">
              Sales end in a daySales end on Feb 22, 2022
            </Typography>
            <Grid container spacing={0}>
              <Grid xs={12} md={9} xl={9} className="pt-0">
                <Typography className="title-md overflow-text" variant="p">
                  Dedicated LinkedIn Messaging to 10k people for your business
                  or event
                </Typography>
              </Grid>
              <Grid xs={12} md={3} xl={3}>
                <Button variant="contained" className="btn-sm ml-auto">
                  Select
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Paper className="center-link">
          <Button
            variant="contained"
            my={2}
            className="shadow-btn checkout-btn"
          >
            Check Out
          </Button>
        </Paper>
      </Grid>
      {/* <SubscriptionPanel /> */}
    </Container>
  );
};

export default UserEventCardDetails;
