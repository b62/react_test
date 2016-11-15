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
import Formsy from 'formsy-react';
import {
    FormsyCheckbox,
        FormsyDate, FormsyRadio, FormsyRadioGroup,
        FormsySelect, FormsyText, FormsyTime, FormsyToggle
} from 'formsy-material-ui/lib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';


const LoginForm = React.createClass({


    /**
     * As an alternative to `MuiThemeProvider` you can add a theme directly into context.
     * See the [Material-UI themes](http://www.material-ui.com/#/customization/themes) docs for details.
     *
     * childContextTypes: {
   *   muiTheme: React.PropTypes.object,
   * },
     * getChildContext(){
   *   return {
   *     muiTheme: getMuiTheme(),
   *   }
   * },
     */

    getInitialState() {
        return {
            canSubmit: false
        };
    },

    errorMessages: {
        wordsError: "Please only use letters",
        numericError: "Please provide a number",
        urlError: "Please provide a valid URL",
        emailError: "Please provide a valid email"
    },

    styles: {
        paperStyle: {
            width: 300,
            margin: 'auto',
            padding: 20
        },
        switchStyle: {
            marginBottom: 16
        },
        submitStyle: {
            marginTop: 32,
        },
    },

    enableButton() {
        this.setState({
            canSubmit: true,
        });
    },

    disableButton() {
        this.setState({
            canSubmit: false,
        });
    },

    submitForm(data) {

        let {store} = this.context;
        cl(store);

        // alert(JSON.stringify(data, null, 4));
        store.dispatch({
            type: 'LOGIN',
            data: data
        });

        browserHistory.push('/');
    },



    notifyFormError(data) {
        console.error('Form error:', data);
    },

    render() {
        let {paperStyle, switchStyle, submitStyle} = this.styles;
        let {wordsError, numericError, urlError, emailError} = this.errorMessages;


        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={{maxWidth: '20rem', margin: 'auto'}} className="kmgLoginContainer">
                    {/*<Paper style={paperStyle}>*/}
                    <Formsy.Form
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}
                        onValidSubmit={this.submitForm}
                        onInvalidSubmit={this.notifyFormError}
                    >


                        {/*<FormsyText*/}
                        {/*name="login"*/}
                        {/*validations="isWords"*/}
                        {/*validationError={wordsError}*/}
                        {/*required*/}
                        {/*hintText="What is your name?"*/}
                        {/*floatingLabelText="Name"*/}
                        {/*/>*/}
                        <FormsyText
                            name="email"
                            validations="isEmail"
                            validationError={emailError}
                            required
                            hintText="Your email is your login"
                            floatingLabelText="Login"
                            updateImmediately
                        />
                        <FormsyText
                            name="password"
                            type="password"
                            required
                            floatingLabelText="Password"
                        />

                        {/*<RaisedButton*/}
                        {/*type="cancel"*/}
                        {/*label="Cancel"*/}
                        {/*/>*/}
                        <RaisedButton
                            style={submitStyle}
                            type="submit"
                            label="Submit"
                            disabled={!this.state.canSubmit}
                        />
                    </Formsy.Form>
                    {/*</Paper>*/}
                </div>
            </MuiThemeProvider>
        );
    }
});

LoginForm.contextTypes = {
    store: React.PropTypes.object
};

export default LoginForm;
