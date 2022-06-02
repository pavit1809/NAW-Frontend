import * as React from 'react';
import {Container, Grid, Paper, IconButton, InputBase, Button, Pagination, Typography, Box } from '@mui/material';
import { Search } from '@mui/icons-material';
import ConnectionsCardOne from './ConnectionsCardOne';
import ConnectionsCardTwo from './ConnectionsCardTwo';
import ConnectionsCardThree from './ConnectionsCardThree';
import ConnectionsCardFour from './ConnectionsCardFour';

export default function Connections(){

    return (
        <Container>
            <Typography variant='h3' fontFamily={'PlayfairDisplayMedium'} marginBottom={'20px'}>My Connections</Typography>
            <Grid container justifyContent={'space-between'} mb={3}>
                <Paper
                component="form"
                elevation={1}
                sx={{ p: '8px', display: 'flex', alignItems: 'center', width: 1000, borderRadius: '10px' }}>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <Search></Search>
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search by City, Industry, job Title and Company and tags for interest"
                        inputProps={{ 'aria-label': 'Search by City, Industry, job Title and Company and tags for interest' }}
                    />
                </Paper>
                <Button variant="contained">
                Search
                </Button>
            </Grid>
            <Box sx={{marginTop:'35px'}}>
                <Paper sx={{marginBottom:'35px', background:'transparent'}}>
                    <Typography variant='p' marginBottom={'20px'}>People wants to connect with you (4 Requests)</Typography>
                </Paper>
                <Grid container spacing={4} justifyContent={'space-between'}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardOne></ConnectionsCardOne>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardOne></ConnectionsCardOne>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardOne></ConnectionsCardOne>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardOne></ConnectionsCardOne>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{marginTop:'35px'}}>
                <Paper sx={{marginBottom:'35px', background:'transparent'}}>
                    <Typography variant='p' marginBottom={'20px'}>Recommended Connections</Typography>
                </Paper>
                <Grid container spacing={4} justifyContent={'space-between'}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardTwo></ConnectionsCardTwo>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardTwo></ConnectionsCardTwo>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardTwo></ConnectionsCardTwo>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardTwo></ConnectionsCardTwo>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{marginTop:'35px'}}>
                <Paper sx={{marginBottom:'35px', background:'transparent'}}>
                    <Typography variant='p' marginBottom={'20px'}>Past Connections</Typography>
                </Paper>
                <Grid container spacing={4} justifyContent={'space-between'}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardThree></ConnectionsCardThree>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardThree></ConnectionsCardThree>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardThree></ConnectionsCardThree>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardThree></ConnectionsCardThree>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{marginTop:'35px'}}>
                <Paper sx={{marginBottom:'35px', background:'transparent'}}>
                    <Typography variant='p' marginBottom={'20px'}>Linked in and facebook connections</Typography>
                </Paper>
                <Grid container spacing={4} justifyContent={'space-between'}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardFour></ConnectionsCardFour>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardFour></ConnectionsCardFour>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardFour></ConnectionsCardFour>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <ConnectionsCardFour></ConnectionsCardFour>
                    </Grid>
                </Grid>
            </Box>
            <Grid container justifyContent={'center'} my={3}>
                <Pagination
                    count={5}
                    variant="outlined"
                    color="primary"
                    size={'large'}
                />
            </Grid>
        </Container>
    )
}
