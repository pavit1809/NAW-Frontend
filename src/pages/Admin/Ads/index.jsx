import { /* Container, */ Button, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdCard from "./AdCard";
import {Container} from 'react-bootstrap';
const Index = () => {
  const navigate = useNavigate();

  const [emailAds, setEmailAds] = useState([]);
  const [socialAds, setSocialAds] = useState([]);

  useEffect(() => {
    axios
      .get("ads/?email=true")
      .then((response) => {
        // console.log(response);
        if (response.status >= 200 && response.status < 210)
          setEmailAds(response.data.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("ads/?social_network=true")
      .then((response) => {
        // console.log(response);
        if (response.status >= 200 && response.status < 210)
          setSocialAds(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const viewUserData = (id) => {
    navigate("/admin/ads/user-ads", {
      state: { EventId: "", BlogId: "", memberId: "", userId: "", AdId: id },
    });
  };

  return (
    <>
    <Container>
    <div className="admin-users">
      <div className="header-div">
        <div className="header-title">
          <h5 className="fw-bold display-4">Ads</h5>
        </div>
        <div>
          <Button
            className="blog-btn"
            variant="contained"
            onClick={() => navigate("/admin/ads/create-ads")}
          >
            Add New Ad
          </Button>
        </div>
      </div>
      {/* <Container sx={{ my: 7.5 }} disableGutters> */}
      <h4>Email Share ads</h4>
      <Grid width={"100%"} container justifyContent={"space-evenly"}>
        {emailAds && emailAds.length
          ? emailAds.map((item) => (
              <Grid sx={{ mt: 8, mb: 2, mx: 1 }} key={item.id}>
                <AdCard userData={viewUserData} data={item} />
              </Grid>
            ))
          : null}
      </Grid>
      {/* <h4>Social Media Shared ads</h4> */}

      <Grid width={"100%"} container justifyContent={"space-evenly"}>
        {socialAds && socialAds.length
          ? socialAds.map((item) => (
              <Grid sx={{ mt: 8, mb: 2, mx: 1 }} key={item.id}>
                <AdCard userData={viewUserData} data={item} />
              </Grid>
            ))
          : null}
      </Grid>
      {/* </Container> */}
    </div>
    </Container>
    </>
  );
};

export default Index;
