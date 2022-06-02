import React, { useEffect, useState } from "react";
import "./Ads.css";
import imageAd from "../../../assets/admin-images/ad-image.png";
import { Button } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  // const { AdId } = props;
  const AdId = "9fa93e92-5ba0-417a-ae38-fe99a63ccf24";
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [adData, setAdData] = useState({});

  useEffect(() => {
    axios
      .get(`ads/${AdId}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setAdData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [AdId]);

  const handleEditAdClick = () => {
    const { title, duration, description, banner, email, social_network, id } =
      adData;

    const formData = new FormData();

    formData.append("banner", banner);
    formData.append("title", title);
    formData.append("duration", moment(duration).format("YYYY-MM-DD"));
    formData.append("description", description);
    formData.append("email", email);
    formData.append("social_network", social_network);
    formData.append("is_active", true);

    axios
      .put(`/ads/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
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
      <div className="header-title">Ads</div>
      <div className="ad-rows">
        <div className="ad-row-one">
          <p>Edit Ads</p>
          <div className="input-block">
            <label htmlFor="">Ad Title</label>
            <input
              type="text"
              placeholder="Enter Name of the ad"
              value={adData.title}
              onChange={(e) => setAdData({ ...adData, title: e.target.value })}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Ad Duration</label>
            <input
              type="date"
              placeholder="Enter Date of the ad"
              value={adData.duration}
              onChange={(e) =>
                setAdData({ ...adData, duration: e.target.value })
              }
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Ad Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description of the ad"
              value={adData.description}
              onChange={(e) =>
                setAdData({ ...adData, description: e.target.value })
              }
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Ads Banner</label>
            {/* <input type="file" placeholder="Upload the banner of the ad" accept="image/*" /> */}
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
                  onChange={(e) =>
                    setAdData({ ...adData, banner: e.target.files[0] })
                  }
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
                checked={adData.email}
                onChange={(e) =>
                  setAdData({ ...adData, email: e.target.checked })
                }
              />
              Email
            </div>
            <div className="ads-purpose">
              <input
                type="checkbox"
                name="email"
                value="email"
                checked={adData.social_network}
                onChange={(e) =>
                  setAdData({ ...adData, social_network: e.target.checked })
                }
              />
              Social Network
            </div>
          </div>
          <div className="input-block">
            <button onClick={() => handleEditAdClick()}>Edit Ad</button>
          </div>
        </div>
        <div className="ad-row-two">
          <img src={imageAd} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
