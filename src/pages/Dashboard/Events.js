import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventCard from "./../../components/EventCard";
import EventPhoto from "./../../assets/images/EventPhoto.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SlickPrevArrow,
  SlickNextArrow,
} from "./../../components/SlickPrevArrow";
import { PropTypes } from "prop-types";
import { styled } from "@mui/material/styles";
import axios from "axios";

const SliderContainer = styled("div")(({ theme }) => ({
  width: "100%",
  background: theme.palette.background.dashboard,
  margin: theme.spacing(7.5, 0),
  "& .MuiCard-root": {
    boxShadow: "unset",
  },
}));

Events.propTypes = {
  showPrevArrow: PropTypes.bool,
};

export default function Events() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "-150px",
    prevArrow: <SlickPrevArrow customStyles={{ left: "-35px" }} />,
    nextArrow: <SlickNextArrow customStyles={{ right: "-25px" }} />,
  };

  const [events, setEvents] = useState([]);
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
  // ];

  useEffect(() => {
    axios
      .get("event/")
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setEvents(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SliderContainer>
      <Slider {...settings}>
        {events.map((event, index) => {
          return (
            <Grid key={index} sx={{ mt: 8, mb: 2, mx: 1 }}>
              <EventCard
                image={/* event.banner || */ EventPhoto}
                date={event.event_date}
                time={event.event_time}
                link={event.event_link}
                title={event.name}
                action="Get Tickets"
                description={event.description}
                handleNext={(id) => id}
              />
            </Grid>
          );
        })}
      </Slider>
    </SliderContainer>
  );
}
