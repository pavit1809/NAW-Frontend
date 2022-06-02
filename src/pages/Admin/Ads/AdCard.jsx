import { Box, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import { ArrowForward } from "@mui/icons-material";
import EventPhoto from "../../../assets/images/EventPhoto.png";
import UsersImage from "../../../assets/images/blog-inner-img.png";

const AdCard = ({ userData, data }) => {
  const { title, duration, description, id } = data;
  return (
    <Card className="cus-blog-card" sx={{ maxWidth: 345 }} xs={12}>
      <CardMedia component="img" image={EventPhoto} alt="green iguana" />
      <CardContent>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid
            className="blog-innner"
            item
            sx={{
              display: "flex",
              fontSize: "12px",
              flexDirection: "column",
              lineHeight: "26px",
              color: "#9A9A9A",
            }}
          >
            <span style={{}}>Ad Title</span>
            <p>{title}</p>
          </Grid>
          <Grid
            className="blog-innner"
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "12px",
              lineHeight: "26px",
              color: "#9A9A9A",
            }}
          >
            <span style={{}}>Ad Duration</span>
            {/* <p>{duration}</p> */}
            <p>30 sec</p>
          </Grid>
        </Grid>
        <Grid className="blog-innner">
          <span style={{}}>Ad Description</span>
          <p style={{ maxHeight: 50, overflow: "hidden" }}>{description}</p>
        </Grid>
        <Grid
          className="people-view"
          style={{
            margin: "10px 0 0",
          }}
        >
          <span>People viewd this ad</span>
          <div>
            <img src={UsersImage} alt="" />
          </div>
        </Grid>
        <Box
          sx={{ display: "flex", alignItems: "center", fontSize: "16px" }}
          style={{
            margin: "20px 0 0",
          }}
        >
          <Button
            component="a"
            underline="none"
            sx={{ color: "#3874FF !important", pl: "0 !important" }}
            onClick={() => userData(id)}
            endIcon={<ArrowForward sx={{ color: "#3874FF !important" }} />}
          >
            View User Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AdCard;
