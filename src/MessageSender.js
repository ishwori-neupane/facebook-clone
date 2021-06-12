import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import { Avatar, IconButton } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from './StateProvider'
import firebase from './firebase'
import db from "./firebase";

function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

     db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // use the current timestamp from the firebase
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    // console.log(user)
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input value={input} onChange={(e)=>setInput(e.target.value)}
            type="text"
            className="messageSender__input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input 
            
            value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}
            className="messageSender__image"
            placeholder="image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
        <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "#FFFF04" }} />
        <h3>Feeling/Activity</h3>
        </div>

        
      </div>
    </div>
  );
}

export default MessageSender;
