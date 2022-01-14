import { useEffect, useState } from "react";
import MeetupsList from "../components/meetups/MeetupsList";

const HomePage = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    //http
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupsList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

export async function getStaticProps () {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  }
}

export default HomePage;

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup",
    address: "Some street, some city",
  },
  {
    id: "m2",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup 2",
    adress: "Some street, some city",
  },
  {
    id: "m3",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup 3",
    adress: "Some street, some city",
  },
  {
    id: "m4",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup 4",
    adress: "Some street, some city",
  },
];
