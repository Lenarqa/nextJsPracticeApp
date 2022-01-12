import React from 'react';
import Layout from '../components/layout/Layout';
import MeetupForm from '../components/meetups/MeetupForm';

const NewMeetup = (props) => {
    return (
        <Layout>
            <MeetupForm />
        </Layout>
    );
};

export default NewMeetup;