import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
    it ('renders without failing', () => {
        shallow(<Header />);
    })
})