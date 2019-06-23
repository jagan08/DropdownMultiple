import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DropdownMultiple from './components/dropDown/DropdownMultiple';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

let options = [{
  width: '100%',
  placeHolderForSearchFilter: "foo..."
}]
describe("App Componenet", () => {
  test("it should render the app", () => {
    const wrapper  = shallow(<App/>); 
    expect(wrapper.exists()).toBe(true);
    expect(wrapper ).toMatchSnapshot();    
  })

  test("DropdownMultiple accepts props", () => {  
    const wrapper = mount(<DropdownMultiple options={options}/>);   
    expect(wrapper.props().options).toEqual(options);    
  })

  test("DropdownMultiple contains title which we passed from props", () => {  
    const wrapper = shallow(<DropdownMultiple  title="foo" options={options}/>);   
    const value = wrapper.find('div .dd-header-title').text();
    expect(value).toEqual("foo");    
  })
})