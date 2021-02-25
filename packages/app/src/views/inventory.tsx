import React from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

import { inventoryStore, restaurantStore } from '../stores';
import { InventoryForm, InventoryToolbar, ResponsiveDrawer } from '../components';

export const Inventory: React.FC = observer(() => {
    const [formOpen, setFormOpen] = React.useState(false);

    const handleScheduleInventory = () => {};

    const handleToggleOpen = () => {
        setFormOpen(!formOpen);
    };

    const handleDateChange = async (date: moment.Moment | null) => {
        inventoryStore.setDate(date);
    };

    const handleGoToToday = () => {
        handleDateChange(moment());
    };

    return (
        <>
            <InventoryToolbar
                onSchedule={handleToggleOpen}
                date={inventoryStore.selectedDate}
                onDateChange={handleDateChange}
                onGoToToday={handleGoToToday}
            />
            {inventoryStore.loading ? <h3>loading...</h3> : null}
            <ResponsiveDrawer
                title="Schedule Inventory"
                open={formOpen}
                onClose={handleToggleOpen}
                anchor="right"
            >
                <InventoryForm onCreate={handleScheduleInventory} onCancel={handleToggleOpen} />
            </ResponsiveDrawer>
        </>
    );
});
