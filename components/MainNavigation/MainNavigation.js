import React from 'react';
import classes from './MainNavigation.module.css';
import Link from 'next/link';

const MainNavigation = (props) => {
    return <header className={classes.header}>
        <h1>React Meetups</h1>
        <nav>
            <ul>
                <li><Link href="/">All Meetups</Link></li>
                <li><Link href="new-meetups">Add New Meetups</Link></li>
            </ul>
        </nav>
    </header>
};

export default MainNavigation;