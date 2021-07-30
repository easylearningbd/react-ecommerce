import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/fontawesome.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/placeholder-loading.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
