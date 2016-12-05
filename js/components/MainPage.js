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




const MainPage = () => (
    <div>
        <p>
            Protecting your branch network from complex and persistent threats is becoming increasingly difficult.
            Gaining visibility across branch traffic, applications, users, and devices is critical to securing your
            network.
        </p>
        <p>
            Join TechWiseTV’s Robb Boyd and Cisco Stealthwatch Learning Network License Network experts Brian Ford and
            Sukrit Dasgupta as they discuss using machine-learning sensors, packet capture, and network-based
            application
            recognition deployed on Cisco routers for faster incident response and device-level mitigation at the
            branch.
        </p>
        <p>
            The Stealthwatch Learning Network License gives you deeper visibility across and between branch networks and
            faster threat detection and response with minimal impact to network performance.
        </p>
        <p>
            In this session you learn how Cisco Stealthwatch Learning Network License deploys right on your Cisco
            Integrated
            Services Router (ISR), as well as enables centralized visibility into anomalies and threats, monitors
            traffic
            without impacting network performance, and automates threat detection and mitigation with intelligent
            machine
            learning sensors.
        </p>
    </div>
);

export default MainPage
