import React from 'react';
import {
    AppBar,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
    makeStyles,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    appbar: {
        position: 'relative',
    },
    toolbar: {
        justifyContent: 'space-between',
        padding: 0,
    },
}));

export interface IDrawerProps {
    title: string;
    anchor: 'left' | 'right';
    children: any;
    open: boolean;
    onClose: () => void;
}

export const ResponsiveDrawer: React.FC<IDrawerProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const width = isMobile ? '100vw' : 450;
    const { anchor, children, open, onClose } = props;

    return (
        <Drawer
            anchor={anchor}
            open={open}
            onClose={onClose}
            PaperProps={{ style: { width: width, padding: 16 } }}
        >
            <AppBar className={classes.appbar} color="transparent" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" noWrap={true}>
                        {props.title}
                    </Typography>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={props.onClose}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {children}
        </Drawer>
    );
};
