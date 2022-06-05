import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import moment from "moment";
// import imageAd from "../../../assets/admin-images/ad-image.png";
import imageOne from "../../../assets/admin-images/membership-row-one.png";
import "./Ads.css";
import { Button } from "@mui/material";
import {Container} from "react-bootstrap";

const CreateAds = () => {
  const navigate = useNavigate();

  const [adTitle, setAdTitle] = useState("");
  const [adDuration, SetAdDuration] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [adBanner, setAdBanner] = useState("");
  const [emailPurpose, setEmailPurpose] = useState(false);
  const [SNPurpose, setSNPurpose] = useState(false);

  const handleSubmitClick = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const formData = new FormData();
    formData.append("banner", adBanner);
    formData.append("title", adTitle);
    formData.append("duration", moment(adDuration).format("YYYY-MM-DD"));
    formData.append("description", adDescription);
    formData.append("email", emailPurpose);
    formData.append("social_network", SNPurpose);
    formData.append("is_active", true);

    axios
      .post("ads/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // crossorigin: true,
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
        
          navigate("/admin/ads", {
            
            state: {
              EventId: "",
              BlogId: "",
              memberId: "",
              userId: "",
              AdId: "",
            },
          });
         
            
      })
      .catch((error) => console.log(error));
      
      
  };

  return (
    <div className="admin-users">
      <ToastContainer />
      <Container>
      <div className="header-title">Ads</div>
      <div className="ad-rows">
        <div className="ad-row-one">
          <p>Create Ads</p>
          <div className="input-block">
            <label htmlFor="">Ad Title</label>
            <input
              type="text"
              placeholder="Enter Name of the Ad"
              value={adTitle}
              onChange={(e) => setAdTitle(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Ad Duration</label>
            <input
              type="date"
              placeholder="Enter Date of the Ad"
              value={adDuration}
              onChange={(e) => SetAdDuration(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Ad Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description of the Ad"
              value={adDescription}
              onChange={(e) => setAdDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="input-block">
            <label htmlFor="">Ads Banner</label>
            {/* <input
              type="file"
              accept="image/*"
              placeholder="Upload the banner of the Ad"
              // value={adBanner}
            /> */}
            <div className="file-upload">
              <span className="file-upload-placeholder">
                Upload the banner of the Ad
              </span>
              {/* <span className="file-upload-btn">Upload</span> */}
              <Button
                variant="contained"
                className="file-upload-btn"
                component="label"
              >
                Upload
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  style={{ display: "none" }}
                  onChange={(e) => setAdBanner(e.target.files[0])}
                />
              </Button>
            </div>
          </div>
          <div className="input-block">
            <label>Ads Purpose</label>
            <div className="ads-purpose">
              <input
                type="checkbox"
                name="email"
                value="email"
                checked={emailPurpose}
                onChange={(e) => setEmailPurpose(e.target.checked)}
              />
              Email
            </div>
            <div className="ads-purpose">
              <input
                type="checkbox"
                name="social_network"
                value="social_network"
                checked={SNPurpose}
                onChange={(e) => setSNPurpose(e.target.checked)}
              />
              Social Network
            </div>
          </div>
          <div className="input-block">
            <button onClick={() => handleSubmitClick()}>Create New Ad</button>
          </div>
        </div>
        <div className="ad-row-two">
          <img src={imageOne} alt="ads" />
        </div>
      </div>
      </Container>
    </div>
  );
};

export default CreateAds;
