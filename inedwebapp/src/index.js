import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './index.css';
import Nav from './Components/Nav';
import AdminTabs from './Components/AdminTabs';
import ModeratorTabs from './Components/ModeratorTabs';
import UserTabs from './Components/UserTabs';
import Button from './Components/Button'
import Create from './Components/Create'
import AdminEdit from './Components/AdminEdit';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';
import styled from 'styled-components';
import Login from './Components/Login'
import NavNoS from './Components/NavNoSearch'
import Search from './Components/Search'





ReactDOM.render(

  <BrowserRouter>

    <Switch>
      <Redirect exact from="/" to="/Login" />

      <Route path='/Buscar'>
        <NavNoS />
        <Search />
      </Route>

      <Route path='/Login'>
        <NavNoS />
        <Login />
      </Route>

      <Route path='/VisualizarAdmin'>
        <Nav />
        <Button to="/CrearUsuario" txt='Agregar Usuario' />
        <Button to="/Crear" txt='Agregar Adulto' />

        <AdminTabs to='/Editar' />
      </Route>

      <Route path='/VisualizarModerador'>
        <Nav />
        <Button to="/Crear" txt='Agregar Adulto' />
        <ModeratorTabs to='/Editar' />
      </Route>

      <Route path='/VisualizarUsuario'>
        <Nav />
        <Button to="/Crear" txt='Agregar Adulto' />

        <UserTabs to='/Editar' />
      </Route>

      <Route path='/Crear'>
        <NavNoS />
        <Button to="/Visualizar" txt='Cancelar' />
        <Create />
      </Route>

      <Route path='/EditarAdulto'>
        <NavNoS />
        <Button to="/Visualizar" txt='Cancelar' />
        <AdminEdit />
      </Route>

      <Route path='/EditarUsuario'>
        <NavNoS />
        <Button to="/Visualizar" txt='Cancelar' />
        <EditUser />
      </Route>



      <Route path='/CrearUsuario'>
        <NavNoS />
        <Button to="/Visualizar" txt='Cancelar' />
        <CreateUser />
      </Route>

    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
