import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  describe('when app fresh start', () => {
    it('renders without crashing', () => {
      shallow(<App />);
    });
    it('should has title', () => {
      const wrapper = shallow(<App />);
      const welcome = <h2>Welcome to Gift Giver App</h2>;
      expect(wrapper.contains(welcome)).toBe(true)
    })

    it('state shoud be empty array', () => {
      const app = shallow(<App />);

      expect(app.state().gifts).toEqual([])
    })
  })

  describe('when new item button clicked', () => {
    let app;
    let btn;
    beforeEach(() => {
      app = shallow(<App />);
      btn = app.find(".addNewItem")
    })

    it('should have  `New Item Button` button', () => {
      expect(btn.exists()).toBe(true)
    })

    it('should added new item', () => {
      btn.simulate('click')
      expect(app.state().gifts.length).toBe(1)
    })

    it('should render gift list', () => {
      btn.simulate('click')
      const gifts = app.find('.gift-list')

      expect(gifts.children().length).toBe(1)
    })

    it('should have unique id in gifts', () => {
      btn.simulate('click')
      btn.simulate('click')
      const { gifts } = app.state()

      const ids = gifts.map(x => x.id)
      expect(ids.length).toBe(new Set(ids).size)
    })
  })

  describe('when call remove function', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App />);
      wrapper.setState({ gifts: [{ id: 1 }] })
    })
    it('should remove gift from state by right id', () => {

      //init state
      expect(wrapper.state().gifts.length).toBe(1)
      wrapper.instance().removeGift(1);
      expect(wrapper.state().gifts.length).toBe(0)
    })
    it('should not remove gift from state by wrong id', () => {

      //init state
      expect(wrapper.state().gifts.length).toBe(1)
      wrapper.instance().removeGift(2);
      expect(wrapper.state().gifts.length).toBe(1)
    })
  })
  describe('when gift updated', () => {
    let wrapper
    let state;
    beforeEach(() => {
      wrapper = shallow(<App />);
      state =  { gifts: [{id:1,person:'John',present:'puppy'},{id:2,person:'Kenny',present:'a pc game'}] }
      wrapper.instance().setState(state)
    })

    it('should update gift on state', () => {
      let gift = state.gifts[0];
      gift.person = 'Jane',
      gift.present = 'cat'
      wrapper.instance().updateGift(gift);

      const expectedGift = wrapper.state().gifts[0]
      expect(expectedGift).toEqual(gift)
    })

    it('should update right gift', () =>{
      let gift = state.gifts[0];
      gift.person = 'Jane',
      gift.present = 'cat'
      wrapper.instance().updateGift(gift);

      const expectedGift = wrapper.state().gifts[1]
      expect(expectedGift.person).toEqual("Kenny")
      expect(expectedGift.present).toEqual("a pc game")
    })

  })

})