import React, { useEffect, useState } from "react";
// material
import {
  Box,
  Grid,
  Container,
  Typography,
  Modal,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
// components
import Page from "../../components/AdminThemeComponents/Page";
import DashboardVirtualSummit from "../../components/DashboardVirtualSummit";
import Events from "./Events";
import FeedPost from "../../components/FeedPost";
import DashboardRightImage from "./../../assets/images/DashboardRightImage.png";
import DashboardRightJoinNow from "./../../assets/images/DashboardRightJoinNow.png";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "../../assets/styles/common.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------
const feedPostData = {
  title: "Dami Soyombo",
  subheading: "4 days ago",
  image: "",
  content:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  totalLikes: "34",
  totalShares: "30",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  maxWidth: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`ads/97aea757-f60d-4c11-b8e8-1ef3336872ca/seen/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h1">Network After Work</Typography>
          <Typography variant="body1">
            Meet Professional virtually across industries and around the
            country.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent={"space-between"}>
          <Grid item xs={12} md={6} lg={8}>
            <DashboardVirtualSummit />
            <Events showPrevArrow={false} />
            <FeedPost post={feedPostData} />
            <FeedPost post={feedPostData} />
            <FeedPost post={feedPostData} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Button
              variant="contained"
              sx={{
                margin: "auto",
                marginBottom: "10%",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => {
                navigate(`/d/feedback`);
              }}
            >
              Feedback
            </Button>
            <img
              src={DashboardRightJoinNow}
              alt="right join now"
              style={{ marginLeft: "auto", marginBottom: 30 }}
              onClick={handleOpen}
            />
            <img
              src={DashboardRightImage}
              alt="Dashboard"
              style={{ marginLeft: "auto", marginTop: 30 }}
            />
          </Grid>
        </Grid>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal-content">
          <Grid container spacing={2} justifyContent={"space-between"}>
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ pb: 1 }}>
                <Typography variant="p" className="blue-text">
                  Pricing
                </Typography>
                <Typography variant="h3" className="bold-text">
                  Membership
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2} md={2} className="modal-close-btn">
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderRadius: "50%",
                }}
                onClick={handleClose}
              >
                <CloseIcon className="close-icon" />
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent={"space-between"}
            className="modal-inner-sec"
          >
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ textAlign: "center" }} className="plan-box">
                <Typography
                  variant="h4"
                  className="section-title normal-font m-0"
                >
                  $39
                </Typography>
                <Typography variant="p" className="text-black" sx={{ mt: 1 }}>
                  per year
                </Typography>
                <List className="price-list">
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon className="check-icon" />
                      </ListItemIcon>
                      <ListItemText primary="All Live Events" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Guests Lists for events" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Get Notifications" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Get Data of Buying anf Selling" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Access to More Lcations" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Button
                  variant="contained"
                  my={2}
                  className="shadow-btn checkout-btn"
                  fullWidth
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ textAlign: "center" }} className="plan-box  selected">
                <Typography
                  variant="h4"
                  className="section-title normal-font m-0"
                >
                  $39
                </Typography>
                <Typography variant="p" className="text-black" sx={{ mt: 1 }}>
                  per year
                </Typography>
                <List className="price-list">
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon className="check-icon" />
                      </ListItemIcon>
                      <ListItemText primary="All Live Events" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Guests Lists for events" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Get Notifications" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Get Data of Buying anf Selling" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Access to More Lcations" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Button
                  variant="contained"
                  my={2}
                  className="shadow-btn checkout-btn"
                  fullWidth
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box sx={{ textAlign: "center" }} className="plan-box">
                <Typography
                  variant="h4"
                  className="section-title normal-font m-0"
                >
                  $39
                </Typography>
                <Typography variant="p" className="text-black" sx={{ mt: 1 }}>
                  per year
                </Typography>
                <List className="price-list">
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon className="check-icon" />
                      </ListItemIcon>
                      <ListItemText primary="All Live Events" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Guests Lists for events" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Get Notifications" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Get Data of Buying anf Selling" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding className="label-list">
                    <ListItemButton>
                      <ListItemIcon>
                        <CloseIcon className="close-icon" />
                      </ListItemIcon>
                      <ListItemText primary="Access to More Lcations" />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Button
                  variant="contained"
                  my={2}
                  className="shadow-btn checkout-btn"
                  fullWidth
                >
                  Get Started
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Page>
  );
};

export default Dashboard;
