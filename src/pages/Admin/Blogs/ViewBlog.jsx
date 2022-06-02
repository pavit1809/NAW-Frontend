import React, { useEffect, useState } from "react";
import EventPhoto from "../../../assets/images/EventPhoto.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Blogs.css";

const ViewBlog = () => {
  const {
    state: { BlogId },
  } = useLocation();
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [blogdata, setBlogData] = useState({});

  useEffect(() => {
    axios
      .get(`blog/${BlogId}/`, {
        headers: {
          authorization: `Bearer ${auth.access_token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        if (response.status >= 200 && response.status < 210)
          setBlogData(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteClick = () => {
    axios
      .delete(`blog/${blogdata.id}/`, {
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
    <div className="blog-main-content">
      <h1>{blogdata.title}</h1>
      <div className="blog-main-img">
        {/* <img src={blogdata.banner} alt="" /> */}
        <img src={EventPhoto} alt="" />
      </div>
      <div className="blog-title-area">
        <div className="bt-left-auto">
          <span>Blog Title</span>
          <h3>{blogdata.title}</h3>
        </div>
        <div className="bt-left-second">
          <span>Blog Date</span>
          <h3>{blogdata.blog_date}</h3>
        </div>
        <div className="bt-right">
          <a
            href=""
            onClick={() =>
              navigate("/admin/blogs/edit-blog", {
                state: { BlogId: blogdata.id },
              })
            }
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.828 1.172C30.0779 0.422116 29.0607 0.000854492 28 0.000854492C26.9393 0.000854492 25.9221 0.422116 25.172 1.172L10 16.344V22H15.656L30.828 6.828C31.5779 6.07789 31.9991 5.06066 31.9991 4C31.9991 2.93934 31.5779 1.92211 30.828 1.172Z"
                fill="#3670F8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8C0 6.93913 0.421427 5.92172 1.17157 5.17157C1.92172 4.42143 2.93913 4 4 4H12C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8H4V28H24V20C24 19.4696 24.2107 18.9609 24.5858 18.5858C24.9609 18.2107 25.4696 18 26 18C26.5304 18 27.0391 18.2107 27.4142 18.5858C27.7893 18.9609 28 19.4696 28 20V28C28 29.0609 27.5786 30.0783 26.8284 30.8284C26.0783 31.5786 25.0609 32 24 32H4C2.93913 32 1.92172 31.5786 1.17157 30.8284C0.421427 30.0783 0 29.0609 0 28V8Z"
                fill="#3670F8"
              />
            </svg>
          </a>

          <a href="" onClick={() => handleDeleteClick()}>
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C11.6287 0.000198297 11.2647 0.103766 10.9489 0.299105C10.6332 0.494443 10.378 0.773838 10.212 1.106L8.764 4H2C1.46957 4 0.960859 4.21071 0.585786 4.58579C0.210714 4.96086 0 5.46957 0 6C0 6.53043 0.210714 7.03914 0.585786 7.41421C0.960859 7.78929 1.46957 8 2 8V28C2 29.0609 2.42143 30.0783 3.17157 30.8284C3.92172 31.5786 4.93913 32 6 32H22C23.0609 32 24.0783 31.5786 24.8284 30.8284C25.5786 30.0783 26 29.0609 26 28V8C26.5304 8 27.0391 7.78929 27.4142 7.41421C27.7893 7.03914 28 6.53043 28 6C28 5.46957 27.7893 4.96086 27.4142 4.58579C27.0391 4.21071 26.5304 4 26 4H19.236L17.788 1.106C17.622 0.773838 17.3668 0.494443 17.0511 0.299105C16.7353 0.103766 16.3713 0.000198297 16 0H12ZM8 12C8 11.4696 8.21071 10.9609 8.58579 10.5858C8.96086 10.2107 9.46957 10 10 10C10.5304 10 11.0391 10.2107 11.4142 10.5858C11.7893 10.9609 12 11.4696 12 12V24C12 24.5304 11.7893 25.0391 11.4142 25.4142C11.0391 25.7893 10.5304 26 10 26C9.46957 26 8.96086 25.7893 8.58579 25.4142C8.21071 25.0391 8 24.5304 8 24V12ZM18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12V24C16 24.5304 16.2107 25.0391 16.5858 25.4142C16.9609 25.7893 17.4696 26 18 26C18.5304 26 19.0391 25.7893 19.4142 25.4142C19.7893 25.0391 20 24.5304 20 24V12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10Z"
                fill="#217BF4"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="title-desc">Blog Description</div>
      <p>{blogdata.description}</p>
    </div>
  );
};

export default ViewBlog;
