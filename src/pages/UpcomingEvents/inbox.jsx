import React, { useEffect, useState } from "react";
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
  Menu,
  MenuItem,
} from "@mui/material";
import "../../assets/styles/common.css";
import AvatarImg from "./../../assets/images/avatar-img.png";
import AvatarLargeImg from "./../../assets/images/avatar-large.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled, alpha } from "@mui/material/styles";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";
import moment from "moment";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Inbox = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [chatlist, setChatList] = useState([]);

  const [userData, setUserData] = useState({});
  const userId = "74722e46-72e8-40b2-89ce-2ca4cd47984f";

  const [status, setStatus] = useState("Online")

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get(`user-chat-list`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.status >= 200 && response.status < 210)
          setChatList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`user/${userId}`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.status >= 200 && response.status < 210)
          setUserData(response.data.data);
          // console.log(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(() => {
    axios
    .post(`user-room-offline/`,{
      room_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }, {
      headers: {
        authorization: `Bearer ${auth.access_token}`,
      },
    })
    .then((response) => {
      // console.log(response);
      setTimeout(() => {
        if (response.status >= 200 && response.status < 210){
          // console.log(response)
          setStatus("Offline")
        }else{
          setStatus("")
        }
      }, 60000);
    })
    .catch((error) => 
    console.log(error));
  }, [])

  return (
    <Container className="container-xl">
      <Grid container spacing={3} justifyContent="space-between">
        <Grid xs={12} item>
          <Typography variant="h2" className="section-title m-0 text-darkblue">
            Inbox
          </Typography>
        </Grid>
        <Grid xs={12} md={4} lg={3} xl={3} item>
          <Card className="post-control-cards" sx={{ borderRadius: "50px" }}>
            <Box sx={{ display: "flex", p: "4px 20px" }} alignItems="center">
              <SearchIcon
                sx={{
                  color: "#989BA1",
                  fontSize: "18",
                }}
              />
              <CardContent sx={{ p: 0, m: 0 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  placeholder="Search..."
                />
              </CardContent>
            </Box>
          </Card>
          <Box className="event-cards-group inbox-cards-group">
            {chatlist && chatlist.length
              ? chatlist.map((item) => (
                  <List className="event-user-cards" key={item.id}>
                    <ListItem
                      alignItems="center"
                      sx={{
                        flexWrap: "wrap",
                      }}
                      className="active"
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <img src={AvatarImg} alt="" />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            item.other_user.user.last_name +
                            " " +
                            item.other_user.user.first_name
                          }
                          secondary={item.other_user.user.username}
                        />
                        <Typography
                          variant="span"
                          sx={{
                            color: "rgba(0, 0, 0, 0.8)",
                          }}
                        >
                          {moment(item.last_message.created_on).format(
                            "DD/MM/YYYY"
                          )}{" "}
                          {moment(item.last_message.created_on).format(
                            "hh:mm a"
                          )}
                        </Typography>
                      </Box>
                      <Typography
                        className="flex-100"
                        sx={{
                          color: "rgba(0, 0, 0, 0.8)",
                          fontWeight: 700,
                          fontSize: "14px",
                          mt: 1,
                        }}
                      >
                        {item.last_message.chat_msg}
                      </Typography>
                    </ListItem>
                  </List>
                ))
              : null}
            {/* <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
                className="selected"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Leslie Alexander"
                    secondary="Web Designer"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Eleanor Pena"
                    secondary="Dog Trainer"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Kathryn Murphy"
                    secondary="Medical Assistant"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Wade Warren"
                    secondary="Web Designer"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Marvin McKinney"
                    secondary="Nursing Assistant"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Jacob Jones"
                    secondary="Marketing Coordinator"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Wade Warren"
                    secondary="Web Designer"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List>
            <List className="event-user-cards">
              <ListItem
                alignItems="flex-center"
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={AvatarImg} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Jacob Jones"
                    secondary="Marketing Coordinator"
                  />
                  <Typography
                    variant="span"
                    sx={{
                      color: "rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    5m
                  </Typography>
                </Box>
                <Typography
                  className="flex-100"
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontWeight: 700,
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet
                </Typography>
              </ListItem>
            </List> */}
          </Box>
        </Grid>
        <Grid xs={12} md={8} lg={6} xl={5} item sx={{ display: "flex" }}>
          <Box className="flex-scroll-card">
            <Box className="event-cards-group user-cards-group">
              <List className="event-user-cards">
                <ListItem
                  alignItems="center"
                  sx={{
                    flexWrap: "wrap",
                  }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={userData.profile_pic} alt="" />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={userData.first_name + " " + userData.last_name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          color="text.primary"
                          sx={{
                            fontSize: "14px",
                          }}
                        >
                          Personal Assistant<br />
                          {status}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <div>
                    <MoreVertIcon
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                      sx={{
                        color: "#989BA1",
                        fontSize: "24px",
                      }}
                    />
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        Edit
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        Duplicate
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        Archive
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        More
                      </MenuItem>
                    </StyledMenu>
                  </div>
                </ListItem>
              </List>
            </Box>
            <Card className="post-control-cards message-box">
              <CardContent
                sx={{
                  padding: "0",
                  flex: "1",
                  overflow: "auto",
                }}
              >
                <Box className="date-devider">
                  <Typography
                    component="span"
                    color="text.primary"
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    December 27
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", p: "17px 20px" }}
                  className="chat-card"
                >
                  <Avatar>
                    <img src={userData.profile_pic} alt="" />
                  </Avatar>
                  <CardContent sx={{ p: 0, m: 0 }}>
                    <Typography
                      component="span"
                      color="#555758"
                      ml="10px"
                      p="10px"
                      sx={{
                        fontSize: "14px",
                        display: "block",
                        border: "1px solid #217BF4",
                        borderRadius: "5px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dolor mollis leo proin turpis eu hac. Tortor dolor eu at
                      bibendum suspendisse. Feugiat mi eu, rhoncus diam
                      consectetur libero morbi pharetra. Id tristique mi eget
                      eget tristique orci.
                    </Typography>
                    <Typography
                      component="span"
                      color="#989BA1"
                      m="6px"
                      sx={{
                        fontSize: "14px",
                        display: "block",
                      }}
                    >
                      10:15 pm
                    </Typography>
                  </CardContent>
                </Box>
                <Box
                  sx={{ display: "flex", p: "17px 20px" }}
                  className="chat-card sent-chat-card"
                >
                  <Avatar>
                    <img src={AvatarImg} alt="" />
                  </Avatar>
                  <CardContent sx={{ p: 0, m: 0 }}>
                    <Typography
                      component="span"
                      color="#555758"
                      ml="10px"
                      p="10px"
                      sx={{
                        fontSize: "14px",
                        display: "block",
                        background: "#D1E6FF",
                        borderRadius: "5px",
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dolor mollis leo proin turpis eu hac. Tortor dolor eu at
                      bibendum suspendisse. Feugiat mi eu, rhoncus diam
                      consectetur libero morbi pharetra. Id tristique mi eget
                      eget tristique orci.
                    </Typography>
                    <Typography
                      component="span"
                      color="#989BA1"
                      m="6px"
                      sx={{
                        fontSize: "14px",
                        display: "block",
                        textAlign: "right",
                      }}
                    >
                      10:15 pm
                    </Typography>
                  </CardContent>
                </Box>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className="msg-control"
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoFocus
                  placeholder="Write a message..."
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    sx={{
                      padding: "4px",
                      color: "#0F123F",
                      mr: 1,
                    }}
                    aria-label="emoji"
                    className="file-btn"
                  >
                    <AttachFileIcon />
                  </IconButton>
                  <IconButton
                    sx={{
                      padding: "4px",
                      color: "#0F123F",
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
                      padding: "0",
                      borderRadius: "7px",
                      fontWeight: 500,
                      fontSize: "14px",
                    }}
                    className="send-btn"
                  >
                    <SendOutlinedIcon />
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid xs={12} md={12} lg={3} xl={4} item>
          <Card className="post-control-cards" sx={{ borderRadius: "10px" }}>
            <Box alignItems="center">
              <CardContent
                sx={{
                  paddingBottom: "20px !important",
                }}
              >
                <Avatar className="profile-avatar">
                  <img src={userData.profile_pic} alt="" />
                </Avatar>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "800",
                    textAlign: "center",
                  }}
                >
                {userData.first_name + " " + userData.last_name}

                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  Personal Assistant<br />
                  {status}
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Grid item lg={12} xl={8}>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "14px",
                      }}
                      className="profile-details"
                    >
                      <EmailIcon />
                      {userData.email}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "14px",
                      }}
                      className="profile-details"
                    >
                      <LocalPhoneIcon />
                      0987654123
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: "14px",
                      }}
                      className="profile-details"
                    >
                      <LocationOnIcon />
                      {userData.job_title + "---" + userData.country + " , " + userData.state + " , " + userData.city}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent
                sx={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                  paddingTop: "30px",
                }}
              >
                <Box mb={4}>
                  <Typography variant="p">Company</Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "700",
                    }}
                  >
                    {userData.company}
                  </Typography>
                </Box>
                <Box mb={4}>
                  <Typography variant="p">Industry</Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "700",
                    }}
                  >
                    {userData.industry}
                  </Typography>
                </Box>
                <Box mb={4}>
                  <Typography variant="p">Event Name </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: "700",
                    }}
                  >
                    How To Effectively Connect Across Cultures (Oct 12, 2020)
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inbox;
