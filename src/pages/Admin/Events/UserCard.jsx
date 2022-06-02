import React from "react";
import cardImage from "../../../assets/admin-images/membership-card-image.png";

const UserCard = () => {
  return (
    <div className="user-card">
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
};

export default UserCard;
