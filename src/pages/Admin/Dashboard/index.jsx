import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import EventsLists from "./EventsLists";
import {Container, Row, Col, Card} from 'react-bootstrap'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer
} from "recharts";


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
        // console.log(response, "response");
        setEvents(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="admin-dashboard">
      <Container>
      <div className="header-title">Dashboard</div>

      {/* <div className="events-section"> */}
       
        {/* <div className="left-section"> */}
       
        
          <span className="section-title">Events</span>
          {/* <div className="section-body"> */}
          <Row>
          <Col lg={7} sm={6}>
          <Card>
            <Card.Body>
            {events.map((item, index) => (
              <EventsLists key={index} data={item} />
            ))}
            </Card.Body>
            </Card>
            </Col>
            
            {/* <EventsLists />
            <EventsLists />
            <EventsLists />
            <EventsLists /> */}
          {/* </div> */}
          
        {/* </div> */}
        <Col lg={5} sm={6}>
        {/* <div className="right-section"> */}
        <span className='section-title '>Membership</span>
          {/* <div className="section-body"> */}
          <ResponsiveContainer width="100%" height="50%" className=' bg-white' strokeDasharray  >
            <LineChart width={530} height={100} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Decrease" stroke="#A93BFF" />
            </LineChart>
            </ResponsiveContainer>
          {/* </div>
         
        </div> */}
        </Col>
        </Row>
       
        
      {/* </div> */}
      <div className="membership-section">
        {/* <span className="section-title">Membership Categories</span> */}
        {/* <div className="section-container"> */}
        {/* <Row>
          <div className="section-body">
            <BarChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Increase" fill="#5ACFCF" />
              <Bar dataKey="Decrease" fill="#E6E8EC" />
            </BarChart>
          </div>
          <div className="section-body">
            <BarChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Increase" fill="#5ACFCF" />
              <Bar dataKey="Decrease" fill="#E6E8EC" />
            </BarChart>
          </div>
          <div className="section-body">
            <BarChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Increase" fill="#5ACFCF" />
              <Bar dataKey="Decrease" fill="#E6E8EC" />
            </BarChart>
          </div>
          </Row> */}
        </div>
        <Row>
      <span className='section-title mt-3 mb-3'>Membership Categories</span>
        <Col lg={4} sm={6}>
        <ResponsiveContainer width="100%" height="90%" className='mt-4 bg-white' strokeDasharray  >
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="Increase" fill="#5ACFCF" />
      <Bar dataKey="Decrease" fill="#E6E8EC" />
    </BarChart>
        </ResponsiveContainer>
        </Col>
        <Col lg={4} sm={6}>
        <ResponsiveContainer width="100%" height="90%" className='mt-4 bg-white' strokeDasharray  >
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="Increase" fill="#5ACFCF" />
      <Bar dataKey="Decrease" fill="#E6E8EC" />
    </BarChart>
        </ResponsiveContainer>
        </Col>
        <Col lg={4} sm={6}>
        <ResponsiveContainer width="100%" height="90%" className='mt-4 bg-white' strokeDasharray  >
        <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="Increase" fill="#5ACFCF" />
      <Bar dataKey="Decrease" fill="#E6E8EC" />
    </BarChart>
        </ResponsiveContainer>
      </Col>
      </Row>
      {/* </div> */}
      
      </Container>
    </div>
  );
}

export default Dashboard;
