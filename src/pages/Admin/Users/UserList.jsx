import React from "react";
import "./Users.css";
import userIcon from "../../../assets/admin-images/user-icon.png";
import viewIcon from "../../../assets/admin-images/view-icon.png";
import editIcon from "../../../assets/admin-images/edit-icon.png";
import deleteIcon from "../../../assets/admin-images/delete-icon.png";
import { useNavigate } from "react-router-dom";

const UserList = ({ userData, deleteClick }) => {
  const navigate = useNavigate();
  const { id, first_name, job_title, last_name, profile_pic, email } = userData;

  return (
    <div className="user-list-card">
      <div className="user-image-name">
        <img
          src={profile_pic || userIcon}
          className="user-icon"
          alt="usericon"
        />
        <div className="user-name-div">
          <span className="user-name">
            {last_name} {first_name}
          </span>
          <span className="user-profession">{job_title}</span>
        </div>
      </div>
      <div className="user-info-div">{email}</div>
      <div className="user-action-div">
        <img
          src={viewIcon}
          alt="viewicon"
          style={{ marginRight: 22 }}
          className="action-icon"
        />
        <span
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate("/admin/users/details", { state: { userId: id } })
          }
        >
          View
        </span>
        <img
          src={editIcon}
          style={{ marginRight: 22 }}
          alt="editicon"
          className="action-icon"
        />
        <span style={{ cursor: "pointer" }}>Edit</span>
        <img
          src={deleteIcon}
          style={{ marginRight: 22 }}
          alt="deleteicon"
          className="action-icon"
        />
        <span style={{ cursor: "pointer" }} onClick={() => deleteClick(id)}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default UserList;
