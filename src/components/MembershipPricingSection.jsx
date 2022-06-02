import { /* Container, */ Grid, Typography } from "@mui/material";
import * as React from "react";
import MembershipCard from "./MembershipCard";
import propTypes from "prop-types";
// import BlogPost from "./../assets/images/BlogPost.png";

export default function MembershipPricingSection(props) {
  // const blogPosts = [
  //   {
  //     image: BlogPost,
  //     price: "Free",
  //     planName: "",
  //     frequency: "",
  //     features: [
  //       { label: "All Live Events", available: false },
  //       { label: "Guests Lists for events", available: false },
  //       { label: "Get Notifications", available: false },
  //       { label: "Get Data of Buying anf Selling", available: false },
  //       { label: "Access to More Lcations", available: false },
  //     ],
  //   },
  //   {
  //     image: BlogPost,
  //     planName: "All Rounder",
  //     price: "$199",
  //     frequency: "per year",
  //     features: [
  //       { label: "All Live Events", available: true },
  //       { label: "Guests Lists for events", available: true },
  //       { label: "Get Notifications", available: true },
  //       { label: "Get Data of Buying anf Selling", available: true },
  //       { label: "Access to More Lcations", available: true },
  //     ],
  //     extraCss: {
  //       color: "#fff",
  //       background: "#3874FF",
  //       position: "relative",
  //       top: "-40px",
  //     },
  //   },
  //   {
  //     image: BlogPost,
  //     planName: "",
  //     price: "$39",
  //     frequency: "per year",
  //     features: [
  //       { label: "All Live Events", available: true },
  //       { label: "Guests Lists for events", available: false },
  //       { label: "Get Notifications", available: false },
  //       { label: "Get Data of Buying anf Selling", available: false },
  //       { label: "Access to More Lcations", available: false },
  //     ],
  //   },
  // ];
  return (
    <div style={{ padding: "35px 0" }}>
      {/* <Container sx={{ my: 7.5 }} disableGutters> */}
      <Grid container direction={"column"} justifyContent={"center"}>
        <Grid item>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: "600",
            }}
            color={"primary"}
          >
            Pricing
          </Typography>
          <Typography
            component={"h2"}
            variant="h4"
            sx={{
              textAlign: "left",
              fontSize: "36px",
              lineHeight: "52px",
              fontWeight: "600",
            }}
          >
            Membership
          </Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          justifyContent={"space-evenly"}
          item
          sx={{ mt: 8 }}
        >
          {props.membershipData.map((post, index) => (
            <MembershipCard
              key={index}
              title={post.title}
              description={post.description}
              planName={post.planName}
              price={post.price}
              frequency={post.frequency}
              features={post.features}
              extraCardCss={post.extraCss}
            />
          ))}
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
}

MembershipPricingSection.propTypes = {
  membershipData: propTypes.array,
};
