import React from 'react';
import {
    Select as MuiSelect,
    SelectProps as MuiSelectProps,
    MenuItem,
    FormControl,
    InputLabel,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
}));

export interface ISelectProps extends MuiSelectProps {
    values: string[];
}

export const Select: React.FC<ISelectProps> = (props) => {
    const classes = useStyles();
    const { id, label, values, ...rest } = props;

    return (
        <FormControl variant="outlined" className={classes.root}>
            {label && <InputLabel>{label}</InputLabel>}
            <MuiSelect label={label} {...rest}>
                {values.map((value: number | string) => (
                    <MenuItem key={value} value={value}>
                        {value}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};
