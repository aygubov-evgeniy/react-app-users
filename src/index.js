import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/drunken-parrot.css';
import './css/bootstrap.css';
import './css/font-awesome.min.css';
import Form from './RegisterForm/Form';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="container">
    <Form />
  </div>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
