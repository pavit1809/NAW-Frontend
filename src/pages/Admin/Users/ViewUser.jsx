import React from "react";

function ViewUser() {
  return (
    <div className="admin-users">
      <div className="header-title">View User Info</div>
      <div></div>
      <div className="ad-rows">
        <div className="ad-row-one">
          <div className="input-block">
            <label htmlFor="">Event Name</label>
            <input type="text" placeholder="Enter Name of the event" />
          </div>
          <div className="input-block">
            <label htmlFor="">Event Date</label>
            <input type="text" placeholder="Enter Date of the event" />
          </div>
          <div className="input-block">
            <label htmlFor="">Enter event link</label>
            <input type="text" placeholder="Enter link of the event" />
          </div>
          <div className="input-block">
            <label htmlFor="">Event Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description of the event"
            ></textarea>
          </div>

          <div className="input-block">
            <button>Create New Ad</button>
          </div>
        </div>
        <div className="ad-row-two">
          <div className="input-block">
            <label htmlFor="">Event Type</label>
            <input type="text" placeholder="Enter Name of the Ad" />
          </div>
          <div className="input-block">
            <label htmlFor="">Event Time</label>
            <input type="text" placeholder="Enter Time of the event" />
          </div>
          <div className="input-block">
            <label htmlFor="">Enter Banner</label>
            <input type="text" placeholder="Upload the banner of the event" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
