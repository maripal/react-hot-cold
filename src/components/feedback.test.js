import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback';

describe('<Feedback />', () => {
    it('renders without crashing', () => {
        shallow(<Feedback />);
    })

    it('renders feedback', () => {
        let testFeedback = "It's working";

        let wrapper = shallow(<Feedback feedback={testFeedback}/>);
        expect(wrapper.contains(testFeedback)).toEqual(true);
    })
})