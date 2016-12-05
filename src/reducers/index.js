import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import users from './users';
import {reducer as formReducer} from 'redux-form';

export const reducers = combineReducers({
    users: users,
    routing: routerReducer,
    form: formReducer
});
