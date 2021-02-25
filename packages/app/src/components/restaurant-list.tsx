import React from 'react';
import { List, ListItem, ListItemText, Paper, makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react';

import { Restaurant } from 'sdk/dist';
import { NavLink } from './nav-link';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        margin: theme.spacing(1, 0),
    },
}));

export interface IRestaurantListProps {
    restaurants: Restaurant[];
}

export const RestaurantList: React.FC<IRestaurantListProps> = observer((props) => {
    const classes = useStyles();
    const { restaurants } = props;

    if (!restaurants.length) {
        return null;
    }

    return (
        <Paper className={classes.root}>
            <List>
                {restaurants.map((restaurant) => (
                    <ListItem key={restaurant.id}>
                        <NavLink to={`/restaurants/${restaurant.id}`} style={{ width: '100%' }}>
                            <ListItemText primary={restaurant.name} />
                        </NavLink>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
});
