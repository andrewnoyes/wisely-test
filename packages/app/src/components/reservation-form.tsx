import React from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

import { Input } from './input';
import { Select } from './select';
import { FormActions } from './form-actions';
import { DatePicker } from './date-picker';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    spacer: {
        marginTop: theme.spacing(2),
    },
}));

const partySizeOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export interface IReservationFormProps {
    onCreate: () => void;
    onCancel: () => void;
    onRequestTimes: (date: moment.Moment) => Promise<string[]>;
}

export const ReservationForm: React.FC<IReservationFormProps> = (props) => {
    const { onCreate, onCancel, onRequestTimes } = props;
    const classes = useStyles();
    const [focused, setFocused] = React.useState(false);
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [partySize, setPartySize] = React.useState<string>('');
    const [date, setDate] = React.useState<moment.Moment | null>(null);
    const [availableTimes, setAvailableTimes] = React.useState<string[]>([]);
    const [time, setTime] = React.useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: create DTO and send to create handler
        onCreate();
    };

    const handleDateChange = async (newDate: moment.Moment | null) => {
        setDate(newDate);
        if (newDate) {
            const times = await onRequestTimes(newDate);
            setAvailableTimes(times);
        } else {
            setAvailableTimes([]);
        }
    };

    const canSave = (): boolean => {
        return Boolean(
            name && email && date && time && partySize && Number.parseInt(partySize) > 0
        );
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Input
                type="text"
                label="Name"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Input
                type="email"
                label="Email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Select
                label="Party size"
                value={partySize}
                values={partySizeOptions}
                onChange={(e) => setPartySize(e.target.value as string)}
                required={true}
            />
            <div className={classes.spacer} />
            <DatePicker
                date={date}
                onDateChange={handleDateChange}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                id="reservation_form_datepicker"
                required={true}
                orientation="vertical"
                block={true}
            />
            <div style={{ marginTop: 8 }} />
            <Select
                label="Time"
                value={time}
                values={availableTimes}
                onChange={(e) => setTime(e.target.value as string)}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200,
                        },
                    },
                }}
            />
            <FormActions confirmText="Create" canSave={canSave()} onCancel={onCancel} />
        </form>
    );
};
