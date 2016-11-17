
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import VisibleGlobalNav from './../containers/VisibleGlobalNav';
import MainPage from './MainPage';

const IAMApp = () => {

    return (
        <div>
            <VisibleGlobalNav />
            {/*<VisibleUserMenu />*/}
            {/*<MyApp/>*/}
            <MainPage/>
        </div>
    );
};

export default IAMApp;
