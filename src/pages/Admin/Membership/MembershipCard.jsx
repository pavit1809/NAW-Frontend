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
      <div className="card-main" style={{ display: "flex" }}>
        <Card.Img
          src={cardImage}
          alt="membership card"
          style={{
            margin: "5%",
            width: "20%",
            height: "50%",
          }}
        />
        {/* <div className="card-img"></div> */}
        <div className="card-body">
          <Card.Body>
            <Card.Text>
              Eleanor Pena <br />
              Dog Trainer <br />
              Lorem Ipsum
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
    // </div>
    // </div>
  );
}

export default MembershipCard;
