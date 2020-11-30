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
import CreateRequestMonitor from './Components/CreateRequestsMonitor';
import CreateRequestUser from './Components/CreateRequests';
import EditUser from './Components/EditUser';
import Login from './Components/Login';
import NavNoS from './Components/NavNoSearch';
import AdminSearch from './Components/AdminSearch';
import MonitorSearch from './Components/MonitorSearch';
import UserSearch from './Components/UserSearch';





ReactDOM.render(

  <BrowserRouter>

    <Switch>
      <Redirect exact from="/" to="/Login" />

      <Route path='/AdminBuscar'>
        <NavNoS />
        <AdminSearch />
      </Route>

      <Route path='/CrearSolicitudMonitor'>
        <NavNoS />
        <Button to="/VisualizarMonitor" txt='Cancelar' />
        <CreateRequestMonitor />
      </Route>

      <Route path='/CrearSolicitudUsuario'>
        <NavNoS />
        <Button to="/VisualizarUsuario" txt='Cancelar' />
        <CreateRequestUser />
      </Route>

      <Route path='/MonitorBuscar'>
        <NavNoS />
        <MonitorSearch />
      </Route>

      <Route path='/UsuarioBuscar'>
        <NavNoS />
        <UserSearch />
      </Route>


      <Route path='/Login'>
        <NavNoS />
        <Login />
      </Route>

      <Route path='/VisualizarAdmin'>
        <Nav to="/AdminBuscar" />
        <Button to="/CrearUsuario" txt='Agregar Usuario' />
        <Button to="/CrearAdulto" txt='Agregar Adulto' />

        <AdminTabs to='/Editar' />
      </Route>

      <Route path='/VisualizarMonitor'>
        <Nav to="/MonitorBuscar" />
        <Button to="/CrearSolicitudMonitor" txt='Crear Solicitud Adulto' />
        <ModeratorTabs to='/Editar' />
      </Route>

      <Route path='/VisualizarUsuario'>
        <Nav to="/UsuarioBuscar" />
        <Button to="/CrearSolicitudUsuario" txt='Crear Solicitud Adulto' />
        <UserTabs to='/Editar' />
      </Route>

      <Route path='/CrearAdulto'>
        <NavNoS />
        <Button to="/VisualizarAdmin" txt='Cancelar' />
        <Create />
      </Route>

      <Route path='/EditarAdulto'>
        <NavNoS />
        <Button to="/VisualizarAdmin" txt='Cancelar' />
        <AdminEdit />
      </Route>

      <Route path='/EditarUsuario'>
        <NavNoS />
        <Button to="/VisualizarAdmin" txt='Cancelar' />
        <EditUser />
      </Route>



      <Route path='/CrearUsuario'>
        <NavNoS />
        <Button to="/VisualizarAdmin" txt='Cancelar' />
        <CreateUser />
      </Route>

    </Switch>

  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
