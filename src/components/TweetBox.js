import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import "../styles/TweetBox.css";
import db from "../config/firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Nithesh",
      username: "nithesh",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar
            src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
            alt="Logo"
          />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Enter Image URL"
          type="text"
        />

        <Button onClick={sendTweet} type="submit" className="tweet__button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
