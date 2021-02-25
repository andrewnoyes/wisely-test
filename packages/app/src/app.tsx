import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { observer } from 'mobx-react';

import { theme } from './theme';
import { Home, Restaurant } from './views';
import { NotFound } from './components';

export const App: React.FC = observer(() => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/restaurants/:id" component={Restaurant} />
                <Route component={NotFound} />
            </Switch>
        </ThemeProvider>
    );
});
