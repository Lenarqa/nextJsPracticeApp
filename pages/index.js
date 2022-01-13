import MeetupsList from "../components/meetups/MeetupsList";

const HomePage = (props) => {
  return <MeetupsList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;

const DUMMY_MEETUPS = [
  {
    id: "m1",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup",
    address: "Some street, some city",
  },
  {
    id: "m2",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup 2",
    adress: "Some street, some city",
  },
  {
    id: "m3",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup 3",
    adress: "Some street, some city",
  },
  {
    id: "m4",
    url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    title: "A First Meetup 4",
    adress: "Some street, some city",
  },
];
