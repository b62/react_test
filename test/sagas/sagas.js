import assert from 'assert';
import {call, put} from 'redux-saga/effects';

import {usersFetchList, usersAdd, usersEdit, usersDelete} from '../../src/sagas/users';
import ApiUsers from '../../src/api/users';

describe('users reducer', () => {

    describe('users fetch from api', () => {
        const generator = usersFetchList();


        it('it should return the ApiUsers.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiUsers.getList))
        });

        it('it should return the users fetchListSuccess action', () => {
            assert.deepEqual(generator.next().value, put({type: 'USERS_FETCH_SUCCESS', users: undefined}));
        });

        it('it should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });


    describe('usersAdd()', () => {
        const generator = usersAdd();

        it('it should return true', () => {
            // assert.deepEqual(generator.next().value, call(ApiUsers.getList))
        });
    });

    describe('usersEdit()', () => {
        const generator = usersEdit();

        it('it should return true', () => {

        });
    });

    describe('usersDelete()', () => {
        const generator = usersDelete();

        it('it should return true', () => {
        });
    });
});