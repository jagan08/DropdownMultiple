import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropdownMultiple from './DropdownMultiple';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

let options = [{
    width: '100%',
    placeHolderForSearchFilter: "foo..."
  }]
describe("App Componenet", () => {
  test("it should render the app", () => {
    const wrapper  = shallow(<DropdownMultiple options={options}/>); 
    expect(wrapper.exists()).toBe(true);
    expect(wrapper ).toMatchSnapshot();    
  })

})