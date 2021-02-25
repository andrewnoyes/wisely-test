import React from 'react';
import { observer } from 'mobx-react';
import { Button, Typography, makeStyles } from '@material-ui/core';

import { AppBar, Content, ResponsiveDialog, RestaurantForm, RestaurantList } from '../components';
import { restaurantStore } from '../stores';

const useStyles = makeStyles((theme) => ({
    action: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: theme.spacing(2),
    },
}));

export const Home: React.FC = observer(() => {
    const classes = useStyles();
    const [ready, setReady] = React.useState(false);
    const [showForm, setShowForm] = React.useState(false);

    React.useEffect(() => {
        const loadAll = async () => {
            await restaurantStore.loadRestaurants();
            setReady(true);
        };

        loadAll();
    }, []);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    const handleCreateRestaurant = async (name: string) => {
        await restaurantStore.createRestaurant(name);
        handleToggleForm();
    };

    return (
        <>
            <AppBar>
                <Typography variant="h5">Restaurant Manager</Typography>
            </AppBar>
            <Content maxWidth="sm">
                <Typography align="center" variant="h6">
                    {!ready
                        ? 'Loading...'
                        : !restaurantStore.hasRestaurants
                        ? 'No restaurants yet. Create one to get started!'
                        : 'Select an existing restaurant or create a new one.'}
                </Typography>
                <RestaurantList restaurants={restaurantStore.restaurants} />
                <ResponsiveDialog open={showForm} onClose={handleToggleForm} title="New Restaurant">
                    <RestaurantForm onCancel={handleToggleForm} onCreate={handleCreateRestaurant} />
                </ResponsiveDialog>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.action}
                    onClick={handleToggleForm}
                >
                    Create Restaurant
                </Button>
            </Content>
        </>
    );
});
