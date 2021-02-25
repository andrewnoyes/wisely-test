import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

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

export interface IReservationToolbarProps {
    onCreate: () => void;
}

export const ReservationToolbar: React.FC<IReservationToolbarProps> = (props) => {
    const classes = useStyles();
    const { onCreate } = props;

    const [start, setStart] = React.useState<any>();
    const [focused, setFocused] = React.useState(false);

    return (
        <div className={classes.root}>
            <div className={classes.row}>
                <Button variant="outlined">Today</Button>
                <div className={classes.spacer} />
                <DatePicker
                    id="reservation_toolbar_datepicker"
                    date={start}
                    onDateChange={(d) => setStart(d)}
                    focused={focused}
                    onFocusChange={({ focused }) => setFocused(focused)}
                    small={true}
                    showDefaultInputIcon={true}
                />
            </div>
            <Button variant="contained" color="primary" onClick={onCreate}>
                Create Reservation
            </Button>
        </div>
    );
};
