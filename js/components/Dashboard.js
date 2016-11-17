
import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

import VisibleGlobalNav from '../containers/VisibleGlobalNav';
import DashboardCard from './DashboardCard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme'



const Dashboard = () => (
    <div>
        <VisibleGlobalNav />
        <h3>Applications</h3>

        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
            </div>
        </MuiThemeProvider>
    </div>
);

export default Dashboard;


