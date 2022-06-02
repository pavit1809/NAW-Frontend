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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import "../../assets/styles/common.css";
import AvatarImg from "./../../assets/images/avatar-img.png";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ImageIcon from "@mui/icons-material/Image";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Box } from "@mui/system";

const EventAttendees = () => {
  const [expanded, setExpanded] = useState("false");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container className="container-xl">
      <Grid container spacing={3} justifyContent="space-between">
        <Grid xs={12} md={12} lg={4} item>
          <Typography variant="h2" className="section-title mt-0 text-darkblue">
            Event Organizers
          </Typography>
          <Box
            className="event-cards-group"
            sx={{
              mt: "70px",
            }}
          >
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Bill Smith"
                  secondary="Networking Manager"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Bill Smith"
                  secondary="Networking Manager"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
          <Typography variant="h2" className="section-title mt-0 text-darkblue">
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
          <Card className="post-control-cards">
            <Box sx={{ p: "17px 20px" }}>
              <Typography
                variant="h2"
                className="title-md"
                sx={{ p: "17px 20px" }}
              >
                Filters
              </Typography>
              <Accordion
                className="custom-accordion"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    COUNTRY
                    <KeyboardArrowDownOutlinedIcon
                      sx={{
                        color: "#8B8B8B",
                      }}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="custom-accordion"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    NEW BRAND
                    <KeyboardArrowDownOutlinedIcon
                      sx={{
                        color: "#8B8B8B",
                      }}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="custom-accordion"
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    MARKET SPECIFICITIES
                    <KeyboardArrowDownOutlinedIcon
                      sx={{
                        color: "#8B8B8B",
                      }}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                className="custom-accordion"
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    MAIN PRODUCT CATEGORY
                    <KeyboardArrowDownOutlinedIcon
                      sx={{
                        color: "#8B8B8B",
                      }}
                    />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Typography variant="h2" className="section-title mt-0 text-darkblue">
            Attendees
          </Typography>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
            }}
          >
            Businesses
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="H&M" />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Avolio" />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="BVLGARI" />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="H&M" />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Avolio" />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="BVLGARI" />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
            }}
          >
            People
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy&M"
                  secondary="Medical Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Marvin McKinney"
                  secondary="Nursing Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Jacob Jones"
                  secondary="Marketing Coordinator"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy&M"
                  secondary="Medical Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Marvin McKinney"
                  secondary="Nursing Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Jacob Jones"
                  secondary="Marketing Coordinator"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={4} xl={3} item>
          <Typography variant="h2" className="section-title mt-0 text-darkblue">
            Recommendation
          </Typography>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
            }}
          >
            Linked in and facebook connections in the event
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary="Medical Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Marvin McKinney"
                  secondary="Nursing Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Jacob Jones"
                  secondary="Marketing Coordinator"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
            }}
          >
            Existing connections attending the event
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary="Medical Assistant"
                />
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Marvin McKinney"
                  secondary="Nursing Assistant"
                />
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Jacob Jones"
                  secondary="Marketing Coordinator"
                />
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary="Medical Assistant"
                />
              </ListItem>
            </List>
          </Box>
          <Typography
            variant="h6"
            className="title-md f500"
            sx={{
              color: "#616161",
              mb: 1,
            }}
          >
            Recommended connections from the event
          </Typography>
          <Box className="event-cards-group avatar-cards-group">
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Kathryn Murphy"
                  secondary="Medical Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Marvin McKinney"
                  secondary="Nursing Assistant"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Jacob Jones"
                  secondary="Marketing Coordinator"
                />
                <IconButton edge="end">
                  <PersonAddAltOutlinedIcon />
                </IconButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EventAttendees;
