import React from 'react';
import {
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from '@material-ui/core';
import { observer } from 'mobx-react';

import { Inventory } from 'sdk/dist';

export interface IInventoryTableProps {
    inventories: Inventory[];
}

export const InventoryTable: React.FC<IInventoryTableProps> = observer((props) => {
    const { inventories } = props;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Reservation Limit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {inventories.map((inventory) => (
                        <TableRow key={inventory.id}>
                            <TableCell>
                                {new Date(inventory.time).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </TableCell>
                            <TableCell>{inventory.reservationLimit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});
