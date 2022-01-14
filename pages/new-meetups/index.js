import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import MeetupForm from "../../components/meetups/MeetupForm";

const NewMeetup = (props) => {
  const router = useRouter();

  const addNewMeetupHandler = async (meetupData) => {
    const responce = await fetch("./api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await responce.json();

    console.log(data);
    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add some meetup" />
      </Head>
      <MeetupForm addNewMeetup={addNewMeetupHandler} />;
    </Fragment>
  );
};

export default NewMeetup;
