import React, { useEffect, useState } from "react";
import { Button, /* Container, */ Grid, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import axios from "axios";
import { BlogCard } from "./BlogCard";

const Index = () => {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));

  const [blogs, setBLogs] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("blog/")
      .then((response) => {
        if (response.status >= 200 && response.status < 210) {
          setBLogs(response.data.data);
          setCount(response.data.count);
        }
        // console.log(response, "response");
      })
      .catch((error) => console.log(error));
  }, []);

  const handleViewClick = (id) => {
    navigate("/admin/blogs/view-blog", { state: { BlogId: id } });
  };

  const handleEditClick = (id) => {
    navigate("/admin/blogs/edit-blog", { state: { BlogId: id } });
  };

  const handleDeleteClick = (id) => {
    axios
      .delete(`blog/${id}/`, {
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
      <div className="header-div">
        <div className="header-title">
          <h5 className="dispaly-4 fw-bold mx-5">All Blogs</h5>
        </div>
        <div>
          <Button
            className="blog-btn"
            variant="contained"
            onClick={() => navigate("/admin/blogs/create-new-blog")}
          >
            Add New Blog
          </Button>
        </div>
      </div>
      {/* <Container sx={{ my: 7.5 }} disableGutters> */}
      <Grid width={"100%"} container justifyContent={"space-evenly"}>
        {blogs && blogs.length
          ? blogs.map((item) => (
              <Grid key={item.id} sx={{ mt: 8, mb: 2, mx: 1 }}>
                <BlogCard
                  data={item}
                  viewBlog={handleViewClick}
                  deleteBlog={handleDeleteClick}
                  editBlog={handleEditClick}
                />
              </Grid>
            ))
          : null}
      </Grid>
      {/* </Container> */}
      <Grid container justifyContent={"center"} my={3}>
        <Pagination
          count={Math.ceil(count / 10)}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Grid>
    </div>
  );
};

export default Index;
