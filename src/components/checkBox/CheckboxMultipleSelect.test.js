import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CheckboxMultipleSelect from './CheckboxMultipleSelect';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


describe("CheckboxMultipleSelect Componenet", () => {
    const item = {
        id: 0,
        title: 'Jacks or Better Double up',
        selected: false,
        key: 'list'
    };
  test("it should render the app", () => {
    const wrapper  = shallow(<CheckboxMultipleSelect item={item}/>); 
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();    
  })

})


