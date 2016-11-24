import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {Table, Pagination, ProgressBar} from 'react-bootstrap';


import UsersListElement from './UsersListElement';
import UserDelete from './UserDelete';

// const UsersList = (props) => (
//     <table>
//         <thead>
//         <tr>
//             <th>id</th>
//             <th>Name</th>
//             <th>Job</th>
//         </tr>
//         </thead>
//         <tbody>
//         {props.users.map((user, idx) => (
//             <UsersListElement key={idx} user1={user} />
//         ))}
//         </tbody>
//     </table>
// );

class UsersList extends Component {

    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);

        // fetch users from API if it doesn't exist
        if (this.props.users.length === 0) {
            this.props.dispatch({
                type: 'USERS_FETCH'
            })
        }
    }


    render() {
        let {users} = this.props || [];
        // console.log('list render', this.props.users);

        const per_page = 10;
        const pages = Math.ceil(this.props.users.length / per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1 ) * per_page;
        let star_count = 0;

        let visibleUsers = users.slice(start_offset, start_offset+per_page);

        if(!this.props.users.length) {

            return (
                <ProgressBar active now={100} />
            )

        } else {

            return (
                <div>
                    <Table bordered hover responsive striped>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>
                                <div className="kmg"> Actions</div>
                            </th>

                        </tr>
                        </thead>
                        <tbody>
                        {visibleUsers.map((user, idx) => (
                            <UsersListElement key={idx} user={user}/>
                        ))}
                        </tbody>
                    </Table>

                    <Pagination className="users-pagination pull-right"
                                bsSize="medium"
                                maxButtons={10}
                                first last next prev boundaryLinks
                                items={pages}
                                activePage={current_page}
                                onSelect={this.changePage}
                    />

                    <UserDelete/>
                </div>
            );
        }
    }

    changePage(page) {
        this.props.dispatch(push(`/?page=${page}`));
    }
}

//data adapter (selection of needed from the state)
const mapStateToProps = (state) => {
    return {
        users: state.users.list || [],
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
};
// providing store into component from redux provider
// and export connected class
export default connect(mapStateToProps)(UsersList);


