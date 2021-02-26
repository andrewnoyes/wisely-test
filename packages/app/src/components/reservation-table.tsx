import React from 'react';
import {
    Link,
    Paper,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from '@material-ui/core';

import { Reservation } from 'sdk/dist';

export interface IReservationTableProps {
    reservations: Reservation[];
}

export const ReservationTable: React.FC<IReservationTableProps> = (props) => {
    const { reservations } = props;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Party Size</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reservations.map((reservation) => (
                        <TableRow key={reservation.id}>
                            <TableCell>
                                {new Date(reservation.inventory.time).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </TableCell>
                            <TableCell>{reservation.partySize}</TableCell>
                            <TableCell>{reservation.name}</TableCell>
                            <TableCell>
                                <Link href={`mailto:${reservation.email}`} target="_blank">
                                    {reservation.email}
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
