import { Box, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import * as React from "react";
import { PropTypes } from "prop-types";
import { ArrowForward } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EventPhoto from "../../../assets/images/EventPhoto.png";

export const BlogCard = ({ data, viewBlog, deleteBlog, editBlog }) => {
  const { title, description, blog_date, banner, id } = data;

  return (
    <Card className="cus-blog-card" sx={{ maxWidth: 345 }} xs={12}>
      <CardMedia
        component="img"
        /* image={banner} */ image={EventPhoto}
        alt="banner"
      />
      <CardContent>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid
            className="blog-innner"
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "15px",
              lineHeight: "26px",
              color: "#9A9A9A",
            }}
          >
            <span style={{fontSize: "15px"}}>Blog Title</span>
            <p style={{
              fontSize: "18px",
              lineHeight: "26px",
            }}>{title}</p>
          </Grid>
          <Grid
            className="blog-innner"
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              fontSize: "15px",
              lineHeight: "26px",
              color: "#9A9A9A",
            }}
          >
            <span style={{fontSize: "15px"}}>Blog Date</span>
            <p style={{
              fontSize: "18px",
              lineHeight: "26px",
            }}>{blog_date}</p>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              fontSize: "12px",
              lineHeight: "26px",
              color: "#9A9A9A",
            }}
          >
            <EditIcon color="primary" onClick={() => editBlog(id)} style={{marginRight:"8px"}}/>
            <DeleteIcon color="primary" onClick={() => deleteBlog(id)} style={{marginLeft:"8px"}} />
          </Grid>
        </Grid>
        <Grid className="blog-innner">
          <span style={{fontSize: "15px"}}>Blog Description</span>
          <p style={{ maxHeight: 50, overflow: "hidden", fontSize: "16px" }}>{description}</p>
        </Grid>
        {/* <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"left"}
          mt={2}
        ></Typography> */}
        <Box
          sx={{ display: "flex", alignItems: "center", fontSize: "16px" }}
          style={{
            margin: "20px 0 0",
          }}
        >
          <Button
            component="a"
            underline="none"
            sx={{ color: "#3874FF !important", pl: "0 !important" }}
            onClick={() => viewBlog(id)}
            endIcon={<ArrowForward sx={{ color: "#3874FF !important" }} />}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.string,
  author: PropTypes.object,
  id: PropTypes.number,
  description: PropTypes.string,
  link: PropTypes.string,
  handleNext: PropTypes.func,
};
