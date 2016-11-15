/**
 * Created by macmini on 10.11.16.
 */


import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';



const application = (state, action) => {
    switch (action.type) {
        case 'LOGIN': //TODO remove after tests
        case 'ADD_APPLICATION':
            return {
                id: action.id,
                title: action.text,
                completed: false
            };
        case 'TOGGLE_APPLICATION':
            if (state.applications.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

export default application;
