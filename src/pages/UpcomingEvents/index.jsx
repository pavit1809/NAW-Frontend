import * as React from "react";
// material
import {
  Container,
  Grid,
  Typography,
  Card,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
// components
import Page from "../../components/AdminThemeComponents/Page";
import EventsList from "../../components/EventsList";
import "../../assets/styles/common.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));

  const getChatRoom = () => {
    axios
      .post(
        `get-personal-chatroom/?other_user_id=011c05d1-26ab-4978-82c9-d38a4bf7d6b6`,
        {
          last_message_on: new Date(),
        },
        {
          headers: {
            authorization: `Bearer ${auth.access_token}`,
          },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          navigate("/d/inbox");
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Page title="Upcoming events">
      <Container maxWidth="xl">
        <EventsList navigationPath={"/d/event-details"} />
        <Container disableGutters>
          <Typography variant="h3" className="section-title">
            People who registered the Events
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} xl={4}>
              <Card
                className="common-shadow-card user-flex-card"
                variant="outlined"
              >
                <Paper>
                  <Paper className="avt-icon">
                    <Avatar alt="" src="/assets/admin-images/avatar-1.png" />
                    <span className="active-icon"></span>
                  </Paper>
                  <Typography variant="h6" className="title-md">
                    Bill Smith
                  </Typography>
                </Paper>
                <Button variant="contained" className="muiButton-primary">
                  <ChatOutlinedIcon />
                  Chat
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <Card
                className="common-shadow-card user-flex-card"
                variant="outlined"
              >
                <Paper>
                  <Paper className="avt-icon">
                    <Avatar alt="" src="/assets/admin-images/avatar-1.png" />
                  </Paper>
                  <Typography variant="h6" className="title-md">
                    Rose
                  </Typography>
                </Paper>
                <Button
                  variant="contained"
                  className="muiButton-primary"
                  onClick={() => getChatRoom()}
                >
                  <ChatOutlinedIcon />
                  Chat
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} xl={4}>
              <Card
                className="common-shadow-card user-flex-card"
                variant="outlined"
              >
                <Paper>
                  <Paper className="avt-icon">
                    <Avatar alt="" src="/assets/admin-images/avatar-1.png" />
                  </Paper>
                  <Typography variant="h6" className="title-md">
                    Bill Smith
                  </Typography>
                </Paper>
                <Button variant="contained" className="muiButton-primary">
                  <ChatOutlinedIcon />
                  Chat
                </Button>
              </Card>
            </Grid>
          </Grid>

          <Button variant="outlined" className="shadow-btn outline-btn ml-auto">
            View More
          </Button>
        </Container>
      </Container>
    </Page>
  );
};

export default UpcomingEvents;
