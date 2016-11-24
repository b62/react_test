import assert from 'assert';
import React from 'react';
import {mount, shallow} from 'enzyme';

import App from '../../src/components/App';

// unit test for App component

describe('App component', () => {

    describe('render()', () => {

        it('should render the component', () => {
            // make shallow copy of component (without children components)
            const wrapper = shallow(<App/>);

            assert.equal(wrapper.find('.container').length, 1); // just check quantity of specific elements
            assert.equal(wrapper.find('.row').length, 2);

            //{/*expect(shallow(<App/>).contains(<div className="container" />)).to.equal(true);*/}

        })
    });
});