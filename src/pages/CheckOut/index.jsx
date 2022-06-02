import * as React from 'react';
import {Container, Grid, Typography, Card, Button, Box, FormControl, Select, MenuItem, Paper, OutlinedInput, Checkbox, FormControlLabel} from '@mui/material';
import { IosShare } from '@mui/icons-material';
import CheckoutImg from '../../assets/images/CheckoutImg.png'; 
import Logo from '../../assets/images/Logo.png'

export default function CheckOut(){

    return (
        <Container>
            <Card sx={{padding:'20px 20px'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} sx={{margin:'0 auto'}}>
                        <Box marginBottom={'20px'}>
                            <img src={Logo} alt="logo" color='blue'></img>
                        </Box>
                        <Typography variant='p' fontFamily={'PlayfairDisplayMedium'} fontSize={'28px'} fontWeight={'900'} marginBottom={'15px'}>Payment for $199 Membership</Typography><br></br>
                        <Typography variant='p' fontFamily={'PlayfairDisplayMedium'} fontSize={'14px'} fontWeight={'400'}>Enter your payment details to purchase the membership</Typography>
                        <Box sx={{ width: '95%',  marginTop: '40px'}}>
                            <Button  sx={{ width: '100%',  borderRadius:'0px', backgroundColor:'black', color:'white'}}  startIcon={<IosShare></IosShare>}>Pay</Button>
                        </Box>
                        <Box sx={{textAlign: 'center', marginTop: '37px'}}>
                            <Typography variant='p' fontFamily={'PlayfairDisplayMedium'} fontSize={'16px'} fontWeight={'400'} color={'#8792a2'}>Or pay with card</Typography>
                        </Box>
                        <Box sx={{marginBottom: '45px', marginTop: '38px'}}>
                            <Typography variant='p' fontFamily={'Mulish'} fontSize={'30px'} fontWeight={'bold'}>Card Details</Typography> 
                        </Box>
                            <FormControl>
                                <Typography variant='p' fontSize={'16px'} fontWeight={'900'}>Card Number</Typography>
                                <OutlinedInput placeholder="Card Number" />
                                <Typography variant='p' fontSize={'16px'} fontWeight={'900'}>Email Address</Typography>
                                <OutlinedInput placeholder="Email Address" />
                                <Typography variant='p' fontSize={'16px'} fontWeight={'900'}>Enter name on card</Typography>
                                <OutlinedInput placeholder="Name of cardholder" width="400px"/>
                                <Box sx={{display:'flex'}}>
                                    <Paper>
                                        <Typography variant='p' fontSize={'16px'} fontWeight={'900'}>Expiry Date</Typography>
                                        <OutlinedInput placeholder="MM/YYYY" />
                                    </Paper>
                                    <Paper>
                                        <Typography variant='p' fontSize={'16px'} fontWeight={'900'}>CVV</Typography>
                                        <OutlinedInput placeholder="" />
                                    </Paper>
                                </Box>
                                <Typography variant='p' fontSize={'16px'} fontWeight={'900'}>Country or Region</Typography>
                                <Select labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Country">
                                    <MenuItem value={10}>Country1</MenuItem>
                                    <MenuItem value={20}>Country2</MenuItem>
                                    <MenuItem value={30}>Country3</MenuItem>
                                </Select>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Save this card for future purchase" />
                                <Button variant="contained" sx={{ width: '100%', borderRadius:'10px', marginTop:'20px'}}>Pay $199.00</Button>
                            </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={CheckoutImg} alt="cimg" height="100%"></img>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}
