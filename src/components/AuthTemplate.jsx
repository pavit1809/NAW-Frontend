/* eslint-disable react/prop-types */
import * as React from "react";
import Grid from '@mui/material/Grid';
import loginLady from '../assets/images/sideimg.png'

export default function AuthTemplate(props) {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={10}>
      <Grid item xs={5}>
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