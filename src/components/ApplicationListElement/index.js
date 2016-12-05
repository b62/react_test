import React, {Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class ApplicationsListElement extends Component {

    constructor(props){
        super(props);

        // bind THIS to the event method  - as in usual way "this" isn't pointing to class instance
        this.modalDeleteShow  = this.modalDeleteShow.bind(this);
    }

    render() {
        let props = this.props;

        return (
            <tr>
                <td>{props.user.id}</td>
                <td>{props.user.username}</td>
                <td>{props.user.job}</td>
                <td><Link to={`/user-edit/${props.user.id}`}>
                    <Button bsSize="xsmall">Edit <Glyphicon glyph="edit"/></Button></Link>{' '}
                    <Button bsSize="xsmall"
                            data-id={props.user.id}
                            data-username={props.user.username}
                            onClick={this.modalDeleteShow}
                    >
                        Delete <Glyphicon glyph="remove-circle"/>
                    </Button>
                </td>
            </tr>
        )
    }

    modalDeleteShow(event) {

        const user_id = Number(event.target.dataset.id);
        const username = event.target.dataset.username;

        console.log(event.target.dataset, this.props);

        this.props.dispatch({
            type: 'USERS_MODAL_DELETE_SHOW',
            id: user_id,
            username: username
        })
    }

}

ApplicationsListElement.propTypes = {
    user: React.PropTypes.object.isRequired
};

export default connect()(ApplicationsListElement);
