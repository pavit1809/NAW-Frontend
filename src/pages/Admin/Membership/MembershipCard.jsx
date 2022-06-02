import React from "react";
import cardImage from "../../../assets/admin-images/membership-card-image.png";
import "./membership.css";

function MembershipCard() {
  return (
    <div className="membership-card">
      <div className="card-image">
        <img src={cardImage} alt="membership card" />
      </div>
      <div className="card-details">
        <p>Eleanor Pena</p>
        <p>Dog Trainer</p>
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
}

export default MembershipCard;
