import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import imageOne from "../../../assets/admin-images/membership-row-one.png";
import "./membership.css";
import MembershipCard from "./MembershipCard";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [membership, setMemberShip] = useState([]);

  useEffect(() => {
    axios
      .get("membership-plan/")
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          console.log("Data: ", response.data.data);
          setMemberShip(response.data.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEdit = (id) => {
    navigate("/admin/membership/edit-membership", { state: { memberId: id } });
  };

  return (
    <div className="admin-users">
      <div className="header-title">Membership</div>
      <div className="membership-row-one">
        <div className="row-one-one">
          <img src={imageOne} alt="/membership-row-one" />
        </div>
        <div className="row-one-two">
          <p>Manage Memberships</p>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/admin/membership/create-membership")}
          >
            Create New Membership
          </button>
          <button
            style={{ cursor: "pointer" }}
            onClick={() => handleEdit(item.id)}
          >
            Edit Membership
          </button>
        </div>
      </div>
      <div className="membership-row-two">
        {membership &&
          membership.map((item) => (
            <div className="row-two" key={item.id}>
              <div className="row-two-para">
                <Button onClick={() => handleEdit(item.id)}>{item.name}</Button>
              </div>
              <div className="row-two-block">
                <MembershipCard />
              </div>
            </div>
          ))}
        {/* <div className="row-two">
          <div className="row-two-para">
            <p>Free membership subscribers</p>
          </div>
          <div className="row-two-block">
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
            <MembershipCard />
          </div>
        </div>
        <div className="row-two">
          <div className="row-two-para">
            <p>$39 per year subscribers</p>
          </div>
          <div className="row-two-block">
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
          </div>
        </div>
        <div className="row-two">
          <div className="row-two-para">
            <p>$199 per year subscribers</p>
          </div>
          <div className="row-two-block">
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
            <MembershipCard></MembershipCard>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Index;
