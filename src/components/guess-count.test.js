import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it ('renders without failing', () => {
        shallow(<GuessCount />);
    })

    it ('renders count correctly', () => {
        let value = 5;

        let wrapper = shallow(<GuessCount guessCount={value}/>);
        expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
    });
})