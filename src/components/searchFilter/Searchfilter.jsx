import React, {Component} from 'react';
import './searchFilter.css';

class Searchfilter extends Component {
  /**
   * @description Search the items in dropdown. when user will enter item names in dropdown
   * it will filter the dropdown and rend the filtered dropdown list.
   */
  render () {
    let {options} = this.props;
    return (
      <input
        type="text"
        className="input-style"
        onChange={this.props.handleChange}
        placeholder={options[0].placeHolderForSearchFilter}
      />
    );
  }
}

export default Searchfilter;
