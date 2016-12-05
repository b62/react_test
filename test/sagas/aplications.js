import { call, put } from "redux-saga/effects";
import assert from "assert";
import { appsFetchList, appsAdd, appsEdit, appsDelete} from "../../src/sagas/applications";
import ApiApplications from "../../src/api/applications";

describe('Applications saga', () => {
    describe('appsFetchList()', () => {
        const generator = appsFetchList();

        it('should return the ApiApplications.getList call', () => {
            assert.deepEqual(generator.next().value, call(ApiApplications.getList));
        });

        it('should return the USERS_FETCH_SUCCESS action', () => {
            assert.deepEqual(generator.next().value, put({type: 'USERS_FETCH_SUCCESS', apps: undefined}))
        });

        it('should be finished', () => {
            assert.equal(generator.next().done, true);

        })
    });

    describe("appsAdd()", () => {
        const generator = appsAdd();
        it("should return true", () => {
        })
    });

    describe("appsEdit()", () => {
        const generator = appsEdit();
        it("should return true", () => {
        })
    })
});

