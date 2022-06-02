import React, { useEffect, useState } from "react";
import "./Users.css";
import userBanner from "../../../assets/admin-images/user-banner.png";
import UserList from "./UserList";
import arrowDown from "../../../assets/admin-images/arrow-down.png";
import { Button } from "@mui/material";
import axios from "axios";

const Users = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("user/", {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setUsersList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteClick = (id) => {
    axios
      .delete(`user/${id}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.data.status.code === 200) {
          setUsersList(usersList.filter((item) => item.id !== id));
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="admin-users">
      <div className="header-title">Users</div>
      <div className="add-user-banner">
        <img
          src={userBanner}
          className="add-user-banner-img"
          alt="user author"
        />
        <div className="add-user-banner-content">
          <span className="add-user-banner-title">Add New Users</span>
          <div className="file-upload">
            {/* <input type="file" style={{ display: "none" }} /> */}
            <span className="file-upload-placeholder">
              Upload csv file of user
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
                hidden
                accept=".csv"
                style={{ display: "none" }}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="manage-users-section">
        <div className="manage-title">Manage All Users</div>
        <div className="list-users-title">List of csv Files of users</div>
        <div className="user-list-container">
          {usersList && usersList.length
            ? usersList.map((item) => (
                <UserList
                  key={item.id}
                  userData={item}
                  deleteClick={handleDeleteClick}
                />
              ))
            : null}
        </div>
        <div className="view-more-btn-container">
          <span className="view-more-btn">
            View More{" "}
            <img
              src={arrowDown}
              style={{ transform: "rotate(-90deg)", marginLeft: 5 }}
              alt="arrow down"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Users;
