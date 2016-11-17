const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, Navigation, browserHistory} from 'react-router';

import {checkLogin} from "./js/util/util";
import Login from './js/components/Login';
import iamApp from "./js/reducers/iamApp";
import IAMApp from './js/components/IAMApp';
import About from './js/components/About';
import Dashboard from "./js/components/Dashboard";
import SignUp from './js/components/SignUp';


import Formsy from 'formsy-react';


//password regex validation
Formsy.addValidationRule('isStrongPassword', (values, value) => {

    /*
     (/^
     (?=.*\d)                //should contain at least one digit
     (?=.*[a-z])             //should contain at least one lower case
     (?=.*[A-Z])             //should contain at least one upper case
     [a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
     $/)
     */
    const rule = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/);
    return rule.test(value);
});



render(
    <Provider store={createStore(iamApp)}>

        <Router history={browserHistory}>
            <Route path="/" component={IAMApp}>
                <IndexRoute component={IAMApp}/>
            </Route>

            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            {/*<Route path="/dashboard" component={Projects} onEnter={checkLogin} />*/}

            <Route path="/about" component={About}/>
            <Route path="/dashboard" component={Dashboard} onEnter={checkLogin}/>

            <Route path="*" component={IAMApp}/>

        </Router>

    </Provider>,
    document.getElementById('app')
);



