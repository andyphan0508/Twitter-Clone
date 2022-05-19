import { Avatar, Button } from "@mui/material";
import React from "react";
import "./Tweetbox.css";

const Tweetbox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxInput">
          <Avatar className="avatar" />
          <input placeholder="What's on your mind" className="input" />
        </div>

        <Button variant="contained" className="button">
          Tweet
        </Button>
      </form>
      <input
        placeholder="Express yourself with an image: "
        className="image"
        type={"text"}
      />
    </div>
  );
};

export default Tweetbox;
