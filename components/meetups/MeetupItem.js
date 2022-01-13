import React from "react";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";

const MeetupItem = (props) => {
  const router = useRouter();
  const { id, url, title, address } = props.meetup;
  
  const showDetailHandler = () => {
    router.push(`/${id}`);
  };
  

  return (
    <div className={classes.meetupItem}>
      <img src={url} alt="meetup img" />
      <h2>{title}</h2>
      <h3>{address}</h3>
      <button onClick={showDetailHandler}>Show Details</button>
    </div>
  );
};

export default MeetupItem;
