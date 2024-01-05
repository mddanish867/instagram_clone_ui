import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";function Post() {
  return (
    <div className="post">
    <div className="post__header">
        <div className="post__header2">
      <div className="post__headerAuthor">
        <Avatar className="mx-2" style={{ marginRight: "10px" }}>
            R
        </Avatar>
        jashnerekhtaofficial •  <span className="mx-2">12hr</span>
        
      </div>
      <span className="sub__caption">ustad shafiq alikhan</span>
      </div>
      <MoreHorizIcon className="horizIcon"/>
    </div>
    <div className="post__image">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
 alt="Post Image"/>
    </div>
    <div className="post__footer">
      <div className="post__footerIcons">
        <div className="post__iconsMain">
          <FavoriteBorderIcon className="postIcon" />
          <ChatBubbleOutlineIcon className="postIcon" />
          <TelegramIcon className="postIcon" />
        </div>
        <div className="post__iconSave">
          <BookmarkBorderIcon className="postIcon" />
        </div>
      </div>
      <span style={{marginLeft:"85px"}}>Liked by 14 people.</span>
    </div>
  </div>
  )
}

export default Post
