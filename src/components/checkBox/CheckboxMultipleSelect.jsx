import React, {Component} from 'react';
import './checkBoxStyle.css';

class CheckboxMultipleSelect extends Component {  
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
            this.props.toggleItem (item.id, item.key);
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
