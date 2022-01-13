import React, { useRef } from "react";
import classes from "./MeetupForm.module.css";

const MeetupForm = (props) => {
  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("onSubmitHandler");
    const title = titleInputRef.current.value;
    const img = imgInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    if (!title || !img || !address || !description) {
      console.log("Invalid form input");
      return;
    }

    const meetupData = {
      title,
      img,
      address,
      description
    }

    props.addNewMeetup(meetupData);

    console.log(
      `title = ${title}; img = ${img}; address = ${address}; description = ${description}`
    );
  };

  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <div className={classes.inputWrapper}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" id="title" ref={titleInputRef} />
      </div>
      <div className={classes.inputWrapper}>
        <label htmlFor="img">Meetup Image</label>
        <input type="text" id="img" ref={imgInputRef} />
      </div>
      <div className={classes.inputWrapper}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
      </div>
      <div className={classes.inputWrapper}>
        <label htmlFor="description">Description</label>
        <textarea ref={descriptionInputRef}></textarea>
      </div>
      <div className={classes.btnWrapper}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
