import {takeLatest} from 'redux-saga';
import {fork} from 'redux-saga/effects';

import {usersFetchList} from './users';
import {appsFetchList} from './applications';

export function* sagas() {
    yield [
        fork(takeLatest, 'USERS_FETCH', usersFetchList),
        fork(takeLatest, 'APPLICATIONS_FETCH', appsFetchList),
    ]
}
