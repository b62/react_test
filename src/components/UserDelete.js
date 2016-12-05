import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {connect} from 'react-redux';


class UserDelete extends React.Component {

    constructor(props){
        super(props);

        this.modalDeleteHide = this.modalDeleteHide.bind(this);
        this.modalDeleteConfirm = this.modalDeleteConfirm.bind(this);
    }

    render(){
        return (
            <Modal show={this.props.modal_delete.show}>
                <Modal.Header>
                    <Modal.Title>
                        Are you sure? ({this.props.modal_delete.username})
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={this.modalDeleteHide}>No</Button>
                    <Button onClick={this.modalDeleteConfirm} bsStyle="primary">Yes</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    modalDeleteHide(event) {
        this.props.dispatch({
            type: 'USERS_MODAL_DELETE_HIDE'
        })
    }

    modalDeleteConfirm(event) {
        //delete from the state  //TODO redo to single point
        this.props.dispatch({
            type: 'USERS_DELETE',
            id: this.props.modal_delete.id
        });

        //delete from API  //TODO redo to single point
        this.props.dispatch({
            type: 'USERS_DELETE_API',
            id: this.props.modal_delete.id
        });

        this.props.dispatch({
            type: 'USERS_MODAL_DELETE_HIDE'
        })
    }
}
const mapStateToProps = (state) => {
    //set data for user delete data
    let modal_delete;

    if(state.users.modal && state.users.modal.list_delete) {
        modal_delete = state.users.modal.list_delete;
    } else {
        modal_delete = {
            show: false,
            id: -1,
            username: ''
        }
    }

    return {
        modal_delete: modal_delete
    }
};

export default connect(mapStateToProps)(UserDelete);