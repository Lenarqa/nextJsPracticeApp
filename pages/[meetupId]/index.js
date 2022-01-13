import { useRouter } from 'next/router';
import React, {Fragment} from 'react';

// import classes from './MeetupDetails.module.css';

const MeetupDetails = (props) => {
    const router = useRouter();
    const meetupId = router.query.meetupId;

    return (
        <Fragment>
            <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" alt="img" />
            <h2>The meet up with id {meetupId}</h2>
            <address>some address </address>
            <p>Description</p>
        </Fragment>
    );
};

export default MeetupDetails;