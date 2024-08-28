// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './global.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom/client'; // Updated import
// import './global.css';
// import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import './styles/global.css';  // Import global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
