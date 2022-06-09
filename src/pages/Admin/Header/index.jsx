import React, { useState, useEffect } from "react";
import "./header.css";
import { useLocation } from "react-router-dom";
import avatarIcon from "../../../assets/admin-images/avatar.png";
import arrowDown from "../../../assets/admin-images/arrow-down.png";
import notificationIcon from "../../../assets/admin-images/notification-icon.png";
import { Button } from "@mui/material";

function Header() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="admin-header">
      <div className="left-side">
        {path === "/admin/dashboard" ||
          (path === "/admin/users/details" && (
            <div className="admin-dash-header-searchbar">
              <input type="text" className="" placeholder="Search" />
            </div>
          ))}
        <div className="search">
          <div className="firstSearch">
            {path === "/admin/users" && (
              <div className="admin-dash-header-searchbar">
                <input
                  type="text"
                  className=""
                  placeholder="Search by City and State"
                />
              </div>
            )}
          </div>
          <div className="secondSearch">
            {path === "/admin/users" && (
              <div className="admin-dash-header-searchbar">
                <input
                  type="text"
                  className=""
                  placeholder="Search by Event Type"
                />
              </div>
            )}
          </div>
          <div className="button searchButton">
            {path === "/admin/users" && (
              <div className="btn">
                <Button variant="contained">Search</Button>
              </div>
            )}
          </div>
        </div>

        {path === "/admin/events" && (
          <div className="admin-dash-header-searchbar">
            <input type="text" className="" placeholder="Search" />
          </div>
        )}

        {path === "/admin/membership" && (
          <div className="admin-dash-header-searchbar">
            <input type="text" className="" placeholder="Search" />
          </div>
        )}

        {path === "/admin/ads" && (
          <div className="admin-dash-header-searchbar">
            <input type="text" className="" placeholder="Search" />
          </div>
        )}

        {path === "/admin/blogs" && (
          <div className="admin-dash-header-searchbar">
            <input type="text" className="" placeholder="Search" />
          </div>
        )}

        {path === "/admin/events/create-new-events" && (
          <div className="admin-dash-header-searchbar">
            <input type="text" className="" placeholder="Search" />
          </div>
        )}

        {path === "/admin/membership/create-membership" && (
          <div className="admin-dash-header-searchbar">
            <input type="text" className="" placeholder="Search" />
          </div>
        )}
      </div>
      <div className="user-info-container">
        <img src={avatarIcon} alt="avatar" />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Admin{" "}
          <img src={arrowDown} style={{ marginLeft: 10 }} alt="arror down" />
        </span>
        <div>
          <img src={notificationIcon} alt="notification" />
        </div>
      </div>
    </div>
  );
}

export default Header;
