import * as React from "react";
import HeroSection from "../../components/HeroSection";
import SubscriptionPanel from "../../components/SubscriptionPanel";
import ProductsHeroImage from "../../assets/images/ProductsHeroImage.png";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DedicatedEmail from "./../../assets/images/DedicatedEmail.png";
import SponseredNewletter from "./../../assets/images/SponseredNewletter.png";
import CoRegistration from "./../../assets/images/CoRegistration.png";
import LinkedIn from "./../../assets/images/LinkedIn.png";
import WebinarEvents from "./../../assets/images/WebinarEvents.png";
import MeetupGroups from "./../../assets/images/MeetupGroups.png";
import BannerAd from "./../../assets/images/BannerAd.png";
import JobTitleHisto from "./../../assets/images/JobTitleHisto.png";
import CompanyHisto from "./../../assets/images/CompanyHisto.png";
import IndustryPieBlue from "./../../assets/images/IndustryPieBlue.png";
import ArrowForward from "@mui/icons-material/ArrowForward";
import "../Home/Home.css";

export default function Products() {
  const compititions = [
    {
      image: DedicatedEmail,
      text: "Dedicated email marketing starting at",
      bottomHead: "$30 per thousand emails",
    },
    {
      image: BannerAd,
      text: "Banner advertisement on newsletter starting",
      bottomHead: "at $5 per thousand impressions",
    },
    {
      image: SponseredNewletter,
      text: "Sponsored newsletterstarting at",
      bottomHead: "$2 per thousand emails sent",
    },
    {
      image: CoRegistration,
      text: "Co-registration-starting at",
      bottomHead: "$10 per lead",
    },
    {
      image: LinkedIn,
      text: "LinkedIn direct messaging-starting at",
      bottomHead: "$500 per $5,000 messages",
    },
    {
      image: WebinarEvents,
      text: "Webinar/event attendees-starting at",
      bottomHead: "$15 per attendee",
    },
    {
      image: MeetupGroups,
      text: "Post your event to 100+ meetup groups-starting at",
      bottomHead: "$1,00 per event",
    },
  ];
  const sections = [
    {
      title: "Partnership In Getting Results",
      text: "We work with you to increase revenue through leveraging our entire network with evidence-based, targeted marketing outreach. We share your marketing messaging and event information to a targeted group of professionals.",
    },
    {
      title: "Expand Your Exposure",
      text: "By tapping into our exclusive network, you can galvanize the interest of a huge network of professionals.",
    },
    {
      title: "Deep Loyality",
      text: "We help you better segment and target member. Your message will resonate with these members resulting in increased sales and revenue.",
    },
  ];
  return (
    <>
      <HeroSection
        heading="Find An Audience For Your Event, Program OrCourses."
        para="Achieve your marketing and sales goals by targeting a specific and exclusive group of professionals all over the United States. You will see a rapid return on your investment through a growth in consumers and sales. We can connect you to senior executives, senior and middle managers. Leadersand decision makers in the finance, health care, media, hospitality, IT, marketing, insurance, and retail industries. Our network includes small, large, and mid-sized companies."
        ctaLabel="Get Started"
        heroImage={ProductsHeroImage}
        heroImageStyle={{ paddingBottom: "20px" }}
        background={{
          background:
            "linear-gradient(11.76deg, rgba(30, 112, 161, 0.45) -15.24%, #96BCD3 -15.24%, rgba(150, 188, 211, 0.08) 34.74%, rgba(255, 255, 255, 0.19) 78.85%)",
        }}
      />
      <Container sx={{ my: 10 }}>
        <Grid container direction={"column"} justifyContent={"center"}>
          <Typography
            component={"h2"}
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "600",
            }}
          >
            Value For Money Based On A Minimum Investment
          </Typography>
        </Grid>
        <Grid container my={5} justifyContent={"center"}>
          {compititions.map((card, index) => {
            return (
              <Card
                variant="outlined"
                sx={{
                  maxWidth: 256,
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  padding: "55px 10px",
                  m: 2.5,
                  borderColor: "#3874FF",
                  boxShadow:
                    "-5px -5px 50px rgba(56, 116, 255, 0.2), 5px 5px 50px rgba(56, 116, 255, 0.2)",
                }}
                key={index}
                className="products-competators-cards"
              >
                <CardMedia
                  component="img"
                  image={card.image}
                  alt="green iguana"
                  sx={{ maxWidth: "80px", height: "80px", margin: "0 auto" }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    mt={2}
                    sx={{ fontSize: "16px", lineHeight: "26px" }}
                  >
                    {card.text}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    mt={2}
                    sx={{
                      fontSize: "16px",
                      lineHeight: "26px",
                      fontWeight: "600",
                    }}
                  >
                    {card.bottomHead}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>
      </Container>
      <div style={{ background: "#F4FBFF", padding: "35px 0" }}>
        <Container sx={{ my: 7.5 }}>
          <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            item
            sx={{ mt: 8 }}
          >
            {sections.map((section, index) => {
              return (
                <Grid
                  container
                  display={"flex"}
                  direction="column"
                  justifyContent="space-between"
                  alignItems={"center"}
                  textAlign="center"
                  key={index}
                  item
                  sx={{ width: "320px", m: "25px" }}
                  className="products-section-cards"
                >
                  <Typography component="h1" variant="h" my={2}>
                    {section.title}
                  </Typography>
                  <Typography component="p" my={2}>
                    {section.text}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth={false}
                    sx={{ width: "fit-content", my: 2 }}
                  >
                    Get Started
                    <ArrowForward />
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
      <Container disableGutters sx={{ pt: 8 }} className="products-job">
        <Grid container direction={"column"} justifyContent={"center"}>
          <Typography
            component={"h2"}
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "600",
            }}
          >
            Job Title
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          height="inherit"
          justifyContent={"space-between"}
          my={10}
        >
          <Grid width="50%" item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              height="100%"
            >
              <Typography component="h1" variant="h" my={1}>
                Partnership In Getting Results
              </Typography>
              <Typography component="p" my={1}>
                We work with you to increase revenue through leveraging our
                entire network with evidence-based, targeted marketing outreach.
                We share your marketing messaging and event information to a
                targeted group of professionals.
              </Typography>
              <Button
                variant="contained"
                fullWidth={false}
                sx={{ width: "fit-content", my: 1.5 }}
              >
                Get Started
                <ArrowForward />
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <img src={JobTitleHisto} alt="hero" />
          </Grid>
        </Grid>
      </Container>
      <Container disableGutters sx={{ pt: 8 }} className="products-job">
        <Grid container direction={"column"} justifyContent={"center"}>
          <Typography
            component={"h2"}
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "600",
            }}
          >
            Company Size
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          height="inherit"
          justifyContent={"space-between"}
          my={10}
        >
          <Grid item>
            <img src={CompanyHisto} alt="hero" />
          </Grid>
          <Grid width="50%" item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              height="100%"
            >
              <Typography component="h1" variant="h" my={1}>
                Expand Your Exposure
              </Typography>
              <Typography component="p" my={1}>
                By tapping into our exclusive network, you can galvanize the
                interest of a huge network of professionals.
              </Typography>
              <Button
                variant="contained"
                fullWidth={false}
                sx={{ width: "fit-content", my: 1.5 }}
              >
                Get Started
                <ArrowForward />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container disableGutters sx={{ pt: 8 }} className="products-job">
        <Grid container direction={"column"} justifyContent={"center"}>
          <Typography
            component={"h2"}
            variant="h4"
            sx={{
              textAlign: "center",
              fontSize: "40px",
              lineHeight: "48px",
              fontWeight: "600",
            }}
          >
            Industry
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          height="inherit"
          justifyContent={"space-between"}
          my={10}
        >
          <Grid width="50%" item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              height="100%"
            >
              <Typography component="h1" variant="h" my={1}>
                Deep Loyality
              </Typography>
              <Typography component="p" my={1}>
                We help you better segment and target member. Your message will
                resonate with these members resulting in increased sales and
                revenue.
              </Typography>
              <Button
                variant="contained"
                fullWidth={false}
                sx={{ width: "fit-content", my: 1.5 }}
              >
                Get Started
                <ArrowForward />
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <img src={IndustryPieBlue} alt="hero" />
          </Grid>
        </Grid>
      </Container>
      <SubscriptionPanel />
    </>
  );
}
