import React, {Component} from 'react';

import ApplicationsList from '../components/ApplicationsList';


export default class Applications extends Component {
    render() {
        return(
            <div>

                <h2>Apps list</h2>

                <ApplicationsList/>

            </div>
        )
    }
}

