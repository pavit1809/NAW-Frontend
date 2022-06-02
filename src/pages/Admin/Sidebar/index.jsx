import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import headerLogo from "../../../assets/admin-images/Logo.png";
import dashboardLogo from "../../../assets/admin-images/dashboard-inactive.png";
import usersLogo from "../../../assets/admin-images/user-inactive.png";
import eventsLogo from "../../../assets/admin-images/events-inactive.png";
import membershipLogo from "../../../assets/admin-images/membership-inactive.png";
import adsLogo from "../../../assets/admin-images/ads-inactive.png";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="admin-sidebar">
      <img src={headerLogo} height="50px" alt="header" />
      <div className="drawer-menu-container">
        <div
          className={`drawer-item ${
            path === "/admin/dashboard" ? "selected" : ""
          }`}
          onClick={() =>
            navigate("/admin/dashboard", {
              state: {
                EventId: "",
                BlogId: "",
                memberId: "",
                userId: "",
                AdId: "",
              },
            })
          }
        >
          <span className="d-inline-block mr-1" style={{ width: 25 }}>
            <img
              src={dashboardLogo}
              width="20px"
              height="18px"
              alt="dashboard logo"
            />
          </span>
          <span className="drawer-item-menu">Dashboard</span>
        </div>
        <div
          className={`drawer-item ${path === "/admin/users" ? "selected" : ""}`}
          onClick={() =>
            navigate("/admin/users", {
              state: {
                EventId: "",
                BlogId: "",
                memberId: "",
                userId: "",
                AdId: "",
              },
            })
          }
        >
          <span className="d-inline-block mr-1" style={{ width: 25 }}>
            <img src={usersLogo} width="16px" height="20px" alt="user logo" />
          </span>
          <span className="drawer-item-menu">Users</span>
        </div>
        <div
          className={`drawer-item ${
            path === "/admin/events" ? "selected" : ""
          }`}
          onClick={() =>
            navigate("/admin/events", {
              state: {
                EventId: "",
                BlogId: "",
                memberId: "",
                userId: "",
                AdId: "",
              },
            })
          }
        >
          <span className="d-inline-block mr-1" style={{ width: 25 }}>
            <img
              src={eventsLogo}
              width="19px"
              height="13px"
              alt="events logo"
            />
          </span>
          <span className="drawer-item-menu">Events</span>
        </div>
        <div
          className={`drawer-item ${
            path === "/admin/membership" ? "selected" : ""
          }`}
          onClick={() =>
            navigate("/admin/membership", {
              state: {
                EventId: "",
                BlogId: "",
                memberId: "",
                userId: "",
                AdId: "",
              },
            })
          }
        >
          <span className="d-inline-block mr-1" style={{ width: 25 }}>
            <img
              src={membershipLogo}
              width="16px"
              height="24px"
              alt="membership logo"
            />
          </span>
          <span className="drawer-item-menu">Membership</span>
        </div>
        <div
          className={`drawer-item ${path === "/admin/ads" ? "selected" : ""}`}
          onClick={() =>
            navigate("/admin/ads", {
              state: {
                EventId: "",
                BlogId: "",
                memberId: "",
                userId: "",
                AdId: "",
              },
            })
          }
        >
          <span className="d-inline-block mr-1" style={{ width: 25 }}>
            <img src={adsLogo} width="20px" height="18px" alt="ads logo" />
          </span>
          <span className="drawer-item-menu">Ads</span>
        </div>
        <div
          className={`drawer-item ${path === "/admin/blogs" ? "selected" : ""}`}
          onClick={() =>
            navigate("/admin/blogs", {
              state: {
                EventId: "",
                BlogId: "",
                memberId: "",
                userId: "",
                AdId: "",
              },
            })
          }
        >
          <span className="d-inline-block mr-1" style={{ width: 25 }}>
            <img src={adsLogo} width="20px" height="18px" alt="blogs logo" />
          </span>
          <span className="drawer-item-menu">Blogs</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
