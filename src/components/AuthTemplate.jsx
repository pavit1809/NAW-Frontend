/* eslint-disable react/prop-types */
import * as React from "react";
import Grid from '@mui/material/Grid';
import loginLady from '../assets/images/sideimg.png'
import '../pages/Home/Home.css'

export default function AuthTemplate(props) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={10} className="sign-main">
      <Grid item xs={12} md={6} className="auth-sign">
        {props.children}
      </Grid>
      <Grid item>
        <img 
        src={loginLady}
        alt="login-screen"
        loading="lazy" />
      </Grid>
    </Grid>
  )
}