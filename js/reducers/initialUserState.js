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



const initialUserState = {
    logged: window.localStorage.getItem('iamlogged') || false,
    navigationLinks: [
        {
            text: 'HOME',
            to: '/',
            limited: false
        },
        {
            text: 'DASHBOARD',
            to: '/dashboard',
            limited: true
        },
        {
            text: 'ABOUT',
            to: '/about',
            limited: false
        },
        {
            text: 'Sign In',
            to: '/login',
            limited: false
        },
        {
            text: 'Sign Up',
            to: '/signup',
            limited: false
        }
    ],
    links: {
        logged: [
            // {
            //     text: 'Profile',
            //     link: '/profile',
            //     action: 'PROFILE'
            // },
            {
                text: 'Sign Out',
                link: '/signout',
                action: 'SIGN_OUT'
            }
        ],
        notlogged: [
            {
                text: '*Sign In',
                link: '/login',
                action: 'SIGN_IN'
            }
            // {
            //     text: 'Sign Up',
            //     link: '/signup',
            //     action: 'SIGN_UP'
            // }
        ]
    }
};

export default initialUserState;


