import * as React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import EventPhoto from "../../assets/images/EventPhoto.png";
import vnIconOne from "../../assets/images/vn-icon2.png";

export default function VirtualNetworking() {
  return (
    <Container>
      <Typography
        variant="p"
        fontFamily={"PlayfairDisplayMedium"}
        fontSize={"40px"}
        fontWeight={"900"}
        marginBottom={"15px"}
      >
        Network After Work Virtual Networking
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={7}>
          <img src={EventPhoto} alt="vn-img" width="100%" height="100%"></img>
        </Grid>
        <Grid item xs={5}>
          <Box
            sx={{ display: "flex", marginBottom: "30px", marginLeft: "40px" }}
          >
            <img src={vnIconOne} alt="vn-icon2"></img>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"30px"}
            >
              04 January 2022
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", marginBottom: "30px", marginLeft: "40px" }}
          >
            <img src={vnIconOne} alt="vn-icon2"></img>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"30px"}
            >
              06 PM to 07 PM EST
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", marginBottom: "30px", marginLeft: "40px" }}
          >
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"20px"}
              fontWeight={"600"}
            >
              Network After Work Houston
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", marginBottom: "30px", marginLeft: "40px" }}
          >
            <img src={vnIconOne} alt="vn-icon2"></img>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"15px"}
            >
              Number of people who are attending the event
            </Typography>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"20px"}
            >
              5000
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", marginBottom: "30px", marginLeft: "40px" }}
          >
            <img src={vnIconOne} alt="vn-icon2"></img>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"15px"}
            >
              Number of people who have viewed the event
            </Typography>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"30px"}
            >
              15000
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", marginBottom: "30px", marginLeft: "40px" }}
          >
            <img src={vnIconOne} alt="vn-icon2"></img>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"15px"}
            >
              Number of people who are not attending the event
            </Typography>
            <Typography
              variant="p"
              fontFamily={"PlayfairDisplayMedium"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"#757575"}
              marginLeft={"30px"}
            >
              2000
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={7}>
          <Typography
            variant="p"
            fontFamily={"PlayfairDisplayMedium"}
            fontSize={"30px"}
            fontWeight={"900"}
            marginBottom={"15px"}
          >
            Network After Work Virtual Networking
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ width: "90%", marginLeft: "40px" }}>
            <Button
              sx={{
                width: "100%",
                borderRadius: "10px",
                backgroundColor: "#3874FF",
                color: "white",
              }}
            >
              Register Now
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Typography
            variant="p"
            marginBottom={"15px"}
            fontSize={"20px"}
            fontWeight={"400"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            donec eget sed suspendisse ut maecenas facilisi sollicitudin.
            Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat.
            Sit diam gravida diam sit arcu.
          </Typography>
          <br></br>
          <Typography variant="p" fontSize={"20px"} fontWeight={"400"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            donec eget sed suspendisse ut maecenas facilisi sollicitudin.
            Egestas dolor sed magna nec, tortor. Quis risus sed nunc, feugiat.
            Sit diam gravida diam sit arcu.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
