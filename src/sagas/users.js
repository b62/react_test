import {call, put} from 'redux-saga/effects';
import ApiUsers from '../api/users';


export function* usersFetchList(action) {

    //call api to get users
    const users = yield call(ApiUsers.getList);

    //dispatch success action with users attached
    yield put({
        type: 'USERS_FETCH_SUCCESS',
        users: users
    });
}

export function* usersAdd(action) {

    yield call(ApiUsers.addUser, action);

    yield put({
        type: 'USERS_ADD_SUCCESS',
        // users: users
    });
}

export function* usersEdit(action) {

    yield call(ApiUsers.editUser, action);

    yield put({
        type: 'USERS_EDIT_SUCCESS',
        // users: users
    });

}

export function* usersDelete(action) {

    yield call(ApiUsers.deleteUser, action);

    yield put({
        type: 'USERS_DELETE_SUCCESS',
        // users: users
    });
}