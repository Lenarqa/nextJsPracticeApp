import { MongoClient } from "mongodb";
import MeetupsList from "../components/meetups/MeetupsList";

const HomePage = (props) => {
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

  const client = await MongoClient.connect(
    `mongodb+srv://Lenar:${process.env.MONGO_DB_PASSWORD}@cluster0.vdasz.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  }
}

export default HomePage;
