import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Input } from './input';
import { Select } from './select';
import { FormActions } from './form-actions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
}));

export interface IReservationFormProps {
    onCreate: () => void;
    onCancel: () => void;
}

export const ReservationForm: React.FC<IReservationFormProps> = (props) => {
    const { onCreate, onCancel } = props;
    const classes = useStyles();
    const [partySize, setPartySize] = React.useState<string>('');
    const [time, setTime] = React.useState<string>('');

    // TODO: the requirement doc says that the date selection should be a dropdown
    const tempPartySizes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    // TODO: this will tie in with the inventory impl
    const tempTimes = [
        '11:00 AM',
        '11:15 AM',
        '11:30 AM',
        '11:45 AM',
        '12:00 PM',
        '12:15 PM',
        '12:30 PM',
        '12:45 PM',
        '1:00 PM',
        '1:15 PM',
        '1:30 PM',
        '1:45 PM',
        '2:00 PM',
        '2:15 PM',
        '2:30 PM',
        '2:45 PM',
        '3:00 PM',
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: create DTO and send to create handler
        onCreate();
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Input type="text" label="Name" />
            <Input type="email" label="Email" />
            <Select
                label="Party size"
                value={partySize}
                values={tempPartySizes}
                onChange={(e) => setPartySize(e.target.value as string)}
            />
            <Input label="Date" type="date" InputLabelProps={{ shrink: true }} />
            <Select
                label="Time"
                value={time}
                values={tempTimes}
                onChange={(e) => setTime(e.target.value as string)}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200,
                        },
                    },
                }}
            />
            <FormActions confirmText="Create" canSave={true} onCancel={onCancel} />
        </form>
    );
};
