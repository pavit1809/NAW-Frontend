import * as React from 'react';
import '../Directory/Directory.css';
import {Container, Typography, Grid, Card, CardHeader, Avatar, CardContent, IconButton} from '@mui/material';
import PersonalInfo from '../../assets/images/PersonalInfo.png';
import {Mail, Phone, LocationOn, LinkedIn} from '@mui/icons-material';

export default function Directory(){

    return (
        <Container>
            <Typography variant='h3' fontFamily={'PlayfairDisplayMedium'} marginTop={'20px'} marginBottom={'20px'}>Personal Info</Typography>
            <Container>
                <Grid  container spacing={6}>
                    <Grid item xs={4}>
                        <Card>
                            <CardHeader sx={{display: 'flex', flexDirection:'column'}} 
                                avatar = {
                                    <Avatar aria-label="receipe" src={PersonalInfo} alt="di-one" className="pi-image">
                                    </Avatar>
                                }
                                title=
                                {
                                <Typography variant='p' fontWeight={'600'}>Maria Tinoco</Typography>
                                }>
                            </CardHeader>
                            <CardContent>
                                <Typography component='p' fontSize={'12px'}>
                                <IconButton sx={{ p: '8px' }} aria-label="menu">
                                    <Mail></Mail>
                                </IconButton>
                                    maria@gmail.com
                                </Typography>
                                <Typography component='p' fontSize={'12px'}>
                                <IconButton sx={{ p: '8px' }} aria-label="menu">
                                    <Phone></Phone>
                                </IconButton>
                                    0987654123
                                </Typography>
                                <Typography component='p' fontSize={'12px'}>
                                <IconButton sx={{ p: '8px' }} aria-label="menu">
                                    {/* <img src='Location' alt="location"/> */}
                                    <LocationOn></LocationOn>
                                </IconButton>
                                    CA-LOS ANGELES
                                </Typography>
                                <Typography component='p' fontSize={'12px'}>
                                <IconButton sx={{ p: '8px' }} aria-label="menu">
                                    <LinkedIn></LinkedIn>
                                </IconButton>
                                    linkedin.com/in/mriatinoco
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={8}>
                        <Card>
                            <CardContent>
                                <Grid display={'flex'}>
                                    <Grid item xs={4} borderRight={'1px solid gray'} paddingRight={'20px'}>
                                        <Typography fontSize={'12px'}>Company</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Shealy Truck Center</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Industry</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Health, Wellness and Fitness</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Job Title</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Medium duty sales consultant</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Are you a business Owners?</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>no</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Hobbies/Interests</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Working Out</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Company Size</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Large</Typography>
                                    </Grid>
                                    <Grid item xs={8} paddingLeft={'20px'}>
                                        <Typography fontSize={'12px'}>What product or service do you need that can help you with career, business or personal life?</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Consulting/sales</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>What product or service are you offering that we can help you promote?</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>Medium duty trucks (Isuzu and Mack)</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>College or University?</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>University of South Carolina</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Are you hiring?</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>no</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Are you looking for a new career?</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>no</Typography>
                                        <Typography fontSize={'12px'} marginTop={'10px'}>Company Revenue</Typography>
                                        <Typography fontSize={'14px'} fontWeight={'600'}>2 million +</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{marginTop:'50px'}}>
                <Card>
                    <CardContent>
                        <Typography variant='h4' fontFamily={'PlayfairDisplayMedium'} marginBottom={'20px'}>Who they want to meet?</Typography>
                        <Grid display={'flex'}>
                            <Grid item xs={4} borderRight={'1px solid gray'}>
                                <Typography fontSize={'12px'}>Job Title</Typography>
                                <Typography fontSize={'14px'} fontWeight={'600'}>Medium Duty Truck Sales Consultant</Typography>
                                <Typography fontSize={'12px'} marginTop={'10px'}>Company</Typography>
                                <Typography fontSize={'14px'} fontWeight={'600'}>Shealy Truck Center</Typography>
                                <Typography fontSize={'12px'} marginTop={'10px'}>Company Revenue</Typography>
                                <Typography fontSize={'14px'} fontWeight={'600'}>2 million +</Typography>
                            </Grid>
                            <Grid item xs={4} paddingLeft={'20px'}>
                                <Typography fontSize={'12px'}>Industry</Typography>
                                <Typography fontSize={'14px'} fontWeight={'600'}>Commercial Truck Sales</Typography>
                                <Typography fontSize={'12px'} marginTop={'10px'}>Company Size</Typography>
                                <Typography fontSize={'14px'} fontWeight={'600'}>Large</Typography>
                                <Typography fontSize={'12px'} marginTop={'10px'}>MemberType</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Container>
      
  )
}
