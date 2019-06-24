import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CheckboxMultipleSelect from './CheckboxMultipleSelect';
import Enzyme, {shallow, mount} from 'enzyme';
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
],item={'selected': true}

  test("when user will select the item, state should be updated", () => { 

    const wrapper = shallow(<CheckboxMultipleSelect item={item} toggleItem={function(){}}  filtered={filtered}/>);
    const instance = wrapper.instance();
    wrapper.setState({ mainList: list });
    wrapper.setState({ list: list });
    instance.toggleSelected(0,'list');
    expect(wrapper.state('list')).toMatchObject(updatedList);
  })

  test("when user will deselect the item, state should be updated and search box is empty", () => {
    let filtered = false;
    
    const wrapper = shallow(<CheckboxMultipleSelect item={item} toggleItem={function(){}}  filtered={filtered}/>);
    const instance = wrapper.instance();
    wrapper.setState({ mainList: list });
    wrapper.setState({ list: list });
    instance.toggleSelected(0,'list');
    expect(wrapper.state('list')).toMatchObject(updatedList);
  })
});
