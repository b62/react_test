import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';

import Home from '../../src/pages/Home';

// unit test for App component

describe('Menu component', () => {

    describe('render()', () => {

        it('should render the component', () => {
            // make shallow copy of component (without children components)
            const wrapper = shallow(<Home />);

            assert.equal(wrapper.find('div').length, 1);
        })
    });
});