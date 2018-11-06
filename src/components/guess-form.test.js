import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it ('renders without failing', () => {
        shallow(<GuessForm />);
    })

    it('should fire onMakeGuess when the form is submitted', () => {
        let callback = jest.fn();
        let wrapper = mount(<GuessForm onMakeGuess={callback}/>);
        const value = 23;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });

    it ('should reset input after form is submitted', () => {
        let wrapper = mount(<GuessForm />);
        let input = wrapper.find('input[type="number"]');
        input.instance().value = 10;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
})