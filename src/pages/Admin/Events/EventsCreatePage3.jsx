import React, { useEffect, useState } from "react";
import "../Events/events.css";
import axios from "axios";
import { /* Container, */ Grid } from "@mui/material";
import EventCard from "../../../components/EventCard";
import EventPhoto from "../../../assets/images/EventPhoto.png";

const Index = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("event/?type=free")
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          setEvents(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="admin-users">
      <div className="header-title">Paid Events of $199 Membership</div>
      <Grid
        width={"100%"}
        container
        justifyContent={"space-evenly"}
        // className="blogs-container"
      >
        {events && events.length
          ? events.map((item) => (
              <Grid key={item.id} sx={{ mt: 8, mb: 2, mx: 1 }}>
                <EventCard
                  // image={item.banner}
                  image={EventPhoto}
                  date={item.event_date}
                  time={item.event_time}
                  title={item.name}
                  action={"Get Tickets"}
                  link={item.event_link}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </div>
  );
};

export default Index;
