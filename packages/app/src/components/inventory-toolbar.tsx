import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import moment from 'moment';
import { observer } from 'mobx-react';

import { DatePicker } from './date-picker';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    row: {
        display: 'flex',
        alignItems: 'center',
    },
    spacer: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

export interface IInventoryToolbarProps {
    onSchedule: () => void;
    date: moment.Moment | null;
    onDateChange: (date: moment.Moment | null) => void;
    onGoToToday: () => void;
}

export const InventoryToolbar: React.FC<IInventoryToolbarProps> = observer((props) => {
    const classes = useStyles();
    const { onSchedule, date, onDateChange, onGoToToday } = props;
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Button variant="outlined" onClick={onGoToToday}>
                    Today
                </Button>
                <div className={classes.spacer} />
                <DatePicker
                    date={date}
                    onDateChange={onDateChange}
                    focused={focused}
                    onFocusChange={({ focused }) => setFocused(focused)}
                    id="inventory_datepicker"
                    small={true}
                    showDefaultInputIcon={true}
                />
            </div>
            <Button variant="contained" color="primary" onClick={onSchedule}>
                Schedule Inventory
            </Button>
        </div>
    );
});
