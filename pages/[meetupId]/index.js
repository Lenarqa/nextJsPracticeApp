import { useRouter } from "next/router";
import React, { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

// import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
  const router = useRouter();
  const meetupId = router.query.meetupId;

  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export async function getStaticPaths () {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
        title: "Some title",
        address: "some address",
        description: "some description",
      }
    }
  }
}

export default MeetupDetails;
