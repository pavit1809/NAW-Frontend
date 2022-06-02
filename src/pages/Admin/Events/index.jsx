import React from "react";
import imageOne from "../../../assets/admin-images/events-row-one.png";
import rowTwoOne from "../../../assets/admin-images/row-two-one.png";
import rowTwoTwo from "../../../assets/admin-images/row-two-two.png";
import rowTwoThree from "../../../assets/admin-images/row-two-three.png";
import "./events.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="admin-users">
      <div className="header-title">Events</div>
      <div className="events-row-one">
        <div className="row-one-one">
          <img src={imageOne} alt="/events-row-one" />
        </div>
        <div className="row-one-two">
          <p>Change Events</p>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/events/create-new-events")}
          >
            Create New Events
          </button>
        </div>
      </div>
      <div className="events-row-two">
        <div className="row-two">
          <div className="row-two-image">
            <img src={rowTwoOne} alt="row-two-one" />
          </div>
          <div className="row-two-para">
            <Button onClick={() => navigate("/admin/events/event-details")}>
              Free Events
            </Button>
          </div>
        </div>
        <div className="row-two">
          <div className="row-two-image">
            <img src={rowTwoTwo} alt="row-two-two" />
          </div>
          <div className="row-two-para">
            <Button
              onClick={() => navigate("/admin/events/event-details-paid")}
            >
              Paid Events of $39 Membership
            </Button>
          </div>
        </div>
        <div className="row-two">
          <div className="row-two-image">
            <img src={rowTwoThree} alt="row-two-three" />
          </div>
          <div className="row-two-para">
            <Button
              onClick={() => navigate("/admin/events/event-details-paid2")}
            >
              Paid Events of $199 Membership
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
