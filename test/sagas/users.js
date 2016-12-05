import { call, put } from "redux-saga/effects";
import assert from "assert";
import { usersFetchList, usersAdd, usersEdit, usersDelete} from "../../src/sagas/users"
import ApiUsers from "../../src/api/users";




describe('User saga', () => {
    describe('usersFetchList()', () => {
        const generator = usersFetchList();

        it('should return the ApiUsers.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiUsers.getList));
        });

        it('should return the USERS_FETCH_SUCCESS action', () => {
            assert.deepEqual(generator.next().value, put({type: 'USERS_FETCH_SUCCESS', users: undefined}))
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });

        describe("UsersAdd()", () => {
            const generator = usersAdd();
            it("should return true", () => {

            })

        });

        describe("usersEdit()", () => {
            const generator = usersEdit();
            it("should return true", () => {
            })

        });

        describe("usersDelete()", () => {
            const generator = usersDelete();
            it("should return true", () => {

            })
        })
    })


});


       /* describe('usersAdd() - add', () => {
            const action = {
                user: {},
                callbackSuccess: () => {
                }
            };
            const generator = usersAdd(action);

            it('should return the ApiUsers.addUser call', () => {
                assert.deepEqual(generator.next().value, call(ApiUsers.addUser));
            });

            it('should return the USERS_ADD_SUCCESS action', () => {
                assert.deepEqual(generator.next().value, put({
                    type: 'USERS_ADD_SUCCESS',
                    user: action.user
                }));
            });

            it('should be finished', () => {
                assert.equal(generator.next().done, true);
            });
        });


        describe('usersEdit() - edit', () => {
            const action = {
                user: {id: 1},
                callbackSuccess: () => {
                },
            };
            const generator = usersEdit(action);

            it('should return the ApiUsers.editUser call', () => {
                assert.deepEqual(generator.next().value, call(ApiUsers.editUser));
            });

            it('should return the USERS_EDIT_SUCCESS action', () => {
                assert.deepEqual(generator.next().value, put({
                    type: 'USERS_EDIT_SUCCESS',
                    user: action.user,
                }));
            });

            it('should be finished', () => {
                assert.equal(generator.next().done, true);
            });
        });

        describe('usersDelete()', () => {
            const action = {
                user_id: 1,
            };
            const generator = usersDelete(action);

            it('should return the ApiUsers.delete call', () => {
                assert.deepEqual(generator.next().value, call(ApiUsers.deleteUser));
            });

            it('should return the USERS_DELETE_SUCCESS action', () => {
                assert.deepEqual(generator.next().value, put({
                    type: 'USERS_DELETE_SUCCESS',
                    user_id: action.user_id,
                }));
            });

            it('should be finished', () => {
                assert.equal(generator.next().done, true);
            });
        })
    })

})
*/
