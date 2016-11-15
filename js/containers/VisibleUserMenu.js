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

import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import UserMenu from './UserMenu';

/*const mapStateToProps = (state) => {
    return {

        userLinks: getVisibleUserLinks(
            state.user.links,
            state.user.logged
        )
    }
};*/


const VisibleUserMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserMenu);

export default VisibleUserMenu;
