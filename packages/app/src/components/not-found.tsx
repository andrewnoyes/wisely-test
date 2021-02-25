import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Placeholder } from './placeholder';
import { NavLink } from './nav-link';

const useStyles = makeStyles((_theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export const NotFound: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Placeholder text="Not found!" />
            <NavLink to="/" exact={true}>
                Home
            </NavLink>
        </div>
    );
};
