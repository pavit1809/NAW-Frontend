import React, { useEffect, useState } from "react";
import "./Users.css";
import userIcon from "../../../assets/admin-images/user-detail-icon.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const {
    state: { userId },
  } = useLocation();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [userData, setUserData] = useState({});
  const [states, setStates] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    axios
      .get(`user/${userId}`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.status >= 200 && response.status < 210)
          setUserData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("country/")
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setCountry(response.data.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`state/?country=${userData.country}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setStates(response.data.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(`city/?state=${userData.state}`)
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setCity(response.data.data);
      })
      .catch((error) => console.log(error));
  }, [userData]);

  return (
    <div className="user-details">
      <div className="header-title">View User Info</div>
      <div className="user-details-container">
        <div className="user-image-section">
          <img
            src={userIcon || userData.profile_pic}
            height="146px"
            alt="usericon"
          />
          <div className="user-name-section">
            <span className="user-name">
              {userData.last_name} {userData.first_name}
            </span>
            <span className="user-prof">{userData.job_title}</span>
          </div>
        </div>
        <div className="user-info-section">
          <div className="left-info-section">
            <label className="info-label">First Name</label>
            <input
              type="text"
              className="info-input"
              disabled
              value={userData.first_name}
            />
            <label className="info-label">Email Address</label>
            <input
              type="text"
              className="info-input"
              value={userData.email}
              disabled
            />
            <label className="info-label">State</label>
            <select
              type="text"
              className="info-input"
              disabled
              value={userData.state}
            >
              {states.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <label className="info-label">Company</label>
            <input
              type="text"
              className="info-input"
              disabled
              value={userData.company}
            />
            <label className="info-label">Industry</label>
            <input
              type="text"
              className="info-input"
              disabled
              value={userData.industry}
            />
          </div>
          <div className="right-info-section">
            <label className="info-label">Last Name</label>
            <input
              type="text"
              className="info-input"
              disabled
              value={userData.last_name}
            />
            <label className="info-label">City</label>
            <select
              type="text"
              className="info-input"
              disabled
              value={userData.city}
            >
              {city.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <label className="info-label">Country</label>
            <select
              type="text"
              className="info-input"
              disabled
              value={userData.country}
            >
              {country.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <label className="info-label">Job Title</label>
            <input
              type="text"
              className="info-input"
              disabled
              value={userData.job_title}
            />
            <label className="info-label">
              Event in which user is registered
            </label>
            <input type="text" className="info-input" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
