import moment from "moment";
import React from "react";
import "./EventsLists.css";

const EventsLists = ({ data }) => {
  const { event_date, name, created_on } = data;
  // console.log(data);

  return (
    <div className="events-lists">
      <div className="event-left-section">
        <span className="text-1">
          {name}
        </span>
        <span className="text-2">
          Created on {moment(created_on).format("MM/DD/YYYY")}
        </span>
      </div>
      <div className="event-mid-section">
        <span className="text-2">5500 people Registered</span>
      </div>
      <div className="event-right-section">
        <span className="text-1">
          {moment(created_on).format("MM/DD/YYYY")} - {moment(new Date(event_date)).format("MM/DD/YYYY")} 
        </span>
        <span className="text-2">Date Range</span>
      </div>
    </div>
  );
};

export default EventsLists;
