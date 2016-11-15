/**
 * Created by macmini on 09.11.16.
 */
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {Router, Route, IndexRoute, Navigation, Link, hashHistory, browserHistory} from 'react-router';


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





const user = (state = initialUserState, action) => {
    switch (action.type) {
        case 'LOGIN':
        case 'SIGN_IN':
            // TODO login and pass check up
            localStorage.setItem('iamlogged', true);


            //TODO fetch api test purposes
            let apiv = -1;
            cl('fetching api');
            let promise = fetch('http://104.196.32.194:8080/v1/build-version').
            then((response)=>{
                // let v = response.text();
                // console.log('responce text', v);
                // console.log('responce json', response.json());
                return response.json()


            }).then((smth)=>{
                console.log('version', smth);
                apiv = smth;
            }).catch((e) => {console.log('error', e)});

            // cl('prom',promise);

            // return Object.assign({}, state, {logged: true});
            return {...state, logged: true, apiVersion: apiv};



        case 'SIGN_OUT':
            localStorage.setItem('iamlogged', false);
            browserHistory.push('/');
            return {...state, logged: false};
        default:
            return state;
    }
};

export default user;


