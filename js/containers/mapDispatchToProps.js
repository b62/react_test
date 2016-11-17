
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';



const riseNavClick = (id) => {
    return {
        type: 'NAV_CLICK',
        id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNavLinkClick: (id) => {
            cl('nav clicked');

            dispatch(riseNavClick(id))
        },
        onUserMenuItemClick: (action) => {
            cl(action);
            dispatch({
                type: action
            })
        }
    };
};

export default mapDispatchToProps;
