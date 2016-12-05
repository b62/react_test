import {call, put} from 'redux-saga/effects';
import ApiApplications from '../api/applications';


export function* appsFetchList(action) {

    //call api to get apps
    const apps = yield call(ApiApplications.getList);

    //dispatch success action with apps attached
    yield put({
        type: 'USERS_FETCH_SUCCESS',
        apps: apps
    });
}

export function* appsAdd(action) {

    yield call(ApiApplications.addUser, action);

    yield put({
        type: 'USERS_ADD_SUCCESS',
        // apps: apps
    });
}

export function* appsEdit(action) {

    yield call(ApiApplications.editUser, action);

    yield put({
        type: 'USERS_EDIT_SUCCESS',
        // apps: apps
    });

}

export function* appsDelete(action) {

    yield call(ApiApplications.deleteUser, action);

    yield put({
        type: 'USERS_DELETE_SUCCESS',
        // apps: apps
    });
}