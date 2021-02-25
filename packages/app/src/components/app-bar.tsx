import React from 'react';
import { AppBar as MuiAppBar, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
    },
}));

export interface IAppBarProps {
    children: any;
}

export const AppBar: React.FC<IAppBarProps> = (props) => {
    const classes = useStyles();

    return (
        <MuiAppBar position="fixed" elevation={1} color="default">
            <Toolbar className={classes.toolbar}>{props.children}</Toolbar>
        </MuiAppBar>
    );
};
