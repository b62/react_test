/**
 * Created by macmini on 08.11.16.
 */
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, IndexRoute, Navigation, Link, hashHistory, browserHistory} from 'react-router';


/*
 * Single application data reducer
 * */

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

const applications = (state = [], action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'ADD_APPLICATION':

            saveState(state);
            return [
                ...state,
                application(undefined, action)
            ];

        case 'TOGGLE_APPLICATION':
            return state.map(t =>
                application(t, action)
            );
        default:
            return state;
    }
};


export default applications;


