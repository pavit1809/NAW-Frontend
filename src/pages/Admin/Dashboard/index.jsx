import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dashboard.css";
import EventsLists from "./EventsLists";
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
      <div className="header-title">Dashboard</div>
      <div className="events-section">
        <div className="left-section">
          <span className="section-title">Events</span>
          <div className="section-body">
            {events.map((item, index) => (
              <EventsLists key={index} data={item} />
            ))}
            {/* <EventsLists />
            <EventsLists />
            <EventsLists />
            <EventsLists /> */}
          </div>
        </div>
        <div className="right-section">
          <span className="section-title">Membership</span>
          <div className="section-body">
            <LineChart width={530} height={300} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="Decrease" stroke="#A93BFF" />
            </LineChart>
          </div>
        </div>
      </div>
      <div className="membership-section">
        <span className="section-title">Membership Categories</span>
        <div className="section-container">
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
