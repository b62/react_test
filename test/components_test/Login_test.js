import React from "react";
import { shallow } from "enzyme";
import assert from "assert";

import Login from "/js/components/Login";
import VisibleGlobalNav from '/js/containers/VisibleGlobalNav';
import LoginForm from '/js/components/LoginForm';

describe("Login component", () => {
    describe("render()", () => {
        it("show render the component", () => {
            const wrapper = shallow(<Login />);
            assert.equal(wrapper.find(<VisibleGlobalNav />).length, 1);
          assert.equal(wrapper.find(<LoginForm />).length, 1);

        })
    })
});

