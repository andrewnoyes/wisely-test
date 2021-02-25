import React from 'react';
import { makeStyles } from '@material-ui/core';

import { DatePicker } from './date-picker';
import { Select } from './select';
import { FormActions } from './form-actions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    spacer: {
        marginBottom: theme.spacing(1),
    },
}));

export interface IInventoryFormProps {
    onCreate: () => void;
    onCancel: () => void;
}

export const InventoryForm: React.FC<IInventoryFormProps> = (props) => {
    const { onCreate, onCancel } = props;
    const classes = useStyles();
    const [start, setStart] = React.useState<any>();
    const [focused, setFocused] = React.useState(false);
    const [time, setTime] = React.useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate();
    };

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

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <div className={classes.spacer} />
            <DatePicker
                date={start}
                onDateChange={(d) => setStart(d)}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                id="inventory_form_datepicker"
                required={true}
                orientation="vertical"
                block={true}
            />
            <div className={classes.spacer} />
            <Select
                label="Start time"
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
                required={true}
            />
            <Select
                label="End time"
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
            <FormActions confirmText="Schedule" canSave={true} onCancel={onCancel} />
        </form>
    );
};
