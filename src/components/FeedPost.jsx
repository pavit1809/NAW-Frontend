import {
  Avatar,
  Box,
  Button,
  Card, CardActions, CardContent, CardHeader, IconButton, Typography,
} from "@mui/material";
import * as React from "react";
import { PropTypes } from "prop-types";
import { CommentOutlined, FavoriteOutlined, ShortcutOutlined } from "@mui/icons-material";

export default function FeedPost({post}) {
  return (
    <Card sx={{ borderRadius: 0, my: 5 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title={post.title}
        subheader={post.subheading}
      />
      <CardContent sx={{ padding: 5 }}>
        <Typography variant="body2" color="text.secondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
          </IconButton>
          <Typography variant="caption">Like {post.totalLikes}</Typography>
        </Box>
        <Box>
          <IconButton aria-label="add to favorites">
            <CommentOutlined />
          </IconButton>
          <Typography variant="caption">Comment</Typography>
        </Box>
        <Box>
          <IconButton aria-label="share">
            <ShortcutOutlined />
          </IconButton>
          <Typography variant="caption">{post.totalShares}</Typography>
        </Box>
        <Button aria-label="share" sx={{ marginLeft: "auto" }}>
          Reply
        </Button>
      </CardActions>
    </Card>
  );
}
FeedPost.propTypes = {
  post: PropTypes.object,
};
