import React, {Component} from 'react';
import './checkBoxStyle.css';

class CheckboxMultipleSelect extends Component {
  /**
   * @description Initilize the component.
   * @param {*} props for component initilization.
   */
  constructor (props) {
    super (props);
    this.state = {
      mainList: this.props.mainList,
      list: this.props.list,
    };
  }

  /**
       * @description Component will recieve props to update the own state
       */
  componentWillReceiveProps () {
    this.setState ({
      mainList: this.props.mainList,
      list: this.props.list,
    });
  }

  /**
 * @description When user will click the check box based on user action toggle the item.
 * @param {Number} Id of selected item.
 * @param {String} key key of list. if user is searching and item is slected the update both the list.
 */
  toggleSelected = (id, key) => {
    let tempList = JSON.parse (JSON.stringify (this.state[key])),
      mainList = JSON.parse (JSON.stringify (this.state['mainList']));
    mainList[id].selected = !mainList[id].selected;
    // check if search box is empty or not
    if (this.props.filtered) {
      tempList.filter ((item, index) => {
        if (id === item.id) {
          tempList[index].selected = !tempList[index].selected;
        }
      });
    } else {
      tempList[id].selected = !tempList[id].selected;
    }
    this.props.toggleItem (key, tempList, mainList);
    this.setState ({
      [key]: tempList,
      mainList: mainList,
    });
  };
  
  /**
   * @description Render the check box item in dropdown
   */
  render () {
    const {item} = this.props;
    return (
      <span>
        <input
          type="checkbox"
          defaultChecked={item.selected}
          className="regular-checkbox big-checkbox"
          onClick={() => {
            this.toggleSelected (item.id, item.key);
          }}
          key={item.title}
        />
        <li className="dd-list-item" key={item.id}>
          {item.title} {item.selected}
        </li>
      </span>
    );
  }
}

export default CheckboxMultipleSelect;
