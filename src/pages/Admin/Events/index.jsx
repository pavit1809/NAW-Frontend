import React from "react";
import imageOne from "../../../assets/admin-images/events-row-one.png";
import rowTwoOne from "../../../assets/admin-images/row-two-one.png";
import rowTwoTwo from "../../../assets/admin-images/row-two-two.png";
import rowTwoThree from "../../../assets/admin-images/row-two-three.png";
import "./events.css";
import { useNavigate } from "react-router-dom";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import { Button } from "@mui/material";

function Index() {
  const navigate = useNavigate();

  return (
    <div className="admin-users">
      <Container>
        <div className="header-title">Events</div>
        {/* <div className="events-row-one"> */}
        <Card class="card-top">
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
              <Card>
                <Card.Body>
                  {/* </div> */}
                  {/* <div className="events-row-two"> */}
                  {/* <div className="row-two"> */}
                  {/* <div className="row-two-image"> */}
                  <Card.Img src={rowTwoOne} alt="row-two-one" />
                  {/* </div> */}
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
              <Card>
                <Card.Body>
                  {/* </div> */}
                  {/* <div className="row-two"> */}
                  {/* <div className="row-two-image"> */}
                  <Card.Img src={rowTwoTwo} alt="row-two-two" />
                  {/* </div> */}
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
              <Card>
                <Card.Body>
                  {/* </div> */}
                  {/* <div className="row-two">
          <div className="row-two-image"> */}
                  <Card.Img src={rowTwoThree} alt="row-two-three" />
                  {/* </div> */}
                  <div className="row-two-para">
                    <Button
                      onClick={() =>
                        navigate("/admin/events/event-details-paid2")
                      }
                    >
                      Paid Events of $199 Membership
                    </Button>
                  </div>
                  {/* </div> */}
                  {/* </div> */}
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
