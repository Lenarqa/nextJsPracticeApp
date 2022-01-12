import Layout from "../components/layout/Layout";
import MeetupsList from "../components/meetups/MeetupsList";

const HomePage = (props) => {
  return (
    <Layout>
      <MeetupsList />
    </Layout>
  );
};

export default HomePage;
