import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((_theme) => ({
    loading: {
        display: 'flex',
        alignSelf: 'center',
    },
}));

export const Progress: React.FC = () => {
    const classes = useStyles();

    return <CircularProgress className={classes.loading} />;
};
