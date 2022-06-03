import { Container, Grid, IconButton, InputBase, Paper, Typography, Button } from '@mui/material';
import * as React from 'react';
import MailOutline from "@mui/icons-material/MailOutline"
import "./SubscriptionPanel.css"
import dispatchIcon from "./../assets/images/dispatch.png"
export default function SubscriptionPanel() {
  return (
    <Container disableGutters sx={{py: 10, px: 16, mt: 8, background: '#3874ff26', borderRadius: '40px',}} className='subscription-panel'>
      <img src={dispatchIcon} alt="dispatch" className='dispatch-icon'/>
      <Grid container direction='column' justifyContent='center' alignItems='center'>
        <Typography component='div' variant='h4' sx={{textAlign: 'center'}} marginBottom={8}>
          Subscribe to get information, latest news and other interesting offers about NetWork-Afterwork
        </Typography>
        <Grid container direction='row' justifyContent='space-around' width='60%'>
          <Paper
            component="form"
            elevation={1}
            sx={{ p: '8px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
              <MailOutline />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Your Email"
              inputProps={{ 'aria-label': 'Your Email' }}
            />
          </Paper>
          <Button variant="contained" size="large">
            Join Now
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}