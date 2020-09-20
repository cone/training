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
  const [count, setCount] = useState(0);

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
