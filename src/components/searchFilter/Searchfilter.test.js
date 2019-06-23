import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import searchFilter from './searchFilter';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});


describe("App Componenet", () => {
    let options = [{
        width: '100%',
        placeHolderForSearchFilter: "Search for a games..."
    }]
  test("it should render the app", () => {
    const wrapper  = shallow(<searchFilter options={options}/>); 
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();    
  })

})