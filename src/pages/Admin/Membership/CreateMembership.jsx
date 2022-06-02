import React, { useEffect, useState } from "react";
// import imageAd from "../../../assets/admin-images/ad-image.png";
// import imageOne from "../../../assets/admin-images/membership-row-one.png";
import imageMembership from "../../../assets/admin-images/membership-image.png";

import "../Ads/Ads.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import OutlinedInput from "@mui/material/OutlinedInput";
import { Select, MenuItem } from "@mui/material";

const Index = () => {
  const navigate = useNavigate();

  const [membName, setMembName] = useState("");
  const [membAmount, setMembAmount] = useState("");
  //   const [membDescription, setMembDescription] = useState("");

  const [memberFeatureList, setMemberFeatureList] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState([]);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    axios
      .get("feature-plan/", {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        setMemberFeatureList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCreateMembClick = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const membDetails = {
      name: membName,
      price: membAmount,
      period: "year",
      enable: true,
      features: selectedFeature,
    };

    axios
      .post("membership-plan/", membDetails, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          navigate("/admin/membership");
      })
      .catch((error) => console.warn(error));
  };

  const handleMultipleSelect = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedFeature(value);
  };

  return (
    <div className="admin-users">
      <div className="header-title">Create Membership</div>
      <div className="ad-rows">
        <div className="ad-row-one">
          <div className="input-block">
            <label htmlFor="">Membership Name</label>
            <input
              type="text"
              placeholder="Enter Name of the Membership"
              value={membName}
              onChange={(e) => setMembName(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Membership Amount</label>
            <input
              type="text"
              placeholder="Enter Membership Amount"
              value={membAmount}
              onChange={(e) => setMembAmount(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Membership Feature</label>

            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={selectedFeature}
              onChange={handleMultipleSelect}
            >
              {memberFeatureList && memberFeatureList.length ? (
                memberFeatureList.map((item, index) => (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No feature available</MenuItem>
              )}
            </Select>

            {/* <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Membership Description"
              value={membDescription}
              onChange={(e) => setMembDescription(e.target.value)}
            /> */}
          </div>
          <div className="input-block">
            <button onClick={() => handleCreateMembClick()}>
              Create New Membership
            </button>
          </div>
        </div>
        <div className="ad-row-two">
          <img src={imageMembership} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
