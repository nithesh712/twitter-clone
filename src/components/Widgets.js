import React from "react";
import "../styles/Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1270625869803945984"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Nithesh"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widgets;
