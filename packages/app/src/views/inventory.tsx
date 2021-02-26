import React from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Snackbar } from '@material-ui/core';

import { CreateInventoryDto } from 'sdk/dist';
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
    const [error, setError] = React.useState('');

    const handleScheduleInventory = async (dto: CreateInventoryDto) => {
        try {
            await inventoryStore.createInventories(dto);
            handleToggleOpen();
        } catch (error) {
            setError(error.message);
        }
    };

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

        if (!inventoryStore.inventories.length) {
            return <Placeholder text="No inventory scheduled." />;
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
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={!!error}
                autoHideDuration={10000}
                message={error}
                onClose={() => setError('')}
            />
        </>
    );
});
