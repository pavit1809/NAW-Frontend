import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import "../../assets/styles/common.css";
import AvatarImg from "./../../assets/images/avatar-img.png";
import PostImg from "./../../assets/images/post-img.png";
import FeMaleAvatarImg from "./../../assets/images/avatar-img-2.png";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ImageIcon from "@mui/icons-material/Image";
import CommentIcon from "@mui/icons-material/Comment";
import ReplyIcon from "@mui/icons-material/Reply";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { Box } from "@mui/system";

const EventRegistrations = () => {
  const [expanded, setExpanded] = useState("false");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container className="container-xl">
      <Grid container spacing={3} justifyContent="space-between">
        <Grid xs={12} lg={8} xl={10} item>
          <Typography variant="h2" className="section-title mt-0 text-darkblue">
            Thank You for regestration! Here is the event community
          </Typography>
        </Grid>
        <Grid xs={12} md={8} lg={8} xl={8} item>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
              fontSize: "20px !important",
            }}
          >
            Introduce Yourself
          </Typography>
          <Card className="post-control-cards">
            <Box sx={{ display: "flex", p: "17px 20px" }}>
              <Avatar>
                <img src={AvatarImg} alt="" />
              </Avatar>
              <CardContent sx={{ p: 0, m: 0 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  placeholder="Title"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  placeholder="Enter text here..."
                  multiline
                  rows={2}
                />
              </CardContent>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "17px 20px",
                borderTop: "1px solid #F5F5F5",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    color: "#D8D8D8",
                  }}
                  aria-label="Image"
                >
                  <ImageIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#D8D8D8",
                  }}
                  aria-label="video"
                >
                  <PlayCircleIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#D8D8D8",
                  }}
                  aria-label="location"
                >
                  <LocationOnIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "#D8D8D8",
                  }}
                  aria-label="menu"
                >
                  <MoreHorizIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{
                    color: "#D8D8D8",
                    mr: 1,
                  }}
                  aria-label="emoji"
                >
                  <EmojiEmotionsOutlinedIcon />
                </IconButton>
                <Button
                  variant="contained"
                  my={2}
                  sx={{
                    p: "13px 30px",
                    borderRadius: "7px",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Post
                </Button>
              </Box>
            </Box>
          </Card>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
              fontSize: "20px !important",
            }}
          >
            Social Feed
          </Typography>
          <Card className="post-control-cards">
            <Box sx={{ display: "flex", p: "17px 20px" }}>
              <Avatar>
                <img src={AvatarImg} alt="" />
              </Avatar>
              <CardContent sx={{ p: 0, m: 0 }}>
                <Typography
                  variant="h6"
                  className="f500"
                  sx={{
                    color: "#353535",
                    fontSize: "18px !important",
                    fontWeight: "700",
                  }}
                >
                  Goldi
                </Typography>
                <Typography
                  variant="p"
                  className="title-sm f500"
                  sx={{
                    color: "#535353",
                  }}
                >
                  10 min ago
                </Typography>
              </CardContent>
            </Box>
            <Box
              sx={{
                p: "17px 20px",
                borderTop: "1px solid #F5F5F5",
              }}
            >
              <Typography
                variant="p"
                className="title-sm f500"
                sx={{
                  color: "#535353",
                  mb: 1,
                }}
              >
                New course uploaded collapse of the online-advertising market in
                2001 made marketing on the Internet seem even less compelling.
                Website usability, press releases.
              </Typography>
              <Box sx={{ marginTop: "30px" }}>
                <img src={PostImg} alt="" className="w-100" />
                <Box
                  sx={{
                    p: "17px 20px",
                    border: "1px solid #F5F5F5",
                  }}
                >
                  <Typography
                    variant="p"
                    className="title-sm f500"
                    sx={{
                      color: "#202020",
                      mb: 1,
                    }}
                  >
                    Make Money Online Through Advertising
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      p: "17px 0px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="p"
                      className="title-sm f500"
                      sx={{
                        color: "#535353",
                        mb: 1,
                        maxWidth: 600,
                      }}
                    >
                      It is probably the dream of any amateur astronomer to be
                      able to be the boss of one of the great multi million
                      dollar telescopes even if it was just.
                    </Typography>
                    <Button
                      variant="contained"
                      my={2}
                      sx={{
                        p: "13px 30px",
                        borderRadius: "7px",
                        fontWeight: 500,
                        fontSize: "14px",
                        maxHeight: 40,
                      }}
                    >
                      Enroll
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "17px 20px",
                borderTop: "1px solid #F5F5F5",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="card-control"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#D8D8D8",
                    }}
                    aria-label="favourite"
                  >
                    <FavoriteIcon
                      sx={
                        {
                          // fontSize: "26px",
                        }
                      }
                    />
                  </IconButton>
                  <Typography
                    variant="contained"
                    my={2}
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#D8D8D8",
                      marginRight: "24px",
                    }}
                  >
                    Like 30
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#D8D8D8",
                    }}
                    aria-label="comment"
                  >
                    <CommentIcon
                      sx={
                        {
                          // fontSize: "26px",
                        }
                      }
                    />
                  </IconButton>
                  <Typography
                    variant="contained"
                    my={2}
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#D8D8D8",
                      marginRight: "24px",
                    }}
                  >
                    Comment
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#D8D8D8",
                    }}
                    aria-label="reply"
                  >
                    <ReplyIcon
                      sx={{
                        transform: "scaleX(-1)",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="contained"
                    my={2}
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#D8D8D8",
                      marginRight: "24px",
                    }}
                  >
                    34
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="contained"
                  my={2}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#D8D8D8",
                  }}
                >
                  Reply
                </Typography>
              </Box>
            </Box>
          </Card>
          <Card className="post-control-cards">
            <Box sx={{ display: "flex", p: "17px 20px" }}>
              <Avatar>
                <img src={AvatarImg} alt="" />
              </Avatar>
              <CardContent sx={{ p: 0, m: 0 }}>
                <Typography
                  variant="h6"
                  className="f500"
                  sx={{
                    color: "#353535",
                    fontSize: "18px !important",
                    fontWeight: "700",
                  }}
                >
                  Martin
                </Typography>
                <Typography
                  variant="p"
                  className="title-sm f500"
                  sx={{
                    color: "#535353",
                  }}
                >
                  Just now
                </Typography>
              </CardContent>
            </Box>
            <Box sx={{ p: "17px 20px", borderTop: "1px solid #F5F5F5" }}>
              <Typography
                variant="p"
                className="title-sm f500"
                sx={{
                  color: "#535353",
                  mb: 1,
                  maxWidth: 600,
                }}
              >
                Hello all friends ! My name is martin cooper and I am 26 years
                old. I am a business developer at software company. I like to
                make new friends.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "17px 20px",
                borderTop: "1px solid #F5F5F5",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="card-control"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#D8D8D8",
                    }}
                    aria-label="favourite"
                  >
                    <FavoriteIcon
                      sx={
                        {
                          // fontSize: "26px",
                        }
                      }
                    />
                  </IconButton>
                  <Typography
                    variant="contained"
                    my={2}
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#D8D8D8",
                      marginRight: "24px",
                    }}
                  >
                    Like 30
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#D8D8D8",
                    }}
                    aria-label="comment"
                  >
                    <CommentIcon
                      sx={
                        {
                          // fontSize: "26px",
                        }
                      }
                    />
                  </IconButton>
                  <Typography
                    variant="contained"
                    my={2}
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#D8D8D8",
                      marginRight: "24px",
                    }}
                  >
                    Comment
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      color: "#D8D8D8",
                    }}
                    aria-label="reply"
                  >
                    <ReplyIcon
                      sx={{
                        transform: "scaleX(-1)",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="contained"
                    my={2}
                    sx={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#D8D8D8",
                      marginRight: "24px",
                    }}
                  >
                    34
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="contained"
                  my={2}
                  sx={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#D8D8D8",
                  }}
                >
                  Reply
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
              fontSize: "20px !important",
            }}
          >
            Recommended connections
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
              fontSize: "20px !important",
            }}
          >
            Past connections
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
              fontSize: "20px !important",
            }}
          >
            Linked in and facebook connectioms
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ marginTop: "0px !important" }}>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "block" }}
                        component="p"
                        variant="p"
                      >
                        Ali Connors
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        Lorem ipsum dolor sit amet
                      </Typography>
                    </React.Fragment>
                  }
                />
                <Typography
                  variant="span"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                  }}
                >
                  5m
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <Button
              variant="contained"
              className="shadow-btn primary-outline-btn m-0"
              fullWidth
            >
              View More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventRegistrations;
