import { /* Container, */ Grid } from "@mui/material";
import React from "react";
// import imageAd from "../../../assets/admin-images/ad-image.png";
import "./Ads.css";

const UserAds = () => {
  return (
    <div className="admin-users">
      <div className="header-title">
        <h5>Ads</h5>
      </div>
      <div>
        <div className="ad-user-details">
          <h4>Details of users</h4>
          <div className="title">
            <span>Ad Title</span>
            <p>Advertisement1</p>
          </div>
          <div className="title">
            <span>Ad Duration</span>
            <p>30 sec</p>
          </div>
        </div>
        <div className="user-table">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Profession</th>
                <th>E-mail address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="table-inner">
                    <img src="images/blog-big-img.png" alt="" />
                    <p>Eleanor Pena</p>
                  </div>
                </td>
                <td>Dog Trainer</td>
                <td>thegreateleanorpena123456789@gmail.com</td>
              </tr>
              <tr>
                <td>
                  <div className="table-inner">
                    <img src="images/blog-big-img.png" alt="" />
                    <p>Eleanor Pena</p>
                  </div>
                </td>
                <td>Dog Trainer</td>
                <td>thegreateleanorpena123456789@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="header-sub-title">
          <h5>Shared emails via users</h5>
        </div>

        <Grid width={"100%"} container justifyContent={"space-evenly"}>
          <Grid sx={{ mb: 1, mx: 1 }}>
            <div className="user-emails">
              <p>thegreateleanorpena123@gmail.com</p>
            </div>
          </Grid>
          <Grid sx={{ mb: 1, mx: 1 }}>
            <div className="user-emails">
              <p>thegreateleanorpena123@gmail.com</p>
            </div>
          </Grid>
          <Grid sx={{ mb: 1, mx: 1 }}>
            <div className="user-emails">
              <p>thegreateleanorpena123@gmail.com</p>
            </div>
          </Grid>
          <Grid sx={{ mb: 1, mx: 1 }}>
            <div className="user-emails">
              <p>thegreateleanorpena123@gmail.com</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default UserAds;
