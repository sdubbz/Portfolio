import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css'
import {BrowserRouter} from 'react-router-dom'
import App from './Routes';



ReactDOM.render(
  <BrowserRouter>

    <App/>

  </BrowserRouter>,
    document.getElementById('app')
);
