import {
  Card,
  Container,
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import * as React from "react";
import EventPhoto from "../../assets/images/EventPhoto.png";
import Author from "../../assets/images/author.png";
import BlogsArrowButton from "../../assets/images/BlogsArrowButton.png";
import "./Blogs.css";

export default function NewBlogsPageCard() {
  return (
    <Container disableGutters>
      <Card
        sx={{
          marginBottom: "20px",
          border: "1px solid #C5C5C5",
          padding: "20px",
          display: "flex",
        }}
      >
        <Box>
          <img src={EventPhoto} alt="eventphoto" width="230px" height="150px" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", marginLeft: "10px" }}>
            <img src={Author} width="48px" height="48px" alt="author" />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex" }}>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <Typography variant={"p"} fontSize={"16px"} color={"#353535"}>
                    Bill Smith
                  </Typography>
                </Paper>
                <Paper>
                  <Button
                    className="button-follow"
                    sx={{
                      fontSize: "10px",
                      color: "#989898",
                      borderRadius: "4px",
                      border: "1px solid #989898",
                      marginLeft: "10px",
                    }}
                  >
                    Follow
                  </Button>
                </Paper>
              </Box>
              <Box sx={{ marginLeft: "10px" }}>
                <Typography variant={"p"} fontSize={"14px"} color={"#989898"}>
                  9650 Followers
                </Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Paper>
                  <Typography variant={"p"} fontSize={"11px"} color={"#989898"}>
                    October 17, 2021
                  </Typography>
                </Paper>
                <Typography variant={"p"} fontSize={"11px"} color={"#989898"}>
                  10 min read
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <Typography variant={"p"} fontSize={"14px"} color={"#"}>
              Secret behind success
            </Typography>
            <Button
              className="button-readmore"
              sx={{ paddingLeft: "0px", fontSize: "14px", color: "#3670f8" }}
            >
              Read more
              <IconButton paddingLeft="0px">
                <img src={BlogsArrowButton} alt="di-mail" />
              </IconButton>
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
