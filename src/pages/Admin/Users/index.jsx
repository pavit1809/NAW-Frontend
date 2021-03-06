import React, { useEffect, useState } from "react";
import "./Users.css";
import userBanner from "../../../assets/admin-images/user-banner.png";
import UserList from "./UserList";
import arrowDown from "../../../assets/admin-images/arrow-down.png";
import { Button, Input } from "@mui/material";
import { Container, Row, Col, Image, Card, Table } from "react-bootstrap";
import axios from "axios";
import "@fontsource/playfair-display";
import "@fontsource/inter";

const Users = () => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("user/", {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setUsersList(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteClick = (id) => {
    axios
      .delete(`user/${id}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.data.status.code === 200) {
          setUsersList(usersList.filter((item) => item.id !== id));
        }
      })
      .catch((error) => console.log(error));
  };

  const uploadModalStyle = {
    "border-radius": "8px",
  };

  const tableStyle = {
    "margin-left": "-5rem",
  };

  const [uploadedFile, setUploadedFile] = useState(null);
  return (
    <div className="admin-users">
      <Container>
        <div className="header-title">
          Users
          <Button
            variant="contained"
            style={{
              width: "113px",
              height: "30px",
              left: "817px",
            }}
            component="label"
          >
            Filter
          </Button>
          <Button
            variant="contained"
            style={{
              width: "205px",
              height: "14px",
              left: "839px",
            }}
            component="label"
          >
            Download User CSV
          </Button>
        </div>
        {/* <div className="add-user-banner"> */}
        <Card style={uploadModalStyle}>
          <Card.Body>
            <Row>
              <Col lg={6}>
                <img
                  src={userBanner}
                  className="add-user-banner-img"
                  alt="user author"
                />
              </Col>
              <Col lg={6}>
                <div className="add-user-banner-content">
                  <h4 className="text-center mt-5 fw-bold">Add New Users</h4>
                  <div className="file-upload">
                    {/* <input type="file" style={{ display: "none" }} /> */}
                    <span className="file-upload-placeholder">
                      {uploadedFile ? uploadedFile : "Upload csv file of user"}
                    </span>
                    {/* <span className="file-upload-btn">Upload</span> */}
                    <Button
                      variant="contained"
                      className="file-upload-btn"
                      component="label"
                    >
                      Upload
                      <Input
                        type="file"
                        hidden
                        // accept=".csv"
                        style={{ display: "none" }}
                        onChange={(e) => setUploadedFile(e.target.files[0].name)}
                      />
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* </div> */}
        <div className="manage-users-section">
          <div className="manage-title">Manage All Users</div>
          <div className="list-users-title">List of csv Files of users</div>
          {usersList && usersList.length
            ? usersList.map((item) => (
                <UserList
                  key={item.id}
                  userData={item}
                  deleteClick={handleDeleteClick}
                />
              ))
            : null}
          <div className="view-more-btn-container">
            <span className="view-more-btn">
              View More{" "}
              <img
                src={arrowDown}
                style={{ transform: "rotate(-90deg)", marginLeft: 5 }}
                alt="arrow down"
              />
            </span>
          </div>
          {/* </Container> */}
        </div>
      </Container>
    </div>
  );
};

export default Users;
