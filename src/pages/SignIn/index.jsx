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
import { ToastContainer , toast} from "react-toastify";
import './Signin.css'
import { Container, Row, Col , Image} from "react-bootstrap";
import logoBlue from '../../assets/images/logo-blue.svg'
import loginLady from "../../assets/images/sideimg.png";
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
            if (data.data.job_title === 'jobTitle' || data.data.job_title === 'user'){
              navigate("/d/app");
            }else {
              navigate("/admin/dashboard");
            }
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
          toast.error("")
        }
      });
  };
  return (
    <>
     <ToastContainer position="top-center" />
    <CssBaseline />
    <Container fluid className="signin">
      
      <Row>
        <Col md={6} >
        <div className="d-flex align-items-center position-absolute" style={{top: '10px' ,left: '10px'}}>
        <img src={logoBlue} alt="logo" className="mx-3 mt-5" />
        </div>
        <Container className='mt-5 '>
        <Row className='align-items-center justify-content-center form-cont'>
        <Col md={8} className="signin-left">

 
        <div className='mb-3'>
        <h1 >
        Sign in
        </h1>
          <p>Enter your email and password for signing in. <br></br>Thanks</p>
            
            </div>
           <Box
             component="form"
            noValidate
            onSubmit={handleSubmit}
            
          >
            
           
            <TextField
              error={validationErrors}
             margin="normal"
              required
              label=""
            fullWidth
             id="email"
             name="email"
               autoComplete="email"
              autoFocus
             value={email}
             variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
             />
             <InputLabel htmlFor="password">Password</InputLabel>
             <TextField
              error={validationErrors}
              
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
               startIcon={<img src={GoogleIcon} alt="Google" style={{height:"25px", width:"25px"}}></img>}
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
           </Col>
        </Row>
           </Container>
        </Col>
        <Col md={6} className="signin-right">
          <Image src={loginLady} alt='loggin picture' fluid />
        </Col>
      </Row>
    </Container>
    </>
    // <Box component="main" flexGrow={1} className="auth-signup">
    //   <ToastContainer position="top-center" />
    //   <CssBaseline />
    //   {/* <AuthTemplate> */}
    //     <Box
    //       className="signin-auth"
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         width: "340px"
    //       }}
    //       style={{
    //         margin: "30px 122px 20px 220px"
    //       }}
    //     >
    //       <Typography component="h1" variant="h4">
    //         Sign in
    //       </Typography>
    //       <Typography component="p">
    //         Enter your email and password for signing in.
    //       </Typography>
    //       <Typography component="p" mb={5}>
    //         Thanks
    //       </Typography>
    //       <Box
    //         component="form"
    //         noValidate
    //         onSubmit={handleSubmit}
    //         sx={{ mt: 1 }}
    //       >
    //         <InputLabel htmlFor="email">Email Address</InputLabel>
    //         <TextField
    //           error={validationErrors}
    //           margin="normal"
    //           required
    //           fullWidth
    //           id="email"
    //           name="email"
    //           autoComplete="email"
    //           autoFocus
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //         <InputLabel htmlFor="password">Password</InputLabel>
    //         <TextField
    //           error={validationErrors}
    //           margin="normal"
    //           required
    //           fullWidth
    //           name="password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //         />
    //         {validationErrors && (
    //           <InputLabel color="error" error>
    //             {validationMessage}
    //           </InputLabel>
    //         )}
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //           sx={{ mt: 3, mb: 2, width: "100%" }}
    //         >
    //           LogIn
    //         </Button>
    //       </Box>
    //       <Divider style={{ marginTop: "30px", marginBottom: "30px" }}>
    //         Sign in with
    //       </Divider>
    //       <Grid
    //         container
    //         direction="column"
    //         sx={{ "& button": { m: 1, color: "black" } }}
    //       >
    //         <Button
    //           sx={{ width: "100%" }}
    //           variant="outlined"
    //           size="large"
    //           startIcon={<img src={GoogleIcon} alt="Google"></img>}
    //         >
    //           Google
    //         </Button>
    //         <Button
    //           sx={{ width: "100%" }}
    //           variant="outlined"
    //           size="large"
    //           startIcon={<FacebookIcon />}
    //         >
    //           Facebook
    //         </Button>
    //       </Grid>
    //     </Box>
      // {/* </AuthTemplate> */}
    // </Box>
  );
}
