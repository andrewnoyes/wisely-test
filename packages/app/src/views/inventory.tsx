import React from 'react';
import { observer } from 'mobx-react';
import { Typography } from '@material-ui/core';

export const Inventory: React.FC = observer(() => {
    return (
        <Typography align="center" variant="h5">
            Inventory
        </Typography>
    );
});
