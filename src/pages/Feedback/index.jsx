import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FeedbackImg from "../../assets/images/feedbackImg.png";
import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Link,
  MenuItem,
  Select,
} from "@mui/material";

const Feedback = () => {
  const [name, setName] = React.useState("");
  const [goodAt, setGoodAt] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [help, setHelp] = React.useState("");
  const [trip, setTrip] = React.useState("");

  return (
    <div className="conatiner">
      <h1>Feedback Form</h1>
      <p>Thank you for joining! Please fill this feedback form</p>

      <Box component="form" noValidate sx={{ mt: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          className="feedback"
        >
          <Box>
            <Box
              sx={{ mr: 2, ml: 2, width: "120%" }}
              className="feedback-field"
            >
              <InputLabel htmlFor="name">Name</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder=""
                id="name"
                name="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box
              sx={{ mr: 2, ml: 2, width: "120%" }}
              className="feedback-field"
            >
              <InputLabel htmlFor="goodAt">I am really Good at ...</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder=""
                id="goodAt"
                name="goodAt"
                autoFocus
                value={goodAt}
                onChange={(e) => setGoodAt(e.target.value)}
              />
            </Box>
            <Box
              sx={{ mr: 2, ml: 2, width: "120%" }}
              className="feedback-field"
            >
              <InputLabel htmlFor="business">What is your business?</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder=""
                id="business"
                name="business"
                autoFocus
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
              />
            </Box>
            <Box
              sx={{ mr: 2, ml: 2, width: "120%" }}
              className="feedback-field"
            >
              <InputLabel htmlFor="help">I could use help with ...</InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder=""
                id="help"
                name="help"
                autoFocus
                value={help}
                onChange={(e) => setHelp(e.target.value)}
              />
            </Box>
            <Box
              sx={{ mr: 2, ml: 2, width: "120%" }}
              className="feedback-field"
            >
              <InputLabel htmlFor="trip">
                What's the best trip you have ever taken?
              </InputLabel>
              <TextField
                margin="normal"
                required
                fullWidth
                placeholder=""
                id="trip"
                name="trip"
                autoFocus
                value={trip}
                onChange={(e) => setTrip(e.target.value)}
              />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, ml: 2, width: "120%" }}
            >
              Submit
            </Button>
          </Box>
          <Box sx={{ width: "45%", mr: 4 }}>
            <img src={FeedbackImg} alt="Feedback Image" />
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Feedback;
