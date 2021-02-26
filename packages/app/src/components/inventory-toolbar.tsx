import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import moment from 'moment';
import { observer } from 'mobx-react';

import { DatePicker } from './date-picker';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));

export interface IInventoryToolbarProps {
    onSchedule: () => void;
    date: moment.Moment | null;
    onDateChange: (date: moment.Moment | null) => void;
}

export const InventoryToolbar: React.FC<IInventoryToolbarProps> = observer((props) => {
    const classes = useStyles();
    const { onSchedule, date, onDateChange } = props;
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={classes.root}>
            <DatePicker
                date={date}
                onDateChange={onDateChange}
                focused={focused}
                onFocusChange={({ focused }) => setFocused(focused)}
                id="inventory_datepicker"
                small={true}
                showDefaultInputIcon={true}
            />
            <Button variant="contained" color="primary" onClick={onSchedule}>
                Schedule Inventory
            </Button>
        </div>
    );
});
