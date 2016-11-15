/**
 * Created by macmini on 10.11.16.
 */


import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import applications from '../reducers/applications';
import user from '../reducers/user';


const iamApp = combineReducers({
    applications,
    user
});

export default iamApp;
