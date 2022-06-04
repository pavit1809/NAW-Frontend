import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import SubscriptionPanel from "../../components/SubscriptionPanel";
import EventsListingHeroImage from "../../assets/images/EventsListingHeroImage.jpg";
import { Container, Grid, Typography } from "@mui/material";
import VirtualSummit from "../../components/VirtualSummit";
import EventsList from "../../components/EventsList";

export default function EventsListing() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            console.log(result.state);
            //If granted then you can directly call your function here
          } else if (result.state === "prompt") {
            console.log(result.state);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
          result.onchange = function () {
            console.log(result.state);
          };
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);

  return (
    <>
      <HeroSection
        heading="Upcoming Events"
        para="Build connections one handshake at a time 95% say face to face meetings are essential for long-term business relationships."
        ctaLabel="Get Started"
        heroImage={EventsListingHeroImage}
        heroImageStyle={{ paddingBottom: "20px" }}
        background={{
          background:
            "linear-gradient(311.76deg, rgba(30, 112, 161, 0.45) -15.24%, #96BCD3 -15.24%, rgba(150, 188, 211, 0.08) 34.74%, rgba(255, 255, 255, 0.19) 78.85%)",
        }}
      />
      <Container sx={{ my: 7.5 }}>
        <Grid container direction={"column"} justifyContent={"center"}>
          <Grid item>
            <Typography
              component={"h2"}
              variant="h4"
              sx={{
                textAlign: "center",
                fontSize: "48px",
                lineHeight: "64px",
                fontWeight: "600",
              }}
            >
              Become Unstoppable : How To Achieve Your Goals &amp; Dreams In
              2022
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <VirtualSummit />
      <EventsList />
      <SubscriptionPanel />
    </>
  );
}
