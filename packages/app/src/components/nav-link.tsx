import React from 'react';
import { NavLink as RouterLink, NavLinkProps as RouterLinkProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { theme } from '../theme';

const useStyles = makeStyles((_theme) => ({
    root: {
        display: 'flex',
        margin: theme.spacing(0, 2),
        fontSize: 18,
        textDecoration: 'none',
        color: theme.palette.grey[700],
        '&.active': {
            textDecoration: 'underline',
            color: theme.palette.common.black,
        },
        '&:hover': {
            textDecoration: 'underline',
            color: theme.palette.common.black,
        },
    },
}));

export const NavLink: React.FC<RouterLinkProps> = (props) => {
    const classes = useStyles();
    const { children, ...rest } = props;

    return (
        <RouterLink className={classes.root} activeClassName="active" {...rest}>
            {children}
        </RouterLink>
    );
};
