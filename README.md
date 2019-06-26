## Available Scripts

In the project directory, you can run:
### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


#Installation
npm install 
Make sure that you inserted the following link tag between the <head></head> tags inside /public/index.html of your react project. This is required for the FontAwesome component that the package depends on.

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


Usage:-

  const list = [{
            id: 0,
            title: 'foo',
            selected: false,
            key: 'list'
        },
        {
            id: 1,
            title: 'foo1',
            selected: false,
            key: 'list'
        },
        {
            id: 2,
            title: 'foo2',
            selected: false,
            key: 'list'
        },
        {
            id: 3,
            title: 'foo3',
            selected: false,
            key: 'list'
        },
        {
            id: 4,
            title: 'foo4',
            selected: false,
            key: 'list'
        }        
        ]

# Finally use the components styiling:
For custom styling
  let options = [{
            width: '70%',
            marginLeft: '15%',
            placeHolderForSearchFilter: "Search for a games..."
        }]

# Finally use the components as follows:
<DropdownMultiple
  titleHelper="Location"
  title="Select location"
  list={this.state.list}
  options={options}
/>


