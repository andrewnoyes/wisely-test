import React from 'react';
import { observer } from 'mobx-react';

import { Reservation } from 'sdk/dist';
import { reservationStore } from '../stores';
import {
    ReservationForm,
    ReservationTable,
    ReservationToolbar,
    ResponsiveDrawer,
} from '../components';

const mocks: Reservation[] = [
    {
        id: 1,
        inventoryId: 1,
        name: 'Andrew',
        created: new Date(),
        updated: new Date(),
        email: 'andrew@noyes.io',
        partySize: 4,
        inventory: {
            id: 1,
            created: new Date(),
            updated: new Date(),
            date: new Date(),
            time: new Date(),
            reservationLimit: 3,
            restaurantId: 1,
        },
    },
    {
        id: 2,
        inventoryId: 1,
        name: 'Bill Todd',
        created: new Date(),
        updated: new Date(),
        email: 'bill@example.com',
        partySize: 8,
        inventory: {
            id: 1,
            created: new Date(),
            updated: new Date(),
            date: new Date(),
            time: new Date(),
            reservationLimit: 3,
            restaurantId: 1,
        },
    },
    {
        id: 3,
        inventoryId: 1,
        name: 'Jenny Wilson',
        created: new Date(),
        updated: new Date(),
        email: 'jenny@will.io',
        partySize: 2,
        inventory: {
            id: 1,
            created: new Date(),
            updated: new Date(),
            date: new Date(),
            time: new Date(),
            reservationLimit: 3,
            restaurantId: 1,
        },
    },
    {
        id: 4,
        inventoryId: 1,
        name: 'Mariah Carey',
        created: new Date(),
        updated: new Date(),
        email: 'jojo@blah.com',
        partySize: 5,
        inventory: {
            id: 1,
            created: new Date(),
            updated: new Date(),
            date: new Date(),
            time: new Date(),
            reservationLimit: 3,
            restaurantId: 1,
        },
    },
];

export const Reservations: React.FC = observer(() => {
    const [formOpen, setFormOpen] = React.useState(false);

    const handleToggleOpen = () => {
        setFormOpen(!formOpen);
    };

    const handleCreateReservation = () => {};

    return (
        <>
            <ReservationToolbar onCreate={handleToggleOpen} />
            <ReservationTable reservations={mocks} loading={false} />
            <ResponsiveDrawer
                title="New Reservation"
                open={formOpen}
                onClose={handleToggleOpen}
                anchor="right"
            >
                <ReservationForm onCreate={handleCreateReservation} onCancel={handleToggleOpen} />
            </ResponsiveDrawer>
        </>
    );
});
