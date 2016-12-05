import assert from 'assert';
import React from 'react';
import {mount, shallow} from 'enzyme';

import Menu from '../../src/components/App';

// unit test for App component

describe('Menu component', () => {

    describe('render()', () => {

        it('should render the component', () => {
            // make shallow copy of component (without children components)
            const wrapper = shallow(<Menu />);

            // assert.equal(wrapper.find('IndexLinkContainer').length, 1); // just check quantity of specific elements
            // assert.equal(wrapper.find('LinkContainer').length, 1);
            // assert.equal(wrapper.find('NavItem').length, 2);

            //{/*expect(shallow(<App/>).contains(<div className="container" />)).to.equal(true);*/}

        })
    });
});