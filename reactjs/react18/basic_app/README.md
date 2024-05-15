## Initialize the App

Created using the `npm init -y` command inside the project's folder. The `-y` parameter is the equivalent of responding "yes" to all of the questions asked by the setup wizard.

## Add Webpack

We use Webpack to bundle our Javascript code and render it to the browser. We install Webpack with the following command: `npm install --save-dev webpack webpack-cli`.

We use the `--save-dev` option because we need Webpack to bundle our code in development mode. In production, we should already have the bundle ready so, we no longer need Webpack at that point.

### Add Scripts

Once we finished adding Webpack, we add two scripts to our `packge.json` file:

```json
"scripts": {
  "start": "webpack --mode=development",
  "build": "webpack --mode=production"
}
```

The `start` script is what we will use whenever we want to use our code locally. The `build` script is what we will use once we are ready to relese our code to production.

## Add React

Next, we need to add React to our app. We need React in our production environment in order for our components to work. So, we install it as a general dependency: `npm install react react-dom`.

## Add Babel

We need babel to translate some of the sintax we will use with React (like JSX) to something the browser can understand. We will only need them as development dependencies. To install them we run: `npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react`

## Add Config Files for Bable and Webpack

We add the `webpack.config.js` file and add some configurations for Babel:

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

The we add the file `babel.config.json` and add some configuration:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ],
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

Those configuration files will allow us to use Webpack and React together.

## Add Starting React Code

We use ReactDOM to create a "root" for our React app:

```javascript
import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello World!</h1>
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
```

As seen in the code above, we need an HTML element with the `root` id to use as our React app's container. So, we create an `index.html` file inside the `public` folder (which we will also create).

## Install the Webpack HTML Plugin

Then, we need a way to inject our JS code into the HTML file. For that we can use Webpack HTML plugin. We install it wiht the following command: `npm install --save-dev html-webpack-plugin`.

Finally, we add some extra configuration to our `webpack.config.js` file:

```diff
+ const HtmlWebpackPlugin = require('html-webpack-plugin'); 
+
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
+  plugins: [
+    new HtmlWebpackPlugin({
+      template: './public/index.html',
+      filename: './index.html',
+    }),
+  ],
};
```

## Run the App

If we run the `npm start` command, webpack will create the `dist` directory which will contain the `main.js` and `index.html` files. The `index.html` file will already reference the `main.js` file.

In order to see the result, if you have the `Live Server` plugin installed, you can use the `Open with Live Server` option after right clicking on the `index.html` file located inside the `dist` folder or, you can open the `dist` directory and double clik on the `index.html` file.

## Setup a Watcher (Webpack Dev Server)

If we want our code changes to be reflected immediately in our browser, we can setup `webpack-dev-server`. We can install it by running the following command: `npm install webpack-dev-server --save-dev`.

Then we can start our server with `npx webpack serve --mode=development`. However, in order to make it easier for us, we can replace the `start` script in our `package.json` file in order to run the watcher instead of just building the app:

```diff
"scripts": {
-  "start": "webpack serve --mode=development",
+  "start": "webpack --mode=development",
  "build": "webpack --mode=production"
},
```
