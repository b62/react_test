
import assert from 'assert';
import React from 'react';
import {shallow} from 'enzyme';

import NonFound from '../../src/pages/NotFound';


describe('NonFound component', () => {

    describe('render()', () => {

        it('should render the component', () => {
            // make shallow copy of component (without children components)
            const wrapper = shallow(<NonFound />);

            assert.equal(wrapper.find('div').length, 1);
            assert.equal(wrapper.find("div").children().text(), "No such page");

        });
    });
});

