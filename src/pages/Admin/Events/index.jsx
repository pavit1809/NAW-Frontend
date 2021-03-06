import React from "react";
import imageOne from "../../../assets/admin-images/events-row-one.png";
import rowTwoOne from "../../../assets/admin-images/row-two-one.png";
import rowTwoTwo from "../../../assets/admin-images/row-two-two.png";
import rowTwoThree from "../../../assets/admin-images/row-two-three.png";
import "./events.css";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";
import "@fontsource/inter";

function Index() {
  const navigate = useNavigate();

  const EventContainerStyle = {

  };

  return (
    <div className="admin-users">
      <Container>
        <div className="header-title">Events</div>
        <Card className="card-top event-create-container" style={{height: "300px"}}>
          <Card.Body>
            <Row>
              <Col md={6}>
                <div className="d-flex justify-content-center">
                  <img src={imageOne} alt="/events-row-one" />
                </div>
              </Col>
              <Col md={6}>
                <div className="row-one-two">
                  <p>Change Events</p>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/admin/events/create-new-events")}
                  >
                    Create New Events
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card> 

        <Container className="mt-5 event-card">
          <Row>
            <Col md={4}>
              <Card className="event-type-common" style={{width:"300px", height:"437px"}}>
                <Card.Body>
                  <Card.Img src={rowTwoOne} alt="row-two-one" />
                  <div className="row-two-para">
                    <Button
                      onClick={() => navigate("/admin/events/event-details")}
                    >
                      Free Events
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="event-type-common" style={{width:"400px", height:"437px"}}>
                <Card.Body>
                  <Card.Img src={rowTwoTwo} alt="row-two-two" />
                  <div className="row-two-para">
                    <Button
                      onClick={() =>
                        navigate("/admin/events/event-details-paid")
                      }
                    >
                      Paid Events of $39 Membership
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="event-type-common" style={{width:"400px", height:"437px"}}>
                <Card.Body>
                  <Card.Img src={rowTwoThree} alt="row-two-three" />
                  <div className="row-two-para">
                    <Button
                      onClick={() =>
                        navigate("/admin/events/event-details-paid2")
                      }
                    >
                      Paid Events of $199 Membership
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Index;
