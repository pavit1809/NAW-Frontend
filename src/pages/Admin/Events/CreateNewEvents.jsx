import React, { useState, useEffect } from "react";
import axios from "axios";
// import imageAd from "../../../assets/admin-images/ad-image.png";
// import imageOne from "../../../assets/admin-images/membership-row-one.png";
import "../Ads/Ads.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Index = () => {
  const navigate = useNavigate();

  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("Free");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventLink, setEventLink] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDiscription, setEventDiscription] = useState("");
  const [eventBanner, setEventBanner] = useState(null);
  const [eventAddress, setEventAddress] = useState("");


  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = () => {
  //   axios
  //     .get("/event")
  //     .then((response) => {
  //       // console.log(JSON.stringify(response));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const handleCreateEventClick = async () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const formData = new FormData();
    formData.append("banner", eventBanner);
    formData.append("name", eventName);
    formData.append("type", eventType);
    formData.append("event_date", moment(eventDate).format("YYYY-MM-DD"));
    formData.append("event_link", eventLink);
    formData.append("event_time", eventTime);
    formData.append("description", eventDiscription);
    formData.append("is_active", true);
    formData.append('address', eventAddress);

    axios.post("event/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // crossorigin: true,
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 210)
          navigate("/admin/dashboard");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="admin-users" style={{marginLeft:"270px", marginRight: "200px"}}>
      <div className="header-title">Create Events</div>
      <div className="ad-rows">
        <div className="ad-row-one">
          <div className="input-block">
            <label htmlFor="">Event Name</label>
            <input
              type="text"
              placeholder="Enter Name of the event"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Event Date</label>
            <input
              type="date"
              placeholder="Enter Date of the event"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Enter event link</label>
            <input
              type="text"
              placeholder="Enter link of the event"
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Event Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description of the event"
              value={eventDiscription}
              onChange={(e) => setEventDiscription(e.target.value)}
            />
          </div>

          <div className="input-block">
            <button onClick={() => handleCreateEventClick()}>
              Create New Event
            </button>
          </div>
        </div>
        <div className="ad-row-two">
          <div className="input-block">
            <label htmlFor="">Event Type</label>
            <select onChange={(e) => setEventType(e.target.value)}>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>
          <div className="input-block">
            <label htmlFor="">Event Time</label>
            <input
              type="time"
              placeholder="Enter Time of the event"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Enter Banner</label>
            <div className="file-upload" style={{"margin-left": "-4px"}}>
              <span className="file-upload-placeholder">
                {eventBanner ? eventBanner?.name : "Upload the banner of the event"}
              </span>
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
                  onChange={(e) => setEventBanner(e.target.files[0])}
                />
              </Button>
            </div>
          </div>
          <div className="input-block">
            <label htmlFor="">Event Address</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Address of the event"
              value={eventAddress}
              onChange={(e) => setEventAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
