import React from 'react'
import { shallow } from 'enzyme';
import Gift from './Gift'
import { getEnabledCategories } from 'trace_events';

describe('<Gift />', () => {



    it('should render without error', () => {
        const wrapper = shallow(<Gift gift={{}} />);
        expect(wrapper.exists()).toBe(true)
    })

    describe('when enter person name', () => {

        let wrapper, updateGiftMock, gift;

        beforeEach(() => {
            gift = { person: "John", persent: "Jane" }
            updateGiftMock = jest.fn()
            wrapper = shallow(<Gift gift={gift} updateGift={updateGiftMock} />);
        })

        it('should set to personName on state', () => {
            const person = wrapper.find('.personName')
            person.simulate('change', { target: { value: gift.person } })
            expect(updateGiftMock).toHaveBeenCalledWith(gift)
        })

        it('should set to presentName on state', () => {
            const person = wrapper.find('.presentName')
            person.simulate('change', { target: { value: gift.person } })
            expect(updateGiftMock).toHaveBeenCalledWith(gift)

        })
    })

    describe('when push the remove button', () => {
        const mockRemove = jest.fn();
        const id = 1;
        const props = { gift: { id }, removeGift: mockRemove }
        const wrapper = shallow(<Gift {...props} />);
        const btn = wrapper.find('.removeBtn')

        it('should be exist', () => {
            expect(btn.exists()).toBe(true)
        })

        it('should call remove function', () => {
            btn.simulate('click')
            expect(mockRemove).toHaveBeenCalledWith(id)
        })
    })
})