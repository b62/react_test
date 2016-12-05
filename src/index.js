import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import {syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';


//main component
import App from './components/App';

//pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';

//reducers
import {reducers} from './reducers/index';
import {sagas} from './sagas/index';


import './stylesheets/main.scss';




// let users = [];
// for (let i = 0; i < 45; i++) {
//     users.push({
//         id: i,
//         username: `John ${i}`,
//         job: `Worker ${i}`
//     })
// }
//
// const initialState = {
//     users: {
//         list: users
//     }
// };


//use saga for API calls
const sagaMiddleware = createSagaMiddleware();

let middleware = applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware);
//devtools
if(process.env.NODE_ENV !== 'production') {
    middleware = compose(
        middleware, window.devToolsExtension && window.devToolsExtension()
    )
}


// const store = createStore(reducers, initialState, middleware); - used when data was local
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App} >
                <IndexRoute component={Home} />
                {/*<Route path="/users" component={}>*/}
                {/*<Route path="/dashboard" component={Dashboard} />*/}
                <Route path="/apps" component={Dashboard} />
                {/*<Route path="/user-edit(/:id)" component={About} />*/}
                <Route path="/user-edit(/:id)" component={UserEdit} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);