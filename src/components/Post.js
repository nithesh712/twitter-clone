import React, { forwardRef } from "react";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}{" "}
                  {username}
                </span>
              </h3>
            </div>
            <div clasaName="post__headerDescription">
              <p className="post__headerDescriptionText">{text}</p>
            </div>
            <img className="post__image" src={image} alt="" />
            <div className="post__footer">
              <RepeatIcon fontSize="small" />
              <FavoriteBorderIcon fontSize="small" />
              <PublishIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
