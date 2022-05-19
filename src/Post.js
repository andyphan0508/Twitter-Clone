import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = ({
  name,
  username,
  text,
  profile,
  profileVerified,
  timeStamp,
}) => {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar />
      </div>
      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              Andy Phan{" "}
              <span className="postHeaderSpecial">
                <VerifiedIcon className="postBadge" />
              </span>
            </h3>
            <p>@andyphan0508</p>
          </div>
          <div className="postHeaderDescription">
            <p>This is my first post of the Twitter clone</p>
          </div>
        </div>
        <img src="https://picsum.photos/id/237/200/300" alt="" />
        <div className="postFooter">
          <ChatBubbleOutlineIcon className="postIcon" />
          <RepeatIcon className="postIcon" />
          <FavoriteBorderIcon className="postIcon" />
          <PublishIcon className="postIcon" />
        </div>
      </div>
    </div>
  );
};

export default Post;
