import React from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';

import { get12HourTimes, convert12HourTo24 } from '../utils';
import { CreateInventoryDto } from 'sdk/dist';
import { DatePicker } from './date-picker';
import { Select } from './select';
import { FormActions } from './form-actions';
import { Input } from './input';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    spacer: {
        marginBottom: theme.spacing(1),
    },
}));

const times = get12HourTimes();

export interface IInventoryFormProps {
    onCreate: (dto: CreateInventoryDto) => void;
    onCancel: () => void;
}

export const InventoryForm: React.FC<IInventoryFormProps> = (props) => {
    const { onCreate, onCancel } = props;
    const classes = useStyles();
    const [focused, setFocused] = React.useState(false);
    const [date, setDate] = React.useState<moment.Moment | null>(null);
    const [startTime, setStartTime] = React.useState<string>('');
    const [endTime, setEndTime] = React.useState<string>('');
    const [limit, setLimit] = React.useState<string>('');

    const canCreate = (): boolean => {
        return Boolean(date && startTime && limit && Number.parseInt(limit) > 0);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!canCreate()) {
            return;
        }

        const start = new Date(`1900-01-01 ${convert12HourTo24(startTime)}`);
        const end = endTime ? new Date(`1900-01-01 ${convert12HourTo24(endTime)}`) : undefined;
        const dates = [date!.toDate()];
        const reservationLimit = Number.parseInt(limit);

        onCreate({
            startTime: start,
            endTime: end,
            dates,
            reservationLimit,
        });
    };

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <div className={classes.spacer} />
            <DatePicker
                date={date}
                onDateChange={(d) => setDate(d)}
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
                value={startTime}
                values={times}
                onChange={(e) => setStartTime(e.target.value as string)}
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
                value={endTime}
                values={times}
                onChange={(e) => setEndTime(e.target.value as string)}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 200,
                        },
                    },
                }}
            />
            <Input
                label="Reservation limit"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                type="number"
                error={Boolean(!!limit && Number.parseInt(limit) <= 0)}
            />
            <FormActions confirmText="Schedule" canSave={canCreate()} onCancel={onCancel} />
        </form>
    );
};
