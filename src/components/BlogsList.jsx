import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import EventPhoto from "./../assets/images/EventPhoto.png";
import AvatarImg from "./../assets/images/avatar-img.png";
import AvatarLargeImg from "./../assets/images/avatar-large.png";
import BlogImg from "./../assets/images/blog-lg-image.png";
// import AuthorIcon from "../assets/images/author.png";
import { useNavigate } from "react-router-dom";
import "../pages/Home/Home.css";
import axios from "axios";
import { Box } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BlogsCard from "../pages/BlogsListing/NewBlogsPageCard";

const BlogsList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("blog/")
      .then((response) => {
        console.log(response.data.data);
        setBlogs(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const showBlogDetails = (blogID) => {
    navigate(`/blogs/${blogID}`);
  };

  return (
    <Container maxWidth="xl" sx={{ my: 9 }}>
      <Grid
        container
        justifyContent={"space-between"}
        className="blogs-container"
        spacing={3}
      >
        <Grid xs={12} lg={7} xl={7} item>
          <Card className="blog-column-card blog-main-card">
            <CardContent
              sx={{
                paddingTop: 0,
              }}
            >
              <Grid container spacing={3}>
                <Grid xs={12} item>
                  <img src={BlogImg} alt="" className="w-100" />
                </Grid>
                <Grid xs={12} item>
                  <Box
                    mb={3}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Avatar>
                      <img src={AvatarLargeImg} alt="" />
                    </Avatar>
                    <Box
                      sx={{
                        width: "100%",
                        paddingLeft: "15px",
                      }}
                    >
                      <Grid container spacing={3}>
                        <Grid xs={12} sm={6} item>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                            }}
                          >
                            <ListItemText
                              primary="Robert Smith"
                              secondary="12.4k Followers"
                            />
                            <Chip
                              label="Follow"
                              variant="outlined"
                              sx={{
                                border: "1px solid",
                                color: "#989898",
                                borderRadius: "4px",
                                padding: "1px 5px",
                                fontSize: "12px",
                                height: "28px",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Grid xs={12} sm={6} item>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              marginTop: "10px",
                              flexWrap: "wrap",
                              alignItems: "center",
                              justifyContent: "flex-end",
                            }}
                          >
                            <CalendarMonthIcon className="date-icon" />
                            <Typography
                              variant="p"
                              sx={{
                                fontSize: "16px",
                                color: "#767676",
                                margin: "2px 0 1px",
                              }}
                            >
                              November 17, 2021
                            </Typography>
                            <Typography
                              variant="p"
                              sx={{
                                fontSize: "16px",
                                color: "#767676",
                                margin: "2px 0 1px 28px",
                                display: "list-item !important",
                              }}
                            >
                              30 min read
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#000",
                      margin: "8px 0",
                    }}
                  >
                    Why Our Events are getting this much of success
                  </Typography>
                  <Typography
                    variant="span"
                    sx={{
                      color: "#4E4E4E",
                      margin: "15px 0",
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowRightAltIcon />}
                    sx={{
                      padding: "0",
                    }}
                    onClick={() => showBlogDetails()}
                  >
                    Read More
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={12} lg={5} xl={5} item>
          {/* {blogs.map((post, index) => {
            return (
              <Grid key={index} sx={{ my: 2 }}>
                <EventCard
                  id={post.id}
                  image={EventPhoto}
                  date={post.date}
                  time={post.time}
                  title={post.title}
                  action={post.actionLabel}
                  author={post.author}
                  handleNext={showBlogDetails}
                />
              </Grid>
            );
          })} */}
          <Box className="blog-scroller">
            {blogs.map((blog) => {
              const navigationLink = `/blogs/${blog.id}`;
              console.log(blog);
              return (
                <BlogsCard
                  id={blog.id}
                  EventPhoto={blog.banner}
                  title={blog.title}
                  navigationLink={navigationLink}
                />
              );
            })}
            {/* <BlogsCard />
            <BlogsCard />
            <BlogsCard />
            <BlogsCard /> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogsList;
