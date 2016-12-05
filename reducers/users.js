import assert from 'assert';

import users from '../src/reducers/users';

//unit test for reducers

describe('users reducer', () => {

    describe('add()', () => {
        it('should return a new user array element', () => {
            const state = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    }
                ]
            };
            const action = {
                type: 'USERS_ADD',
                id: 2,
                username: 'Gen 2',
                job: 'job 2'
            };

            const expected = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    },
                    {
                        id: 2,
                        username: 'Gen 2',
                        job: 'job 2'
                    }
                ]
            };

            assert.deepEqual(users(state, action), expected);
        })
    });

    describe('edit()', () => {
        it('should return an updated user array element', () => {
            const state = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    }
                ]
            };
            const action = {
                type: 'USERS_EDIT',
                id: 1,
                username: 'Gen 2',
                job: 'job 2'
            };

            const expected = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 2',
                        job: 'job 2'
                    }
                ]
            };

            assert.deepEqual(users(state, action), expected);
        })
    });

    describe('modalDeleteShow()', () => {
        it('should set the list_delete data when its undefined', () => {
            const state = {};

            const action = {
                type: 'USERS_MODAL_DELETE_SHOW',
                id: 2,
                username: 'John'
            };

            const expected = {
                modal: {
                    list_delete: {
                        show: true,
                        id: 2,
                        username: 'John'
                    }
                }
            };

            assert.deepEqual(users(state, action), expected);
        });

        it('should set the list_delete data when it exists', () => {
            const state = {
                modal: {
                    list_delete: {
                        show: false,
                        id: 0,
                        username: ''
                    }
                }
            };

            const action = {
                type: 'USERS_MODAL_DELETE_SHOW',
                id: 2,
                username: 'John'
            };

            const expected = {
                modal: {
                    list_delete: {
                        show: true,
                        id: 2,
                        username: 'John'
                    }
                }
            };

            assert.deepEqual(users(state, action), expected);
        });
    });


    describe('modalDeleteHide()', () => {
        it('should set the list_delete data', () => {
            const state = {
                modal: {
                    list_delete: {
                        show: true,
                        id: 2,
                        username: 'John'
                    }
                }
            };

            const action = {
                type: 'USERS_MODAL_DELETE_HIDE'
            };

            const expected = {
                modal: {
                    list_delete: {
                        show: false,
                        id: -1,
                        username: ''
                    }
                }
            };

            assert.deepEqual(users(state, action), expected);
        });

    });

    describe('modalDeleteConfirm()', () => {
        it('should delete user from list', () => {
            const state = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    },
                    {
                        id: 2,
                        username: 'Gen 2',
                        job: 'job 2'
                    }
                ]
            };

            const action = {
                type: 'USERS_DELETE',
                id: 2
            };

            const expected = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    }
                ]
            };

            assert.deepEqual(users(state, action), expected);
        });

    });

    describe('fetch users from API', () => {
        it('should return a list of users', () => {
            const state = {};

            const action = {
                type: 'USERS_FETCH_SUCCESS',
                users: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    }
                ]
            };

            const expected = {
                list: [
                    {
                        id: 1,
                        username: 'Gen 1',
                        job: 'job 1'
                    }
                ]
            };

            assert.deepEqual(users(state, action), expected);
        })
    })
});
