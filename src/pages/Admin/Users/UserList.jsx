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
    <div className="main-user-info-body">
      <div className="user-list-card">
        <div className="user-image-name">
          <div className="img-div">
            <img
              src={profile_pic || userIcon}
              className="user-icon"
              alt="usericon"
            />
          </div>

          <div className="user-name-div">
            <span className="user-name">
              {last_name} {first_name}
            </span>
            <span className="user-profession">{job_title}</span>
          </div>
        </div>
        <div className="user-info-div">{email}</div>
        <div className="ms-auto">
          <div className="user-action-div">
            <img src={viewIcon} alt="viewicon" className="action-icon" />
            <span
              style={{ cursor: "pointer" }}
              className="mx-3"
              onClick={() =>
                navigate("/admin/users/details", { state: { userId: id } })
              }
            >
              View
            </span>
            <img src={editIcon} alt="editicon" className="action-icon" />
            <span style={{ cursor: "pointer" }} className="mx-3">
              Edit
            </span>
            <img src={deleteIcon} alt="deleteicon" className="action-icon" />
            <span
              style={{ cursor: "pointer" }}
              onClick={() => deleteClick(id)}
              className="mx-3"
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
