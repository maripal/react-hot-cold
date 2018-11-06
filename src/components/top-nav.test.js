import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
    it ('renders without failing', () => {
        shallow(<TopNav />);
    })

    it ('should call onNewGame when new game is clicked', () => {
        let callback = jest.fn();
        let wrapper = shallow(<TopNav onRestartGame={callback}/>);
        let link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it ('should call onGenerateAuralUpdate when state of game link is clicked', () => {
        let callback = jest.fn();
        let wrapper = shallow(<TopNav onGenerateAuralUpdate={callback}/>);
        let link = wrapper.find('.status-link');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });
})