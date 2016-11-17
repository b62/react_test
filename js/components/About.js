
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
                <h4>About page</h4>
            </div>

        );
    }
});

export default About;
