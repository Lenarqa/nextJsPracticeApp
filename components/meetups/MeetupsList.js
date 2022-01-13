import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupsList.module.css";

const MeetupsList = (props) => {
  return (
    <div className={classes.meetupsList}>
      {props.meetups.map((meetup => <MeetupItem key={meetup.id} meetup={meetup} />))}
    </div>
  );
};

export default MeetupsList;