import { Card, CardHeader, Avatar, IconButton, CardContent, Typography, Box, Grid} from '@mui/material';
import * as React from 'react';
import DIOne from '../../assets/images/DIOne.png';
import DIMail from '../../assets/images/DIMail.png';

export default function DirectoryCard(){
  return (
    <Card y >
        <CardHeader 
            avatar = {
                <Avatar aria-label="receipe" borderRadius={'0px'}>
                    <img src={DIOne} alt="di-one" />
                </Avatar>
            }
            title=
            {
                <Box>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item display={'flex'}>
                            <IconButton>
                                <img src={DIMail} alt="di-mail" />
                            </IconButton>
                            <Typography component='p' fontSize={'12px'} marginTop={'6px'}>mail@gmail.com</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item display={'flex'}>
                            <IconButton>
                                <img src={DIMail} alt="di-mail" />
                            </IconButton>
                            <Typography component='p' fontSize={'12px'} marginTop={'6px'}>0987654123</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={'space-between'}>
                        <Grid item display={'flex'}>
                            <IconButton>
                                <img src={DIMail} alt="di-mail" />
                            </IconButton>
                            <Typography component='p' fontSize={'12px'} marginTop={'6px'}>CA-LOS ANGELES</Typography>
                        </Grid>
                    </Grid> 
                </Box>
            }
        />
        <CardContent>
                <Box sx={{mx: 2}}>
                    <Typography component='p' fontSize={'12px'} fontWeight={'300'} marginTop={'8px'}>
                        Company
                    </Typography>
                    <Typography component='p' fontSize={'16px'} fontWeight={'500'}>
                        Guardian Angel
                    </Typography>
                </Box>
                <Box sx={{mx: 2}}>
                    <Typography component='p' fontSize={'12px'} fontWeight={'300'} marginTop={'8px'}>
                        Job Title
                    </Typography>
                    <Typography component='p' fontSize={'16px'} fontWeight={'500'}>
                        Personal Assistant
                    </Typography>
                </Box>
                <Box sx={{mx: 2}}>
                    <Typography component='p' fontSize={'12px'} fontWeight={'300'} marginTop={'8px'}>
                        Industry
                    </Typography>
                    <Typography component='p' fontSize={'16px'} fontWeight={'500'}>
                        Health, Wellness and Fitness
                    </Typography>
                </Box>
                <Box sx={{mx: 2}}>
                    <Typography component='p' fontSize={'12px'} fontWeight={'300'} marginTop={'8px'}>
                        Event Name
                    </Typography>
                    <Typography component='p' fontSize={'16px'} fontWeight={'500'}>
                        How To Effectively Connect Across Cultures (Oct 20, 2021)
                    </Typography>
                </Box>
        </CardContent>
    </Card>
  )
}
