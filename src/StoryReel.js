import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        profileSrc="https://images.pexels.com/photos/7790589/pexels-photo-7790589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Ishwori"
        image="https://images.pexels.com/photos/8024815/pexels-photo-8024815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/5325837/pexels-photo-5325837.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Jeevika"
        image="https://images.pexels.com/photos/1958734/pexels-photo-1958734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/7562315/pexels-photo-7562315.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Isha"
        image="https://images.pexels.com/photos/4766733/pexels-photo-4766733.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/3289504/pexels-photo-3289504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="ishu"
        image="https://images.pexels.com/photos/1085823/pexels-photo-1085823.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/2666467/pexels-photo-2666467.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Kali"
        image="https://images.pexels.com/photos/1084622/pexels-photo-1084622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
}

export default StoryReel;
