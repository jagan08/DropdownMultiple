import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './dropDownMultiple.css';
import Searchfilter from '../searchFilter/Searchfilter';
import CheckboxMultipleSelect from '../checkBox/CheckboxMultipleSelect';

class DropdownMultiple extends Component {
  /**
   * @description Initilize the component.
   * @param {*} props for component initilization.
   */
  constructor (props) {
    super (props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
      filtered: false,
      mainList: this.props.list,
      list: this.props.list,
    };
  }

  /**
   * @description when component did update the add and remove event listener
   * based on dropdown if list is open or not
   */
  componentDidUpdate () {
    const {listOpen} = this.state;
    setTimeout (() => {
      if (listOpen) {
        window.addEventListener ('click', this.close);
      } else {
        window.removeEventListener ('click', this.close);
      }
    }, 0);
  }

  /**
     * @description When user will search the item in search box.
     * @param {Object} event The current taget object.
     */
  handleChange = event => {
    // Variable to hold the original version and filtered version of the list
    let currentList = [], newList = [];
    // If the search bar isn't empty
    if (event.target.value !== '') {
      this.setState ({
        filtered: true,
      });
      // Assign the original list to currentList
      currentList = this.state.list;
      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter (item => {
        const lc = item.title.toLowerCase ();
        const filter = event.target.value.toLowerCase ();
        return lc.includes (filter);
      });
    } else {
      this.setState ({
        filtered: false,
      });
      // If the search bar is empty, set newList to original task list
      newList = this.state.mainList;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState ({
      list: newList,
    });
  };

  /**
 * @description When user will click the check box based on user action toggle the item. *
 * @param {String} key key of list. if user is searching and item is slected the update both the list.
 * @param {Object} selectedList of selected items in dropdown.
 * @param {Object} mainList to set data in sync with filtered data.
 */
  toggleSelected = (key,selectedList,mainList) => {   
    this.setState (() => ({
        [key]: selectedList,
        mainList: mainList,
      }),() => {
        this.updateTitle ();
      }
    );
  };

  /**
   * @description Remove the click listener for dropdown.
   */
  componentWillUnmount () {
    window.removeEventListener ('click', this.close);
  }

  /**
   * @description close the open list when user will click for dropdown
   */
  close = () => {
    this.setState ({
      listOpen: false,
    });
  };

  /**
   * @description Apply condtions on title check whether the games are selected or not,
   *  and based on that change the title of dropdown
   */
  applyConditionsOnTitle () {
    const count = this.state.list.filter (function (a) {
      return a.selected;
    }).length;
    if (count === 0) {
      return {headerTitle: this.props.title};
    } else if (count === 1) {
      return {headerTitle: `${count} ${this.props.titleHelper}`};
    } else if (count > 1) {
      return {headerTitle: `${count} ${this.props.titleHelper}s`};
    }
  }

  /**
   * @description update Title of dropdown when user will select the ganmes.
   */
  updateTitle = () => {
    let obj = this.applyConditionsOnTitle ();
    this.setState ({
      headerTitle: obj.headerTitle,
    });
  };

  /**
   * @description Toggle the list when user will click on dropdown
   * based on user action
   */
  toggleList () {
    this.setState (prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  /**
   * @description Render the dropdown component
   */
  render () {
    const {list} = this.state;
    const {mainList} = this.state;
    const {filtered} = this.state;
    const {options} = this.props;
    const {listOpen, headerTitle} = this.state;
    const containerStyle = {
      width: this.props.options[0].width,
      marginLeft: this.props.options[0].marginLeft,
    };
    return (
      <div style={containerStyle}>
        <div className="dd-wrapper">
          <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <FontAwesome name="angle-up" size="2x" />
              : <FontAwesome name="angle-down" size="2x" />}
          </div>
          {listOpen &&
            <ul className="dd-list" onClick={e => e.stopPropagation ()}>
              <Searchfilter
                handleChange={this.handleChange}
                options={options}
              />
              {list.map ((item, index) => (
                <div key={index} className="set-margin">
                  <CheckboxMultipleSelect
                    item={item}
                    toggleItem={this.toggleSelected}
                    updateTitles={this.updateTitles}
                    list={list}
                    mainList= {mainList}
                    filtered= {filtered}
                  />                 
                </div>
              ))}
            </ul>}
        </div>
      </div>
    );
  }
}

export default DropdownMultiple;
