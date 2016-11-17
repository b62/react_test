
const cl = console.log;

import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';

import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import GlobalNav from '../components/GlobalNav';

const VisibleGlobalNav = connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalNav);

export default VisibleGlobalNav;
