import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "../../assets/styles/common.css";
import FeedbackImg from "./../../assets/images/feedback-img.png";
import PrimaryHeadlogo from "./../../assets/images/blue-logo.png";
import { Container } from "@mui/material";

const Feedback = () => {
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
        <Grid xs={12} item>
          <Box
            sx={{
              my: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            className="mb-logo-margin"
          >
            <img src={PrimaryHeadlogo} className="img-fluid" alt="" />
          </Box>
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
                mb: 6,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h1" variant="h4" className="section-title">
                Feedback Form
              </Typography>
              <Typography component="p" sx={{ mb: 2 }}>
                Thank you for joining the Event, please fill this form how you
                feel about webinar.
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <InputLabel>Name</InputLabel>
                <TextField margin="normal" required fullWidth autoFocus />
                <InputLabel>I am really good at ...</InputLabel>
                <TextField margin="normal" required fullWidth />
                <InputLabel>What is your business?</InputLabel>
                <TextField margin="normal" required fullWidth />
                <InputLabel>I could use help with ...</InputLabel>
                <TextField margin="normal" required fullWidth />
                <InputLabel>What’s the best trip you’ve ever taken?</InputLabel>
                <TextField margin="normal" required fullWidth />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, width: "100%" }}
                  className="btn-sm"
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} xl={6} item className="flex-center">
          <img src={FeedbackImg} className="img-fluid" alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feedback;
