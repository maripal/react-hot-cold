import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('renders without crashing', () => {
        shallow(<AuralStatus />);
    })

    it ('renders aural status', () => {
        let testStatus = "You are listening";

        let wrapper = shallow(<AuralStatus auralStatus={testStatus}/>);
        expect(wrapper.contains(testStatus)).toEqual(true);
    })
})