import React, { useEffect, useState } from "react";
// import imageAd from "../../../assets/admin-images/ad-image.png";
import imageOne from "../../../assets/admin-images/membership-row-one.png";
import axios from "axios";
import "../Ads/Ads.css";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const {
    state: { BlogId },
  } = useLocation();
  const auth = JSON.parse(localStorage.getItem("auth"));
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    axios
      .get(`blog/${BlogId}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 210)
          setBlogData(response.data.data);
        console.log(response, "response");
      })
      .catch((error) => console.log(error));
  }, []);

  const handleEditBlogClick = () => {
    const { title, description, blog_date, banner, id } = blogData;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("blog_date", moment(blog_date).format("YYYY-MM-DD"));
    formData.append("is_active", true);
    formData.append("banner", banner);

    axios
      .put(`blog/${id}/`, formData, {
        headers: {
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
          <p>Edit Blogs</p>
          <div className="input-block">
            <label htmlFor="">Blog Title</label>
            <input
              type="text"
              placeholder="Enter Name of the Blog"
              value={blogData.title}
              onChange={(e) =>
                setBlogData({ ...blogData, title: e.target.value })
              }
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Blog Date</label>
            <input
              type="date"
              placeholder="Enter Date of the Blog"
              value={blogData.blog_date}
              onChange={(e) =>
                setBlogData({ ...blogData, blog_date: e.target.value })
              }
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
              value={blogData.description}
              onChange={(e) =>
                setBlogData({ ...blogData, description: e.target.value })
              }
            />
          </div>
          <div className="input-block">
            <label htmlFor="">Blog Banner</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setBlogData({ ...blogData, banner: e.target.files[0] })
              }
              placeholder="Upload the banner of the Ad"
            />
          </div>
          <div className="input-block">
            <button onClick={() => handleEditBlogClick()}>Edit Blog</button>
          </div>
        </div>
        <div className="ad-row-two">
          <img src={imageOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Index;
