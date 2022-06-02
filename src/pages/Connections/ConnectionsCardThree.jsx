import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Box,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import * as React from "react";
import ConnectionsBackImg from "../../assets/images/ConnectionsBackImg.png";
import ConnectionsProfileImg from "../../assets/images/ConnectionsProfileImg.png";
import DIMail from "../../assets/images/DIMail.png";
import DIPhone from "../../assets/images/DIPhone.png";
import DILocation from "../../assets/images/DILocation.png";
import "./Connections.css";

export default function ConnectionsCardThree() {
  const connectionsDetails = {
    full_name: "Maria Tinoco",
    position: "Web Developer",
    mail: "maria@gmail.com",
    phone: "0987654123",
    location: "CA-LOS ANGELES",
  };
  return (
    <Card sx={{ maxWidth: "314px", borderRadius: "20px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ConnectionsBackImg}
        position="relative"
      ></CardMedia>
      <CardMedia
        className="profile-image"
        component="img"
        alt="green iguana"
        width="49%"
        height="22%"
        image={ConnectionsProfileImg}
      ></CardMedia>
      <CardContent>
        <Box sx={{ mx: 2 }}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <Typography
              component="p"
              fontSize={"20px"}
              fontWeight={"600"}
              marginBottom={"6px"}
            >
              {connectionsDetails.full_name}
            </Typography>
          </Paper>
          <Paper sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              component="p"
              fontSize={"13px"}
              fontWeight={"400"}
              marginBottom={"30px"}
            >
              {connectionsDetails.position}
            </Typography>
          </Paper>
          <Box>
            <Paper sx={{ display: "flex", marginBottom: "20px" }}>
              <IconButton sx={{ padding: "0px", marginRight: "10px" }}>
                <img src={DIMail} alt="di-mail" />
              </IconButton>
              <Typography component="p" fontSize={"13px"} fontWeight={"400"}>
                {connectionsDetails.mail}
              </Typography>
            </Paper>
            <Paper sx={{ display: "flex", marginBottom: "20px" }}>
              <IconButton sx={{ padding: "0px", marginRight: "10px" }}>
                <img src={DIPhone} alt="di-phone" />
              </IconButton>
              <Typography component="p" fontSize={"13px"} fontWeight={"400"}>
                {connectionsDetails.phone}
              </Typography>
            </Paper>
            <Paper sx={{ display: "flex", marginBottom: "20px" }}>
              <IconButton sx={{ padding: "0px", marginRight: "10px" }}>
                <img src={DILocation} alt="di-location" />
              </IconButton>
              <Typography component="p" fontSize={"13px"} fontWeight={"400"}>
                {connectionsDetails.location}
              </Typography>
            </Paper>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button size="small" variant="outlined">
          Disconnect
        </Button>
      </CardActions>
    </Card>
  );
}
