import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Input } from './input';
import { FormActions } from './form-actions';

const useStyles = makeStyles((_theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

export interface IRestaurantFormProps {
    onCreate: (name: string) => void;
    onCancel: () => void;
}

export const RestaurantForm: React.FC<IRestaurantFormProps> = (props) => {
    const classes = useStyles();
    const [name, setName] = React.useState('');
    const { onCreate, onCancel } = props;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(name);
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormActions
                confirmText="create"
                canSave={Boolean(name && name.trim())}
                onCancel={onCancel}
            />
        </form>
    );
};
