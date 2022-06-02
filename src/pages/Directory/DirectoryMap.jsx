import { Search } from "@mui/icons-material";
import {
  Container,
  Grid,
  Paper,
  IconButton,
  InputBase,
  Button,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import * as React from "react";
import DirectoryMapCard from "./DirectoryMapCard";

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
            width: 900,
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
      <Container>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "90vh",
            marginBottom: "40px",
            marginTop: "40px",
            borderRadius: "10px",
          }}
        />
      </Container>
      <Grid
        container
        spacing={4}
        justifyContent={"space-between"}
        marginLeft={"0px"}
      >
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryMapCard></DirectoryMapCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryMapCard></DirectoryMapCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryMapCard></DirectoryMapCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryMapCard></DirectoryMapCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryMapCard></DirectoryMapCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <DirectoryMapCard></DirectoryMapCard>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} my={3}>
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          size={"large"}
        />
      </Grid>
    </Container>
  );
}
