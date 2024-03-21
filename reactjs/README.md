# React JS training
## What is React JS?
1. It's a library, not a famework (frameworks are often not flexible and large. We need to do things a certain way which can be a downside)
1. It's for building user interfaces, and only for that (we need other libraries for a complete solution)
1. It's declarative: we describe user interfaces and react builds them for us

## Why React JS
1. The virtual browser is friendlier than the real browser (DOM API)
1. There's a small API to learn and the rest it's "just javascript"
1. We can use our React skills to develop IOS and Android apps with React Native
1. The React team at facebook tests all new features added to react in the facebook site, so it's "Battle tested"
1. It's a declarative language

## Basic concepts
### Components
1. Like functions
1. Input: props, state. Output: UI. Also, props are immutable
1. Reusable and composable
1. Can manage a private state

Also they can be Functions or Classes. They should always start with a capital letter.

### Reactive updates
1. React will react to state changes and...
1. Take the updates to the browser

### Virtual views in memory
1. Generate HTML using JS
1. No HTML template laguage
1. Tree reconciliation (Virtual DOM)

## Hooks
They let you use state and other React features without writing a class
 ```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0); // or React.useState

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
 ```
 There are other hooks like `useEffect` (or React.useEffect) which executes every time the component finishes rendering.

## Forms
### Uncontrolled
For uncontrolled forms, we extract the input values using references, the changes in the DOM are handled normally by the browser:
```javascript
class Form extends React.Component {
  userNameInput = React.createRef();
  render() {
  	return (
    	<form action="">
    	  <input
          type="text"
          placeholder="GitHub username"
          ref={this.userNameInput} // now userNameInput will contain the text typed in the username field
        />
        <button>Add card</button>
    	</form>
    );
  }
}
```
### Controlled
In the case of controlled forms, we get the value from the event and then tell react to update the view accordingly:
```javascript
class Form extends React.Component {
  state = { userName: '' };
  render() {
  	return (
    	<form action="">
    	  <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="Username"
        />
        <button>Add card</button>
    	</form>
    );
  }
}
```

## What do we need for our React app?
1. Transform JSX to JS
2. Process JS files
3. Run a development server
4. A watcher to automatically update the browser when the code changes
5. Create a production build

## Notes
1. If we want to display two or more components without creating a `div` or other HTML parent element we can use `React.Fragment`, which can also be written just as `<>`:
```javascript
ReactDOM.render(
<React.Fragment>
  <Component1 />
  <Component2 />
</React.Fragment>,
document.getElementById('main')
)
```
2. All function components receive the `props` object:
```javascript
function Component1(props) {
...
}
```
3. Items that share similar data or behavior (e.g. items in a list, very similar sections, etc) are candidates to be abstracted in their own components. Also we can abstract components to gain more readability. However we need to avoid overdoing components.
4. Structure of a React component should be consistent: First lines should be any hook into the state, then any computations based on the state.
5. Preferably put content that is conditionally rendered into a separate component.
6. JSX is NOT HTML!
7. React separates its core library(`react`) from the code responsible for rendering the components: `react-dom` for web applications and `react-native` for mobile applications.
8. To create a React app from scratch, the most popular options are: to use the `Create React App` tool or `Next.js`.