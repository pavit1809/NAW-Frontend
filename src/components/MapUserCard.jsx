import * as React from "react";
import {
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import DIOne from "../assets/images/DIOne.png";

const MapUserCard = () => {
  return (
    <Card sx={{ maxWidth: "200px", maxHeight: "400px", borderRadius: "20px" }}>
      <CardHeader
        sx={{ display: "flex", flexDirection: "column" }}
        avatar={
          <Avatar aria-label="receipe" borderRadius={"0px"}>
            <img src={DIOne} alt="di-one" />
          </Avatar>
        }
        title={<Typography variant="p">Maria Tinoco</Typography>}
      />
      <CardContent>
        <Box sx={{ mx: 2 }}>
          <Typography
            component="p"
            fontSize={"12px"}
            fontWeight={"300"}
            marginTop={"8px"}
          >
            interested industry
          </Typography>
          <Typography component="p" fontSize={"16px"} fontWeight={"500"}>
            Health, Wellness and Fitness
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small" variant="outlined" fontSize="14px">
          Get more info
        </Button>
        <Button variant="contained" fontSize="14px">
          Connect
        </Button>
      </CardActions>
    </Card>
  );
};

export default MapUserCard;
