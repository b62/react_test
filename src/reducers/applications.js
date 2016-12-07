import uuid from 'uuid';

const applications = (state = {}, action) => {

    // console.log ('reduser start state', state);
    let new_state = JSON.parse(JSON.stringify(state));
    // console.log('new state clonned', new_state);

    switch (action.type) {
        case 'APPLICATIONS_MODAL_DELETE_SHOW':
            new_state.modal = new_state.modal ? new_state.modal : {};
            new_state.modal.list_delete = {
                show: true,
                id: action.id,
                applicationname: action.applicationname
            };

            return new_state;

        case 'APPLICATIONS_MODAL_DELETE_HIDE':
            new_state.modal = new_state.modal ? new_state.modal : {};
            new_state.modal.list_delete = {
                show: false,
                id: '-1',
                applicationname: ''
            };

            return new_state;

        case 'APPLICATIONS_DELETE':
            for (const idx in new_state.list) {
                if (new_state.list[idx].id === action.id) {
                    new_state.list.splice(idx, 1);
                    break;
                }
            }

            return new_state;

        case 'APPLICATIONS_DELETE_API':
            for (const idx in new_state.list) {
                if (new_state.list[idx].id === action.id) {
                    new_state.list.splice(idx, 1);
                    break;
                }
            }

            return new_state;

        case 'APPLICATIONS_ADD':
            new_state.list.push({
                id: action.id ? action.id : uuid(),
                name: action.name,
                job: action.job
            });

            return new_state;

        case 'APPLICATIONS_ADD_API':
            // new_state.list.push({
            //     id: uuid(),
            //     name: action.name,
            //     job: action.job
            // });
            return new_state;

        case 'APPLICATIONS_EDIT':

            for(const application of new_state.list) {
                if(application.id == action.id) {
                    application.name = action.name;
                    application.job = action.job;
                    break;
                }
            }

            return new_state;

        case 'APPLICATIONS_FETCH_SUCCESS':

            new_state.list = action.applications;

            return new_state;

        default:
            return state;
    }
};

export default applications;
