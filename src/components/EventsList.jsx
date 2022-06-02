import React, { useEffect, useState } from "react";
import { LocationOn } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Pagination,
  Paper,
} from "@mui/material";
import EventPhoto from "./../assets/images/EventPhoto.png";
import EventCard from "./EventCard";
import "../pages/Home/Home.css";
import axios from "axios";

const EventsList = ({ navigationPath }) => {
  const [events, setEvents] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get(`event/`)
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          setEvents(response.data.data);
          setCount(response.data.count);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handlePagination = (e) => {
    axios
      .get(`/event/?page=${e.target.innerText}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          setEvents(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  };

  // const events = [
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  //   {
  //     image: EventPhoto,
  //     date: "November 17, 2021",
  //     time: "06 PM - 08 PM EST",
  //     title: "Network After Work Houston",
  //     action: "Get Tickets",
  //   },
  // ];

  return (
    <Container disableGutters>
      <Grid container justifyContent={"space-between"} mb={3}>
        <Paper
          className="event-search"
          component="form"
          elevation={1}
          sx={{
            p: "8px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "10px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <LocationOn />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by City and State"
            inputProps={{ "aria-label": "Search by City and State" }}
          />
        </Paper>
        <Paper
          className="event-search"
          component="form"
          elevation={1}
          sx={{
            p: "8px",
            display: "flex",
            alignItems: "center",
            width: 400,
            borderRadius: "10px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <LocationOn />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by City and State"
            inputProps={{ "aria-label": "Search by City and State" }}
          />
        </Paper>
        <Button variant="contained">Search</Button>
        <Button variant="outlined">Reset</Button>
      </Grid>
      <Grid className="event-card" container justifyContent={"space-between"}>
        {events.map((event) => {
          return (
            <Grid key={event.id} sx={{ my: 2 }}>
              <EventCard
                // image={event.banner}
                image={/* event.banner || */ EventPhoto}
                date={event.event_date}
                time={event.event_time}
                link={event.event_link}
                title={event.name}
                action="Get Tickets"
                id={event.id}
                description={event.description}
                handleNext={(id) => id}
                navigationPath={navigationPath}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent={"center"} my={3}>
        <Pagination
          count={Math.ceil(count / 10)}
          variant="outlined"
          color="primary"
          size={"large"}
          onChange={(e) => handlePagination(e)}
        />
      </Grid>
    </Container>
  );
};

export default EventsList;
