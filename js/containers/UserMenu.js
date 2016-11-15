/**
 * Created by macmini on 09.11.16.
 */

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Router, Route, IndexRoute, Navigation, Link, hashHistory, browserHistory} from 'react-router';
import UserMenuItem from './UserMenuItem';


const UserMenu = ({
    userLinks,
    onUserMenuItemClick
    }) => (
    <ul>
        {userLinks.map((item, id) =>
            <UserMenuItem key={id} {...item} onClick={() => {
                onUserMenuItemClick(item.action);
            }}/>
        )}
    </ul>
);

export default UserMenu;
