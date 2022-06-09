import React from "react";
import cardImage from "../../../assets/admin-images/membership-card-image.png";
// import CardImage from "../../../assets/admin-images/avatar-img.png";
import "./membership.css";
import { Card } from "react-bootstrap";
function MembershipCard() {
  return (
    // <div className="membership-card">
    //   <div className="card-image">
    <Card>
      <Card.Img src={cardImage} alt="membership card" />
      <Card.Body>
        {/* // </div> */}
        {/* // <div className="card-details"> */}
        <Card.Text>Eleanor Pena</Card.Text>
        <Card.Text>Dog Trainer</Card.Text>
        <Card.Text>Lorem Ipsum</Card.Text>
      </Card.Body>
    </Card>
    // </div>
    // </div>
  );
}

export default MembershipCard;
