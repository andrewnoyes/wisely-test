import ReactDOM from 'react-dom';
import * as history from 'history';
import { syncHistoryWithStore } from 'mobx-react-router';
import { Router, withRouter } from 'react-router';

import { App } from './app';
import { routerStore } from './stores';
import { reportWebVitals } from './reportWebVitals';

const browserHistory = history.createBrowserHistory();
const historyWithStore = syncHistoryWithStore(browserHistory, routerStore);
const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router history={historyWithStore}>
        <AppWithRouter />
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
