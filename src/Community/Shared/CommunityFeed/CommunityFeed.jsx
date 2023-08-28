import React from "react";
import "./CommunityFeed.css";
import SharePost from "./SharePost/SharePost";

const CommunityFeed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <SharePost />
      </div>
    </div>
  );
};

export default CommunityFeed;
