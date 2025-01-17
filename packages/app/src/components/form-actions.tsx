import React, { FunctionComponent } from 'react';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    actions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: theme.spacing(2, 0),
    },
    cancel: {
        marginRight: theme.spacing(1),
    },
}));

export interface IFormActionsProps {
    confirmText?: string;
    canSave: boolean;
    onConfirm?: () => void;
    onCancel: () => void;
}

export const FormActions: FunctionComponent<IFormActionsProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.actions}>
            <Button className={classes.cancel} onClick={props.onCancel}>
                Cancel
            </Button>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!props.canSave}
                onClick={props.onConfirm}
            >
                {props.confirmText || 'Finish'}
            </Button>
        </div>
    );
};
