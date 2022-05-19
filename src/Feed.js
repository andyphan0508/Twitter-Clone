import React from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox";

import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <h2 className="feedHeader">Home</h2>

      <Tweetbox />

      <Post />
    </div>
  );
};

export default Feed;
