import React from 'react';
import { observer } from 'mobx-react';

import { Reservation } from 'sdk/dist';
import { reservationStore } from '../stores';
import {
    Placeholder,
    Progress,
    ReservationForm,
    ReservationTable,
    ReservationToolbar,
    ResponsiveDrawer,
} from '../components';

export const Reservations: React.FC = observer(() => {
    const [formOpen, setFormOpen] = React.useState(false);

    const handleToggleOpen = () => {
        setFormOpen(!formOpen);
    };

    const handleCreateReservation = () => {};

    const renderContent = () => {
        if (reservationStore.loading) {
            return <Progress />;
        }

        if (!reservationStore.selectedDate) {
            return <Placeholder text="Select a date to view reservations." />;
        }

        if (!reservationStore.hasReservations) {
            return <Placeholder text="No reservations for this date." />;
        }

        return <ReservationTable reservations={reservationStore.reservations} />;
    };

    return (
        <>
            <ReservationToolbar
                onCreate={handleToggleOpen}
                date={reservationStore.selectedDate}
                onDateChange={(date) => reservationStore.setDate(date)}
            />
            {renderContent()}
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
