
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';


//action creator
const riseNavClick = (id) => {
    return {
        type: 'NAV_CLICK',
        id
    };
};

export default riseNavClick;
