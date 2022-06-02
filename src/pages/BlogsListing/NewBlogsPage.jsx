import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  IconButton,
  Paper,
} from "@mui/material";
import * as React from "react";
import EventPhoto from "../../assets/images/EventPhoto.png";
import BlogsArrowButton from "../../assets/images/BlogsArrowButton.png";
import NewBlogsPageCard from "./NewBlogsPageCard";
import Author from "../../assets/images/author.png";

export default function NewBlogsPage() {
  return (
    <Container disableGutters sx={{ my: 9 }}>
      <Grid container spacing={4} justifyContent={"space-between"}>
        <Grid item xs={12} sm={6} md={7}>
          <Box sx={{ margin: "0 auto" }}>
            <img src={EventPhoto} alt="eventphoto" width="100%" />
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              padding: "30px 0px",
            }}
          >
            <Box sx={{ display: "flex" }}>
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
                    <Typography
                      variant={"p"}
                      fontSize={"16px"}
                      color={"#353535"}
                    >
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
              </Box>
            </Box>
            <Box>
              <Typography variant="p" fontSize={"16px"} color="#959595">
                November 17, 2021 . 30 mins read
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <Typography
              variant="p"
              fontSize={"28px"}
              fontWeight={"700"}
              marginTop={"40px"}
              marginBottom={"25px"}
            >
              Why our events are getting this much of success
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="p">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word
            </Typography>
          </Box>
          <Box>
            <Button sx={{ paddingLeft: "0px" }}>
              Read more
              <IconButton paddingLeft="0px">
                <img src={BlogsArrowButton} alt="di-mail" />
              </IconButton>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <NewBlogsPageCard></NewBlogsPageCard>
          <NewBlogsPageCard sx={{ my: 9 }}></NewBlogsPageCard>
          <NewBlogsPageCard sx={{ my: 9 }}></NewBlogsPageCard>
          <NewBlogsPageCard sx={{ my: 9 }}></NewBlogsPageCard>
        </Grid>
      </Grid>
    </Container>
  );
}
