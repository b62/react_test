import React, {Component} from 'react';

import UserList from '../components/UsersList';


export default class Home extends Component {
    render() {
        return(
            <div>
                <UserList/>
            </div>
        )
    }
}