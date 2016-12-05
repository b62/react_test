/**
 * Created by macmini on 09.11.16.
 */

import MenuItem from 'material-ui/MenuItem';


import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';

import {render} from 'react-dom';



import VisibleGlobalNav from './../containers/VisibleGlobalNav';


const About = React.createClass({
    render() {
        return (
            <div>
                <VisibleGlobalNav />
                <div>About page</div>
            </div>

        );
    }
});

export default About;
