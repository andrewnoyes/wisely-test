import React from 'react';
import { Switch, Redirect, Route, useRouteMatch, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import HomeIcon from '@material-ui/icons/Home';

import { AppBar, Content, NavLink, NotFound, Placeholder } from '../components';
import { restaurantStore } from '../stores';
import { Reservations } from './reservations';
import { Inventory } from './inventory';

export const Restaurant: React.FC = observer(() => {
    const { path, url } = useRouteMatch();
    const { id } = useParams() as { id?: string };
    const [ready, setReady] = React.useState(false);

    React.useEffect(() => {
        const loadRestaurant = async () => {
            if (id && !Number.isNaN(Number.parseInt(id))) {
                await restaurantStore.selectRestaurant(Number.parseInt(id));
            }
            setReady(true);
        };

        loadRestaurant();

        return () => {
            restaurantStore.clearRestaurant();
        };
    }, [id]);

    if (!ready) {
        return <Placeholder text="Loading..." />;
    }

    if (!restaurantStore.selectedRestaurant) {
        return <NotFound />;
    }

    return (
        <>
            <AppBar>
                <NavLink to="/" exact={true} title="Home">
                    <HomeIcon />
                </NavLink>
                <NavLink to={`${url}/inventory`}>Inventory</NavLink>
                <NavLink to={`${url}/reservations`}>Reservations</NavLink>
            </AppBar>
            <Content maxWidth="md">
                <Switch>
                    <Redirect from={path} to={`${path}/inventory`} exact={true} />
                    <Route path={`${path}/inventory`} exact={true} component={Inventory} />
                    <Route path={`${path}/reservations`} exact={true} component={Reservations} />
                </Switch>
            </Content>
        </>
    );
});
