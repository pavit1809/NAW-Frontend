import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AuthTemplate from "../../components/AuthTemplate";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [company, setCompany] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [countries, setCountries] = React.useState([]);
  const [states, setStates] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  // const [companies, setCompanies] = React.useState([]);
  // const [industries, setIndustries] = React.useState([]);
  // const [jobTitles, setJobTitles] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  const [responseHeading, setResponseHeading] = React.useState("Awesome!!!");

  const handleClose = () => {
    setOpen(false);
    if (responseHeading === "Success") {
      navigate("/sign-in");
    }
  };

  const getData = (from, params = {}) => {
    return axios.get(from, params);
  };

  React.useEffect(() => {
    getData("country").then((res) => {
      if (res.data) setCountries(res.data.data);
    });
    // getData("company").then((res) => {
    //   if (res.data) setCompanies(res.data.data);
    // });
    // getData("industry").then((res) => {
    //   if (res.data) setIndustries(res.data.data);
    // });
    // getData("job-title").then((res) => {
    //   if (res.data) setJobTitles(res.data.data);
    // });
  }, []);

  const findStates = (countryID) => {
    getData(`state?country=${countryID}`).then((res) => {
      if (res.data) {
        setStates(res.data.data);
        getData(`city?state=${res.data.data[0].id}`).then((res) => {
          if (res.data) {
            setCities(res.data.data);
          }
        });
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestParams = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      phone_number: phoneNumber,
      country: country,
      state: state,
      city: cities[0].id,
      company: "company",
      job_title: "user",
      industry: "industry",
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRETE,
      type: "password",
    };
    axios
      .post("signup/", requestParams)
      .then((response) => {
        if (response && response.status === 200) {
          if (response.data && response.data.data) {
            const data = response.data;
            localStorage.setItem("auth", JSON.stringify(data.token));
            setResponseHeading("Success");
            setResponseMessage(data.status.message);
            setOpen(true);
          }
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.status
        ) {
          const data = error.response.data.status;
          setResponseHeading(data.message);
          let message = "";
          Object.keys(data.detail).forEach((key) => {
            message += key + ": " + data.detail[key] + "\n";
          });
          setResponseMessage(message);
          setOpen(true);
        }
      });
  };
  return (
    <Box component="main" flexGrow={1}>
      <CssBaseline />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{responseHeading}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {responseMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
      <AuthTemplate>
        <Box
          sx={{
            my: 8,
            mx: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <br/>
          <br/>
          <br/>
          <br/>
          <Typography component="h1" variant="h4">
            Sign Up
          </Typography>
          <Typography component="p">
            Enter your personal detail for signing up.
          </Typography>
          <Typography component="p" mb={5}>
            Thanks
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              className="auth-signup"
            >
              <Box sx={{ mr: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="first_name">First Name</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter First Name"
                  id="first_name"
                  name="first_name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>
              <Box sx={{ ml: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="last_name">Last Name</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter Last Name"
                  name="last_name"
                  id="last_name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
              <Box sx={{ mr: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="email">Email Adress</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box sx={{ ml: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="password">Password</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  autoComplete="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              <Box sx={{ mr: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="phone_number">Phone Number</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter Phone Number"
                  name="phone_number"
                  id="phone_number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Box>
              <Box sx={{ ml: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="country">Country</InputLabel>
                <Select
                  labelId="country"
                  id="country"
                  required
                  fullWidth
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    findStates(e.target.value);
                  }}
                >
                  {countries.map((c, index) => {
                    return (
                      <MenuItem value={c.id} key={index}>
                        {c.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
              <Box sx={{ mr: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="state_city">State/City</InputLabel>
                <Select
                  labelId="state_city"
                  id="state_city"
                  required
                  fullWidth
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {states.map((c, index) => {
                    return (
                      <MenuItem value={c.id} key={index}>
                        {c.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </Box>
              <Box sx={{ ml: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="company">Company</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter Job Title"
                  id="company"
                  name="company"
                  autoFocus
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Box>
              <Box sx={{ mr: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="job_title">Job Title</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter Job Title"
                  id="job_title"
                  name="job_title"
                  autoFocus
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                />
              </Box>
              <Box sx={{ ml: 2, width: "45%" }} className="signup-field">
                <InputLabel htmlFor="industry">Industry</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  placeholder="Enter Job Title"
                  id="industry"
                  name="industry"
                  autoFocus
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </Box>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="by submitting this form you agree to our"
              sx={{ fontSize: "16px", lineHeight: "20px" }}
            />
            <Link
              href="/sign-in"
              variant="body2"
              sx={{
                color: "#3874FF",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: "700",
              }}
            >
              Privacy Policy.
            </Link>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "100%" }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item sx={{ fontSize: "16px", lineHeight: "20px" }}>
                Alreay have an account? &nbsp;
                <Link
                  href="/sign-in"
                  variant="body2"
                  sx={{ color: "#3874FF", fontWeight: "700" }}
                >
                  {"Login."}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </AuthTemplate>
    </Box>
  );
}
