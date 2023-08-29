import React from "react";
import "./CommunityFeed.css";
import Post from "./Post/Post";
import SharePost from "./SharePost/SharePost";

const CommunityFeed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <SharePost />
        <Post />
      </div>
    </div>
  );
};

export default CommunityFeed;
