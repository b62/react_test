/**
 * Created by macmini on 09.11.16.
 */



import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import VisibleGlobalNav from '../containers/VisibleGlobalNav';
import LoginForm from './LoginForm';



const Login = () => (
    <div>
        <VisibleGlobalNav />
        {/*<VisibleUserMenu />*/}
        <LoginForm/>
    </div>
);

export default Login;
