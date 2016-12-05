/**
 * Created by macmini on 09.11.16.
 */


import 'babel-polyfill';
import  React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers} from 'redux';


let MyApp = ({dispatch}) => {

    return (
        <div>
            <button onClick={()=> {
                dispatch({
                    type: 'LOGIN',
                    text: 'test text'
                })
            }}>
                Something
            </button>

            <div>
                {this.props.items.map((app, id) =>
                    <div key={id}>
                        {app.title}
                    </div>
                )}
            </div>
        </div>
    )
};
MyApp = connect()(MyApp);

export default MyApp;

