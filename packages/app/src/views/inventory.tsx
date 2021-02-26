import React from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

import { inventoryStore } from '../stores';
import {
    InventoryForm,
    InventoryTable,
    InventoryToolbar,
    Placeholder,
    Progress,
    ResponsiveDrawer,
} from '../components';

export const Inventory: React.FC = observer(() => {
    const [formOpen, setFormOpen] = React.useState(false);

    const handleScheduleInventory = () => {};

    const handleToggleOpen = () => {
        setFormOpen(!formOpen);
    };

    const handleDateChange = async (date: moment.Moment | null) => {
        inventoryStore.setDate(date);
    };

    const renderContent = () => {
        if (inventoryStore.loading) {
            return <Progress />;
        }

        if (!inventoryStore.selectedDate) {
            return <Placeholder text="Select a date to view inventory." />;
        }

        return <InventoryTable inventories={inventoryStore.inventories} />;
    };

    return (
        <>
            <InventoryToolbar
                onSchedule={handleToggleOpen}
                date={inventoryStore.selectedDate}
                onDateChange={handleDateChange}
            />
            {renderContent()}
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
