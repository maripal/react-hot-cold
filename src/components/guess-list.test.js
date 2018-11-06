import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it ('renders without failing', () => {
        shallow(<GuessList guesses={[]}/>);
    })

    it ('should render list of guesses', () => {
        let values = [8, 23, 7];
        let wrapper = shallow(<GuessList guesses={values}/>);
        let items = wrapper.find('li');
        expect(items.length).toEqual(values.length);
        values.forEach((value, index) => {
            expect(items.at(index).text()).toEqual(value.toString());
        })
    })
})