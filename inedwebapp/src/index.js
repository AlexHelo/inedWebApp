import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.css';
import Nav from './Components/Nav';
import Tabs from './Components/Tabs';
import Button from './Components/Button'
import Create from './Components/Create'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Redirect exact from="/" to="/Visualizar" />
        <Route path='/Visualizar'>
          <Button to="/Crear" txt='Agregar Adulto' />
          <Tabs />
        </Route>
        <Route path='/Crear'>
          <Button to="/Visualizar" txt='Cancelar' />
          <Create />
        </Route>

      </Switch>

    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
