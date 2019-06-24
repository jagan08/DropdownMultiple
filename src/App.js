import React, { Component } from 'react';
import DropdownMultiple from './components/dropDown/DropdownMultiple';

class App extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    /**
     * @description Initilize the data for dropdown component
     */
    componentWillMount() {
        const list = [{
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
        this.setState({ list: list })
    }
    /**
     * @description Render the dropdown element on browser.
     * You can passs the multiple option to this componenet eg.. width, height,title.
     * placeholder...
     */
    render() {
        let options = [{
            width: '100%',
            placeHolderForSearchFilter: "Search for a games..."
        }]
        return (<div className="App" >
            <div className="wrapper" >           
                <DropdownMultiple titleHelper="Game"
                    title="Select Games"
                    list={this.state.list}
                    options={options} /></div >
        </div>
        );
    }
}

export default App;