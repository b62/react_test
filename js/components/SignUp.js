

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';

import VisibleGlobalNav from "../containers/VisibleGlobalNav";
import SignUpForm from "./SignUpForm";



const SignUp = () => (
    <div>
        <VisibleGlobalNav />
        <SignUpForm/>
    </div>
);

export default SignUp;
