import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.css';
import Nav from './Components/Nav';
import Tabs from './Components/Tabs';
import Button from './Components/Button'
import Create from './Components/Create'
import AdminEdit from './Components/AdminEdit';


ReactDOM.render(

    <BrowserRouter>
      <Nav />
      <Switch>
        <Redirect exact from="/" to="/Visualizar" />
        <Route path='/Visualizar'>
          <Button to="/Crear" txt='Agregar Adulto' />
          <Tabs to='/Editar' />
        </Route>
        <Route path='/Crear'>
          <Button to="/Visualizar" txt='Cancelar' />
          <Create />
        </Route>
        <Route path='/Editar'>
          <Button to="/Visualizar" txt='Cancelar' />
          <AdminEdit />
        </Route>

      </Switch>

    </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
