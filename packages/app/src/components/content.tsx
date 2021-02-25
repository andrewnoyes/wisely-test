import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container: {
        padding: 0,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(1),
            paddingTop: theme.spacing(2),
        },
        transition: theme.transitions.create(['margin', 'padding'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}));

export interface IContentProps {
    children: any;
    maxWidth?: 'xl' | 'lg' | 'md' | 'sm';
}

export const Content: React.FC<IContentProps> = (props) => {
    const classes = useStyles();

    return (
        <Container maxWidth={props.maxWidth || 'lg'} className={classes.container}>
            <div className={classes.toolbar} />
            <div className={classes.content}>{props.children}</div>
        </Container>
    );
};
