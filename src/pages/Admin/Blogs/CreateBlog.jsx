import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
// import imageAd from "../../../assets/admin-images/ad-image.png";
import imageBlog from "../../../assets/admin-images/blog-image.png";
import "../Ads/Ads.css";
import { Button } from "@mui/material";

const CreateBlog = () => {
  const navigate = useNavigate();

  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogDate, setBlogDate] = useState("");
  const [blogBanner, setBlogBanner] = useState(null);

  const handleSubmitClick = () => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    const formData = new FormData();
    formData.append("title", blogTitle);
    formData.append("description", blogDescription);
    formData.append("blog_date", moment(blogDate).format("YYYY-MM-DD"));
    formData.append("is_active", true);
    formData.append("banner", blogBanner);

    axios
      .post("blog/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // crossorigin: true,
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          navigate("/admin/blogs", {
            state: {
              EventId: "",
              BlogId: "",
              memberId: "",
              userId: "",
              AdId: "",
            },
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="admin-users">
      <div className="header-title">Blogs</div>
      <div className="ad-rows">
        <div className="ad-row-one">
          <p>Create Blogs</p>
          <div className="input-block">
            <label htmlFor="">Blog Title</label>
            <input
              type="text"
              placeholder="Enter Name of the Blog"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Blog Date</label>
            <input
              type="date"
              placeholder="Enter Date of the Blog"
              value={blogDate}
              onChange={(e) => setBlogDate(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Blog Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Description of the Blog"
              value={blogDescription}
              onChange={(e) => setBlogDescription(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Blog Banner</label>
            {/* <input
              type="file"
              accept="image/*"
              placeholder="Upload the banner of the Blog"
              // value={blogBanner}
            /> */}
            <div className="file-upload">
              {/* <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => setBlogBanner(e.target.files[0])}
                placeholder="Upload the banner of the Blog"
              /> */}
              <span className="file-upload-placeholder">
                Upload the banner of the Blog
              </span>
              {/* <span className="file-upload-btn">Upload</span> */}
              <Button
                variant="contained"
                className="file-upload-btn"
                component="label"
              >
                Upload
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  style={{ display: "none" }}
                  onChange={(e) => setBlogBanner(e.target.files[0])}
                />
              </Button>
            </div>
          </div>
          <div className="input-block">
            <button onClick={() => handleSubmitClick()}>Create New Blog</button>
          </div>
        </div>
        <div className="ad-row-two">
          <img src={imageBlog} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
