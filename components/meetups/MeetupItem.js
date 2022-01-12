import React from "react";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
    const showDetailHandler = () => {
        console.log("MeetupItem handler");
    }
    const {url, title, address} = props.meetup;
  return (
    <div className={classes.meetupItem}>
      <img
        src={url}
        alt="meetup img"
      />
      <h2>{title}</h2>
      <h3>{address}</h3>
      <button onClick={showDetailHandler}>Show Details</button>
    </div>
  );
};

export default MeetupItem;
