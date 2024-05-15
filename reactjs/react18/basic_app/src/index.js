import ReactDOM from 'react-dom/client';

const App = () => <h1>Hello World!</h1>
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
