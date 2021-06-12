import React from "react";
import "./Story.css";
import { Avatar, IconButton } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div style={{ background: `url(${image})` }} className="story">
      <Avatar src={profileSrc} className="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
