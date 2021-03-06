import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import EventsLists from "./EventsLists";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import FreeImg from "../../../assets/admin-images/Free.png";
import Img_$39 from "../../../assets/admin-images/39$.png";
import Img_$199 from "../../../assets/admin-images/199$.png";
import "@fontsource/playfair-display";
import "@fontsource/inter";

function Dashboard() {
  const [events, setEvents] = useState([]);

  const data = [
    {
      name: "Page A",
      Decrease: 4000,
      Increase: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Decrease: 3000,
      Increase: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Decrease: 2000,
      Increase: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Decrease: 2780,
      Increase: 3908,
      amt: 2000,
    },
  ];

  useEffect(() => {
    axios
      .get("event/")
      .then((response) => {
        let arr = response.data.data;
        let arr_sliced = arr.slice(0, 5);
        setEvents(arr_sliced);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="admin-dashboard">
      <Container className="">
        <div className="header-title" style={{ padding: "1%" }}>
          Dashboard
        </div>

        <Row class="firstrow">
          <Col lg={7} sm={6} className="">
            <span className="section-title" style={{ padding: "2%" }}>
              Events
            </span>
            <br />
            <br />
            <Card
              style={{
                borderRadius: "8px",
                boxShadow: "0px 20px 45px #F0EDF6",
                marginLeft: "10px"
              }}
            >
              <Card.Body>
                {events.map((item, index) => (
                  <EventsLists key={index} data={item} />
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5} sm={6}>
            <span className="section-title">Membership</span>
            <br />
            <br />
            <ResponsiveContainer
              width="100%"
              height="88%"
              className=" bg-white graph"
              strokeDasharray
              style={{
                borderRadius: "20px",
                boxShadow: "0px 20px 45px #F0EDF6",
              }}
            >
              <LineChart width={530} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="Decrease" stroke="#A93BFF" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
        </Row>
        <br />
        <br />

        <Row>
          <span className="section-title mt-3 mb-4">Membership Categories</span>
          <Col lg={4} sm={6}>
            <ResponsiveContainer
              width="336px"
              height="300px"
              className="mt-4 bg-white"
              strokeDasharray
            >
              <img src={FreeImg} alt="Free Image" className="graph-image"/>
            </ResponsiveContainer>
          </Col>
          <Col lg={4} sm={6}>
            <ResponsiveContainer
              width="336px"
              height="300px"
              className="mt-4 bg-white"
              strokeDasharray
            >
              <img src={Img_$39} alt="$39 Image" className="graph-image"/>
            </ResponsiveContainer>
          </Col>
          <Col lg={4} sm={6}>
            <ResponsiveContainer
              width="336px"
              height="300px"
              className="mt-4 bg-white"
              strokeDasharray
            >
              <img src={Img_$199} alt="$199 Image" className="graph-image"/>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
