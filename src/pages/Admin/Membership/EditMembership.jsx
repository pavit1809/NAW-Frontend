import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import imageMembership from "../../../assets/admin-images/membership-image.png";
import "../Ads/Ads.css";
import { Select, MenuItem } from "@mui/material";

const Index = (props) => {
  const navigate = useNavigate();
  const {
    state: { memberId },
  } = useLocation();
  // console.log("MemberID: ", memberId);

  const auth = JSON.parse(localStorage.getItem("auth"));
  const [membShipData, setMembShipData] = useState({});

  const [membName, setMembName] = useState("");
  const [membAmount, setMembAmount] = useState("");
  const [memberFeatureList, setMemberFeatureList] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState([]);

  useEffect(() => {
    getData();
    axios
      .get(`membership-plan/${memberId}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          setMembShipData(response.data.data);
          setMembName(response.data.data.name);
          setMembAmount(response.data.data.price);
          setSelectedFeature(response.data.data.features);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const getData = () => {
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
  };

  const handleEditMembShipClick = () => {
    let data = {
      price: membAmount,
      name: membName,
      features: selectedFeature,
    };

    axios
      .put(
        `membership-plan/${membShipData.id}/`,
        { ...membShipData, ...data },
        {
          headers: {
            authorization: `Bearer ${auth.access_token}`,
          },
        }
      )
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          navigate("/admin/membership", { state: { memberId: "" } });
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
      <div className="header-title">Edit Membership</div>
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
            <label htmlFor="">Membership Description</label>

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
            /> */}
          </div>
          <button onClick={() => handleEditMembShipClick()}>
            <div className="input-block">Edit Membership</div>
          </button>
        </div>
      </div>
      <div className="ad-row-two">
        <img src={imageMembership} alt="" />
      </div>
    </div>
  );
};

export default Index;
