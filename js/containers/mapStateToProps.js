/**
 * Created by macmini on 09.11.16.
 */
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import VisibleUserMenu from "./VisibleUserMenu";



const getVisibleNavLinks = (linksArr, userStatus) => {
    userStatus = JSON.parse(userStatus);
    // cl('user logged', userStatus);
    return linksArr.filter(l => (l.limited && userStatus || !l.limited))
};



const getVisibleUserLinks = (linksObj,
                             userLoggedIn) => {
    // cl('269 userStatus', userLoggedIn, userLoggedIn===false);
    userLoggedIn = JSON.parse(userLoggedIn);
    // cl('parsed status', userLoggedIn, (userLoggedIn) ? linksObj.logged : linksObj.notlogged);

    return (userLoggedIn) ? linksObj.logged : linksObj.notlogged;
};



const mapStateToProps = (state) => {
    return {
        links: getVisibleNavLinks(
            state.user.navigationLinks,
            state.user.logged
        ),
        userLinks: getVisibleUserLinks(
            state.user.links,
            state.user.logged
        )
    }
};

export default mapStateToProps;


