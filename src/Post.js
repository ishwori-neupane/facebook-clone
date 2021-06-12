import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
function Post({profilePic,image,username,message,timestamp}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__Info">
                    <h3>
                        {username}
                    </h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                 </div>
               
            </div>
            <div className="post__bottom">
                <p>{message}</p>
             </div>
            <div className="post__image">
                <img src={image} alt="" />
             </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpOutlinedIcon />
                    <p>Like</p>
                </div>
                 <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Connect</p>
                </div>
                <div className="post__option">
                 <NearMeIcon/>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon/>
                </div>
                
            </div>
        </div>
    )
}

export default Post
