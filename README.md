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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#Installation
npm install 
Make sure that you inserted the following link tag between the <head></head> tags inside /public/index.html of your react project. This is required for the FontAwesome component that the package depends on.

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />


Usage:-

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
        ]

Finally use the components as follows:
For custom styling
  let options = [{
            width: '70%',
            marginLeft: '15%',
            placeHolderForSearchFilter: "Search for a games..."
        }]
<DropdownMultiple
  titleHelper="Location"
  title="Select location"
  list={this.state.list}
  options={options}
/>


