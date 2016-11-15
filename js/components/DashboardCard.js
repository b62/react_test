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
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';


class DashboardCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="kmgCard">
                <CardHeader
                    title="Walmart Demo Application Avatar"
                    subtitle="Walmart Demo Application"
                    avatar="images/app_avatar.png"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>
                    <Toggle
                        toggled={this.state.expanded}
                        onToggle={this.handleToggle}
                        labelPosition="right"
                        label="This toggle controls the expanded state of the component."
                    />
                </CardText>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title="Employee demo application" subtitle="General "/>}
                >
                    <img src="images/app_big_bg.jpg"/>
                </CardMedia>
                <CardTitle title="Wallmart Demo App" subtitle="for internal users" expandable={true}/>
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand}/>
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce}/>
                </CardActions>
            </Card>
        );
    }
}

export default DashboardCard;
