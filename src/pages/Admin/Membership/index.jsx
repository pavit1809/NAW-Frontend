import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import imageOne from "../../../assets/admin-images/membership-row-one.png";
import "./membership.css";
import MembershipCard from "./MembershipCard";
import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const Index = () => {
  const navigate = useNavigate();
  const [membership, setMemberShip] = useState([]);
  const [membershipCategory2, setMembershipCategory2] = useState([]);
  const [membershipCategory3, setMembershipCategory3] = useState([]);

  useEffect(() => {
    axios
      .get("membership-plan/")
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          const allEvents = response.data.data;
          const events1 = allEvents.filter((event) => (parseInt(event.price) < 39));
          const events2 = allEvents.filter((event) => (parseInt(event.price) >= 39 && parseInt(event.price) <= 199));
          const events3 = allEvents.filter((event) => (parseInt(event.price) >199));
          setMemberShip(events1);
          setMembershipCategory2(events2);
          setMembershipCategory3(events3);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (id) => {
    navigate("/admin/membership/edit-membership", { state: { memberId: id } });
  };

  return (
    <div className="admin-users">
      <Container fluid>
        <div className="header-title">Membership</div>
        {/* <div className="membership-row-one"> */}
        <Card class="shadow-3">
          <Card.Body>
            <Row>
              <Col md={6}>
                <div className="d-flex justify-content-center">
                  <img src={imageOne} alt="/membership-row-one" />
                </div>
              </Col>
              <Col md={6}>
                <div className="row-one-two">
                  <p>Manage Memberships</p>
                  <button
                    style={{ cursor: "pointer", width: "45%" }}
                    onClick={() =>
                      navigate("/admin/membership/create-membership")
                    }
                  >
                    Create New Membership
                  </button>
                  <br></br>
                  <button
                    style={{ cursor: "pointer", width: "45%" }}
                    onClick={() => handleEdit(membership.id)}
                  >
                    Edit Membership
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* </div> */}
        <Row>
          <Col>
            <div
              className="sub-heading"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "144%",
                textAlign: "center",
                width: "80%",
                margin: "5%",
                marginTop: "10%",
              }}
            >
              Free Membership subscribers
            </div>
            {membership &&
              membership.map((item) => (
                <div className="con">
                  <MembershipCard user={item}/>
                </div>
              ))}
          </Col>
          <Col>
            <div
              className="sub-heading"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "144%",
                textAlign: "center",
                width: "65%",
                margin: "5%",
                marginTop: "10%",
              }}
            >
              $39 per year subscribers
            </div>
            {membershipCategory2 &&
              membershipCategory2.map((item) => (
                <div className="con">
                  <MembershipCard user={item}/>
                </div>
              ))}
          </Col>
          <Col>
            <div
              className="sub-heading"
              style={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "26px",
                lineHeight: "144%",
                textAlign: "center",
                width: "65%",
                margin: "5%",
                marginTop: "10%",
              }}
            >
              $199 per year subscribers
            </div>
            {membershipCategory3 &&
              membershipCategory3.map((item) => (
                <div className="con">
                  <MembershipCard user={item}/>
                </div>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
