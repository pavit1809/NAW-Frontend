import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../assets/styles/common.css";
import CheckoutImg from "./../../assets/images/checkout-img.png";
import {
  Checkbox,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  // Paper,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SubscriptionPanel from "../../components/SubscriptionPanel";

const EventCheckout = () => {
  return (
    <Container className="header-container">
      <Grid
        container
        spacing={3}
        sx={{
          px: 3,
          justifyContent: "space-between",
        }}
      >
        <Grid
          xs={12}
          item
          sx={{
            mt: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            className="section-title text-darkblue m-margin-0"
          >
            Attendee Details
          </Typography>
        </Grid>
        <Grid xs={12} md={6} lg={5} item>
          <Box
            component="main"
            flexGrow={1}
            className="auth-signup feedback-form"
          >
            <Box
              className="signin-auth"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                component="p"
                sx={{ mb: 0 }}
                className="title-lg mt-0"
              >
                Attendee Info
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                  <Grid xs={12} md={6} item>
                    <InputLabel>First Name</InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Enter First Name"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Last Name</InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Enter Last Name"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Email Address </InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Enter Email"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Password </InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Enter Password"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Phone Number(Optional) </InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Enter Phone Number"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Country </InputLabel>
                    <Select
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      fullWidth
                    >
                      <MenuItem>Select Country</MenuItem>
                      <MenuItem>Country</MenuItem>
                      <MenuItem>Country</MenuItem>
                      <MenuItem>Country</MenuItem>
                    </Select>
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>State & City </InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Select State & City"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Zip Code </InputLabel>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Enter Zip Code"
                    />
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Job Title </InputLabel>
                    <Select
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      fullWidth
                    >
                      <MenuItem>Enter Job Title</MenuItem>
                      <MenuItem>Job Title </MenuItem>
                      <MenuItem>Job Title </MenuItem>
                      <MenuItem>Job Title </MenuItem>
                    </Select>
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Company</InputLabel>
                    <Select
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      fullWidth
                    >
                      <MenuItem>Enter Company</MenuItem>
                      <MenuItem>Company </MenuItem>
                      <MenuItem>Company </MenuItem>
                      <MenuItem>Company </MenuItem>
                    </Select>
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Are You Business Owner</InputLabel>
                    <Select
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      fullWidth
                    >
                      <MenuItem>Yes</MenuItem>
                      <MenuItem>No </MenuItem>
                    </Select>
                  </Grid>
                  <Grid xs={12} md={6} item>
                    <InputLabel>Industry</InputLabel>
                    <Select
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                      fullWidth
                    >
                      <MenuItem>Enter Industry</MenuItem>
                      <MenuItem>Industry </MenuItem>
                    </Select>
                  </Grid>
                  <Grid xs={12} item>
                    <Box
                      className="signin-auth"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Checkbox
                        id="checkbox"
                        sx={{
                          p: 0,
                          mr: 2,
                        }}
                      />
                      <InputLabel for="checkbox">
                        If You Are Out From USA.
                      </InputLabel>
                    </Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      autoFocus
                      placeholder="Select State / City"
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <Typography
                      component="p"
                      sx={{ mb: 0 }}
                      className="title-lg m-0"
                    >
                      Ask Question To Speaker
                    </Typography>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      placeholder="Type your question here..."
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} xl={6} item className="flex-center">
          <img src={CheckoutImg} className="img-fluid" />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
        sx={{
          px: 3,
          my: 3,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          xs={12}
          item
          sx={{
            my: 2,
          }}
        >
          <Typography variant="h4" className="title-lg m-margin-0">
            Event Details
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={6} className="xsorder" item>
          <InputLabel>Tickets</InputLabel>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            fullWidth
            className="custom-select"
          >
            <MenuItem>1</MenuItem>
            <MenuItem>2 </MenuItem>
          </Select>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              my: 2,
              py: 2,
              px: 4,
              border: " 1px solid rgba(228, 228, 228, 0.9)",
              borderRadius: "5px",
            }}
          >
            <Typography variant="p4" className="label-sm">
              Ticket Price
            </Typography>
            <Typography variant="p4" className="title-md">
              Free For Members
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              my: 2,
              py: 2,
              px: 4,
              border: " 1px solid rgba(228, 228, 228, 0.9)",
              borderRadius: "5px",
            }}
          >
            <Typography variant="p4" className="label-sm">
              Upsale Price
            </Typography>
            <Typography variant="p4" className="title-md f600">
              $39
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              my: 2,
              py: 2,
              px: 4,
              border: " 1px solid rgba(228, 228, 228, 0.9)",
              borderRadius: "5px",
            }}
          >
            <Typography variant="p4" className="label-sm">
              Total Tickets
            </Typography>
            <Typography variant="p4" className="title-md f600">
              1
            </Typography>
          </Box>
          <InputLabel>
            Buy $39/Year To Attend All Future In-Person Events
          </InputLabel>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            fullWidth
            className="custom-select"
          >
            <MenuItem>$39/Year</MenuItem>
            <MenuItem>$39/Year </MenuItem>
          </Select>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
              py: 2,
              px: 4,
              border: " 1px solid rgba(228, 228, 228, 0.9)",
              borderRadius: "5px",
            }}
          >
            <Typography variant="p4" className="price-label">
              Total Price $39
            </Typography>
          </Box>
          <Box className="block-btn">
            <Button
              variant="contained"
              my={2}
              className="shadow-btn checkout-btn"
              fullWidth
            >
              First Time - Register Here
            </Button>
            <Button
              variant="contained"
              my={2}
              className="shadow-btn checkout-btn"
              fullWidth
            >
              Login
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} sm={6} md={5} lg={4} xl={4} item>
          <Typography
            variant="h4"
            className="title-md"
            sx={{ textAlign: "center" }}
          >
            Access to all In-Person Networking Events Across the Country (12+
            hosted in each city)
          </Typography>
          <Box sx={{ textAlign: "center" }} className="plan-box">
            <Typography variant="h4" className="section-title normal-font m-0">
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
      <SubscriptionPanel />
    </Container>
  );
};

export default EventCheckout;
