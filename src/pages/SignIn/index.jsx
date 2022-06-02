import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AuthTemplate from "../../components/AuthTemplate";
import { Divider } from "@mui/material";
import GoogleIcon from "./../../assets/images/Google__G__Logo.svg";
import FacebookIcon from "@mui/icons-material/FacebookTwoTone";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validationErrors, setValidationErrors] = React.useState(false);
  const [validationMessage, setValidationMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const requestParams = {
      email: email,
      password: password,
      // eslint-disable-next-line no-undef
      client_id: process.env.REACT_APP_CLIENT_ID,
      // eslint-disable-next-line no-undef
      client_secret: process.env.REACT_APP_CLIENT_SECRETE,
      type: "password",
    };
    axios
      .post("login/", requestParams)
      .then((response) => {
        if (response && response.status === 200) {
          if (response.data && response.data.data) {
            setValidationErrors(false);
            const data = response.data;
            localStorage.setItem("auth", JSON.stringify(data.token));
            localStorage.setItem("currentUser", JSON.stringify(data.data));
            navigate("/d/app");
          }
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.status
        ) {
          console.log(error.response.data.status);
          setValidationErrors(true);
          setValidationMessage(error.response.data.status.detail.user);
        }
      });
  };
  return (
    <Box component="main" flexGrow={1} className="auth-signup">
      <CssBaseline />
      <AuthTemplate>
        <Box
          className="signin-auth"
          sx={{
            my: 8,
            mx: 15,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Typography component="p">
            Enter your email and password for signing in.
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
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <TextField
              error={validationErrors}
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              error={validationErrors}
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {validationErrors && (
              <InputLabel color="error" error>
                {validationMessage}
              </InputLabel>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, width: "100%" }}
            >
              LogIn
            </Button>
          </Box>
          <Divider style={{ marginTop: "30px", marginBottom: "30px" }}>
            Sign in with
          </Divider>
          <Grid
            container
            direction="column"
            sx={{ "& button": { m: 1, color: "black" } }}
          >
            <Button
              sx={{ width: "100%" }}
              variant="outlined"
              size="large"
              startIcon={<img src={GoogleIcon} alt="Google"></img>}
            >
              Google
            </Button>
            <Button
              sx={{ width: "100%" }}
              variant="outlined"
              size="large"
              startIcon={<FacebookIcon />}
            >
              Facebook
            </Button>
          </Grid>
        </Box>
      </AuthTemplate>
    </Box>
  );
}
