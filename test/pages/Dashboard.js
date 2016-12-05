
import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from '../../src/pages/Dashboard';


describe('Dashboard component', () => {

    describe('render()', () => {

        it('should render the component', () => {
            // make shallow copy of component (without children components)
            const wrapper = shallow(<Dashboard />);

            assert.equal(wrapper.find('div').length, 1);
        })
    });
});
