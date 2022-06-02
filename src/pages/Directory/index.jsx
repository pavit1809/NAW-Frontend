import { Search } from "@mui/icons-material";
import {
  Container,
  Grid,
  Paper,
  IconButton,
  InputBase,
  Button,
  Pagination,
  Typography,
} from "@mui/material";
import * as React from "react";
import DirectoryCard from "./DirectoryCard";

export default function Directory() {
  return (
    <Container>
      <Typography
        variant="h3"
        fontFamily={"PlayfairDisplayMedium"}
        marginBottom={"20px"}
      >
        Directory
      </Typography>
      <Grid container justifyContent={"space-between"} mb={3}>
        <Paper
          component="form"
          elevation={1}
          sx={{
            p: "8px",
            display: "flex",
            alignItems: "center",
            width: 1000,
            borderRadius: "10px",
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <Search></Search>
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by City, Industry, job Title and Company and tags for interest"
            inputProps={{
              "aria-label":
                "Search by City, Industry, job Title and Company and tags for interest",
            }}
          />
        </Paper>
        <Button variant="contained">Search</Button>
      </Grid>
      <Grid container spacing={4} justifyContent={"space-between"}>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryCard></DirectoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryCard></DirectoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryCard></DirectoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryCard></DirectoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryCard></DirectoryCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryCard></DirectoryCard>
        </Grid>
        {/* {events.map((event, index) => {
                  return (
                    <Grid key={index} sx={{my: 2}}>
                      <DirectoryCard  date={event.date} time={event.time} title={event.title} action={event.action} handleNext={(id) => id} mail={event.mail}/>
                    </Grid>
                  )
                })} */}
      </Grid>
      <Grid container justifyContent={"center"} my={3}>
        <Pagination
          count={5}
          variant="outlined"
          color="primary"
          size={"large"}
        />
      </Grid>
    </Container>
  );
}
