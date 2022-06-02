import { Grid } from "@mui/material";
import React from "react";
import UserCard from "./UserCard";

const DownloadedUser = () => {
  return (
    <div className="admin-users">
      <div className="header-title">Users list who have registered</div>
      <Grid width={"100%"} container justifyContent={"space-evenly"}>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
        <Grid sx={{ my: 1, mx: 1 }}>
          <UserCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default DownloadedUser;
