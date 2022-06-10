/* eslint-disable react/prop-types */
import * as React from "react";
import Grid from "@mui/material/Grid";
import loginLady from "../assets/images/sideimg.png";
import logoBlue from "../assets/images/logo-blue.svg";
import "../pages/Home/Home.css";

export default function AuthTemplate(props) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={10}
      className="sign-main"
    >
      <img
        src={logoBlue}
        alt="logo-blue"
        loading="lazy"
        style={{
          position: "absolute",
          width: "161.89px",
          height: "47px",
          left: "70px",
          top: "51px",
        }}
      />
      <Grid item xs={12} md={6} className="auth-sign">
        {props.children}
      </Grid>
      <Grid item style={{ margin: "23px", width: "704px", height: "976px" }}>
        <img src={loginLady} alt="login-screen" loading="lazy" />
      </Grid>
    </Grid>
  );
}
