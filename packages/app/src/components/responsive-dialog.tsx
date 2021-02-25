import React, { FunctionComponent } from 'react';
import {
    makeStyles,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogContent,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    appbar: {
        position: 'relative',
    },
    toolbar: {
        justifyContent: 'space-between',
    },
}));

export interface IResponsiveDialogProps {
    open: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactChild;
    color?: 'inherit' | 'default' | 'primary' | 'secondary';
    fullScreen?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
}

export const ResponsiveDialog: FunctionComponent<IResponsiveDialogProps> = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            open={props.open}
            onClose={props.onClose}
            fullScreen={fullScreen || !!props.fullScreen}
            maxWidth={props.maxWidth}
            fullWidth={props.fullWidth}
        >
            <AppBar className={classes.appbar} color={props.color || 'default'}>
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
            <DialogContent>{props.children}</DialogContent>
        </Dialog>
    );
};
