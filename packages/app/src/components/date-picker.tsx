import React from 'react';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import './react-dates-overrides.css';

export const DatePicker: React.FC<SingleDatePickerShape> = (props) => {
    return <SingleDatePicker {...props} />;
};
