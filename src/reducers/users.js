import uuid from 'uuid';

const users = (state = {}, action) => {

    // console.log ('reduser start state', state);
    let new_state = JSON.parse(JSON.stringify(state));
    // console.log('new state clonned', new_state);

    switch (action.type) {
        case 'USERS_MODAL_DELETE_SHOW':
            new_state.modal = new_state.modal ? new_state.modal : {};
            new_state.modal.list_delete = {
                show: true,
                id: action.id,
                username: action.username
            };

            return new_state;

        case 'USERS_MODAL_DELETE_HIDE':
            new_state.modal = new_state.modal ? new_state.modal : {};
            new_state.modal.list_delete = {
                show: false,
                id: '-1',
                username: ''
            };

            return new_state;

        case 'USERS_DELETE':
            for (const idx in new_state.list) {
                if (new_state.list[idx].id === action.id) {
                    new_state.list.splice(idx, 1);
                    break;
                }
            }

            return new_state;

        case 'USERS_DELETE_API':
            for (const idx in new_state.list) {
                if (new_state.list[idx].id === action.id) {
                    new_state.list.splice(idx, 1);
                    break;
                }
            }

            return new_state;

        case 'USERS_ADD':
            new_state.list.push({
                id: action.id ? action.id : uuid(),
                username: action.username,
                job: action.job
            });

            return new_state;

        case 'USERS_ADD_API':
            // new_state.list.push({
            //     id: uuid(),
            //     username: action.username,
            //     job: action.job
            // });
            return new_state;

        case 'USERS_EDIT':

            for(const user of new_state.list) {
                if(user.id == action.id) {
                    user.username = action.username;
                    user.job = action.job;
                    break;
                }
            }

            return new_state;

        case 'USERS_FETCH_SUCCESS':

            new_state.list = action.users;

            return new_state;



        default:
            return state;
    }
};

export default users;
