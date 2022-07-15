import React from 'react';
import ReactDOM from 'react-dom';  // is the entry point to the DOM to render the JSX by using the virtual DOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//**************************************************************************** */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')   // react will inject the whole app into whuch ever file has this "root"
);
//************************************************************************ */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
