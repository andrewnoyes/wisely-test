import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
    },
}));

export interface IPlaceholderProps {
    text: string;
}

export const Placeholder: React.FC<IPlaceholderProps> = (props) => {
    const classes = useStyles();

    return (
        <Typography variant="h6" align="center" className={classes.root}>
            {props.text}
        </Typography>
    );
};
