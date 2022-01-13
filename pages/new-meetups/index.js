import MeetupForm from "../../components/meetups/MeetupForm";

const NewMeetup = (props) => {
  const addNewMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <MeetupForm addNewMeetup={addNewMeetupHandler} />;
};

export default NewMeetup;
