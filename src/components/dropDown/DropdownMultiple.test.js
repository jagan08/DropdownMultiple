import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropdownMultiple from './DropdownMultiple';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let options = [{
  width: '100%',
  placeHolderForSearchFilter: "foo..."
}],
list= [{
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
}
];

describe("DropdownMultiple Componenet", () => {
  test("it should render the app", () => {
    const wrapper = shallow(<DropdownMultiple options={options} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
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
});


describe("handleChange", () => {
  test("when user will search the item state should be updated and item list should be filtered", () => {
    let obj = {target :{ value: 'j'}}
    const wrapper = shallow(<DropdownMultiple options={options} />);
    const instance = wrapper.instance();
    wrapper.setState({ list: list });
    instance.handleChange(obj);
    expect(wrapper.state('list')).toMatchObject([{
      id: 0,
      title: 'Jacks or Better Double up',
      selected: false,
      key: 'list'
  }]);
  })
  test("when search box is empty then item state should be updated and item list should not be filtered", () => {
    let obj = {target :{ value: ''}}
    const wrapper = shallow(<DropdownMultiple options={options}/>);
    const instance = wrapper.instance();
    wrapper.setState({ mainList: list });
    instance.handleChange(obj);
    expect(wrapper.state('list')).toMatchObject(list);
  })
});

describe("close ", () => {
  test("it should close the dropdwon and will set the listOpen to false", () => {
    const wrapper = shallow(<DropdownMultiple options={options}/>);
    const instance = wrapper.instance();    
    instance.close();
    expect(wrapper.state('listOpen')).toBe(false);
  });
})

describe("toggleSelected", () => {
  let filtered = true,
    list= [{
      id: 0,
      title: 'Jacks',
      selected: true,
      key: 'list'
  }
 ],
updatedList= [{
  id: 0,
  title: 'Jacks',
  selected: false,
  key: 'list'
}
],item={'selected': true},
 options = [{
  width: '70%',
  marginLeft: '15%',
  placeHolderForSearchFilter: "Search for a games..."
}];

  test("when user will select the item, state should be updated", () => { 

    const wrapper = shallow(<DropdownMultiple item={item} toggleItem={function(){}}  options={options}/>);
    const instance = wrapper.instance();
    wrapper.setState({ mainList: list });
    wrapper.setState({ list: list });
    wrapper.setState({ filtered: true });
    instance.toggleSelected(0,'list');
    expect(wrapper.state('list')).toMatchObject(updatedList);
  })

  test("when user will deselect the item, state should be updated and search box is empty", () => {
    const wrapper = shallow(<DropdownMultiple item={item} toggleItem={function(){}}  options={options}/>);
    const instance = wrapper.instance();
    wrapper.setState({ mainList: list });
    wrapper.setState({ list: list });
    wrapper.setState({ filtered: false });
    instance.toggleSelected(0,'list');
    expect(wrapper.state('list')).toMatchObject(updatedList);
  })
});