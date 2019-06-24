import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropdownMultiple from './DropdownMultiple';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let options = [{
  width: '100%',
  placeHolderForSearchFilter: "foo..."
}];
let list= [{
    id: 0,
    title: 'Jacks or Better Double up',
    selected: false,
    key: 'list'
},
{
    id: 1,
    title: 'Creature from the black Lagoon',
    selected: false,
    key: 'list'
},
{
    id: 2,
    title: 'Go bananas',
    selected: false,
    key: 'list'
},
{
    id: 3,
    title: 'Ghost pirates',
    selected: false,
    key: 'list'
},
{
    id: 4,
    title: 'Berryburst',
    selected: false,
    key: 'list'
},
{
    id: 5,
    title: 'Butterfly stax',
    selected: false,
    key: 'list'
},
{
    id: 6,
    title: 'Arabian Nights',
    selected: false,
    key: 'list'
},
{
    id: 7,
    title: 'Excalibur',
    selected: false,
    key: 'list'
}
];

describe("DropdownMultiple Componenet", () => {
  test("it should render the app", () => {
    const wrapper = shallow(<DropdownMultiple options={options} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  })

})

describe("applyConditionsOnTitle", () => {
  test("check the ttile based on selected items if items are not selected", () => {
    const wrapper = shallow(<DropdownMultiple options={options}  title="foo"/>);
    wrapper.setState({ list: list });
    const instance = wrapper.instance();
    const titleValue = instance.applyConditionsOnTitle();
    expect(titleValue.headerTitle).toBe('foo');
  });

  test("check the ttile based on selected items if 1 item is selected ", () => {
    let list= [{
      id: 0,
      title: 'Jacks or Better Double up',
      selected: true,
      key: 'list'
  }];
    const wrapper = shallow(<DropdownMultiple options={options}  title="foo" titleHelper="item"/>);
    wrapper.setState({ list: list });
    const instance = wrapper.instance();
    const titleValue = instance.applyConditionsOnTitle();
    expect(titleValue.headerTitle).toBe('1 item');
  });

  test("check the ttile based on selected items if more than 1 item is selected ", () => {
    let list= [{
      id: 0,
      title: 'Jacks',
      selected: true,
      key: 'list'
  },
  {
    id: 1,
    title: 'foo',
    selected: true,
    key: 'list'
}];
    const wrapper = shallow(<DropdownMultiple options={options}  title="foo" titleHelper="item"/>);
    wrapper.setState({ list: list });
    const instance = wrapper.instance();
    const titleValue = instance.applyConditionsOnTitle();
    expect(titleValue.headerTitle).toBe('2 items');
  });
})
